'use strict'

const { env } = require('node:process')

module.exports = {
  bail: true,
  globals: {
    RUN_TEST_AGAINST_AWS: env.AWS_ENDPOINT != null,
    TEST_BASE_URL: env.AWS_ENDPOINT || 'http://localhost:3000',
  },
  modulePathIgnorePatterns: [
    'src/lambda/__tests__/fixtures/',
    // TODO FIXME temporary skipped for jest v28 compatibility, open handle problem
    'tests/old-unit',
  ],
  ...(!env.SKIP_SETUP && {
    globalSetup: './tests/_setupTeardown/npmInstall.js',
  }),
}

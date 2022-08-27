import test from 'ava';
import {spy} from 'sinon';
import getLogger from '../lib/get-logger.js';

test('Expose "error", "success" and "log" functions', (t) => {
  const stdout = spy();
  const stderr = spy();
  const logger = getLogger({stdout: {write: stdout}, stderr: {write: stderr}});

  logger.log('test log');
  logger.success('test success');
  logger.error('test error');

  t.regex(stdout.args[0][0], /.*test log/);
  t.regex(stdout.args[1][0], /.*test success/);
  t.regex(stderr.args[0][0], /.*test error/);
});

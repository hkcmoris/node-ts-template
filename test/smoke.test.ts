import assert from 'node:assert/strict';
import test from 'node:test';

import { add } from '../src/index.js';

void test('smoke test', () => {
    assert.equal(add(1, 2), 3);
});

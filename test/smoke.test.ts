import { doesNotThrow } from 'node:assert/strict';
import { test } from 'node:test';

import { main } from '../src/main.js';

void test('smoke test', () => {
    doesNotThrow(() => {
        main();
    });
});

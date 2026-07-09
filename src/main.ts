import { logger } from './logger.js';

let isShuttingDown = false;

export function main(): void {
    logger.info('Application started');
}

export function shutdown(reason: string): void {
    if (isShuttingDown) {
        return;
    }

    isShuttingDown = true;

    logger.info({ reason }, 'Application shutting down');

    // Close database connections, stop schedulers, flush queues, etc. here.

    logger.info('Application stopped');
}

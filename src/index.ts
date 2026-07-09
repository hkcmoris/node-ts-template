import { logger } from './logger.js';
import { main, shutdown } from './main.js';

process.on('SIGINT', () => {
    shutdown('SIGINT');
    process.exit(0);
});

process.on('SIGTERM', () => {
    shutdown('SIGTERM');
    process.exit(0);
});

process.on('unhandledRejection', (reason) => {
    logger.error({ reason }, 'Unhandled rejection');
    process.exitCode = 1;
});

process.on('uncaughtException', (error) => {
    logger.fatal({ error }, 'Uncaught exception');
    process.exit(1);
});

main();

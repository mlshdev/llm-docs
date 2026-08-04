> Release-pinned source for NetBird v0.76.1: [netbirdio/docs@14375a092774f250d45a85f6d5f3c524d99fd111:src/pages/selfhosted/troubleshooting/database.mdx](https://github.com/netbirdio/docs/blob/14375a092774f250d45a85f6d5f3c524d99fd111/src/pages/selfhosted/troubleshooting/database.mdx)

# Database issues

Database and migration problems on a self-hosted deployment. For other areas, start from [Troubleshooting](https://docs.netbird.io/selfhosted/troubleshooting).

## Management service won't start after upgrade

**Symptom**: After an upgrade, the Management container fails to start or crash-loops.

**Likely causes and fixes** (most common first):

1. **A failed schema migration.** Check `docker compose logs management` for migration errors. This is the usual cause and the logs name the failing step.
2. **A skipped intermediate version.** Major version jumps may require stepping through intermediate releases. Follow the [upgrade path](https://docs.netbird.io/selfhosted/maintenance/upgrade) for your version.
3. **A corrupt or partially-migrated database.** If the migration can't be completed, restore from a pre-upgrade backup and retry the upgrade.

**Confirm**: `docker compose ps` shows `management` as `Up`, and its logs end with the service listening rather than a migration error.

## Data corruption after power loss

**Symptom**: Services don't start cleanly after an unexpected shutdown.

**Likely causes and fixes** (most common first):

1. **A stale lock file.** Check for and remove a leftover database lock if the process that held it is gone.
2. **An interrupted write.** Review all service logs to find which store is failing. For SQLite, run an integrity check on the database file.
3. **An unrecoverable file.** If the store can't be repaired, restore from the most recent backup.

**Confirm**: All services report `Up` in `docker compose ps`, and peers reconnect with `netbird status` showing `Management: Connected`.

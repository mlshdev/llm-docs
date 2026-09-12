> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/statusmigrationassistantreportmigrationassistantreportobject](https://developer.apple.com/documentation/devicemanagement/statusmigrationassistantreportmigrationassistantreportobject)

# StatusMigrationAssistantReportMigrationAssistantReportObject

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** macOS 26.4+

The Migration Assistant migration status.

## Declaration

```
object StatusMigrationAssistantReportMigrationAssistantReportObject
```

## Properties

- `completed-data-size` — `integer`: The total amount of data the system successfully migrated from the source system.
- `completed-file-count` — `integer`: The number of files successfully migrated from the source system.
- `completion-time` — `string`: The RFC 3339 timestamp for when the system completed migration.
- `errors` — `[string]`: The descriptions of migration errors that the system reports.
- `source-user` — `string`: The username of the user that the system migrated from the source system.
- `start-time` — `string`: The RFC 3339 timestamp for when the system started migration.
- `target-user` — `string`: The username of the target user account on the destination system.
- `total-data-size` — `integer`: The total amount of data the system considers in scope for migration from the source system.
- `total-file-count` — `integer`: The number of files the system considers in scope for migration from the source system.

> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appleschoolmanagerapi/activitytypemetadata

# ActivityTypeMetadata

**Interface language:** Data

**Framework:** Apple School Manager API  
**Kind:** Object  
**Availability:** Apple School Manager API 1.7+

Additional metadata for an organization device activity, used by device management service migration activity types.

## Declaration

```
object ActivityTypeMetadata
```

## Properties

- `mdmMigrationDeadlineDateTime` — `date-time`: The deadline, in ISO 8601 format, by which a device needs to complete its device management service migration.

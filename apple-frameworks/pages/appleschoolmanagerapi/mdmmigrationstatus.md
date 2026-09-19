> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appleschoolmanagerapi/mdmmigrationstatus

# MdmMigrationStatus

**Interface language:** Data

**Framework:** Apple School Manager API  
**Kind:** Type  
**Availability:** Apple School Manager API 1.7+

Strings that represent the state of a device’s device management service migration.

## Declaration

```
string MdmMigrationStatus
```

## Possible Values

- `REQUESTED`:
- `STARTED`:
- `SUCCESS`:
- `FAILED`:

<a id="discussion"></a>

## Discussion

- Possible Values

  - REQUESTED: The migration has been requested but hasn’t started.
  - STARTED: The device has started the device management service migration.
  - SUCCESS: The device successfully completed the device management service migration.
  - FAILED: The device failed to complete the device management service migration.

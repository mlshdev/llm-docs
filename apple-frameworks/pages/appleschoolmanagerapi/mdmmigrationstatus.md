> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appleschoolmanagerapi/mdmmigrationstatus](https://developer.apple.com/documentation/appleschoolmanagerapi/mdmmigrationstatus)

# MdmMigrationStatus

**Interface language:** Data

**Framework:** Apple School Manager API  
**Kind:** Type  
**Availability:** Apple School Manager API 1.6+

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

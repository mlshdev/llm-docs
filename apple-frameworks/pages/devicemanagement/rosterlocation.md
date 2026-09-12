> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/rosterlocation](https://developer.apple.com/documentation/devicemanagement/rosterlocation)

# RosterLocation

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** Device Assignment Services 5.0+

A location’s properties and their values.

## Declaration

```
object RosterLocation
```

## Properties

- `name` — `string`: The location name. Maximum length 1024 UTF-8 characters.
- `op_date` — `string`: The time stamp, in iSO 8601 format, when the location was added, updated, or deleted.
- `source` — `string`: The data source where the location was created.
  **Allowed values:** `LDAP`, `SIS`, `CSV`, `MANUAL`, `SYSTEM`, `ENROLLMENT`, `DEP`, `FORMULA_GENERATED`, `SFTP`
- `source_system_identifier` — `string`: The identifier configured by organization for the location. Maximum length 256 UTF-8 characters.
- `status` — `string`: The status of the location.
- `unique_identifier` — `string`: The unique identifier for the location. Maximum length 256 UTF-8 characters.

## See Also

### Location management

- [BaseRosterLocation](baserosterlocation.md): A base location’s properties and their values.
- [Get the List of Locations](fetch-location-roster.md): Obtain a list of the locations the server manages.
- [Sync the Locations](fetch-location-roster-sync.md): Get updates about the list of locations the server manages.

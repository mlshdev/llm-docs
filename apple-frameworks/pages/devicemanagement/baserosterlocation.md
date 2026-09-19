> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/devicemanagement/baserosterlocation

# BaseRosterLocation

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** Device Assignment Services 5.0+

A base location’s properties and their values.

## Declaration

```
object BaseRosterLocation
```

## Properties

- `name` — `string`: The location name. The maximum length is 1024 UTF-8 characters.
- `unique_identifier` — `string`: The global unique identifier for the location. The maximum length is 256 UTF-8 characters.

## See Also

### Location management

- [RosterLocation](rosterlocation.md): A location’s properties and their values.
- [Get the List of Locations](fetch-location-roster.md): Obtain a list of the locations the server manages.
- [Sync the Locations](fetch-location-roster-sync.md): Get updates about the list of locations the server manages.

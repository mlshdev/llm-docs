> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/rosterapi/location](https://developer.apple.com/documentation/rosterapi/location)

# Location

**Interface language:** Data

**Framework:** Roster API  
**Kind:** Object  
**Availability:** Roster API 1.0.0+

A location in an Apple School Manager organization.

## Declaration

```
object Location
```

## Properties

- `dateCreated` — `string`: The date the location object was created in Apple School Manager. The date string is in ISO 8601 format.
- `dateLastModified` — `string`: The date the location object was modified in Apple School Manager. The date string is in ISO 8601 format.
- `domain` — `string`: The location’s domain.
- `id` — `string`: The location’s identifier.
- `name` — `string`: The location’s name.
- `timeZone` — `string`: The time zone used at the location.

## See Also

### Information about locations

- [Read a location](returns-a-specific-location-in-an-apple-school-manager-organization.md): Returns a specific location in an Apple School Manager organization.
- [List locations](returns-a-list-of-locations-for-an-apple-school-manager-organization.md): Returns a list of locations in an Apple School Manager organization.
- [Locations](locations.md): A list of locations, with a token for pagination.

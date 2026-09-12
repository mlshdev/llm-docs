> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/rosterapi/class](https://developer.apple.com/documentation/rosterapi/class)

# Class

**Interface language:** Data

**Framework:** Roster API  
**Kind:** Object  
**Availability:** Roster API 1.0.0+

A class in an Apple School Manager organization.

## Declaration

```
object Class
```

## Properties

- `dateCreated` — `string`: The date the class object was created in Apple School Manager. The date string is in ISO 8601 format.
- `dateLastModified` — `string`: The date the class object was modified in Apple School Manager. The date string is in ISO 8601 format.
- `id` — `string`: A unique identifier for this class.
- `instructorIds` — `[string]`: A list of user identifiers for instructers. Values refer to the `id` field of the [User](user.md) object.
- `room` — `string`: The name of the room.
- `studentIds` — `[string]`: A list of user identifiers for students in the class.
- `name` — `string`: The name of the class.
- `number` — `string`: The number of the class.
- `displayName` — `string`: The Class Nickname in Apple School Manager.
- `locationId` — `string`: An identifier for the class’s location.

## See Also

### Information about classes

- [Read a class](returns-a-specific-class-in-an-apple-school-manager-organization_.md): Read a class from an Apple School Manager organization.
- [List classes](returns-a-list-of-classes-for-an-apple-school-manager-organization.md): List classes in an Apple School Manager organization.
- [Classes](classes.md): A list of classes, with a token for pagination.

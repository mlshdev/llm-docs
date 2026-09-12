> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/rosterapi/classes](https://developer.apple.com/documentation/rosterapi/classes)

# Classes

**Interface language:** Data

**Framework:** Roster API  
**Kind:** Object  
**Availability:** Roster API 1.0.0+

A list of classes, with a token for pagination.

## Declaration

```
object Classes
```

## Properties

- `classes` — `[Class]`: A list of [Class](class.md) objects.
- `moreToFollow` — `boolean`: A flag that indicates whether there are more classes. If `true`, use the `nextPageToken` to request another list from the remaining classes.
- `nextPageToken` — `string`: A token to request additional classes, if any. Use this as the `nextPageToken` parameter for the [List classes](returns-a-list-of-classes-for-an-apple-school-manager-organization.md) request.

## See Also

### Information about classes

- [Read a class](returns-a-specific-class-in-an-apple-school-manager-organization_.md): Read a class from an Apple School Manager organization.
- [Class](class.md): A class in an Apple School Manager organization.
- [List classes](returns-a-list-of-classes-for-an-apple-school-manager-organization.md): List classes in an Apple School Manager organization.

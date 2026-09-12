> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/rosterapi/rolelocation](https://developer.apple.com/documentation/rosterapi/rolelocation)

# RoleLocation

**Interface language:** Data

**Framework:** Roster API  
**Kind:** Object  
**Availability:** Roster API 1.0.0+

A mapping between a role assumed by a user in an Apple School Manager organization, and the corresponding location.

## Declaration

```
object RoleLocation
```

## Properties

- `locationId` — `string`: The identifier for the location where the [User](user.md) assumes the named role. This may identify a [Location](location.md) in the Apple School Manager organization, which you fetch with [Read a location](returns-a-specific-location-in-an-apple-school-manager-organization.md). Alternatively, it may identify the [Organization](organization.md), which you fetch with [Read the organization](returns-organization-infrmation.md).
- `roleName` — `string`: The role the [User](user.md) assumes at the identified [Location](location.md). Possible values for this property are `Student`, `Instructor`, and `Staff`.

## See Also

### Information about users

- [Read a user](returns-a-specific-user-in-an-apple-school-manager-organization.md): Read a user in an Apple School Manager organization.
- [User](user.md): A user in an Apple School Manager organization.
- [List users](returns-a-list-of-users-in-an-apple-school-manager-organization.md): List users in an Apple School Manager organization.
- [List users in a class](returns-a-users-for-an-apple-school-manager-class.md): List users in a class of an Apple School Manager organization.
- [Users](users.md): A list of users, with a token for pagination.

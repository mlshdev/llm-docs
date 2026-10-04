> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreserverapi/groupid

# groupId

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** Type  
**Availability:** App Store Server API 1.22+

The unique identifier of a group, within the scope of your app.

## Declaration

```
string groupId
```

## Mentioned In

- [App Store Server API changelog](app-store-server-api-changelog.md)

<a id="Discussion"></a>

## Discussion

The [Get Customer Groups](get-customer-groups.md) endpoint returns a `groupId` for each group a customer belongs to. Pass that value to the [Get Group Members](get-group-members.md) endpoint to enumerate the group’s members.

This identifier is unique within your app.

## See Also

### Group membership

- [GroupEntry](groupentry.md): The identifier, type, and per-product roles for a group that a customer belongs to.
- [GroupMemberEntry](groupmemberentry.md): A customer that belongs to a group.
- [RoleEntry](roleentry.md): A customer’s role for a single product within a group.
- [groupType](grouptype.md): A string that describes the kind of multiseat purchase a customer’s access comes from.
- [role](role.md): A string that identifies a customer’s role for a product within a group.
- [limit](limit.md): The maximum number of group members to return in a single response.

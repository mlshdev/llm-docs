> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreserverapi/limit

# limit

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** Type  
**Availability:** App Store Server API 1.22+

The maximum number of group members to return in a single response.

## Declaration

```
int32 limit
```

## Mentioned In

- [App Store Server API changelog](app-store-server-api-changelog.md)

<a id="Discussion"></a>

## Discussion

Use this optional query parameter with the [Get Group Members](get-group-members.md) endpoint to control the size of each page of results. The maximum value is `100`; a request with a greater value fails with an [InvalidLimitError](invalidlimiterror.md).

If the group has more members than the response contains, the [hasMore](hasmore.md) field is `true`. Call the endpoint again with the [paginationToken](paginationtoken.md) from the response to get the next set of members.

## See Also

### Group membership

- [GroupEntry](groupentry.md): The identifier, type, and per-product roles for a group that a customer belongs to.
- [GroupMemberEntry](groupmemberentry.md): A customer that belongs to a group.
- [RoleEntry](roleentry.md): A customer’s role for a single product within a group.
- [groupId](groupid.md): The unique identifier of a group, within the scope of your app.
- [groupType](grouptype.md): A string that describes the kind of multiseat purchase a customer’s access comes from.
- [role](role.md): A string that identifies a customer’s role for a product within a group.

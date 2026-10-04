> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreserverapi/getgroupmembersresponse

# GetGroupMembersResponse

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** Object  
**Availability:** App Store Server API 1.22+

A response that contains a page of the customers that belong to a group.

## Declaration

```
object GetGroupMembersResponse
```

## Properties

- `members` — `[GroupMemberEntry]`: An array of the customers that belong to the group.
- `paginationToken` — `paginationToken`: A token you send in a subsequent request to get the next set of members. The response includes this value only when more members are available.
- `hasMore` — `hasMore`: A Boolean value that indicates whether the group has more members than the response contains.

## Mentioned In

- [App Store Server API changelog](app-store-server-api-changelog.md)

<a id="Discussion"></a>

## Discussion

This response contains information that you request by calling the [Get Group Members](get-group-members.md) endpoint.

If [hasMore](https://developer.apple.com/documentation/appstoreserverapi/getgroupmembersresponse/hasmore) is `true`, call [Get Group Members](get-group-members.md) again with the [paginationToken](https://developer.apple.com/documentation/appstoreserverapi/getgroupmembersresponse/paginationtoken) from this response to get the next set of members.

## Topics

### Response data types

- [GroupMemberEntry](groupmemberentry.md): A customer that belongs to a group.

## See Also

### Multiseat purchases

- [Get Customer Groups](get-customer-groups.md): Get the groups that a customer belongs to, and their role in each group.
- [GetCustomerGroupsResponse](getcustomergroupsresponse.md): A response that contains the groups a customer belongs to, and their role in each group.
- [Get Group Members](get-group-members.md): Get a paginated list of the customers that belong to a group.

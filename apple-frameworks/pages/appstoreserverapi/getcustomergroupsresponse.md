> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreserverapi/getcustomergroupsresponse

# GetCustomerGroupsResponse

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** Object  
**Availability:** App Store Server API 1.22+

A response that contains the groups a customer belongs to, and their role in each group.

## Declaration

```
object GetCustomerGroupsResponse
```

## Properties

- `groups` — `[GroupEntry]`: An array of groups that the customer belongs to. The array is empty if the customer doesn’t belong to any group.

## Mentioned In

- [App Store Server API changelog](app-store-server-api-changelog.md)

<a id="Discussion"></a>

## Discussion

This response contains information that you request by calling the [Get Customer Groups](get-customer-groups.md) endpoint.

Each [GroupEntry](groupentry.md) in the `groups` array identifies one group the customer belongs to. An entry for a group with a [groupType](grouptype.md) of `ORGANIZATION` also contains the customer’s role for each of your products in that group.

## Topics

### Response data types

- [GroupEntry](groupentry.md): The identifier, type, and per-product roles for a group that a customer belongs to.
- [RoleEntry](roleentry.md): A customer’s role for a single product within a group.

## See Also

### Multiseat purchases

- [Get Customer Groups](get-customer-groups.md): Get the groups that a customer belongs to, and their role in each group.
- [Get Group Members](get-group-members.md): Get a paginated list of the customers that belong to a group.
- [GetGroupMembersResponse](getgroupmembersresponse.md): A response that contains a page of the customers that belong to a group.

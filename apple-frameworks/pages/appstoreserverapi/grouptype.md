> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreserverapi/grouptype

# groupType

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** Type  
**Availability:** App Store Server API 1.22+

A string that describes the kind of multiseat purchase a customer’s access comes from.

## Declaration

```
string groupType
```

## Possible Values

- `ORGANIZATION`: An organization bought seats through Volume Purchasing and assigned one to the customer.
- `CONSUMER`: A subscriber bought seats through Group Purchases and invited the customer to join.

## Mentioned In

- [App Store Server API changelog](app-store-server-api-changelog.md)

<a id="Discussion"></a>

## Discussion

Multiseat purchasing lets a customer buy your subscription in quantities greater than one. Each [GroupEntry](groupentry.md) that the [Get Customer Groups](get-customer-groups.md) endpoint returns includes a `groupType`, which identifies which form of multiseat purchase the customer’s access comes from:

- `ORGANIZATION` indicates Volume Purchasing. An organization that uses Apple Business Manager or Apple School Manager bought your subscription and assigns seats using a device management provider.
- `CONSUMER` indicates Group Purchases. A subscriber bought multiple seats and invited others to join.

For more information, see [Manage purchase options for an auto-renewable subscription](https://developer.apple.com/help/app-store-connect/manage-subscriptions/manage-purchase-options-for-auto-renewable-subscriptions).

## See Also

### Group membership

- [GroupEntry](groupentry.md): The identifier, type, and per-product roles for a group that a customer belongs to.
- [GroupMemberEntry](groupmemberentry.md): A customer that belongs to a group.
- [RoleEntry](roleentry.md): A customer’s role for a single product within a group.
- [groupId](groupid.md): The unique identifier of a group, within the scope of your app.
- [role](role.md): A string that identifies a customer’s role for a product within a group.
- [limit](limit.md): The maximum number of group members to return in a single response.

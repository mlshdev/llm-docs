> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/subscriptioncounts](https://developer.apple.com/documentation/devicemanagement/subscriptioncounts)

# SubscriptionCounts

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object

The subscription assignment counts broken down by assigned and available.

## Declaration

```
object SubscriptionCounts
```

## Properties

- `assigned` — `SubscriptionCountsBreakdown`: The count of assigned subscription seats, broken down by renewal state.
- `available` — `SubscriptionCountsBreakdown`: The count of available subscription seats, broken down by renewal state.
- `total` — `SubscriptionCountsBreakdown`:

## Mentioned In

- [Subscribing to notifications](subscribing-to-notifications.md)

## Topics

### Objects and Data Types

- [SubscriptionCountsBreakdown](subscriptioncountsbreakdown.md): The breakdown of subscription counts by renewing and expiring status.

## See Also

### Objects and data types

- [Asset](asset.md): A product in the store.
- [ResponseAsset](responseasset.md): The asset that the organization owns.
- [UnlimitedResponseAsset](unlimitedresponseasset.md): An asset with an unlimited license that the organization owns.
- [Assignment](assignment.md): The asset assignment for a user or device.
- [RequestUser](requestuser.md): The requested user in the organization.
- [ResponseUser](responseuser.md): The user in the organization.
- [ResponseSubscription](responsesubscription.md): A subscription with its assignment counts.
- [ResponseSubscriptionAssignment](responsesubscriptionassignment.md): An assignment of a subscription to a user.
- [SubscriptionCountsBreakdown](subscriptioncountsbreakdown.md): The breakdown of subscription counts by renewing and expiring status.
- [ManageSubscriptionsRequest](managesubscriptionsrequest.md): The request for subscription management.
- [ManageSubscriptionAdminsRequest](managesubscriptionadminsrequest.md): The request body for adding or removing subscription administrators.
- [ManageSubscriptionAdminsResponse](managesubscriptionadminsresponse.md): The confirmation response that the server returns after adding or removing subscription administrators.
- [ResponseSubscriptionAdmin](responsesubscriptionadmin.md): An administrator for a subscription.
- [SubscriptionManagementResponse](subscriptionmanagementresponse.md): A confirmation response that reports your device management service’s subscription management support.
- [MdmInfo](mdminfo.md): Information about the MDM client.

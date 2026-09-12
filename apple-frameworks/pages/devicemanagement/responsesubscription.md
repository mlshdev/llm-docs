> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/responsesubscription](https://developer.apple.com/documentation/devicemanagement/responsesubscription)

# ResponseSubscription

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object

A subscription with its assignment counts.

## Declaration

```
object ResponseSubscription
```

## Properties

- `parentAdamId` — `int64`: The parent Adam ID for the subscription. This value can be `null`, so don’t require it when you parse a subscription record.
- `adamId` — `int64`: The Adam ID for the subscription.
- `status` — `string`: The current state of the subscription.
  **Allowed values:** `ACTIVE`, `INACTIVE`, `PAUSED`
- `periodEndDate` — `date`: The end date of the current billing period in ISO-8601 calendar date format (`YYYY-MM-DD`).
- `counts` — `SubscriptionCounts`: The assignment counts for the subscription, broken down by renewal state.

## Topics

### Objects and Data Types

- [SubscriptionCounts](subscriptioncounts.md): The subscription assignment counts broken down by assigned and available.

## See Also

### Objects and data types

- [Asset](asset.md): A product in the store.
- [ResponseAsset](responseasset.md): The asset that the organization owns.
- [UnlimitedResponseAsset](unlimitedresponseasset.md): An asset with an unlimited license that the organization owns.
- [Assignment](assignment.md): The asset assignment for a user or device.
- [RequestUser](requestuser.md): The requested user in the organization.
- [ResponseUser](responseuser.md): The user in the organization.
- [ResponseSubscriptionAssignment](responsesubscriptionassignment.md): An assignment of a subscription to a user.
- [SubscriptionCounts](subscriptioncounts.md): The subscription assignment counts broken down by assigned and available.
- [SubscriptionCountsBreakdown](subscriptioncountsbreakdown.md): The breakdown of subscription counts by renewing and expiring status.
- [ManageSubscriptionsRequest](managesubscriptionsrequest.md): The request for subscription management.
- [ManageSubscriptionAdminsRequest](managesubscriptionadminsrequest.md): The request body for adding or removing subscription administrators.
- [ManageSubscriptionAdminsResponse](managesubscriptionadminsresponse.md): The confirmation response that the server returns after adding or removing subscription administrators.
- [ResponseSubscriptionAdmin](responsesubscriptionadmin.md): An administrator for a subscription.
- [SubscriptionManagementResponse](subscriptionmanagementresponse.md): A confirmation response that reports your device management service’s subscription management support.
- [MdmInfo](mdminfo.md): Information about the MDM client.

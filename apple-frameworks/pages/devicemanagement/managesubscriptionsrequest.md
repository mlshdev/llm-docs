> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/managesubscriptionsrequest](https://developer.apple.com/documentation/devicemanagement/managesubscriptionsrequest)

# ManageSubscriptionsRequest

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object

The request for subscription management.

## Declaration

```
object ManageSubscriptionsRequest
```

## Properties

- `adamIds` — `[int64]` (required): The set of Adam IDs for the subscriptions to manage.
- `clientUserIds` — `[string]` (required): The set of identifiers for users in your organization.
- `renewing` — `boolean`: A Boolean value that indicates whether the subscription is renewing. Used for association operations.
- `deferred` — `boolean`: A Boolean value that indicates whether the disassociation is deferred. Used for disassociation operations.

## Mentioned In

- [Managing subscriptions](managing-subscriptions.md)

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
- [SubscriptionCounts](subscriptioncounts.md): The subscription assignment counts broken down by assigned and available.
- [SubscriptionCountsBreakdown](subscriptioncountsbreakdown.md): The breakdown of subscription counts by renewing and expiring status.
- [ManageSubscriptionAdminsRequest](managesubscriptionadminsrequest.md): The request body for adding or removing subscription administrators.
- [ManageSubscriptionAdminsResponse](managesubscriptionadminsresponse.md): The confirmation response that the server returns after adding or removing subscription administrators.
- [ResponseSubscriptionAdmin](responsesubscriptionadmin.md): An administrator for a subscription.
- [SubscriptionManagementResponse](subscriptionmanagementresponse.md): A confirmation response that reports your device management service’s subscription management support.
- [MdmInfo](mdminfo.md): Information about the MDM client.

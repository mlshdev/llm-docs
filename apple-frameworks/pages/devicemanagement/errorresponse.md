> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/errorresponse](https://developer.apple.com/documentation/devicemanagement/errorresponse)

# ErrorResponse

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** VPP License Management 2.0+

The response that contains the error that occurs.

## Declaration

```
object ErrorResponse
```

## Properties

- `errorInfo` — `ResponseErrorInfo`: The request-specific information regarding the failure.
- `errorMessage` — `string`: The human-readable error message that describes the failure.
- `errorNumber` — `int32`: The error number that represents the failure.

## Mentioned In

- [Handling error responses](handling-error-responses.md)

## Topics

### Objects and Data Types

- [ResponseErrorInfo](responseerrorinfo.md): Information about the error.

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
- [ManageSubscriptionsRequest](managesubscriptionsrequest.md): The request for subscription management.
- [ManageSubscriptionAdminsRequest](managesubscriptionadminsrequest.md): The request body for adding or removing subscription administrators.
- [ManageSubscriptionAdminsResponse](managesubscriptionadminsresponse.md): The confirmation response that the server returns after adding or removing subscription administrators.
- [ResponseSubscriptionAdmin](responsesubscriptionadmin.md): An administrator for a subscription.
- [SubscriptionManagementResponse](subscriptionmanagementresponse.md): A confirmation response that reports your device management service’s subscription management support.

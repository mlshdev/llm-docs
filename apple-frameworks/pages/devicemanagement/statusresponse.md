> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/statusresponse](https://developer.apple.com/documentation/devicemanagement/statusresponse)

# StatusResponse

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object

The status of an asynchronous event.

## Declaration

```
object StatusResponse
```

## Properties

- `eventStatus` — `string`: The current status of the asynchronous event.
  **Allowed values:** `PENDING`, `COMPLETE`, `FAILED`
- `eventType` — `string`: The type of the asynchronous event.
  **Allowed values:** `ASSOCIATE`, `DISASSOCIATE`, `REVOKE`, `CREATE`, `UPDATE`, `RETIRE`
- `failures` — `[ErrorResponse]`: The set of failures that occurred while the server processed the event.
- `mdmInfo` — `MdmInfo`: The client-specific information that the server stores for your device management service.
- `numCompleted` — `int32`: The number of tasks from the request that the server completed.
- `numRequested` — `int32`: The total number of tasks in the request.
- `tokenExpirationDate` — `string`: The token expiration date in an ISO-8601 format.

  Note: The server shows all dates and times in UTC.
- `uId` — `string`: The unique library identifier. When querying records using multiple tokens that may share libraries, use the `uId` field to filter duplicates and avoid double-counting records when different content managers upload duplicate tokens.

## Mentioned In

- [Handling error responses](handling-error-responses.md)
- [Managing assets](managing-assets.md)
- [Managing users](managing-users.md)

<a id="Discussion"></a>

## Discussion

Compare `numCompleted` against `numRequested` to track the progress of an event. When an event finishes with failures, `failures` describes each one.

## Topics

### Objects and Data Types

- [ErrorResponse](errorresponse.md): The response that contains the error that occurs.
- [MdmInfo](mdminfo.md): Information about the MDM client.

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

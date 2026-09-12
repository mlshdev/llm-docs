> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/managesubscriptionadminsresponse](https://developer.apple.com/documentation/devicemanagement/managesubscriptionadminsresponse)

# ManageSubscriptionAdminsResponse

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object

The confirmation response that the server returns after adding or removing subscription administrators.

## Declaration

```
object ManageSubscriptionAdminsResponse
```

## Properties

- `tokenExpirationDate` — `string`: The token expiration date in an ISO-8601 format.

  Note: The server shows all dates and times in UTC.
- `uId` — `string`: The unique library identifier. When querying records using multiple tokens that may share libraries, use the `uId` field to filter duplicates and avoid double-counting records when different content managers upload duplicate tokens.
- `versionId` — `string`: The current version identifier.

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
- [ResponseSubscriptionAdmin](responsesubscriptionadmin.md): An administrator for a subscription.
- [SubscriptionManagementResponse](subscriptionmanagementresponse.md): A confirmation response that reports your device management service’s subscription management support.
- [MdmInfo](mdminfo.md): Information about the MDM client.

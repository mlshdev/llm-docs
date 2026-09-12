> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/subscriptionmanagementresponse](https://developer.apple.com/documentation/devicemanagement/subscriptionmanagementresponse)

# SubscriptionManagementResponse

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object

A confirmation response that reports your device management service’s subscription management support.

## Declaration

```
object SubscriptionManagementResponse
```

## Properties

- `mdmInfo` — `MdmInfo`: The client-specific information that the server stores for your device management service.
- `subscriptionManagement` — `boolean`: The flag denoting whether your device management service supports subscription management for the organizational unit.
- `tokenExpirationDate` — `string`: The token expiration date in an ISO-8601 format.

  Note: The server shows all dates and times in UTC.
- `uId` — `string`: The unique library identifier. When querying records using multiple tokens that may share libraries, use the `uId` field to filter duplicates and avoid double-counting records when different content managers upload duplicate tokens.

<a id="overview"></a>

## Overview

The server returns this object from [Enable Subscriptions](enable-subscriptions.md) and [Disable Subscriptions](disable-subscriptions.md). Read `subscriptionManagement` to confirm the state that the server recorded for the token.

## Topics

### Objects and Data Types

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
- [MdmInfo](mdminfo.md): Information about the MDM client.

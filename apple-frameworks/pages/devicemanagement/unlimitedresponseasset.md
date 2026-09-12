> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/unlimitedresponseasset](https://developer.apple.com/documentation/devicemanagement/unlimitedresponseasset)

# UnlimitedResponseAsset

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object

An asset with an unlimited license that the organization owns.

## Declaration

```
object UnlimitedResponseAsset
```

## Properties

- `adamId` — `string`: The unique identifier for the product in the store.
- `assignedCount` — `int32`: The assigned amount of the asset.
- `deviceAssignable` — `boolean`: The flag denoting whether the asset is device-assignable.
- `pricingParam` — `string`: The quality of the product in the store.
  **Allowed values:** `STDQ`, `PLUS`
- `productType` — `string`: The asset product type.
  **Allowed values:** `App`, `Book`
- `revocable` — `boolean`: The flag denoting whether the asset is revocable.
- `supportedPlatforms` — `[string]`: The platforms that the asset supports.
  **Allowed values:** `iOS`, `macOS`, `tvOS`, `watchOS`, `visionOS`

## Mentioned In

- [Managing assets](managing-assets.md)

<a id="overview"></a>

## Overview

The server returns this object in the `unlimitedAssets` array of [GetAssetsResponse](getassetsresponse.md) when the `unlimited` query parameter is set to `true`. This object omits the `availableCount`, `totalCount`, and `retiredCount` fields, which don’t apply to unlimited licenses.

## See Also

### Objects and data types

- [Asset](asset.md): A product in the store.
- [ResponseAsset](responseasset.md): The asset that the organization owns.
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
- [MdmInfo](mdminfo.md): Information about the MDM client.

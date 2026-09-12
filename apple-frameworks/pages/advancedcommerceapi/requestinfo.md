> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/advancedcommerceapi/requestinfo](https://developer.apple.com/documentation/advancedcommerceapi/requestinfo)

# RequestInfo

**Interface language:** Data

**Framework:** Advanced Commerce API  
**Kind:** Object  
**Availability:** Advanced Commerce API 1.0+

The metadata to include in server requests.

## Declaration

```
object RequestInfo
```

## Properties

- `appAccountToken` — `uuid`: A UUID that represents an app account token, to associate with the transaction in the request.
  **Maximum length:** `36`
- `consistencyToken` — `string`: The value of the [advancedCommerceConsistencyToken](../appstoreserverapi/advancedcommerceconsistencytoken.md) that you receive in the [JWSRenewalInfo](jwsrenewalinfo.md) renewal information for a subscription. Don’t generate this value.
- `requestReferenceId` — `uuid` (required): A UUID that you provide to uniquely identify each request. If the request times out, you can use the same `requestReferenceId` value to retry the request. Otherwise, provide a unique value.
  **Maximum length:** `36`

<a id="Discussion"></a>

## Discussion

You provide the `RequestInfo` in your Advanced Commerce API server requests to uniquely identify your requests. You also have the option to provide additional data in the `RequestInfo` object.

<a id="Include-the-app-account-token-optionally"></a>

### Include the app account token, optionally

You can include an `appAccountToken` in `RequestInfo` to associate an account on your system with the purchase. The App Store returns the same `appAccountToken` value in the transaction information.

If you include `appAccountToken` in the `RequestInfo`, you don’t need to include the app account token as a purchase option by adding [appAccountToken(\_:)](../storekit/product/purchaseoption/appaccounttoken%28__%29.md) to the product purchase options ([purchase(options:)](../storekit/product/purchase%28options_%29.md)).

> **Important**

> If you do include `appAccountToken` in the `purchase(options:)`, you must include the same app account token value in the `RequestInfo`; otherwise, the request fails.

For more information about sending API requests from your app, see [Sending Advanced Commerce API requests from your app](../storekit/sending-advanced-commerce-api-requests-from-your-app.md).

<a id="Include-the-consistency-token-optionally"></a>

### Include the consistency token, optionally

The consistency token helps prevent unintended operations that might occur when the server gets multiple or overlapping requests for the same subscription.

Subscriptions receive a new consistency token in the [advancedCommerceRenewalInfo](../appstoreserverapi/advancedcommercerenewalinfo.md) object of the [JWSRenewalInfo](jwsrenewalinfo.md) each time the system updates the subscrpition renewal information. Include the consistency token when you use the [SubscriptionCreateRequest](subscriptioncreaterequest.md) operation to resubscribe to the subscription and provide the `previousTransactionID`.

Don’t include a consistency token when:

- You haven’t received a consistency token.
- You’re using the [OneTimeChargeCreateRequest](onetimechargecreaterequest.md) operation.
- You’re using the [SubscriptionCreateRequest](subscriptioncreaterequest.md) operation for an initial subscription purchase.

## See Also

### Objects

- [Descriptors](descriptors.md): The display name and description of a subscription product.
- [Offer](offer.md): A discount offer for an auto-renewable subscription.
- [SubscriptionModifyAddItem](subscriptionmodifyadditem.md): The data your app provides to add items when it makes changes to an auto-renewable subscription.
- [SubscriptionModifyChangeItem](subscriptionmodifychangeitem.md): The data your app provides to change an item of an auto-renewable subscription.
- [SubscriptionModifyDescriptors](subscriptionmodifydescriptors.md): The data your app provides to change the description and display name of an auto-renewable subscription.
- [SubscriptionModifyPeriodChange](subscriptionmodifyperiodchange.md): The data your app provides to change the period of an auto-renewable subscription.
- [SubscriptionModifyRemoveItem](subscriptionmodifyremoveitem.md): The data your app provides to remove an item from an auto-renewable subscription.
- [SubscriptionPriceChangeItem](subscriptionpricechangeitem.md): The data your app provides to change a subscription price.

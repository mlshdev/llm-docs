> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/retentionmessaging/advancedcommercedata](https://developer.apple.com/documentation/retentionmessaging/advancedcommercedata)

# advancedCommerceData

**Interface language:** Data

**Framework:** Retention Messaging API  
**Kind:** Type  
**Availability:** Retention Messaging API 1.2+

A Base64-encoded JSON object which contains a JWS with information describing an offer or switch-plan recommendation.

## Declaration

```
string advancedCommerceData
```

<a id="Discussion"></a>

## Discussion

This property is a part of the [advancedCommerceInfo](advancedcommerceinfo.md). For more information on the Advanced Commerce API (ACA), see [Advanced Commerce API](../advancedcommerceapi.md).

See [Sending Advanced Commerce API requests from your app](../storekit/sending-advanced-commerce-api-requests-from-your-app.md) for how to construct this object. Pass the Base64-encoded advancedCommerceRequestData object as a UTF-8 string as [advancedCommerceData](advancedcommercedata.md). Use [SubscriptionModifyInAppRequest](../advancedcommerceapi/subscriptionmodifyinapprequest.md) with a single [SubscriptionModifyChangeItem](../advancedcommerceapi/subscriptionmodifychangeitem.md) provided when constructing the advancedCommerceRequestData.

For more information on the structure of JWS objects, see [Generating JWS to sign App Store requests](../storekit/generating-jws-to-sign-app-store-requests.md).

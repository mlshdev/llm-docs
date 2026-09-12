> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreserverapi/originaltransactionid](https://developer.apple.com/documentation/appstoreserverapi/originaltransactionid)

# originalTransactionId

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** Type  
**Availability:** App Store Server API 1.0+

The original transaction identifier of a purchase.

## Declaration

```
string originalTransactionId
```

## Mentioned In

- [App Store Server API changelog](app-store-server-api-changelog.md)
- [Extending the renewal date for auto-renewable subscriptions](extending-the-renewal-date-for-auto-renewable-subscriptions.md)

<a id="Discussion"></a>

## Discussion

The App Store generates an original transaction identifier when a customer makes a successful in-app purchase. Most App Store Server API endpoints accept an `originalTransactionId`.

There are several ways to obtain this value: from your app after a user makes a successful in-app purchase, from transaction information provided in [App Store Server Notifications](../appstoreservernotifications.md), or from [App Store Receipts](../appstorereceipts.md) for apps that use the [Original API for In-App Purchase](../storekit/original-api-for-in-app-purchase.md).

To get the original transaction identifier from your app, use the [originalID](../storekit/transaction/originalid.md) property of the [Transaction](../storekit/transaction.md) object that represents the in-app purchase.

If you’ve enabled [App Store Server Notifications](../appstoreservernotifications.md), your server receives notifications for in-app purchase events that include the transaction information with the original transaction identifier. For more information, see [responseBodyV2DecodedPayload](../appstoreservernotifications/responsebodyv2decodedpayload.md).

If your app uses the [Original API for In-App Purchase](../storekit/original-api-for-in-app-purchase.md), the original transaction identifier is the [transactionIdentifier](../storekit/skpaymenttransaction/transactionidentifier.md) property in the [SKPaymentTransaction](../storekit/skpaymenttransaction.md) object. For restored purchases, the original transaction identifier is found in the [transactionIdentifier](../storekit/skpaymenttransaction/transactionidentifier.md) of the [original](../storekit/skpaymenttransaction/original.md) property. If you verify receipts using [verifyReceipt](../appstorereceipts/verify-receipt.md), the original transaction identifier is the [original_transaction_id](../appstorereceipts/original_transaction_id.md) value.

Use the value of the original transaction identifier that you get from your app, a notification, or a receipt as the value for [originalTransactionId](originaltransactionid.md) when you send requests to the App Store Server API.

> **Tip**

>  If you maintain a database to manage your subscribers, save the original transaction identifier to uniquely identify auto-renewable subscriptions.

## See Also

### Response data types

- [effectiveDate](effectivedate.md): The new subscription expiration date for a subscription-renewal extension.
- [success](success.md): A Boolean value that indicates whether the subscription-renewal-date extension succeeded.
- [webOrderLineItemId](weborderlineitemid.md): The unique identifier of subscription-purchase events across devices, including renewals.

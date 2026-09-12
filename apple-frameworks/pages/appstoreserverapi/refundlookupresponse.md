> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreserverapi/refundlookupresponse](https://developer.apple.com/documentation/appstoreserverapi/refundlookupresponse)

# RefundLookupResponse

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** Object  
**Availability:** App Store Server API 1.1+ (deprecated in 1.6)

A response that contains an array of signed JSON Web Signature (JWS) transactions.

> Use [Get Refund History](get-refund-history.md) and its response, [RefundHistoryResponse](refundhistoryresponse.md), instead.

## Declaration

```
object RefundLookupResponse
```

## Properties

- `signedTransactions` — `[JWSTransaction]`: A list of JWS transactions, or an empty array if the customer has received no refunds in your app. The transactions are sorted in ascending order by their [revocationDate](revocationdate.md).

## Mentioned In

- [App Store Server API changelog](app-store-server-api-changelog.md)

<a id="Discussion"></a>

## Discussion

If the customer hasn’t received any refunds for in-app purchases in your app, the `signedTransactions` array is empty. To read the transaction information, decode the payload for each [JWSTransaction](jwstransaction.md) object in the `signedTransactions` array. Use a [JWSTransactionDecodedPayload](jwstransactiondecodedpayload.md) object to read the transaction information in the payload.

This response can contain a maximum of 50 transactions in the `signedTransactions` array.

## See Also

### Deprecated

- [Get Transaction History V1](get-transaction-history-v1.md): Deprecated. Get a customer’s in-app purchase transaction history for your app, except finished consumable in-app purchases.
- [Get Refund History V1](get-refund-history-v1.md): Deprecated. Get a list of up to 50 of a customer’s refunded in-app purchases for your app.

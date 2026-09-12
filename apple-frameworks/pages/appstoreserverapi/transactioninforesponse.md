> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreserverapi/transactioninforesponse](https://developer.apple.com/documentation/appstoreserverapi/transactioninforesponse)

# TransactionInfoResponse

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** Object  
**Availability:** App Store Server API 1.8+

A response that contains signed transaction information for a single transaction.

## Declaration

```
object TransactionInfoResponse
```

## Properties

- `signedTransactionInfo` — `JWSTransaction`: A customer’s in-app purchase transaction, signed by Apple, in JSON Web Signature (JWS) format.

## Mentioned In

- [App Store Server API changelog](app-store-server-api-changelog.md)

<a id="Discussion"></a>

## Discussion

The `TransactionInfoResponse` contains information about the transaction that you request using the [Get Transaction Info](get-transaction-info.md) endpoint. The [transactionId](transactionid.md) in the `signedTransactionInfo` matches the `transactionId` you provide in the request path.

## Topics

### Response data types

- [JWSTransaction](jwstransaction.md): Transaction information signed by the App Store, in JSON Web Signature (JWS) Compact Serialization format.

## See Also

### Transaction information

- [Get Transaction Info](get-transaction-info.md): Get information about a single transaction for your app.

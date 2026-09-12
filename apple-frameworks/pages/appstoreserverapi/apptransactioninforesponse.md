> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreserverapi/apptransactioninforesponse](https://developer.apple.com/documentation/appstoreserverapi/apptransactioninforesponse)

# AppTransactionInfoResponse

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** Object  
**Availability:** App Store Server API 1.17+

A response that contains signed app transaction information for a customer.

## Declaration

```
object AppTransactionInfoResponse
```

## Properties

- `signedAppTransactionInfo` — `JWSAppTransaction`: A customer’s app transaction information, signed by Apple, in JSON Web Signature (JWS) format.

## Mentioned In

- [App Store Server API changelog](app-store-server-api-changelog.md)

<a id="Discussion"></a>

## Discussion

This response contains information that you request by calling the [Get App Transaction Info](get-app-transaction-info.md) endpoint. For information on decoding and reading the app transaction, see [JWSAppTransaction](jwsapptransaction.md) and [JWSAppTransactionDecodedPayload](jwsapptransactiondecodedpayload.md).

## Topics

### Response data types

- [JWSAppTransaction](jwsapptransaction.md): App transaction information signed by the App Store, in JSON Web Signature (JWS) Compact Serialization format.
- [JWSAppTransactionDecodedPayload](jwsapptransactiondecodedpayload.md): A decoded payload that contains app transaction information.

## See Also

### App Transaction information

- [Get App Transaction Info](get-app-transaction-info.md): Get a customer’s app transaction information for your app.

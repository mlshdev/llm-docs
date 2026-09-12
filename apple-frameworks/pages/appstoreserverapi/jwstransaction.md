> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreserverapi/jwstransaction](https://developer.apple.com/documentation/appstoreserverapi/jwstransaction)

# JWSTransaction

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** Type  
**Availability:** App Store Server API 1.0+

Transaction information signed by the App Store, in JSON Web Signature (JWS) Compact Serialization format.

## Declaration

```
string JWSTransaction
```

<a id="Discussion"></a>

## Discussion

The `JWSTransaction` type is a string of three Base64URL-encoded components separated by a period. The string contains the JWS Compact Serialization of the transaction information, signed by the App Store according to the JSON Web Signature (JWS) [IETF RFC 7515](https://datatracker.ietf.org/doc/html/rfc7515) specification.

The three components of the string are a header, a payload, and a signature, in that order.

- To read the transaction information, Base64URL-decode the payload. Use a [JWSTransactionDecodedPayload](jwstransactiondecodedpayload.md) object to read the payload information.
- To read the header, decode it and use a [JWSDecodedHeader](jwsdecodedheader.md) object to access the information. Use the information in the header to verify the signature.

<a id="Use-App-Store-Server-Library-functions"></a>

### Use App Store Server Library functions

To verify a `JWSTransaction` on your server, consider implementing the verification using the App Store Server Library function `verifyAndDecodeTransaction`. The library provides this function in each language the library supports. For more information, see [Simplifying your implementation by using the App Store Server Library](simplifying-your-implementation-by-using-the-app-store-server-library.md).

## See Also

### JWS headers and payloads

- [JWSDecodedHeader](jwsdecodedheader.md): A decoded JSON Web Signature (JWS) header containing transaction or renewal information.
- [JWSAppTransaction](jwsapptransaction.md): App transaction information signed by the App Store, in JSON Web Signature (JWS) Compact Serialization format.
- [JWSAppTransactionDecodedPayload](jwsapptransactiondecodedpayload.md): A decoded payload that contains app transaction information.
- [JWSTransactionDecodedPayload](jwstransactiondecodedpayload.md): A decoded payload that contains transaction information.
- [JWSRenewalInfo](jwsrenewalinfo.md): Subscription renewal information, signed by the App Store, in JSON Web Signature (JWS) format.
- [JWSRenewalInfoDecodedPayload](jwsrenewalinfodecodedpayload.md): A decoded payload containing subscription renewal information for an auto-renewable subscription.
- [Data types](data-types.md): Refer to these data types for decoded transaction and renewal information payloads.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreserverapi/jwsrenewalinfo](https://developer.apple.com/documentation/appstoreserverapi/jwsrenewalinfo)

# JWSRenewalInfo

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** Type  
**Availability:** App Store Server API 1.0+

Subscription renewal information, signed by the App Store, in JSON Web Signature (JWS) format.

## Declaration

```
string JWSRenewalInfo
```

<a id="Discussion"></a>

## Discussion

The `JWSRenewalInfo` type is a string of three Base64 URL-encoded components, separated by a period, containing subscription renewal information signed by the App Store. The App Store signs the string according to the JSON Web Signature (JWS) [IETF RFC 7515](https://datatracker.ietf.org/doc/html/rfc7515) specification.

The three components in the string are a header, a payload, and a signature.

- To read the subscription renewal information, decode the payload. Use a [JWSRenewalInfoDecodedPayload](jwsrenewalinfodecodedpayload.md) object to read the payload information.
- To read the header, decode it and use a [JWSDecodedHeader](jwsdecodedheader.md) object to access the information. Use the information in the header to verify the signature.

## See Also

### JWS headers and payloads

- [JWSDecodedHeader](jwsdecodedheader.md): A decoded JSON Web Signature (JWS) header containing transaction or renewal information.
- [JWSAppTransaction](jwsapptransaction.md): App transaction information signed by the App Store, in JSON Web Signature (JWS) Compact Serialization format.
- [JWSAppTransactionDecodedPayload](jwsapptransactiondecodedpayload.md): A decoded payload that contains app transaction information.
- [JWSTransaction](jwstransaction.md): Transaction information signed by the App Store, in JSON Web Signature (JWS) Compact Serialization format.
- [JWSTransactionDecodedPayload](jwstransactiondecodedpayload.md): A decoded payload that contains transaction information.
- [JWSRenewalInfoDecodedPayload](jwsrenewalinfodecodedpayload.md): A decoded payload containing subscription renewal information for an auto-renewable subscription.
- [Data types](data-types.md): Refer to these data types for decoded transaction and renewal information payloads.

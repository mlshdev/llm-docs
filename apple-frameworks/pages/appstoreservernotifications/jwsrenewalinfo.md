> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreservernotifications/jwsrenewalinfo](https://developer.apple.com/documentation/appstoreservernotifications/jwsrenewalinfo)

# JWSRenewalInfo

**Interface language:** Data

**Framework:** App Store Server Notifications  
**Kind:** Type  
**Availability:** App Store Server Notifications 2.0+

Subscription renewal information signed by the App Store, in JSON Web Signature (JWS) format.

## Declaration

```
string JWSRenewalInfo
```

<a id="Discussion"></a>

## Discussion

The [JWSRenewalInfo](jwsrenewalinfo.md) type is a string of three Base64 URL-encoded components, separated by a period. The string contains the JWS representation of the subscription renewal information, signed by the App Store according to the JSON Web Signature (JWS) [IETF RFC 7515](https://datatracker.ietf.org/doc/html/rfc7515) specification.

The three components in the string are a header, a payload, and a signature, in that order.

To read the subscription renewal information, Base64 URL-decode the payload. Use a [JWSRenewalInfoDecodedPayload](jwsrenewalinfodecodedpayload.md) object to read the payload information.

To read the header, Base64 URL-decode it and use a [JWSDecodedHeader](jwsdecodedheader.md) object to access the information. Use the information in the header to verify the signature.

## See Also

### JWS transaction and renewal info

- [JWSRenewalInfoDecodedPayload](jwsrenewalinfodecodedpayload.md): A decoded payload containing subscription renewal information for an auto-renewable subscription.
- [JWSTransaction](jwstransaction.md): Transaction information signed by the App Store, in JSON Web Signature (JWS) Compact Serialization format.
- [JWSTransactionDecodedPayload](jwstransactiondecodedpayload.md): A decoded payload that contains transaction information.

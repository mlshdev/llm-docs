> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/advancedcommerceapi/jwstransaction](https://developer.apple.com/documentation/advancedcommerceapi/jwstransaction)

# JWSTransaction

**Interface language:** Data

**Framework:** Advanced Commerce API  
**Kind:** Type  
**Availability:** Advanced Commerce API 1.0+

Transaction information signed by the App Store, in JSON Web Signature (JWS) Compact Serialization format.

## Declaration

```
string JWSTransaction
```

<a id="Description"></a>

### Description

This `JWSTransaction` object is identical to the one used in the App Store Server API and by App Store Server Notifications. For details, see [JWSTransaction](../appstoreserverapi/jwstransaction.md).

## See Also

### Signed transaction information

- [JWSRenewalInfo](jwsrenewalinfo.md): Subscription renewal information signed by the App Store, in JSON Web Signature (JWS) format.

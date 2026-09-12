> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appstoreserverapi/lasttransactionsitem](https://developer.apple.com/documentation/appstoreserverapi/lasttransactionsitem)

# lastTransactionsItem

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** Object  
**Availability:** App Store Server API 1.0+

The most recent App Store-signed transaction information and App Store-signed renewal information for an auto-renewable subscription.

## Declaration

```
object lastTransactionsItem
```

## Properties

- `originalTransactionId` — `originalTransactionId`: The original transaction identifier of the auto-renewable subscription.
- `status` — `status`: The status of the auto-renewable subscription.
- `signedRenewalInfo` — `JWSRenewalInfo`: The subscription renewal information signed by the App Store, in JSON Web Signature (JWS) format.
- `signedTransactionInfo` — `JWSTransaction`: The transaction information signed by the App Store, in JWS format.

## Topics

### Data Types

- [originalTransactionId](originaltransactionid.md): The original transaction identifier of a purchase.
- [status](status.md): The status of an auto-renewable subscription.
- [JWSRenewalInfo](jwsrenewalinfo.md): Subscription renewal information, signed by the App Store, in JSON Web Signature (JWS) format.
- [JWSTransaction](jwstransaction.md): Transaction information signed by the App Store, in JSON Web Signature (JWS) Compact Serialization format.

## See Also

### Object and Data Types

- [subscriptionGroupIdentifier](https://developer.apple.com/documentation/appstoreserverapi/subscriptiongroupidentifieritem/subscriptiongroupidentifier)

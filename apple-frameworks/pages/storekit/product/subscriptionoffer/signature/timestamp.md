> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/product/subscriptionoffer/signature/timestamp](https://developer.apple.com/documentation/storekit/product/subscriptionoffer/signature/timestamp)

# timestamp

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ (deprecated in 26.0) · iPadOS 17.4+ (deprecated in 26.0) · Mac Catalyst 17.4+ (deprecated in 26.0) · macOS 14.4+ (deprecated in 26.0) · tvOS 17.4+ (deprecated in 26.0) · visionOS 1.1+ (deprecated in 26.0) · watchOS 10.4+ (deprecated in 26.0)

A timestamp your server generates in UNIX time format, in milliseconds, that indicates the time the server generated the signature.

> Sign promotional offers with JWS and use PurchaseOption.promotionalOffer(\_:compactJWS:) instead.

## Declaration

```swift
var timestamp: Int
```

## See Also

### Getting signature elements

- [keyID](keyid.md): Deprecated. A string that identifies the private key you use to generate the cryptographic signature.
- [nonce](nonce.md): Deprecated. A one-time UUID your server generates for the promotional offer.
- [signature](signature.md): Deprecated. A cryptographic signature your server generates to sign a promotional offer for an auto-renewable subscription.

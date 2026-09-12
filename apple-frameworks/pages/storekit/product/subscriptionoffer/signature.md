> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/product/subscriptionoffer/signature](https://developer.apple.com/documentation/storekit/product/subscriptionoffer/signature)

# Product.SubscriptionOffer.Signature

**Framework:** StoreKit  
**Kind:** Structure  
**Availability:** iOS 17.4+ (deprecated in 26.0) · iPadOS 17.4+ (deprecated in 26.0) · Mac Catalyst 17.4+ (deprecated in 26.0) · macOS 14.4+ (deprecated in 26.0) · tvOS 17.4+ (deprecated in 26.0) · visionOS 1.1+ (deprecated in 26.0) · watchOS 10.4+ (deprecated in 26.0)

A cryptographic signature for a promotional offer.

> Sign promotional offers with JWS and use PurchaseOption.promotionalOffer(\_:compactJWS:) instead.

## Declaration

```swift
struct Signature
```

<a id="overview"></a>

## Overview

For information about promotional offers, see [Implementing promotional offers in your app](../../implementing-promotional-offers-in-your-app.md).

The App Store Server Library provides a function that produces signatures for promotional offers. For more information, see [Simplifying your implementation by using the App Store Server Library](../../../appstoreserverapi/simplifying-your-implementation-by-using-the-app-store-server-library.md).

## Topics

### Creating subscription offer signatures

- [init(keyID:nonce:timestamp:signature:)](signature/init%28keyid_nonce_timestamp_signature_%29.md): Deprecated. Creates a subscription offer signature instance.

### Getting signature elements

- [keyID](signature/keyid.md): Deprecated. A string that identifies the private key you use to generate the cryptographic signature.
- [nonce](signature/nonce.md): Deprecated. A one-time UUID your server generates for the promotional offer.
- [signature](signature/signature.md): Deprecated. A cryptographic signature your server generates to sign a promotional offer for an auto-renewable subscription.
- [timestamp](signature/timestamp.md): Deprecated. A timestamp your server generates in UNIX time format, in milliseconds, that indicates the time the server generated the signature.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

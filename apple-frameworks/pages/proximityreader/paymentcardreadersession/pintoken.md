> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/paymentcardreadersession/pintoken](https://developer.apple.com/documentation/proximityreader/paymentcardreadersession/pintoken)

# PaymentCardReaderSession.PINToken

**Framework:** ProximityReader  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 17.0+

A secure PIN token that you receive from your participating payment service provider.

## Declaration

```swift
struct PINToken
```

## Mentioned In

- [Adding support for Tap to Pay on iPhone to your app](../adding-support-for-tap-to-pay-on-iphone-to-your-app.md)

<a id="overview"></a>

## Overview

When the payment card issuer requests the PIN during a transaction, your participating payment service provider must provide this token as part of the response.

## Topics

### Creating a token

- [init(rawValue:)](pintoken/init%28rawvalue_%29.md): Creates a token with the string your payment service provider gave you.

### Getting the token value

- [rawValue](pintoken/rawvalue.md): The raw token string from your payment service provider.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Requesting the PIN

- [capturePIN(using:cardReaderTransactionID:)](capturepin%28using_cardreadertransactionid_%29.md): Presents a sheet to capture the PIN when required by the payment card issuer, and returns the previously encrypted card data including newly captured PIN data.

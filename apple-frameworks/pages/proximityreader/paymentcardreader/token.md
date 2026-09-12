> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/paymentcardreader/token](https://developer.apple.com/documentation/proximityreader/paymentcardreader/token)

# PaymentCardReader.Token

**Framework:** ProximityReader  
**Kind:** Structure  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 17.0+

A secure token that you receive from your participating payment service provider.

## Declaration

```swift
struct Token
```

## Mentioned In

- [Adding support for Tap to Share to your app](../adding-support-for-tap-to-share-to-your-app.md)

<a id="overview"></a>

## Overview

You must create a secure token to use Tap to Pay on iPhone. Your payment service provider supplies the string you use to create this token. Create your token and pass it to the [prepare(using:)](prepare%28using_%29.md) method to configure the current device to read cards.

## Topics

### Creating a token

- [init(rawValue:)](token/init%28rawvalue_%29.md): Creates a token with the string your payment service provider gave you.

### Getting the token value

- [rawValue](token/rawvalue.md): The raw token string from your payment service provider.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Displaying the Tap to Pay on iPhone’s terms and conditions

- [isAccountLinked(using:)](isaccountlinked%28using_%29.md): A Boolean value that indicates whether the account is already linked.
- [linkAccount(using:)](linkaccount%28using_%29.md): Presents a sheet for the merchant to accept Tap to Pay on iPhone’s Terms and Conditions on a device.
- [relinkAccount(using:)](relinkaccount%28using_%29.md): Presents a sheet for the merchant to re-accept Tap to Pay on iPhone’s Terms and Conditions on a device using a different Apple Account.

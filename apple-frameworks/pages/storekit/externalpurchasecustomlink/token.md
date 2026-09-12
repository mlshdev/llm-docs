> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/externalpurchasecustomlink/token](https://developer.apple.com/documentation/storekit/externalpurchasecustomlink/token)

# ExternalPurchaseCustomLink.Token

**Framework:** StoreKit  
**Kind:** Structure  
**Availability:** iOS 18.1+ · iPadOS 18.1+ · Mac Catalyst 18.1+ · macOS 15.1+ · tvOS 18.1+ · visionOS 2.1+ · watchOS 11.1+

A token you use with the External Purchase custom link API.

## Declaration

```swift
struct Token
```

<a id="overview"></a>

## Overview

StoreKit returns an external purchase token of this type when you call the [token(for:)](token%28for_%29.md) function. For more information, see [Receiving and decoding external purchase tokens](../receiving-and-decoding-external-purchase-tokens.md).

## Topics

### Getting the token value

- [value](token/value.md): A Base64URL-encoded JSON string that represents the external purchase token.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Implementing external purchases in the EU

- [ExternalPurchaseCustomLink](../externalpurchasecustomlink.md): An enumeration that enables qualifying apps to offer custom links for external purchases and use alternative payment service providers.
- [StoreKit external purchases or offers entitlement](../../bundleresources/entitlements/com.apple.developer.storekit.custom-purchase-link.allowed-regions.md): An entitlement that enables a qualifying app to offer external purchases within app or at a website, in specific regions.
- [com.apple.developer.storekit.external-purchase-link](../../bundleresources/entitlements/com.apple.developer.storekit.external-purchase-link.md): A Boolean value that indicates whether your app can include a link that directs people to a website to make an external purchase.
- [SKExternalPurchaseCustomLinkRegions](../../bundleresources/information-property-list/skexternalpurchasecustomlinkregions.md): An array of country code strings that indicate the regions where your app supports custom links for the communication and promotion of offers.
- [Testing transactions that use custom link tokens](../testing-transactions-that-use-custom-link-tokens.md): Recognize custom link tokens that your app receives in the sandbox testing environment, and use them to test reporting transactions.

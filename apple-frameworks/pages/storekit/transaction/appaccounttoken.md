> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/storekit/transaction/appaccounttoken

# appAccountToken

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A UUID that associates the transaction with a user on your own service.

## Declaration

```swift
let appAccountToken: UUID?
```

## Mentioned In

- [Generating a signature for promotional offers](../generating-a-signature-for-promotional-offers.md)

<a id="Discussion"></a>

## Discussion

You create an [appAccountToken(\_:)](../product/purchaseoption/appaccounttoken%28__%29.md) and send it to the App Store when a customer initiates an in-app purchase. The App Store returns the same value in [appAccountToken](appaccounttoken.md) in the transaction information after the customer completes the purchase.

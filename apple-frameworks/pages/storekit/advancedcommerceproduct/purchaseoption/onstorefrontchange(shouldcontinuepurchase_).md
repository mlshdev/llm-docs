> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/advancedcommerceproduct/purchaseoption/onstorefrontchange(shouldcontinuepurchase:)](https://developer.apple.com/documentation/storekit/advancedcommerceproduct/purchaseoption/onstorefrontchange(shouldcontinuepurchase:))

# onStorefrontChange(shouldContinuePurchase:)

**Framework:** StoreKit  
**Kind:** Type Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

A closure that determines whether the transaction continues if the device’s App Store storefront changes during a transaction.

## Declaration

```swift
static func onStorefrontChange(shouldContinuePurchase: @escaping @Sendable (Storefront) -> Bool) -> AdvancedCommerceProduct.PurchaseOption
```

## Parameters

- `shouldContinuePurchase`: A closure that returns a Boolean value that determines whether the purchase continues when the storefront changes to `Storefront` during the purchase process.

<a id="Discussion"></a>

## Discussion

The default is `true` if you don’t include this option in the purchase options.

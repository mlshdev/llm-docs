> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/product/purchaseoption/onstorefrontchange(shouldcontinuepurchase:)](https://developer.apple.com/documentation/storekit/product/purchaseoption/onstorefrontchange(shouldcontinuepurchase:))

# onStorefrontChange(shouldContinuePurchase:)

**Framework:** StoreKit  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Indicates whether a transaction needs to continue if the App Store storefront changes on the device during the transaction.

## Declaration

```swift
@preconcurrency static func onStorefrontChange(shouldContinuePurchase: @escaping @Sendable (Storefront) -> Bool) -> Product.PurchaseOption
```

## Parameters

- `shouldContinuePurchase`: A closure that returns a Boolean value to indicate whether the purchase needs to continue when the App Store storefront changes to the [storefront](../../transaction/storefront.md) value during a transaction.

<a id="return-value"></a>

## Return Value

[Product.PurchaseOption](../purchaseoption.md)

<a id="Discussion"></a>

## Discussion

The default value is `true` if this option isn’t added to the purchase.

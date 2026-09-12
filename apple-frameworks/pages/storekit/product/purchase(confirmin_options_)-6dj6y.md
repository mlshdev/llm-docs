> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/product/purchase(confirmin:options:)-6dj6y](https://developer.apple.com/documentation/storekit/product/purchase(confirmin:options:)-6dj6y)

# purchase(confirmIn:options:)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+

Initiates a purchase for the product with the App Store and displays the confirmation sheet.

## Declaration

```swift
@MainActor func purchase(confirmIn scene: some UIScene, options: Set<Product.PurchaseOption> = []) async throws -> Product.PurchaseResult
```

## Parameters

- `scene`: The [UIScene](../../uikit/uiscene.md) the system uses to show the purchase confirmation UI.
- `options`: A set of options ([Product.PurchaseOption](purchaseoption.md)) you can associate with the purchase.

<a id="return-value"></a>

## Return Value

The result of the purchase, [Product.PurchaseResult](purchaseresult.md).

<a id="Discussion"></a>

## Discussion

StoreKit provides several APIs you can use to enable customers to initiate a purchase. Before using [purchase(confirmIn:options:)](purchase%28confirmin_options_%29-6dj6y.md), consider the following APIs and choose the one that best suits your app’s implementation:

- Use [PurchaseAction](../purchaseaction.md) for apps that use [SwiftUI](https://developer.apple.com/documentation/swiftui) on any platform, including multi-scene apps for visionOS.
- Use [purchase(confirmIn:options:)](purchase%28confirmin_options_%29-6dj6y.md) for apps that use [UIKit](../../uikit.md).
- Use [purchase(confirmIn:options:)](purchase%28confirmin_options_%29-8eai6.md) for apps that run on macOS and use [AppKit](https://developer.apple.com/documentation/appkit).
- Use [purchase(options:)](purchase%28options_%29.md) for apps that runs on watchOS.

> **Important**

>  If you use StoreKit views such as [ProductView](../productview.md), [StoreView](../storeview.md), or [SubscriptionStoreView](../subscriptionstoreview.md) you don’t need to call any other API to initiate a purchase. StoreKit manages the purchase action automatically, including presenting the purchase confirmation UI. For more information, see [StoreKit views](../storekit-views.md).

This method may throw a [Product.PurchaseError](purchaseerror.md) or [StoreKitError](../storekiterror.md).

## See Also

### Purchasing a product

- [purchase(options:)](purchase%28options_%29.md): Initiates a purchase for the product with the App Store and displays the confirmation sheet.
- [purchase(confirmIn:options:)](purchase%28confirmin_options_%29-3bivf.md): Processes a purchase for the product.
- [purchase(confirmIn:options:)](purchase%28confirmin_options_%29-8eai6.md): Processes a purchase for the product.
- [Product.PurchaseOption](purchaseoption.md): Optional settings for a product purchase that add account information, purchase details, and offers, or that specify behaviors.
- [Product.PurchaseResult](purchaseresult.md): The result of a purchase.
- [Product.PurchaseError](purchaseerror.md): Error information for product purchase errors.

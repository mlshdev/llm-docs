> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/product/purchase(confirmin:options:)-3bivf](https://developer.apple.com/documentation/storekit/product/purchase(confirmin:options:)-3bivf)

# purchase(confirmIn:options:)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · tvOS 18.2+ · visionOS 2.2+

Processes a purchase for the product.

## Declaration

```swift
func purchase(confirmIn viewController: UIViewController, options: Set<Product.PurchaseOption> = []) async throws -> Product.PurchaseResult
```

## Parameters

- `viewController`: The view controller to show purchase confirmation UI in proximity to.
- `options`: A set of options to configure the purchase.

<a id="return-value"></a>

## Return Value

The result of the purchase

<a id="discussion"></a>

## Discussion

> **Throws**

> A `PurchaseError` or `StoreKitError`.

## See Also

### Purchasing a product

- [purchase(options:)](purchase%28options_%29.md): Initiates a purchase for the product with the App Store and displays the confirmation sheet.
- [purchase(confirmIn:options:)](purchase%28confirmin_options_%29-6dj6y.md): Initiates a purchase for the product with the App Store and displays the confirmation sheet.
- [purchase(confirmIn:options:)](purchase%28confirmin_options_%29-8eai6.md): Processes a purchase for the product.
- [Product.PurchaseOption](purchaseoption.md): Optional settings for a product purchase that add account information, purchase details, and offers, or that specify behaviors.
- [Product.PurchaseResult](purchaseresult.md): The result of a purchase.
- [Product.PurchaseError](purchaseerror.md): Error information for product purchase errors.

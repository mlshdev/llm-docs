> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/product/purchase(confirmin:options:)-8eai6](https://developer.apple.com/documentation/storekit/product/purchase(confirmin:options:)-8eai6)

# purchase(confirmIn:options:)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** macOS 15.2+

Processes a purchase for the product.

## Declaration

```swift
func purchase(confirmIn window: NSWindow, options: Set<Product.PurchaseOption> = []) async throws -> Product.PurchaseResult
```

## Parameters

- `window`: The window to show purchase confirmation UI in proximity to.
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
- [purchase(confirmIn:options:)](purchase%28confirmin_options_%29-3bivf.md): Processes a purchase for the product.
- [Product.PurchaseOption](purchaseoption.md): Optional settings for a product purchase that add account information, purchase details, and offers, or that specify behaviors.
- [Product.PurchaseResult](purchaseresult.md): The result of a purchase.
- [Product.PurchaseError](purchaseerror.md): Error information for product purchase errors.

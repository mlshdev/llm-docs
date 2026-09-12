> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/advancedcommerceproduct/purchase(compactjws:confirmin:options:)-54lkw](https://developer.apple.com/documentation/storekit/advancedcommerceproduct/purchase(compactjws:confirmin:options:)-54lkw)

# purchase(compactJWS:confirmIn:options:)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · tvOS 18.4+ · visionOS 2.4+

Processes a purchase for the product.

## Declaration

```swift
func purchase(compactJWS: String, confirmIn viewController: UIViewController, options: Set<AdvancedCommerceProduct.PurchaseOption> = []) async throws -> AdvancedCommerceProduct.PurchaseResult
```

## Parameters

- `compactJWS`: The compact JSON Web Signature (JWS) string for the operation.
- `viewController`: The window the system uses to display purchase confirmation UI in proximity to.
- `options`: A set of purchase options.

<a id="return-value"></a>

## Return Value

The result of the purchase.

<a id="Discussion"></a>

## Discussion

> **Throws**

>  A `PurchaseError`, `StoreKitError`, or `InvalidRequest` error.

## See Also

### Initiating purchases

- [AdvancedCommerceProduct.PurchaseOption](purchaseoption.md)
- [purchase(compactJWS:confirmIn:options:)](purchase%28compactjws_confirmin_options_%29-7x4bh.md): Processes a purchase for the product.
- [purchase(compactJWS:options:)](purchase%28compactjws_options_%29.md): Processes a purchase for the product.
- [AdvancedCommerceProduct.PurchaseResult](purchaseresult.md)

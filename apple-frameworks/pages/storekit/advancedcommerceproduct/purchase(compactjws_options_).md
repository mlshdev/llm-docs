> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/advancedcommerceproduct/purchase(compactjws:options:)](https://developer.apple.com/documentation/storekit/advancedcommerceproduct/purchase(compactjws:options:))

# purchase(compactJWS:options:)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** watchOS 11.4+

Processes a purchase for the product.

## Declaration

```swift
@MainActor func purchase(compactJWS: String, options: Set<AdvancedCommerceProduct.PurchaseOption> = []) async throws -> AdvancedCommerceProduct.PurchaseResult
```

## Parameters

- `compactJWS`: The compact JSON Web Signature (JWS) string for the operation.
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
- [purchase(compactJWS:confirmIn:options:)](purchase%28compactjws_confirmin_options_%29-54lkw.md): Processes a purchase for the product.
- [AdvancedCommerceProduct.PurchaseResult](purchaseresult.md)

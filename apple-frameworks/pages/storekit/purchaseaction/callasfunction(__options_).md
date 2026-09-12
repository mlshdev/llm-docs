> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/purchaseaction/callasfunction(_:options:)](https://developer.apple.com/documentation/storekit/purchaseaction/callasfunction(_:options:))

# callAsFunction(\_:options:)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Starts an in-app purchase for the indicated product and purchase options.

## Declaration

```swift
@MainActor @preconcurrency func callAsFunction(_ product: Product, options: Set<Product.PurchaseOption> = []) async throws -> Product.PurchaseResult
```

## Parameters

- `product`: The in-app purchase [Product](../product.md) the customer is purchasing.
- `options`: A set of options you may associate with the purchase ([Product.PurchaseOption](../product/purchaseoption.md)).

<a id="return-value"></a>

## Return Value

The result of the purchase, [Product.PurchaseResult](../product/purchaseresult.md).

<a id="Discussion"></a>

## Discussion

Don’t call this method directly. SwiftUI calls it when you call the [PurchaseAction](../purchaseaction.md) structure with the `product` and `options` as arguments.

This method may throw a [Product.PurchaseError](../product/purchaseerror.md) or [StoreKitError](../storekiterror.md).

For information about how Swift uses the [callAsFunction(\_:options:)](callasfunction%28__options_%29.md) method to simplify call site syntax, see [Methods with Special Names](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/declarations/#Methods-with-Special-Names) in *The Swift Programming Language*.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/purchaseaction/callasfunction(_:compactjws:options:)](https://developer.apple.com/documentation/storekit/purchaseaction/callasfunction(_:compactjws:options:))

# callAsFunction(\_:compactJWS:options:)

**Framework:** StoreKit  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

## Declaration

```swift
@MainActor @preconcurrency func callAsFunction(_ advancedCommerceProduct: AdvancedCommerceProduct, compactJWS: String, options: Set<AdvancedCommerceProduct.PurchaseOption> = []) async throws -> AdvancedCommerceProduct.PurchaseResult
```

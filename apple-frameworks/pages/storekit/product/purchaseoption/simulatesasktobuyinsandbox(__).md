> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/storekit/product/purchaseoption/simulatesasktobuyinsandbox(_:)

# simulatesAskToBuyInSandbox(\_:)

**Framework:** StoreKit  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Simulates an Ask to Buy scenario when testing your app in the sandbox environment.

## Declaration

```swift
static func simulatesAskToBuyInSandbox(_ simulateAskToBuy: Bool) -> Product.PurchaseOption
```

## Parameters

- `simulateAskToBuy`: Set to `true` to simulate a child’s account asking permission to make a purchase.

<a id="return-value"></a>

## Return Value

An instance of [Product.PurchaseOption](../purchaseoption.md) to use in [purchase(options:)](../purchase%28options_%29.md).

<a id="Discussion"></a>

## Discussion

For information about testing Ask to Buy scenarios, see [Testing at all stages of development with Xcode and the sandbox](../../testing-at-all-stages-of-development-with-xcode-and-the-sandbox.md).

For information about purchases made using Ask to Buy, see [Approve what kids buy with Ask to Buy](https://support.apple.com/en-us/HT201089).

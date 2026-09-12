> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/customerengagementsession/addpass(_:)](https://developer.apple.com/documentation/proximityreader/customerengagementsession/addpass(_:))

# addPass(\_:)

**Framework:** ProximityReader  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Asks the customer to confirm adding a Pass to Wallet.

## Declaration

```swift
final func addPass(_ pass: Data) async throws -> Bool
```

## Parameters

- `pass`: Properly created `.pkpass` data to be added to Wallet. The `passTypeIdentifier` of the pass must be one of the identifiers in the [passTypeIdentifiers](configuration-swift.struct/passtypeidentifiers.md).

<a id="return-value"></a>

## Return Value

`true` if the pass is added to Wallet successfully or the same pass already exists; `false` if the customer declines.

## Mentioned In

- [Adding support for Tap to Share to your app](../adding-support-for-tap-to-share-to-your-app.md)

<a id="discussion"></a>

## Discussion

> **Throws**

> [CustomerEngagementSession.Error](error.md) if the request fails.

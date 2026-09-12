> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/appstore/presentmerchandising(_:from:)-hkrd](https://developer.apple.com/documentation/storekit/appstore/presentmerchandising(_:from:)-hkrd)

# presentMerchandising(\_:from:)

**Framework:** StoreKit  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+

Display a merchandising view.

## Declaration

```swift
@MainActor static func presentMerchandising(_ kind: AppStoreMerchandisingKind, from controller: UIViewController) async throws -> AppStoreMerchandisingKind.PresentationResult
```

## Parameters

- `kind`: The merchandising kind to merchandise.
- `controller`: The view controller to show the merchandising UI in proximity to.

<a id="return-value"></a>

## Return Value

The result of the App Store merchandising presentation.

<a id="discussion"></a>

## Discussion

> **Throws**

> A `StoreKitError`.

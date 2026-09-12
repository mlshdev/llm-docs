> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/appstore/presentmerchandising(_:from:)-8bblo](https://developer.apple.com/documentation/storekit/appstore/presentmerchandising(_:from:)-8bblo)

# presentMerchandising(\_:from:)

**Framework:** StoreKit  
**Kind:** Type Method  
**Availability:** macOS 26.2+

Display a merchandising view.

## Declaration

```swift
@MainActor static func presentMerchandising(_ kind: AppStoreMerchandisingKind, from window: NSWindow) async throws -> AppStoreMerchandisingKind.PresentationResult
```

## Parameters

- `kind`: The merchandising kind to merchandise.
- `window`: The view window to show the merchandising UI in proximity to.

<a id="return-value"></a>

## Return Value

The result of the App Store merchandising presentation.

<a id="discussion"></a>

## Discussion

> **Throws**

> A `StoreKitError`.

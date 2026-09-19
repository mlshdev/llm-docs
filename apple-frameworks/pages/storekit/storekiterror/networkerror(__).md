> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/storekit/storekiterror/networkerror(_:)

# StoreKitError.networkError(\_:)

**Framework:** StoreKit  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A network error occurred.

## Declaration

```swift
case networkError(URLError)
```

## See Also

### StoreKit Error Codes

- [StoreKitError.systemError(\_:)](systemerror%28__%29.md): A system error occurred.
- [StoreKitError.userCancelled](usercancelled.md): The user canceled.
- [StoreKitError.notAvailableInStorefront](notavailableinstorefront.md): The function isn’t available on devices configured for this storefront.
- [StoreKitError.notEntitled](notentitled.md): The app doesn’t have the appropriate entitlements to use the functionality.
- [StoreKitError.unknown](unknown.md): An unknown error occurred.
- [StoreKitError.unsupported](unsupported.md): The operation doesn’t support this product.

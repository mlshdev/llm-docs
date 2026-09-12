> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/marketplacekit/marketplacekiterror/missingcapabilities(_:)](https://developer.apple.com/documentation/marketplacekit/marketplacekiterror/missingcapabilities(_:))

# MarketplaceKitError.missingCapabilities(\_:)

**Framework:** MarketplaceKit  
**Kind:** Case  
**Availability:** iOS 17.4+ · iPadOS 17.4+

An error that indicates the device lacks capabilities that requested app requires.

## Declaration

```swift
case missingCapabilities([String])
```

## See Also

### Device and platform compatibility errors

- [MarketplaceKitError.minimumPlatformVersionNotSatisfied(\_:)](minimumplatformversionnotsatisfied%28__%29.md): An error that indicates the device has a lower platform version than that required by the requested app.
- [MarketplaceKitError.noSupportedVariant](nosupportedvariant.md): An error that indicates the requested app doesn’t have a supported variant for this device.
- [MarketplaceKitError.unsupportedPlatform](unsupportedplatform.md): An error that indicates that the requested app doesn’t support the platform.
- [MarketplaceKitError.insufficientStorageSpace(\_:)](insufficientstoragespace%28__%29.md): An error that indicates that the device lacks the required disk space to install the app.

> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/marketplacekit/marketplacekiterror/installationrestricted](https://developer.apple.com/documentation/marketplacekit/marketplacekiterror/installationrestricted)

# MarketplaceKitError.installationRestricted

**Framework:** MarketplaceKit  
**Kind:** Case  
**Availability:** iOS 17.4+ · iPadOS 17.4+

An error that indicates that app installation is restricted on this device.

## Declaration

```swift
case installationRestricted
```

## See Also

### Installation and permission errors

- [MarketplaceKitError.appNotInstalled](appnotinstalled.md): An error that indicates that a requested operation requires that the app first exists on the device.
- [MarketplaceKitError.installationOfMarketplaceDenied](installationofmarketplacedenied.md): An error that indicates that the device disallows the installation of marketplaces.
- [MarketplaceKitError.mismatchedInstallType](mismatchedinstalltype.md): An error that indicates the provided install type (install, update, restore) doesn’t match the install that results.
- [MarketplaceKitError.missingInstallVerificationToken](missinginstallverificationtoken.md): An error that indicates the required install verification token is missing.

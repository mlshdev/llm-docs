> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/marketplacekit/applibrary/requestappinstallation(_:)

# requestAppInstallation(\_:)

**Framework:** MarketplaceKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+

Requests the installation of the given app distribution package for the given account.

## Declaration

```swift
nonisolated final func requestAppInstallation(_ request: AppLibrary.InstallationRequest) async throws
```

## See Also

### Installing apps as a marketplace

- [AppLibrary.App](app.md): Information about an app that someone installs from a marketplace, including its ID and installation status.
- [AppLibrary.InstallationRequest](installationrequest.md): A request to install an app distribution package for a given account.
- [installingApps](installingapps.md): The set of apps that are pending installation completion.
- [isLoading](isloading.md): A Boolean value that indicates whether the library is currently loading apps.

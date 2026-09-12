> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/marketplacekit/applibrary/isloading](https://developer.apple.com/documentation/marketplacekit/applibrary/isloading)

# isLoading

**Framework:** MarketplaceKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+

A Boolean value that indicates whether the library is currently loading apps.

## Declaration

```swift
@MainActor final var isLoading: Bool { get }
```

## See Also

### Managing app installation

- [AppLibrary.App](app.md): Information about an app that someone installs from a marketplace, including its ID and installation status.
- [AppLibrary.InstallationRequest](installationrequest.md): A request to install an app distribution package for a given account.
- [installingApps](installingapps.md): The set of apps that are pending installation completion.
- [requestAppInstallation(\_:)](requestappinstallation%28__%29.md): Requests the installation of the given app distribution package for the given account.
- [requestAppInstallationFromBrowser(for:referrer:)](requestappinstallationfrombrowser%28for_referrer_%29.md): Forwards an app installation request from the developer’s webpage.

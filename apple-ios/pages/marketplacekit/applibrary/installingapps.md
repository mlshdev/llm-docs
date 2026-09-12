> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/marketplacekit/applibrary/installingapps](https://developer.apple.com/documentation/marketplacekit/applibrary/installingapps)

# installingApps

**Framework:** MarketplaceKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+

The set of apps that are pending installation completion.

## Declaration

```swift
@MainActor final var installingApps: Set<AppLibrary.App> { get set }
```

## See Also

### Managing app installation

- [AppLibrary.App](app.md): Information about an app that someone installs from a marketplace, including its ID and installation status.
- [AppLibrary.InstallationRequest](installationrequest.md): A request to install an app distribution package for a given account.
- [isLoading](isloading.md): A Boolean value that indicates whether the library is currently loading apps.
- [requestAppInstallation(\_:)](requestappinstallation%28__%29.md): Requests the installation of the given app distribution package for the given account.
- [requestAppInstallationFromBrowser(for:referrer:)](requestappinstallationfrombrowser%28for_referrer_%29.md): Forwards an app installation request from the developer’s webpage.

> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/marketplacekit/applibrary/requestappinstallationfrombrowser(for:referrer:)](https://developer.apple.com/documentation/marketplacekit/applibrary/requestappinstallationfrombrowser(for:referrer:))

# requestAppInstallationFromBrowser(for:referrer:)

**Framework:** MarketplaceKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+

Forwards an app installation request from the developer’s webpage.

## Declaration

```swift
nonisolated final func requestAppInstallationFromBrowser(for url: URL, referrer: URL) async throws
```

## Parameters

- `url`: The unparsed `marketplace-kit` URL that triggers the installation request.
- `referrer`: The origin of the top frame that contains the alternative marketplace installation URL.

## Mentioned In

- [Enabling alternative distribution app installation in a browser](../enabling-alternative-distribution-app-installation-in-a-browser.md)

<a id="discussion"></a>

## Discussion

Web browsers that render with [BrowserEngineKit](https://developer.apple.com/documentation/browserenginekit) rather than [WebKit](https://developer.apple.com/documentation/webkit) call this method to forward the installation of an app from the developer’s webpage. Your browser listens for [MarketplaceKitURIScheme](../marketplacekiturischeme.md) invocations to field such requests.

For more information, see [Enabling alternative distribution app installation in a browser](../enabling-alternative-distribution-app-installation-in-a-browser.md).

## See Also

### Managing app installation

- [AppLibrary.App](app.md): Information about an app that someone installs from a marketplace, including its ID and installation status.
- [AppLibrary.InstallationRequest](installationrequest.md): A request to install an app distribution package for a given account.
- [installingApps](installingapps.md): The set of apps that are pending installation completion.
- [isLoading](isloading.md): A Boolean value that indicates whether the library is currently loading apps.
- [requestAppInstallation(\_:)](requestappinstallation%28__%29.md): Requests the installation of the given app distribution package for the given account.

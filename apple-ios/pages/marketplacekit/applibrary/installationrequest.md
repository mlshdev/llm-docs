> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/marketplacekit/applibrary/installationrequest](https://developer.apple.com/documentation/marketplacekit/applibrary/installationrequest)

# AppLibrary.InstallationRequest

**Framework:** MarketplaceKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+

A request to install an app distribution package for a given account.

## Declaration

```swift
struct InstallationRequest
```

## Topics

### Initializing an app installation request

- [init(alternativeDistributionPackageURL:account:installVerificationToken:)](installationrequest/init%28alternativedistributionpackageurl_account_installverificationtoken_%29.md)

### Inspecting app installation information

- [account](installationrequest/account.md)
- [alternativeDistributionPackageURL](installationrequest/alternativedistributionpackageurl.md)
- [appShareURL](installationrequest/appshareurl.md)
- [installVerificationToken](installationrequest/installverificationtoken.md)

## See Also

### Managing app installation

- [AppLibrary.App](app.md): Information about an app that someone installs from a marketplace, including its ID and installation status.
- [installingApps](installingapps.md): The set of apps that are pending installation completion.
- [isLoading](isloading.md): A Boolean value that indicates whether the library is currently loading apps.
- [requestAppInstallation(\_:)](requestappinstallation%28__%29.md): Requests the installation of the given app distribution package for the given account.
- [requestAppInstallationFromBrowser(for:referrer:)](requestappinstallationfrombrowser%28for_referrer_%29.md): Forwards an app installation request from the developer’s webpage.

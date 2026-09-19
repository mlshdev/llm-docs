> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/marketplacekit/applibrary/installationrequest

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

### Installing apps as a marketplace

- [AppLibrary.App](app.md): Information about an app that someone installs from a marketplace, including its ID and installation status.
- [installingApps](installingapps.md): The set of apps that are pending installation completion.
- [isLoading](isloading.md): A Boolean value that indicates whether the library is currently loading apps.
- [requestAppInstallation(\_:)](requestappinstallation%28__%29.md): Requests the installation of the given app distribution package for the given account.

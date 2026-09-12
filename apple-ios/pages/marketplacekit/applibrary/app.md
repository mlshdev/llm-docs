> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/marketplacekit/applibrary/app](https://developer.apple.com/documentation/marketplacekit/applibrary/app)

# AppLibrary.App

**Framework:** MarketplaceKit  
**Kind:** Class  
**Availability:** iOS 17.4+ · iPadOS 17.4+

Information about an app that someone installs from a marketplace, including its ID and installation status.

## Declaration

```swift
@MainActor final class App
```

## Mentioned In

- [Providing age-rating appropriate content](../providing-age-rating-appropriate-content.md)

## Topics

### Inspecting an app’s version and account

- [installedMetadata](app/installedmetadata.md): The app version and the account that’s installing the app
- [AppLibrary.App.Metadata](app/metadata.md): Information about an app’s version and account.

### Inspecting app installation and update status

- [installation](app/installation-swift.property.md): The progress of the app’s installation.
- [AppLibrary.App.Installation](app/installation-swift.struct.md): A structure that provides progress information for a specific app installation.
- [isInstalled](app/isinstalled.md): A Boolean value that indicates whether the app’s installation is complete.
- [isInstalling](app/isinstalling.md): A Boolean value that indicates whether the app’s installation is in progress.
- [isUpdating](app/isupdating.md): A Boolean value that indicates whether an app’s update is in progress.
- [installationError](app/installationerror.md): An error that occurs during the installation of an app that resides on a marketplace.

### Requesting installation approval

- [presentAgeExceptionApproveInPersonSheet()](app/presentageexceptionapproveinpersonsheet%28%29.md): Presents a sheet that enables a parent or guardian to approve age-exception requests.

### Requesting app deletion

- [requestDeletion(in:)](app/requestdeletion%28in_%29.md): Prompts the person to delete the app.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Observable](https://developer.apple.com/documentation/observation/observable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing app installation

- [AppLibrary.InstallationRequest](installationrequest.md): A request to install an app distribution package for a given account.
- [installingApps](installingapps.md): The set of apps that are pending installation completion.
- [isLoading](isloading.md): A Boolean value that indicates whether the library is currently loading apps.
- [requestAppInstallation(\_:)](requestappinstallation%28__%29.md): Requests the installation of the given app distribution package for the given account.
- [requestAppInstallationFromBrowser(for:referrer:)](requestappinstallationfrombrowser%28for_referrer_%29.md): Forwards an app installation request from the developer’s webpage.

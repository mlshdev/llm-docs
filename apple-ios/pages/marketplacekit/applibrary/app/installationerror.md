> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/marketplacekit/applibrary/app/installationerror](https://developer.apple.com/documentation/marketplacekit/applibrary/app/installationerror)

# installationError

**Framework:** MarketplaceKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+

An error that occurs during the installation of an app that resides on a marketplace.

## Declaration

```swift
@MainActor final var installationError: MarketplaceKitError? { get }
```

## See Also

### Inspecting app installation and update status

- [installation](installation-swift.property.md): The progress of the app’s installation.
- [AppLibrary.App.Installation](installation-swift.struct.md): A structure that provides progress information for a specific app installation.
- [isInstalled](isinstalled.md): A Boolean value that indicates whether the app’s installation is complete.
- [isInstalling](isinstalling.md): A Boolean value that indicates whether the app’s installation is in progress.
- [isUpdating](isupdating.md): A Boolean value that indicates whether an app’s update is in progress.

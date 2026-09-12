> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/marketplacekit/applibrary/app/isinstalled](https://developer.apple.com/documentation/marketplacekit/applibrary/app/isinstalled)

# isInstalled

**Framework:** MarketplaceKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+

A Boolean value that indicates whether the app’s installation is complete.

## Declaration

```swift
@MainActor final var isInstalled: Bool { get }
```

## See Also

### Inspecting app installation and update status

- [installation](installation-swift.property.md): The progress of the app’s installation.
- [AppLibrary.App.Installation](installation-swift.struct.md): A structure that provides progress information for a specific app installation.
- [isInstalling](isinstalling.md): A Boolean value that indicates whether the app’s installation is in progress.
- [isUpdating](isupdating.md): A Boolean value that indicates whether an app’s update is in progress.
- [installationError](installationerror.md): An error that occurs during the installation of an app that resides on a marketplace.

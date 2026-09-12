> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/marketplacekit/applibrary/app/installation-swift.struct](https://developer.apple.com/documentation/marketplacekit/applibrary/app/installation-swift.struct)

# AppLibrary.App.Installation

**Framework:** MarketplaceKit  
**Kind:** Structure  
**Availability:** iOS 17.4+ · iPadOS 17.4+

A structure that provides progress information for a specific app installation.

## Declaration

```swift
struct Installation
```

<a id="overview"></a>

## Overview

The [installation](installation-swift.property.md) property of the[AppLibrary.App](../app.md) class is of this type.

## Topics

### Inspecting installation progress

- [progress](installation-swift.struct/progress.md): The progress representing the download & installation of this app. It may be used to pause, resume, or cancel installation depending on the state of this object.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inspecting app installation and update status

- [installation](installation-swift.property.md): The progress of the app’s installation.
- [isInstalled](isinstalled.md): A Boolean value that indicates whether the app’s installation is complete.
- [isInstalling](isinstalling.md): A Boolean value that indicates whether the app’s installation is in progress.
- [isUpdating](isupdating.md): A Boolean value that indicates whether an app’s update is in progress.
- [installationError](installationerror.md): An error that occurs during the installation of an app that resides on a marketplace.

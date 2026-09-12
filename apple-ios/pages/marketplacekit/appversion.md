> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/marketplacekit/appversion](https://developer.apple.com/documentation/marketplacekit/appversion)

# AppVersion

**Framework:** MarketplaceKit  
**Kind:** Structure  
**Availability:** iOS 17.4+ · iPadOS 17.4+

Information that describes an app, including its identifier and version number.

## Declaration

```swift
struct AppVersion
```

<a id="overview"></a>

## Overview

Your app’s [MarketplaceAppExtension](marketplaceappextension.md) provides the operating system an instance of this structure when asked via your implementation of the [availableAppVersions(forAppleItemIDs:)](marketplaceappextension/availableappversions%28forappleitemids_%29.md) callback.

## Topics

### Initializers

- [init(appleItemID:appleVersionID:)](appversion/init%28appleitemid_appleversionid_%29.md)

### Instance Properties

- [appleItemID](appversion/appleitemid.md)
- [appleVersionID](appversion/appleversionid.md)

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### App management

- [AppLibrary](applibrary.md): A class that represents a catalog of all installed apps, and offers various services for the apps that your marketplace distributes.
- [AutomaticUpdate](automaticupdate.md): Information that describes an app that’s available for update, including a download URL.
- [InstallRequirements](installrequirements.md): An app’s installation criteria for a device.
- [AppleItemID](appleitemid.md): An identifier that represents an app.
- [AppleVersionID](appleversionid.md): An identifier that represents a single app version.
- [MarketplaceKitURIScheme](marketplacekiturischeme.md): A URI scheme that defines an alternative distribution app installation link.
- [RequestAppDeletionAction](requestappdeletionaction.md): A SwiftUI environment action that requests the deletion of an app.

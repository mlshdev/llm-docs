> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/marketplacekit/requestappdeletionaction](https://developer.apple.com/documentation/marketplacekit/requestappdeletionaction)

# RequestAppDeletionAction

**Framework:** MarketplaceKit  
**Kind:** Structure  
**Availability:** iOS 26.4+ · iPadOS 26.4+

A SwiftUI environment action that requests the deletion of an app.

## Declaration

```swift
struct RequestAppDeletionAction
```

<a id="overview"></a>

## Overview

Use this action in SwiftUI views to request app deletion. The system presents a confirmation to ensure that the person approves the app’s deletion.

## Topics

### Making a request

- [callAsFunction(\_:)](requestappdeletionaction/callasfunction%28__%29.md): Requests deletion of the specified app with someone’s confirmation.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### App management

- [AppLibrary](applibrary.md): A class that represents a catalog of all installed apps, and offers various services for the apps that your marketplace distributes.
- [AppVersion](appversion.md): Information that describes an app, including its identifier and version number.
- [AutomaticUpdate](automaticupdate.md): Information that describes an app that’s available for update, including a download URL.
- [InstallRequirements](installrequirements.md): An app’s installation criteria for a device.
- [AppleItemID](appleitemid.md): An identifier that represents an app.
- [AppleVersionID](appleversionid.md): An identifier that represents a single app version.
- [MarketplaceKitURIScheme](marketplacekiturischeme.md): A URI scheme that defines an alternative distribution app installation link.

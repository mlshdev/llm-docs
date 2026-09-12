> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/marketplacekit/automaticupdate](https://developer.apple.com/documentation/marketplacekit/automaticupdate)

# AutomaticUpdate

**Framework:** MarketplaceKit  
**Kind:** Structure  
**Availability:** iOS 17.4+ · iPadOS 17.4+

Information that describes an app that’s available for update, including a download URL.

## Declaration

```swift
struct AutomaticUpdate
```

<a id="overview"></a>

## Overview

Your app’s [MarketplaceAppExtension](marketplaceappextension.md) provides the operating system an instance of this structure when asked via your implementation of the [automaticUpdates(for:)](marketplaceappextension/automaticupdates%28for_%29.md) callback.

## Topics

### Initializers

- [init(appleItemID:alternativeDistributionPackage:account:installVerificationToken:)](automaticupdate/init%28appleitemid_alternativedistributionpackage_account_installverificationtoken_%29.md)

### Instance Properties

- [account](automaticupdate/account.md)
- [alternativeDistributionPackage](automaticupdate/alternativedistributionpackage.md)
- [appShareURL](automaticupdate/appshareurl.md)
- [appleItemID](automaticupdate/appleitemid.md)
- [installVerificationToken](automaticupdate/installverificationtoken.md)

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### App management

- [AppLibrary](applibrary.md): A class that represents a catalog of all installed apps, and offers various services for the apps that your marketplace distributes.
- [AppVersion](appversion.md): Information that describes an app, including its identifier and version number.
- [InstallRequirements](installrequirements.md): An app’s installation criteria for a device.
- [AppleItemID](appleitemid.md): An identifier that represents an app.
- [AppleVersionID](appleversionid.md): An identifier that represents a single app version.
- [MarketplaceKitURIScheme](marketplacekiturischeme.md): A URI scheme that defines an alternative distribution app installation link.
- [RequestAppDeletionAction](requestappdeletionaction.md): A SwiftUI environment action that requests the deletion of an app.

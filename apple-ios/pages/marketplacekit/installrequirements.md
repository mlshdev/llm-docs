> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/marketplacekit/installrequirements](https://developer.apple.com/documentation/marketplacekit/installrequirements)

# InstallRequirements

**Framework:** MarketplaceKit  
**Kind:** Structure  
**Availability:** iOS 17.4+ · iPadOS 17.4+

An app’s installation criteria for a device.

## Declaration

```swift
struct InstallRequirements
```

## Topics

### Initializers

- [init()](installrequirements/init%28%29.md)

### Instance Properties

- [ageRatingRank](installrequirements/ageratingrank.md)
- [expectedInstallSize](installrequirements/expectedinstallsize.md)
- [minimumSystemVersion](installrequirements/minimumsystemversion.md): A text representation of the system version required to install an app.
- [requiredDeviceCapabilities](installrequirements/requireddevicecapabilities.md): The capabilities that a device requires to install an app.

### Instance Methods

- [satisfiedByDevice()](installrequirements/satisfiedbydevice%28%29.md)

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### App management

- [AppLibrary](applibrary.md): A class that represents a catalog of all installed apps, and offers various services for the apps that your marketplace distributes.
- [AppVersion](appversion.md): Information that describes an app, including its identifier and version number.
- [AutomaticUpdate](automaticupdate.md): Information that describes an app that’s available for update, including a download URL.
- [AppleItemID](appleitemid.md): An identifier that represents an app.
- [AppleVersionID](appleversionid.md): An identifier that represents a single app version.
- [MarketplaceKitURIScheme](marketplacekiturischeme.md): A URI scheme that defines an alternative distribution app installation link.
- [RequestAppDeletionAction](requestappdeletionaction.md): A SwiftUI environment action that requests the deletion of an app.

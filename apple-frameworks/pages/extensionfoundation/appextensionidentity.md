> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/extensionfoundation/appextensionidentity](https://developer.apple.com/documentation/extensionfoundation/appextensionidentity)

# AppExtensionIdentity

**Framework:** ExtensionFoundation  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 13.0+ · tvOS 26.0+ · visionOS 1.1+ · watchOS 26.0+

A type that uniquely identifies an app extension on the system.

## Declaration

```swift
struct AppExtensionIdentity
```

## Mentioned In

- [Discovering app extensions from your app](discovering-app-extensions-from-your-app.md)

<a id="overview"></a>

## Overview

Use this type to identify an app extension on the system and connect to it. You don’t create this type directly. Instead, you use the [AppExtensionPoint.Monitor](appextensionpoint/monitor.md) type to retrieve instances of this type for the available app extensions.

## Topics

### Identifying the process

- [bundleIdentifier](appextensionidentity/bundleidentifier.md): The bundle identifier of the app extension.
- [extensionPointIdentifier](appextensionidentity/extensionpointidentifier.md): The extension point of your host app that the app extension supports.
- [localizedName](appextensionidentity/localizedname.md): The localized, human-readable name of the app extension.

### Comparing app extensions

- [hash(into:)](appextensionidentity/hash%28into_%29.md): Hashes the essential components of the extension by feeding them into the given hash function.
- [==(\_:\_:)](appextensionidentity/==%28____%29.md): Returns a Boolean value that indicates whether two identities are equal.

### Deprecated

- [AppExtensionIdentity.Availability](appextensionidentity/availability.md): Deprecated. An object that contains information about available extensions.
- [availabilityUpdates](appextensionidentity/availabilityupdates.md): Deprecated.
- [matching(appExtensionPointIDs:)](appextensionidentity/matching%28appextensionpointids_%29.md): Deprecated. The asynchronous sequence of extension identities which target the specified extension point identifiers.
- [AppExtensionIdentity.Identities](appextensionidentity/identities.md): Deprecated. An asynchronous sequence that returns the enabled extensions that match provided constraints.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Host-app configuration

- [Discovering app extensions from your app](discovering-app-extensions-from-your-app.md): Find the app extensions that match your host app’s extension points and are available to use.
- [AppExtensionProcess](appextensionprocess.md): A type the host app creates to launch and manage an app extension.

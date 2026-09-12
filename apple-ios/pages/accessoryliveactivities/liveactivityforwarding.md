> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessoryliveactivities/liveactivityforwarding](https://developer.apple.com/documentation/accessoryliveactivities/liveactivityforwarding)

# LiveActivityForwarding

**Framework:** Accessory Live Activities  
**Kind:** Class  
**Availability:** iOS 26.5+ · iPadOS 26.5+

A class for requesting permission to forward Live Activities to your accessory and handle them in your accessory’s data provider extension.

## Declaration

```swift
final class LiveActivityForwarding
```

## Mentioned In

- [Receiving Live Activity updates and alerts on an accessory](receiving-live-activities-on-an-accessory.md)

<a id="Overview"></a>

## Overview

Use this class from your accessory’s data provider extension.

## Topics

### Requesting Live Activity forwarding

- [init(\_:)](liveactivityforwarding/init%28__%29.md): Creates an object you use to manage Live Activity forwarding for your accessory.
- [authorization(forAccessory:)](liveactivityforwarding/authorization%28foraccessory_%29.md): Checks whether someone permits the system to forward Live Activities to the given accessory.
- [presentAuthorizationSheet(forAccessory:)](liveactivityforwarding/presentauthorizationsheet%28foraccessory_%29.md): Presents the system UI that allows people to manage their permission to forward Live Activities to an accessory.
- [featureID](liveactivityforwarding/featureid.md): A constant you use to configure your data provider extension’s capability to forward Live Activities to your accessory.

### Handling Live Activities

- [LiveActivityForwarding.AccessoryLiveActivitiesHandler](liveactivityforwarding/accessoryliveactivitieshandler.md): A protocol that defines methods for handling Live Activity life cycle events in your accessory’s data provider extension.
- [LiveActivityForwarding.Session](liveactivityforwarding/session.md): An object that represents the active connection between your data provider extension and the system.

## Relationships

### Conforms To

- [AccessoryFeature](../accessorytransportextension/accessoryfeature.md)
- [AppExtensionPoint.Capability](https://developer.apple.com/documentation/extensionfoundation/appextensionpoint/capability)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Authorization

- [AccessoryAuthorizationResult](accessoryauthorizationresult.md): Responses to the Live Activity forwarding permission prompt.

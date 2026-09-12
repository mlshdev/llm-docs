> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/mediadevice/mediaoutputsession](https://developer.apple.com/documentation/mediadevice/mediaoutputsession)

# MediaOutputSession

**Framework:** Media Device  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Represents a media output session for playing content on a remote device.

## Declaration

```swift
final class MediaOutputSession
```

## Mentioned In

- [Creating a media device extension](creating-a-media-device-extension.md)

<a id="overview"></a>

## Overview

Instances of this class are provided by the system when a [MediaDeviceExtension](mediadeviceextension.md) receives activation or playback requests. Use the session to associate device activations, playback events, and data communication with a specific media output context.

## Topics

### Instance Properties

- [id](mediaoutputsession/id.md): A unique identifier for this session.

## Relationships

### Conforms To

- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Session and system communication

- [MediaDeviceRoutingManager](mediadeviceroutingmanager.md): An object used by a [MediaDeviceExtension](mediadeviceextension.md) to report device discovery, state changes, and playback events back to the system.
- [RealtimeSampleHandling](realtimesamplehandling.md): A protocol that extends a media device extension to support realtime sample delivery.
- [MediaDeviceError](mediadeviceerror.md): An error returned by MediaDeviceExtension operations.

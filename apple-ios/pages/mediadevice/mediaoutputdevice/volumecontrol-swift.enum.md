> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/mediadevice/mediaoutputdevice/volumecontrol-swift.enum](https://developer.apple.com/documentation/mediadevice/mediaoutputdevice/volumecontrol-swift.enum)

# MediaOutputDevice.VolumeControl

**Framework:** Media Device  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Defines the type of volume control supported by an output device or group.

## Declaration

```swift
enum VolumeControl
```

## Mentioned In

- [Creating a media device extension](../creating-a-media-device-extension.md)

<a id="overview"></a>

## Overview

This enumeration specifies how volume can be controlled on a device, affecting which volume control methods are available and how the system should present volume controls to the user.

## Topics

### Enumeration Cases

- [MediaOutputDevice.VolumeControl.absolute](volumecontrol-swift.enum/absolute.md): Full volume control is supported, [setVolume(\_:for:)](../mediadeviceextension/setvolume%28__for_%29.md) may be used to set the volume.
- [MediaOutputDevice.VolumeControl.none](volumecontrol-swift.enum/none.md): Volume control is not available.
- [MediaOutputDevice.VolumeControl.relative](volumecontrol-swift.enum/relative.md): Relative volume control is supported, [changeVolume(by:for:)](../mediadeviceextension/changevolume%28by_for_%29.md) must be used to change the volume.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Device discovery and management

- [MediaOutputDevice](../mediaoutputdevice.md): Represents a discoverable media output device such as a TV, speaker, or streaming stick.
- [MediaOutputDevice.Capabilities](capabilities-swift.struct.md): Defines the media capabilities supported by a [MediaOutputDevice](../mediaoutputdevice.md).
- [MediaOutputDevice.DeviceType](devicetype-swift.enum.md): A device type used for display in user interfaces.
- [MediaOutputDevice.AuthorizationMethod](authorizationmethod.md): Specifies what kind of authorization UI to present when connecting to a device.

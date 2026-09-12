> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/mediadevice/mediaoutputdevice/authorizationmethod](https://developer.apple.com/documentation/mediadevice/mediaoutputdevice/authorizationmethod)

# MediaOutputDevice.AuthorizationMethod

**Framework:** Media Device  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Specifies what kind of authorization UI to present when connecting to a device.

## Declaration

```swift
struct AuthorizationMethod
```

## Mentioned In

- [Creating a media device extension](../creating-a-media-device-extension.md)

<a id="overview"></a>

## Overview

Use the provided factory methods to create an authorization method appropriate for your device’s pairing requirements.

## Topics

### Structures

- [MediaOutputDevice.AuthorizationMethod.CodeLength](authorizationmethod/codelength.md): Represents the valid lengths for an authorization code.

### Type Properties

- [none](authorizationmethod/none.md): No authorization is required.
- [password](authorizationmethod/password.md): Presents a freeform text password input for device authorization.

### Type Methods

- [numericCode(length:)](authorizationmethod/numericcode%28length_%29.md): Creates a numeric PIN entry authorization method.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Device discovery and management

- [MediaOutputDevice](../mediaoutputdevice.md): Represents a discoverable media output device such as a TV, speaker, or streaming stick.
- [MediaOutputDevice.Capabilities](capabilities-swift.struct.md): Defines the media capabilities supported by a [MediaOutputDevice](../mediaoutputdevice.md).
- [MediaOutputDevice.DeviceType](devicetype-swift.enum.md): A device type used for display in user interfaces.
- [MediaOutputDevice.VolumeControl](volumecontrol-swift.enum.md): Defines the type of volume control supported by an output device or group.

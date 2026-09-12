> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmcameraprofile](https://developer.apple.com/documentation/homekit/hmcameraprofile)

# HMCameraProfile (Swift)

**Framework:** HomeKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A camera profile that interacts with an accessory’s camera.

## Declaration

```swift
class HMCameraProfile
```

<a id="overview"></a>

## Overview

Each profile control is optional, because an individual camera vendor may not support all of the features defined by the HomeKit camera specifications.

## Topics

### Controlling camera settings

- [settingsControl](hmcameraprofile/settingscontrol.md): Controls the settings on the camera.
- [HMCameraSettingsControl](hmcamerasettingscontrol.md): An object that represents the ability to control a camera’s settings.
- [HMCameraControl](hmcameracontrol.md): An abstract class that represents a camera control.

### Playing audio

- [microphoneControl](hmcameraprofile/microphonecontrol.md): Controls the microphone settings on the camera.
- [speakerControl](hmcameraprofile/speakercontrol.md): Controls the speaker settings on the camera.
- [HMCameraAudioControl](hmcameraaudiocontrol.md): An object that controls a camera’s audio settings.

### Streaming

- [streamControl](hmcameraprofile/streamcontrol.md): Controls the camera stream.
- [HMCameraStreamControl](hmcamerastreamcontrol.md): An object that can start and stop the camera stream and contains the view into which the stream is rendered.

### Capturing snapshots

- [snapshotControl](hmcameraprofile/snapshotcontrol.md): Controls the camera’s snapshot function.
- [HMCameraSnapshotControl](hmcamerasnapshotcontrol.md): An object that can take an image snapshot from a camera.

## Relationships

### Inherits From

- [HMAccessoryProfile](hmaccessoryprofile.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing accessory profiles

- [profiles](hmaccessory/profiles.md): An array of profiles implemented by the accessory.
- [HMAccessoryProfile](hmaccessoryprofile.md): A profile that certain accessories implement.
- [HMNetworkConfigurationProfile](hmnetworkconfigurationprofile.md): A profile that provides information about network protection for an accessory.

# HMCameraProfile (Objective-C)

**Framework:** HomeKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

A camera profile that interacts with an accessory’s camera.

## Declaration

```objectivec
@interface HMCameraProfile : HMAccessoryProfile
```

<a id="overview"></a>

## Overview

Each profile control is optional, because an individual camera vendor may not support all of the features defined by the HomeKit camera specifications.

## Topics

### Controlling camera settings

- [settingsControl](hmcameraprofile/settingscontrol.md): Controls the settings on the camera.
- [HMCameraSettingsControl](hmcamerasettingscontrol.md): An object that represents the ability to control a camera’s settings.
- [HMCameraControl](hmcameracontrol.md): An abstract class that represents a camera control.

### Playing audio

- [microphoneControl](hmcameraprofile/microphonecontrol.md): Controls the microphone settings on the camera.
- [speakerControl](hmcameraprofile/speakercontrol.md): Controls the speaker settings on the camera.
- [HMCameraAudioControl](hmcameraaudiocontrol.md): An object that controls a camera’s audio settings.

### Streaming

- [streamControl](hmcameraprofile/streamcontrol.md): Controls the camera stream.
- [HMCameraStreamControl](hmcamerastreamcontrol.md): An object that can start and stop the camera stream and contains the view into which the stream is rendered.

### Capturing snapshots

- [snapshotControl](hmcameraprofile/snapshotcontrol.md): Controls the camera’s snapshot function.
- [HMCameraSnapshotControl](hmcamerasnapshotcontrol.md): An object that can take an image snapshot from a camera.

## Relationships

### Inherits From

- [HMAccessoryProfile](hmaccessoryprofile.md)

## See Also

### Managing accessory profiles

- [profiles](hmaccessory/profiles.md): An array of profiles implemented by the accessory.
- [HMAccessoryProfile](hmaccessoryprofile.md): A profile that certain accessories implement.
- [HMNetworkConfigurationProfile](hmnetworkconfigurationprofile.md): A profile that provides information about network protection for an accessory.

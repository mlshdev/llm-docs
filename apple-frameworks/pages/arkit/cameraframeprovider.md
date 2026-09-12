> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/cameraframeprovider](https://developer.apple.com/documentation/arkit/cameraframeprovider)

# CameraFrameProvider

**Framework:** ARKit  
**Kind:** Class  
**Availability:** visionOS 2.0+

An object that provides camera streams.

## Declaration

```swift
final class CameraFrameProvider
```

<a id="overview"></a>

## Overview

You use `CameraFrameProvider` to receive camera images for selected video formats.

## Topics

### Creating a camera frame provider

- [init()](cameraframeprovider/init%28%29.md): Creates a camera frame provider.

### Getting information about the camera frame provider

- [description](cameraframeprovider/description.md): A textual representation of this camera frame provider.
- [state](cameraframeprovider/state.md): The state of a camera frame provider.

### Getting camera frame updates

- [cameraFrameUpdates(for:)](cameraframeprovider/cameraframeupdates%28for_%29.md): Gets a sequence of camera frame updates for a given video format.
- [CameraFrameProvider.CameraFrameUpdates](cameraframeprovider/cameraframeupdates.md): A sequence of camera frames.

### Enumerations

- [CameraFrameProvider.CameraPosition](cameraframeprovider/cameraposition.md): Values that describe possible camera positions.
- [CameraFrameProvider.CameraType](cameraframeprovider/cameratype.md): Values that describe possible camera types.
- [CameraFrameProvider.CameraRectification](cameraframeprovider/camerarectification.md): Enumeration of possible camera rectification types.

### Type Properties

- [isSupported](cameraframeprovider/issupported.md): A Boolean value that indicates whether this device supports the camera frame provider.
- [requiredAuthorizations](cameraframeprovider/requiredauthorizations.md): The authorization types you need to use the camera frame provider.

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [DataProvider](dataprovider.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Camera sampling

- [CameraFrame](cameraframe.md): The representation of a camera frame.
- [CameraVideoFormat](cameravideoformat.md): A structure that represents a camera video format.

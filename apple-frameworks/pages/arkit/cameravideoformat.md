> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/cameravideoformat](https://developer.apple.com/documentation/arkit/cameravideoformat)

# CameraVideoFormat

**Framework:** ARKit  
**Kind:** Structure  
**Availability:** visionOS 2.0+

A structure that represents a camera video format.

## Declaration

```swift
struct CameraVideoFormat
```

## Topics

### Getting camera video format information

- [cameraPositions](cameravideoformat/camerapositions.md): The camera positions for this video format.
- [cameraType](cameravideoformat/cameratype.md): The camera type for this video format.
- [frameSize](cameravideoformat/framesize.md): The frame size for this video format.
- [pixelFormat](cameravideoformat/pixelformat.md): The pixel format for this video format.
- [maxFrameDuration](cameravideoformat/maxframeduration.md): The maximum frame duration for this video format, in seconds.
- [minFrameDuration](cameravideoformat/minframeduration.md): The minimum frame duration for this video format, in seconds.
- [supportedVideoFormats(for:cameraPositions:)](cameravideoformat/supportedvideoformats%28for_camerapositions_%29.md): Returns the video formats the provided camera type and camera position supports.
- [description](cameravideoformat/description.md): A textual representation of this camera video format.

### Operators

- [==(\_:\_:)](cameravideoformat/==%28____%29.md): Returns a Boolean value indicating whether two camera video formats are equal.

### Instance Properties

- [cameraRectification](cameravideoformat/camerarectification.md): The camera rectification for this video format.

### Instance Methods

- [hash(into:)](cameravideoformat/hash%28into_%29.md): Hashes the essential components of this camera video format.

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Camera sampling

- [CameraFrameProvider](cameraframeprovider.md): An object that provides camera streams.
- [CameraFrame](cameraframe.md): The representation of a camera frame.

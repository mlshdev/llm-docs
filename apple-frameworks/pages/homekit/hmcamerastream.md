> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmcamerastream](https://developer.apple.com/documentation/homekit/hmcamerastream)

# HMCameraStream (Swift)

**Framework:** HomeKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

An object that represents a camera’s audiovisual stream.

## Declaration

```swift
class HMCameraStream
```

## Topics

### Configuring the audio stream

- [audioStreamSetting](hmcamerastream/audiostreamsetting.md): The stream’s current audio setting.
- [updateAudioStreamSetting(\_:completionHandler:)](hmcamerastream/updateaudiostreamsetting%28__completionhandler_%29.md): Updates an audio stream’s settings.
- [setAudioStreamSetting(\_:)](hmcamerastream/setaudiostreamsetting%28__%29.md): Deprecated.
- [HMCameraAudioStreamSetting](hmcameraaudiostreamsetting.md): The options associated with a camera’s audio stream.

### Initializers

- [init()](hmcamerastream/init%28%29.md): Deprecated.

## Relationships

### Inherits From

- [HMCameraSource](hmcamerasource.md)

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

### Controlling the stream

- [startStream()](hmcamerastreamcontrol/startstream%28%29.md): Starts the camera stream.
- [stopStream()](hmcamerastreamcontrol/stopstream%28%29.md): Stops the camera stream.
- [cameraStream](hmcamerastreamcontrol/camerastream.md): The current camera stream.
- [streamState](hmcamerastreamcontrol/streamstate.md): The current state of the camera stream.
- [HMCameraStreamState](hmcamerastreamstate.md): The states associated with a camera stream.

# HMCameraStream (Objective-C)

**Framework:** HomeKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

An object that represents a camera’s audiovisual stream.

## Declaration

```objectivec
@interface HMCameraStream : HMCameraSource
```

## Topics

### Configuring the audio stream

- [audioStreamSetting](hmcamerastream/audiostreamsetting.md): The stream’s current audio setting.
- [updateAudioStreamSetting:completionHandler:](hmcamerastream/updateaudiostreamsetting%28__completionhandler_%29.md): Updates an audio stream’s settings.
- [setAudioStreamSetting:](hmcamerastream/setaudiostreamsetting%28__%29.md): Deprecated.
- [HMCameraAudioStreamSetting](hmcameraaudiostreamsetting.md): The options associated with a camera’s audio stream.

### Instance Methods

- [init](hmcamerastream/init%28%29.md): Deprecated.

## Relationships

### Inherits From

- [HMCameraSource](hmcamerasource.md)

## See Also

### Controlling the stream

- [startStream](hmcamerastreamcontrol/startstream%28%29.md): Starts the camera stream.
- [stopStream](hmcamerastreamcontrol/stopstream%28%29.md): Stops the camera stream.
- [cameraStream](hmcamerastreamcontrol/camerastream.md): The current camera stream.
- [streamState](hmcamerastreamcontrol/streamstate.md): The current state of the camera stream.
- [HMCameraStreamState](hmcamerastreamstate.md): The states associated with a camera stream.

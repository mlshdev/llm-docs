> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/transportcontrolsplaybackmode-swift.enum](https://developer.apple.com/documentation/avfoundation/avcapturedevice/transportcontrolsplaybackmode-swift.enum)

# AVCaptureDevice.TransportControlsPlaybackMode (Swift)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** macOS 10.7+

Constants that indicate the transport control’s current mode of playback, if it has one.

## Declaration

```swift
enum TransportControlsPlaybackMode
```

## Topics

### Playback modes

- [AVCaptureDevice.TransportControlsPlaybackMode.notPlaying](transportcontrolsplaybackmode-swift.enum/notplaying.md): A value that indicates that the tape transport isn’t threaded through the play head.
- [AVCaptureDevice.TransportControlsPlaybackMode.playing](transportcontrolsplaybackmode-swift.enum/playing.md): A value that indicates that the tape transport is threaded through the play head.

### Initializers

- [init(rawValue:)](transportcontrolsplaybackmode-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Controlling transport behavior

- [transportControlsSupported](transportcontrolssupported.md): A Boolean value that indicates whether the device supports transport control commands.
- [transportControlsPlaybackMode](transportcontrolsplaybackmode-swift.property.md): The current playback mode.
- [setTransportControlsPlaybackMode(\_:speed:)](settransportcontrolsplaybackmode%28__speed_%29.md): Sets the transport control’s playback mode and speed.
- [transportControlsSpeed](transportcontrolsspeed-swift.property.md): The current playback speed.
- [AVCaptureDevice.TransportControlsSpeed](transportcontrolsspeed-swift.typealias.md): A constant that specifies speed of transport controls.

# AVCaptureDeviceTransportControlsPlaybackMode (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** macOS 10.7+

Constants that indicate the transport control’s current mode of playback, if it has one.

## Declaration

```objectivec
enum AVCaptureDeviceTransportControlsPlaybackMode : NSInteger;
```

## Topics

### Playback modes

- [AVCaptureDeviceTransportControlsNotPlayingMode](transportcontrolsplaybackmode-swift.enum/notplaying.md): A value that indicates that the tape transport isn’t threaded through the play head.
- [AVCaptureDeviceTransportControlsPlayingMode](transportcontrolsplaybackmode-swift.enum/playing.md): A value that indicates that the tape transport is threaded through the play head.

## See Also

### Controlling transport behavior

- [transportControlsSupported](transportcontrolssupported.md): A Boolean value that indicates whether the device supports transport control commands.
- [transportControlsPlaybackMode](transportcontrolsplaybackmode-swift.property.md): The current playback mode.
- [setTransportControlsPlaybackMode:speed:](settransportcontrolsplaybackmode%28__speed_%29.md): Sets the transport control’s playback mode and speed.
- [transportControlsSpeed](transportcontrolsspeed-swift.property.md): The current playback speed.
- [AVCaptureDeviceTransportControlsSpeed](transportcontrolsspeed-swift.typealias.md): A constant that specifies speed of transport controls.

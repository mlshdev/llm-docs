> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/transportcontrolssupported](https://developer.apple.com/documentation/avfoundation/avcapturedevice/transportcontrolssupported)

# transportControlsSupported (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

A Boolean value that indicates whether the device supports transport control commands.

## Declaration

```swift
var transportControlsSupported: Bool { get }
```

<a id="Discussion"></a>

## Discussion

For devices with transport controls, such as AVC tape-based camcorders or pro capture devices with RS422 deck control, the value of this property is [true](https://developer.apple.com/documentation/swift/true). If transport controls aren’t supported, none of the associated transport control methods and properties are available to the device.

This property is key-value observable.

## See Also

### Controlling transport behavior

- [transportControlsPlaybackMode](transportcontrolsplaybackmode-swift.property.md): The current playback mode.
- [setTransportControlsPlaybackMode(\_:speed:)](settransportcontrolsplaybackmode%28__speed_%29.md): Sets the transport control’s playback mode and speed.
- [AVCaptureDevice.TransportControlsPlaybackMode](transportcontrolsplaybackmode-swift.enum.md): Constants that indicate the transport control’s current mode of playback, if it has one.
- [transportControlsSpeed](transportcontrolsspeed-swift.property.md): The current playback speed.
- [AVCaptureDevice.TransportControlsSpeed](transportcontrolsspeed-swift.typealias.md): A constant that specifies speed of transport controls.

# transportControlsSupported (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

A Boolean value that indicates whether the device supports transport control commands.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL transportControlsSupported;
```

<a id="Discussion"></a>

## Discussion

For devices with transport controls, such as AVC tape-based camcorders or pro capture devices with RS422 deck control, the value of this property is [true](https://developer.apple.com/documentation/swift/true). If transport controls aren’t supported, none of the associated transport control methods and properties are available to the device.

This property is key-value observable.

## See Also

### Controlling transport behavior

- [transportControlsPlaybackMode](transportcontrolsplaybackmode-swift.property.md): The current playback mode.
- [setTransportControlsPlaybackMode:speed:](settransportcontrolsplaybackmode%28__speed_%29.md): Sets the transport control’s playback mode and speed.
- [AVCaptureDeviceTransportControlsPlaybackMode](transportcontrolsplaybackmode-swift.enum.md): Constants that indicate the transport control’s current mode of playback, if it has one.
- [transportControlsSpeed](transportcontrolsspeed-swift.property.md): The current playback speed.
- [AVCaptureDeviceTransportControlsSpeed](transportcontrolsspeed-swift.typealias.md): A constant that specifies speed of transport controls.

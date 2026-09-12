> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/transportcontrolsplaybackmode-swift.property](https://developer.apple.com/documentation/avfoundation/avcapturedevice/transportcontrolsplaybackmode-swift.property)

# transportControlsPlaybackMode (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The current playback mode.

## Declaration

```swift
var transportControlsPlaybackMode: AVCaptureDevice.TransportControlsPlaybackMode { get }
```

<a id="Discussion"></a>

## Discussion

For devices that support transport control, query this property to discover the current playback mode.

## See Also

### Controlling transport behavior

- [transportControlsSupported](transportcontrolssupported.md): A Boolean value that indicates whether the device supports transport control commands.
- [setTransportControlsPlaybackMode(\_:speed:)](settransportcontrolsplaybackmode%28__speed_%29.md): Sets the transport control’s playback mode and speed.
- [AVCaptureDevice.TransportControlsPlaybackMode](transportcontrolsplaybackmode-swift.enum.md): Constants that indicate the transport control’s current mode of playback, if it has one.
- [transportControlsSpeed](transportcontrolsspeed-swift.property.md): The current playback speed.
- [AVCaptureDevice.TransportControlsSpeed](transportcontrolsspeed-swift.typealias.md): A constant that specifies speed of transport controls.

# transportControlsPlaybackMode (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The current playback mode.

## Declaration

```objectivec
@property (nonatomic, readonly) AVCaptureDeviceTransportControlsPlaybackMode transportControlsPlaybackMode;
```

<a id="Discussion"></a>

## Discussion

For devices that support transport control, query this property to discover the current playback mode.

## See Also

### Controlling transport behavior

- [transportControlsSupported](transportcontrolssupported.md): A Boolean value that indicates whether the device supports transport control commands.
- [setTransportControlsPlaybackMode:speed:](settransportcontrolsplaybackmode%28__speed_%29.md): Sets the transport control’s playback mode and speed.
- [AVCaptureDeviceTransportControlsPlaybackMode](transportcontrolsplaybackmode-swift.enum.md): Constants that indicate the transport control’s current mode of playback, if it has one.
- [transportControlsSpeed](transportcontrolsspeed-swift.property.md): The current playback speed.
- [AVCaptureDeviceTransportControlsSpeed](transportcontrolsspeed-swift.typealias.md): A constant that specifies speed of transport controls.

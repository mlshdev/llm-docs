> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/transportcontrolsspeed-swift.property](https://developer.apple.com/documentation/avfoundation/avcapturedevice/transportcontrolsspeed-swift.property)

# transportControlsSpeed (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The current playback speed.

## Declaration

```swift
var transportControlsSpeed: AVCaptureDevice.TransportControlsSpeed { get }
```

<a id="Discussion"></a>

## Discussion

For devices that support transport control, the value of this property indicates the current playback speed of the deck. The following table gives examples of the meaning of values:

| Value | Meaning |
| --- | --- |
| 0.0 | Stopped |
| 1.0 | Forward at normal speed. |
| -1.0 | Reverse at normal speed. |
| 2.0 | Forward at 2x normal speed. |

This property is key-value observable.

## See Also

### Controlling transport behavior

- [transportControlsSupported](transportcontrolssupported.md): A Boolean value that indicates whether the device supports transport control commands.
- [transportControlsPlaybackMode](transportcontrolsplaybackmode-swift.property.md): The current playback mode.
- [setTransportControlsPlaybackMode(\_:speed:)](settransportcontrolsplaybackmode%28__speed_%29.md): Sets the transport control’s playback mode and speed.
- [AVCaptureDevice.TransportControlsPlaybackMode](transportcontrolsplaybackmode-swift.enum.md): Constants that indicate the transport control’s current mode of playback, if it has one.
- [AVCaptureDevice.TransportControlsSpeed](transportcontrolsspeed-swift.typealias.md): A constant that specifies speed of transport controls.

# transportControlsSpeed (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The current playback speed.

## Declaration

```objectivec
@property (nonatomic, readonly) AVCaptureDeviceTransportControlsSpeed transportControlsSpeed;
```

<a id="Discussion"></a>

## Discussion

For devices that support transport control, the value of this property indicates the current playback speed of the deck. The following table gives examples of the meaning of values:

| Value | Meaning |
| --- | --- |
| 0.0 | Stopped |
| 1.0 | Forward at normal speed. |
| -1.0 | Reverse at normal speed. |
| 2.0 | Forward at 2x normal speed. |

This property is key-value observable.

## See Also

### Controlling transport behavior

- [transportControlsSupported](transportcontrolssupported.md): A Boolean value that indicates whether the device supports transport control commands.
- [transportControlsPlaybackMode](transportcontrolsplaybackmode-swift.property.md): The current playback mode.
- [setTransportControlsPlaybackMode:speed:](settransportcontrolsplaybackmode%28__speed_%29.md): Sets the transport control’s playback mode and speed.
- [AVCaptureDeviceTransportControlsPlaybackMode](transportcontrolsplaybackmode-swift.enum.md): Constants that indicate the transport control’s current mode of playback, if it has one.
- [AVCaptureDeviceTransportControlsSpeed](transportcontrolsspeed-swift.typealias.md): A constant that specifies speed of transport controls.

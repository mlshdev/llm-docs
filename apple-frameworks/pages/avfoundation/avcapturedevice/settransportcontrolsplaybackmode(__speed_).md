> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/settransportcontrolsplaybackmode(_:speed:)](https://developer.apple.com/documentation/avfoundation/avcapturedevice/settransportcontrolsplaybackmode(_:speed:))

# setTransportControlsPlaybackMode(\_:speed:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Sets the transport control’s playback mode and speed.

## Declaration

```swift
func setTransportControlsPlaybackMode(_ mode: AVCaptureDevice.TransportControlsPlaybackMode, speed: AVCaptureDevice.TransportControlsSpeed)
```

## Parameters

- `mode`: A playback mode constant that indicates whether to put the deck should into play mode.
- `speed`: The speed at which to wind or play the tape.

<a id="Discussion"></a>

## Discussion

Before changing the value of this property, you must call [lockForConfiguration()](lockforconfiguration%28%29.md) to acquire exclusive access to the device’s configuration properties. Otherwise, calling this method raises an exception. When you’re finished configuring the device, call [unlockForConfiguration()](unlockforconfiguration%28%29.md) to release the lock and allow other devices to configure the settings.

## See Also

### Controlling transport behavior

- [transportControlsSupported](transportcontrolssupported.md): A Boolean value that indicates whether the device supports transport control commands.
- [transportControlsPlaybackMode](transportcontrolsplaybackmode-swift.property.md): The current playback mode.
- [AVCaptureDevice.TransportControlsPlaybackMode](transportcontrolsplaybackmode-swift.enum.md): Constants that indicate the transport control’s current mode of playback, if it has one.
- [transportControlsSpeed](transportcontrolsspeed-swift.property.md): The current playback speed.
- [AVCaptureDevice.TransportControlsSpeed](transportcontrolsspeed-swift.typealias.md): A constant that specifies speed of transport controls.

# setTransportControlsPlaybackMode:speed: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Sets the transport control’s playback mode and speed.

## Declaration

```objectivec
- (void) setTransportControlsPlaybackMode:(AVCaptureDeviceTransportControlsPlaybackMode) mode speed:(AVCaptureDeviceTransportControlsSpeed) speed;
```

## Parameters

- `mode`: A playback mode constant that indicates whether to put the deck should into play mode.
- `speed`: The speed at which to wind or play the tape.

<a id="Discussion"></a>

## Discussion

Before changing the value of this property, you must call [lockForConfiguration:](lockforconfiguration%28%29.md) to acquire exclusive access to the device’s configuration properties. Otherwise, calling this method raises an exception. When you’re finished configuring the device, call [unlockForConfiguration](unlockforconfiguration%28%29.md) to release the lock and allow other devices to configure the settings.

## See Also

### Controlling transport behavior

- [transportControlsSupported](transportcontrolssupported.md): A Boolean value that indicates whether the device supports transport control commands.
- [transportControlsPlaybackMode](transportcontrolsplaybackmode-swift.property.md): The current playback mode.
- [AVCaptureDeviceTransportControlsPlaybackMode](transportcontrolsplaybackmode-swift.enum.md): Constants that indicate the transport control’s current mode of playback, if it has one.
- [transportControlsSpeed](transportcontrolsspeed-swift.property.md): The current playback speed.
- [AVCaptureDeviceTransportControlsSpeed](transportcontrolsspeed-swift.typealias.md): A constant that specifies speed of transport controls.

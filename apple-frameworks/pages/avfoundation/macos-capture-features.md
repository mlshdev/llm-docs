> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/macos-capture-features](https://developer.apple.com/documentation/avfoundation/macos-capture-features)

# macOS capture features (Swift)

**Framework:** AVFoundation  
**Kind:** API Collection

Control the transport behavior and input sources of capture hardware in macOS.

## Topics

### Controlling transport behavior

- [transportControlsSupported](avcapturedevice/transportcontrolssupported.md): A Boolean value that indicates whether the device supports transport control commands.
- [transportControlsPlaybackMode](avcapturedevice/transportcontrolsplaybackmode-swift.property.md): The current playback mode.
- [setTransportControlsPlaybackMode(\_:speed:)](avcapturedevice/settransportcontrolsplaybackmode%28__speed_%29.md): Sets the transport control’s playback mode and speed.
- [AVCaptureDevice.TransportControlsPlaybackMode](avcapturedevice/transportcontrolsplaybackmode-swift.enum.md): Constants that indicate the transport control’s current mode of playback, if it has one.
- [transportControlsSpeed](avcapturedevice/transportcontrolsspeed-swift.property.md): The current playback speed.
- [AVCaptureDevice.TransportControlsSpeed](avcapturedevice/transportcontrolsspeed-swift.typealias.md): A constant that specifies speed of transport controls.

### Configuring input sources

- [inputSources](avcapturedevice/inputsources.md): An array of input sources that the device supports.
- [activeInputSource](avcapturedevice/activeinputsource.md): The currently active input source of the device.
- [AVCaptureDevice.InputSource](avcapturedevice/inputsource.md): A distinct input source on a capture device.

### Accessing linked devices

- [linkedDevices](avcapturedevice/linkeddevices.md): An array of capture devices that are physically linked to a device.

# macOS capture features (Objective-C)

**Framework:** AVFoundation  
**Kind:** API Collection

Control the transport behavior and input sources of capture hardware in macOS.

## Topics

### Controlling transport behavior

- [transportControlsSupported](avcapturedevice/transportcontrolssupported.md): A Boolean value that indicates whether the device supports transport control commands.
- [transportControlsPlaybackMode](avcapturedevice/transportcontrolsplaybackmode-swift.property.md): The current playback mode.
- [setTransportControlsPlaybackMode:speed:](avcapturedevice/settransportcontrolsplaybackmode%28__speed_%29.md): Sets the transport control’s playback mode and speed.
- [AVCaptureDeviceTransportControlsPlaybackMode](avcapturedevice/transportcontrolsplaybackmode-swift.enum.md): Constants that indicate the transport control’s current mode of playback, if it has one.
- [transportControlsSpeed](avcapturedevice/transportcontrolsspeed-swift.property.md): The current playback speed.
- [AVCaptureDeviceTransportControlsSpeed](avcapturedevice/transportcontrolsspeed-swift.typealias.md): A constant that specifies speed of transport controls.

### Configuring input sources

- [inputSources](avcapturedevice/inputsources.md): An array of input sources that the device supports.
- [activeInputSource](avcapturedevice/activeinputsource.md): The currently active input source of the device.
- [AVCaptureDeviceInputSource](avcapturedevice/inputsource.md): A distinct input source on a capture device.

### Accessing linked devices

- [linkedDevices](avcapturedevice/linkeddevices.md): An array of capture devices that are physically linked to a device.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedeviceinput/ports(for:sourcedevicetype:sourcedeviceposition:)](https://developer.apple.com/documentation/avfoundation/avcapturedeviceinput/ports(for:sourcedevicetype:sourcedeviceposition:))

# ports(for:sourceDeviceType:sourceDevicePosition:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

Retrieves a virtual device’s constituent device ports for use in a multi-camera session.

## Declaration

```swift
func ports(for mediaType: AVMediaType?, sourceDeviceType: AVCaptureDevice.DeviceType?, sourceDevicePosition: AVCaptureDevice.Position) -> [AVCaptureInput.Port]
```

## Parameters

- `mediaType`: The media type of the port you’re searching for, or `nil` to consider all media types.
- `sourceDeviceType`: The device type of the port you’re searching for, or `nil` if to consider all device types.
- `sourceDevicePosition`: The device position of the port you’re searching for.

  When you’re searching for a camera device, a position of [AVCaptureDevice.Position.unspecified](../avcapturedevice/position-swift.enum/unspecified.md) indicates to search for all positions.

  When you’re searching for an audio device, [AVCaptureDevice.Position.unspecified](../avcapturedevice/position-swift.enum/unspecified.md) indicates to search omnidirectional audio.

<a id="return-value"></a>

## Return Value

An array of ports that satisfy the search criteria, or an empty array if there are none.

<a id="Discussion"></a>

## Discussion

[AVCaptureMultiCamSession](../avcapturemulticamsession.md) lets you simultaneously capture from multiple devices. It also lets you capture simultaneous streams from a virtual device, such as the dual camera. You use this method to find the ports associated with a virtual device’s underlying physical devices. A virtual device input’s [ports](../avcaptureinput/ports.md) property doesn’t include constituent device ports.

Using the dual camera as an example, the [ports](../avcaptureinput/ports.md) property exposes only those ports supported by the virtual device (it switches automatically between wide-angle and telephoto cameras, depending on the zoom factor). You may use this method to find the video ports for the constituent devices.

```swift
// Look up the wide-angle camera port.
let wideVideoPort = dualCameraInput.ports(for: .video,
                                          sourceDeviceType: .builtInWideAngleCamera,
                                          sourceDevicePosition: .back).first

// Look up the telephoto camera port.
let teleVideoPort = dualCameraInput.ports(for: .video,
                                          sourceDeviceType: .builtInTelephotoCamera,
                                          sourceDevicePosition: .back).first
```

You can use these ports to create connections to two instances of [AVCaptureVideoDataOutput](../avcapturevideodataoutput.md), allowing for synchronized, full-frame-rate delivery of both wide-angle and telephoto streams.

When used in conjunction with an audio device, this method allows you to discover microphones in different positions. You can use the microphone ports to make output connections to simultaneously capture both front-facing and back-facing audio. The audio device port whose [sourceDevicePosition](../avcaptureinput/port/sourcedeviceposition.md) is [AVCaptureDevice.Position.unspecified](../avcapturedevice/position-swift.enum/unspecified.md) produces omnidirectional sound.

## See Also

### Accessing the device

- [device](device.md): A capture device associated with this input.

# portsWithMediaType:sourceDeviceType:sourceDevicePosition: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

Retrieves a virtual device’s constituent device ports for use in a multi-camera session.

## Declaration

```objectivec
- (NSArray<AVCaptureInputPort *> *) portsWithMediaType:(AVMediaType) mediaType sourceDeviceType:(AVCaptureDeviceType) sourceDeviceType sourceDevicePosition:(AVCaptureDevicePosition) sourceDevicePosition;
```

## Parameters

- `mediaType`: The media type of the port you’re searching for, or `nil` to consider all media types.
- `sourceDeviceType`: The device type of the port you’re searching for, or `nil` if to consider all device types.
- `sourceDevicePosition`: The device position of the port you’re searching for.

  When you’re searching for a camera device, a position of [AVCaptureDevicePositionUnspecified](../avcapturedevice/position-swift.enum/unspecified.md) indicates to search for all positions.

  When you’re searching for an audio device, [AVCaptureDevicePositionUnspecified](../avcapturedevice/position-swift.enum/unspecified.md) indicates to search omnidirectional audio.

<a id="return-value"></a>

## Return Value

An array of ports that satisfy the search criteria, or an empty array if there are none.

<a id="Discussion"></a>

## Discussion

[AVCaptureMultiCamSession](../avcapturemulticamsession.md) lets you simultaneously capture from multiple devices. It also lets you capture simultaneous streams from a virtual device, such as the dual camera. You use this method to find the ports associated with a virtual device’s underlying physical devices. A virtual device input’s [ports](../avcaptureinput/ports.md) property doesn’t include constituent device ports.

Using the dual camera as an example, the [ports](../avcaptureinput/ports.md) property exposes only those ports supported by the virtual device (it switches automatically between wide-angle and telephoto cameras, depending on the zoom factor). You may use this method to find the video ports for the constituent devices.

```swift
// Look up the wide-angle camera port.
let wideVideoPort = dualCameraInput.ports(for: .video,
                                          sourceDeviceType: .builtInWideAngleCamera,
                                          sourceDevicePosition: .back).first

// Look up the telephoto camera port.
let teleVideoPort = dualCameraInput.ports(for: .video,
                                          sourceDeviceType: .builtInTelephotoCamera,
                                          sourceDevicePosition: .back).first
```

You can use these ports to create connections to two instances of [AVCaptureVideoDataOutput](../avcapturevideodataoutput.md), allowing for synchronized, full-frame-rate delivery of both wide-angle and telephoto streams.

When used in conjunction with an audio device, this method allows you to discover microphones in different positions. You can use the microphone ports to make output connections to simultaneously capture both front-facing and back-facing audio. The audio device port whose [sourceDevicePosition](../avcaptureinput/port/sourcedeviceposition.md) is [AVCaptureDevicePositionUnspecified](../avcapturedevice/position-swift.enum/unspecified.md) produces omnidirectional sound.

## See Also

### Accessing the device

- [device](device.md): A capture device associated with this input.

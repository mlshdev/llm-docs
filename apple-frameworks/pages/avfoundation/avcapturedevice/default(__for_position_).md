> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/default(_:for:position:)](https://developer.apple.com/documentation/avfoundation/avcapturedevice/default(_:for:position:))

# default(\_:for:position:) (Swift)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 17.0+ · visionOS 2.1+

Returns the default device for the specified device type, media type, and position.

## Declaration

```swift
class func `default`(_ deviceType: AVCaptureDevice.DeviceType, for mediaType: AVMediaType?, position: AVCaptureDevice.Position) -> AVCaptureDevice?
```

## Parameters

- `deviceType`: The type of capture device to request, such as [builtInWideAngleCamera](devicetype-swift.struct/builtinwideanglecamera.md).
- `mediaType`: The type of media to request capture of, such as [video](../avmediatype/video.md) or [audio](../avmediatype/audio.md).
- `position`: The position of capture device to request relative to system hardware (front- or back-facing). Pass [AVCaptureDevice.Position.unspecified](position-swift.enum/unspecified.md) to search for devices regardless of position.

<a id="return-value"></a>

## Return Value

The default system device, or `nil` if no device currently exists that satisfies the specified criteria.

## Mentioned In

- [Choosing a capture device](../choosing-a-capture-device.md)

<a id="Discussion"></a>

## Discussion

Use this method to select the system default capture device for a given scenario. For example, to obtain the dual camera on supported hardware and fall back to the standard wide-angle camera otherwise, call this method twice, as shown below.

```swift
// The app's default camera.
var defaultCamera: AVCaptureDevice? {
    // Find the built-in dual camera, if it exists.
    if let device = AVCaptureDevice.default(.builtInDualCamera,
                                            for: .video,
                                            position: .back) {
        return device
    }
    
    // Find the built-in wide-angle camera, if it exists.
    if let device = AVCaptureDevice.default(.builtInWideAngleCamera,
                                            for: .video,
                                            position: .back) {
        return device
    }
    return nil
}
```

## See Also

### Finding and monitoring devices

- [AVCaptureDevice.DiscoverySession](discoverysession.md): An object that finds capture devices that match specific search criteria.
- [default(for:)](default%28for_%29.md): Returns the default device that captures the specified media type.
- [init(uniqueID:)](init%28uniqueid_%29.md): Creates an object that represents a device with the specified identifier.
- [wasConnectedNotification](wasconnectednotification.md): A notification the system posts when a new capture device becomes available.
- [wasDisconnectedNotification](wasdisconnectednotification.md): A notification the system posts when an existing device becomes unavailable.
- [devices(for:)](devices%28for_%29.md): Deprecated. Returns devices capable of capturing media of the specified type.
- [devices()](devices%28%29.md): Deprecated. Returns all available capture devices on the system.

# defaultDeviceWithDeviceType:mediaType:position: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 17.0+ · visionOS 2.1+

Returns the default device for the specified device type, media type, and position.

## Declaration

```objectivec
+ (AVCaptureDevice *) defaultDeviceWithDeviceType:(AVCaptureDeviceType) deviceType mediaType:(AVMediaType) mediaType position:(AVCaptureDevicePosition) position;
```

## Parameters

- `deviceType`: The type of capture device to request, such as [AVCaptureDeviceTypeBuiltInWideAngleCamera](devicetype-swift.struct/builtinwideanglecamera.md).
- `mediaType`: The type of media to request capture of, such as [AVMediaTypeVideo](../avmediatype/video.md) or [AVMediaTypeAudio](../avmediatype/audio.md).
- `position`: The position of capture device to request relative to system hardware (front- or back-facing). Pass [AVCaptureDevicePositionUnspecified](position-swift.enum/unspecified.md) to search for devices regardless of position.

<a id="return-value"></a>

## Return Value

The default system device, or `nil` if no device currently exists that satisfies the specified criteria.

## Mentioned In

- [Choosing a capture device](../choosing-a-capture-device.md)

<a id="Discussion"></a>

## Discussion

Use this method to select the system default capture device for a given scenario. For example, to obtain the dual camera on supported hardware and fall back to the standard wide-angle camera otherwise, call this method twice, as shown below.

```swift
// The app's default camera.
var defaultCamera: AVCaptureDevice? {
    // Find the built-in dual camera, if it exists.
    if let device = AVCaptureDevice.default(.builtInDualCamera,
                                            for: .video,
                                            position: .back) {
        return device
    }
    
    // Find the built-in wide-angle camera, if it exists.
    if let device = AVCaptureDevice.default(.builtInWideAngleCamera,
                                            for: .video,
                                            position: .back) {
        return device
    }
    return nil
}
```

## See Also

### Finding and monitoring devices

- [AVCaptureDeviceDiscoverySession](discoverysession.md): An object that finds capture devices that match specific search criteria.
- [defaultDeviceWithMediaType:](default%28for_%29.md): Returns the default device that captures the specified media type.
- [deviceWithUniqueID:](init%28uniqueid_%29.md): Creates an object that represents a device with the specified identifier.
- [AVCaptureDeviceWasConnectedNotification](wasconnectednotification.md): A notification the system posts when a new capture device becomes available.
- [AVCaptureDeviceWasDisconnectedNotification](wasdisconnectednotification.md): A notification the system posts when an existing device becomes unavailable.
- [devicesWithMediaType:](devices%28for_%29.md): Deprecated. Returns devices capable of capturing media of the specified type.
- [devices](devices%28%29.md): Deprecated. Returns all available capture devices on the system.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/discoverysession/devices](https://developer.apple.com/documentation/avfoundation/avcapturedevice/discoverysession/devices)

# devices (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 17.0+ · visionOS 2.1+

A list of devices that match the search criteria of the discovery session.

## Declaration

```swift
var devices: [AVCaptureDevice] { get }
```

## Mentioned In

- [Choosing a capture device](../../choosing-a-capture-device.md)

<a id="Discussion"></a>

## Discussion

Querying this property provides an array devices currently available on the system. The system sorts the device list according to the order you specified when you created the discovery session. If you created the session with a position of [AVCaptureDevice.Position.unspecified](../position-swift.enum/unspecified.md), the system further sorts them by position in the [AVCaptureDevice.Position](../position-swift.enum.md) enumeration.

Key-value observe this property to monitor changes to the device list.

## See Also

### Finding devices

- [supportedMultiCamDeviceSets](supportedmulticamdevicesets.md): Sets of capture devices that you can use simultaneously in a multi-camera session.

# devices (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 17.0+ · visionOS 2.1+

A list of devices that match the search criteria of the discovery session.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<AVCaptureDevice *> * devices;
```

## Mentioned In

- [Choosing a capture device](../../choosing-a-capture-device.md)

<a id="Discussion"></a>

## Discussion

Querying this property provides an array devices currently available on the system. The system sorts the device list according to the order you specified when you created the discovery session. If you created the session with a position of [AVCaptureDevicePositionUnspecified](../position-swift.enum/unspecified.md), the system further sorts them by position in the [AVCaptureDevicePosition](../position-swift.enum.md) enumeration.

Key-value observe this property to monitor changes to the device list.

## See Also

### Finding devices

- [supportedMultiCamDeviceSets](supportedmulticamdevicesets.md): Sets of capture devices that you can use simultaneously in a multi-camera session.

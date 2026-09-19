> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avcapturedevice/discoverysession/supportedmulticamdevicesets

# supportedMultiCamDeviceSets (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 2.1+

Sets of capture devices that you can use simultaneously in a multi-camera session.

## Declaration

```swift
var supportedMultiCamDeviceSets: [Set<AVCaptureDevice>] { get }
```

<a id="Discussion"></a>

## Discussion

You may use multiple cameras as device inputs to an [AVCaptureMultiCamSession](../../avcapturemulticamsession.md), as long as one of the supported multi-camera device sets includes the device.

## See Also

### Finding devices

- [devices](devices.md): A list of devices that match the search criteria of the discovery session.

# supportedMultiCamDeviceSets (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · tvOS 17.0+ · visionOS 2.1+

Sets of capture devices that you can use simultaneously in a multi-camera session.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<NSSet<AVCaptureDevice *> *> * supportedMultiCamDeviceSets;
```

<a id="Discussion"></a>

## Discussion

You may use multiple cameras as device inputs to an [AVCaptureMultiCamSession](../../avcapturemulticamsession.md), as long as one of the supported multi-camera device sets includes the device.

## See Also

### Finding devices

- [devices](devices.md): A list of devices that match the search criteria of the discovery session.

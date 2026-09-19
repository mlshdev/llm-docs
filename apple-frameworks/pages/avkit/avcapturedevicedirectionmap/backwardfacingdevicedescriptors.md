> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avkit/avcapturedevicedirectionmap/backwardfacingdevicedescriptors

# backwardFacingDeviceDescriptors (Swift)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta

Descriptions of the capture devices that face away from the view.

## Declaration

```swift
var backwardFacingDeviceDescriptors: [AVCaptureDeviceDescriptor] { get }
```

## Mentioned In

- [Choosing a camera by the direction it faces](../choosing-a-camera-by-the-direction-it-faces.md)

<a id="Discussion"></a>

## Discussion

These devices capture the scene behind the view. Each [AVCaptureDeviceDescriptor](../avcapturedevicedescriptor.md) in the array identifies one capture device, which may be a virtual device such as a dual camera. Match its [uniqueID](../avcapturedevicedescriptor/uniqueid.md) to obtain the corresponding [AVCaptureDevice](../../avfoundation/avcapturedevice.md). The array is empty when no capture device is available or applicable for the current configuration.

## See Also

### Reading the camera directions

- [forwardFacingDeviceDescriptors](forwardfacingdevicedescriptors.md): Beta. Descriptions of the capture devices that face the same direction as the view.

# backwardFacingDeviceDescriptors (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta

Descriptions of the capture devices that face away from the view.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<AVCaptureDeviceDescriptor *> * backwardFacingDeviceDescriptors;
```

## Mentioned In

- [Choosing a camera by the direction it faces](../choosing-a-camera-by-the-direction-it-faces.md)

<a id="Discussion"></a>

## Discussion

These devices capture the scene behind the view. Each [AVCaptureDeviceDescriptor](../avcapturedevicedescriptor.md) in the array identifies one capture device, which may be a virtual device such as a dual camera. Match its [uniqueID](../avcapturedevicedescriptor/uniqueid.md) to obtain the corresponding [AVCaptureDevice](../../avfoundation/avcapturedevice.md). The array is empty when no capture device is available or applicable for the current configuration.

## See Also

### Reading the camera directions

- [forwardFacingDeviceDescriptors](forwardfacingdevicedescriptors.md): Beta. Descriptions of the capture devices that face the same direction as the view.

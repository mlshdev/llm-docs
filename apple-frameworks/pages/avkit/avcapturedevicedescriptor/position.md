> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avkit/avcapturedevicedescriptor/position

# position (Swift)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta · Mac Catalyst 27.1+

The physical position of the camera on the device.

## Declaration

```swift
var position: AVCaptureDevice.Position { get }
```

<a id="Discussion"></a>

## Discussion

This value matches the [position](../../avfoundation/avcapturedevice/position-swift.property.md) of the camera it describes. Position describes the hardware, not the direction the camera faces in relation to your view.

## See Also

### Inspecting the device’s characteristics

- [deviceType](devicetype.md): The kind of camera, such as a wide-angle or telephoto camera.
- [mediaTypes](mediatypes.md): The kinds of media the camera captures.

# position (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 27.1+

The physical position of the camera on the device.

## Declaration

```objectivec
@property (nonatomic, readonly) AVCaptureDevicePosition position;
```

<a id="Discussion"></a>

## Discussion

This value matches the [position](../../avfoundation/avcapturedevice/position-swift.property.md) of the camera it describes. Position describes the hardware, not the direction the camera faces in relation to your view.

## See Also

### Inspecting the device’s characteristics

- [deviceType](devicetype.md): The kind of camera, such as a wide-angle or telephoto camera.
- [mediaTypes](mediatypes.md): The kinds of media the camera captures.

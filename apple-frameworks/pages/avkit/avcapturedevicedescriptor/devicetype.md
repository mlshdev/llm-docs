> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avkit/avcapturedevicedescriptor/devicetype

# deviceType (Swift)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta

The kind of camera, such as a wide-angle or telephoto camera.

## Declaration

```swift
var deviceType: AVCaptureDevice.DeviceType { get }
```

<a id="Discussion"></a>

## Discussion

This value matches the doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/devicetype of the camera it describes.

## See Also

### Inspecting the device’s characteristics

- [mediaTypes](mediatypes.md): Beta. The kinds of media the camera captures.
- [position](position.md): Beta. The physical position of the camera on the device.

# deviceType (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta

The kind of camera, such as a wide-angle or telephoto camera.

## Declaration

```objectivec
@property (nonatomic, readonly) AVCaptureDeviceType deviceType;
```

<a id="Discussion"></a>

## Discussion

This value matches the doc://com.apple.documentation/documentation/avfoundation/avcapturedevice/devicetype of the camera it describes.

## See Also

### Inspecting the device’s characteristics

- [mediaTypes](mediatypes.md): Beta. The kinds of media the camera captures.
- [position](position.md): Beta. The physical position of the camera on the device.

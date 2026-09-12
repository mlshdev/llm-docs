> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/devicetype-swift.struct/builtintruedepthcamera](https://developer.apple.com/documentation/avfoundation/avcapturedevice/devicetype-swift.struct/builtintruedepthcamera)

# builtInTrueDepthCamera (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 11.1+ · iPadOS 11.1+ · Mac Catalyst 14.0+ · tvOS 17.0+

A device that consists of two cameras, one Infrared and one YUV.

## Declaration

```swift
static let builtInTrueDepthCamera: AVCaptureDevice.DeviceType
```

## Mentioned In

- [Capturing photos with depth](../../capturing-photos-with-depth.md)

<a id="Discussion"></a>

## Discussion

The infrared camera provides high-quality depth information that’s synchronized and perspective corrected to the frame the YUV camera produces. While the resolution of the depth data and YUV frames may differ, their field of view and aspect ratio always match.

> **Important**

>  To obtain a device of this type, use the [default(\_:for:position:)](../default%28__for_position_%29.md) method or the [AVCaptureDevice.DiscoverySession](../discoverysession.md) class. Other methods don’t discover devices of this type.

## See Also

### Depth sensing

- [builtInLiDARDepthCamera](builtinlidardepthcamera.md): A device that consists of two cameras, one LiDAR and one YUV.

# AVCaptureDeviceTypeBuiltInTrueDepthCamera (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 11.1+ · iPadOS 11.1+ · Mac Catalyst 14.0+ · tvOS 17.0+

A device that consists of two cameras, one Infrared and one YUV.

## Declaration

```objectivec
extern AVCaptureDeviceType const AVCaptureDeviceTypeBuiltInTrueDepthCamera;
```

## Mentioned In

- [Capturing photos with depth](../../capturing-photos-with-depth.md)

<a id="Discussion"></a>

## Discussion

The infrared camera provides high-quality depth information that’s synchronized and perspective corrected to the frame the YUV camera produces. While the resolution of the depth data and YUV frames may differ, their field of view and aspect ratio always match.

> **Important**

>  To obtain a device of this type, use the [defaultDeviceWithDeviceType:mediaType:position:](../default%28__for_position_%29.md) method or the [AVCaptureDeviceDiscoverySession](../discoverysession.md) class. Other methods don’t discover devices of this type.

## See Also

### Depth sensing

- [AVCaptureDeviceTypeBuiltInLiDARDepthCamera](builtinlidardepthcamera.md): A device that consists of two cameras, one LiDAR and one YUV.

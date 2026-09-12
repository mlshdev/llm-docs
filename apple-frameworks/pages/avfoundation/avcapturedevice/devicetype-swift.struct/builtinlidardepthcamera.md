> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/devicetype-swift.struct/builtinlidardepthcamera](https://developer.apple.com/documentation/avfoundation/avcapturedevice/devicetype-swift.struct/builtinlidardepthcamera)

# builtInLiDARDepthCamera (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · tvOS 17.0+

A device that consists of two cameras, one LiDAR and one YUV.

## Declaration

```swift
static let builtInLiDARDepthCamera: AVCaptureDevice.DeviceType
```

<a id="Discussion"></a>

## Discussion

The LiDAR camera provides high-quality, high-accuracy depth information by measuring the round trip of an artificial light signal that a laser emits. The device synchronizes and perspective-corrects this data to frames that the YUV camera produces. While the resolution of the depth data and YUV frames may differ, their field of view and aspect ratio always match.

> **Note**

>  You can only discover devices of this type by using an [AVCaptureDevice.DiscoverySession](../discoverysession.md) or by calling the [default(\_:for:position:)](../default%28__for_position_%29.md) method.

## See Also

### Depth sensing

- [builtInTrueDepthCamera](builtintruedepthcamera.md): A device that consists of two cameras, one Infrared and one YUV.

# AVCaptureDeviceTypeBuiltInLiDARDepthCamera (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · tvOS 17.0+

A device that consists of two cameras, one LiDAR and one YUV.

## Declaration

```objectivec
extern AVCaptureDeviceType const AVCaptureDeviceTypeBuiltInLiDARDepthCamera;
```

<a id="Discussion"></a>

## Discussion

The LiDAR camera provides high-quality, high-accuracy depth information by measuring the round trip of an artificial light signal that a laser emits. The device synchronizes and perspective-corrects this data to frames that the YUV camera produces. While the resolution of the depth data and YUV frames may differ, their field of view and aspect ratio always match.

> **Note**

>  You can only discover devices of this type by using an [AVCaptureDeviceDiscoverySession](../discoverysession.md) or by calling the [defaultDeviceWithDeviceType:mediaType:position:](../default%28__for_position_%29.md) method.

## See Also

### Depth sensing

- [AVCaptureDeviceTypeBuiltInTrueDepthCamera](builtintruedepthcamera.md): A device that consists of two cameras, one Infrared and one YUV.

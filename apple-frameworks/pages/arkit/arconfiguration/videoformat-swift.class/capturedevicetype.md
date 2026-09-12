> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arconfiguration/videoformat-swift.class/capturedevicetype](https://developer.apple.com/documentation/arkit/arconfiguration/videoformat-swift.class/capturedevicetype)

# captureDeviceType (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 14.5+ · iPadOS 14.5+

The camera that supplies the video format.

## Declaration

```swift
var captureDeviceType: AVCaptureDevice.DeviceType { get }
```

<a id="Discussion"></a>

## Discussion

To specify a particular video format, select from your configuration’s [supportedVideoFormats](../supportedvideoformats.md) and set the desired format to the configuration’s [videoFormat](../videoformat-swift.property.md) property.

For example, to specify the ultra-wide camera in a face-tracking session, search the supported video formats for the [builtInUltraWideCamera](../../../avfoundation/avcapturedevice/devicetype-swift.struct/builtinultrawidecamera.md) capture device.

```swift
let config = ARFaceTrackingConfiguration()
for videoFormat in ARFaceTrackingConfiguration.supportedVideoFormats {
    if videoFormat.captureDeviceType == .builtInUltraWideCamera {
        config.videoFormat = videoFormat
        break
    }
}
session.run(config)
```

> **Important**

>  AR frames only contain depth data ([capturedDepthData](../../arframe/captureddepthdata.md)) in face-tracking sessions that use the TrueDepth camera.

## See Also

### Inspecting the video source

- [captureDevicePosition](capturedeviceposition.md): The position of the capture device.
- [AVCaptureDevice.Position](../../../avfoundation/avcapturedevice/position-swift.enum.md): Constants that indicate the physical position of a capture device.

# captureDeviceType (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 14.5+ · iPadOS 14.5+

The camera that supplies the video format.

## Declaration

```objectivec
@property (nonatomic, readonly) AVCaptureDeviceType captureDeviceType;
```

<a id="Discussion"></a>

## Discussion

To specify a particular video format, select from your configuration’s [supportedVideoFormats](../supportedvideoformats.md) and set the desired format to the configuration’s [videoFormat](../videoformat-swift.property.md) property.

For example, to specify the ultra-wide camera in a face-tracking session, search the supported video formats for the [AVCaptureDeviceTypeBuiltInUltraWideCamera](../../../avfoundation/avcapturedevice/devicetype-swift.struct/builtinultrawidecamera.md) capture device.

```swift
let config = ARFaceTrackingConfiguration()
for videoFormat in ARFaceTrackingConfiguration.supportedVideoFormats {
    if videoFormat.captureDeviceType == .builtInUltraWideCamera {
        config.videoFormat = videoFormat
        break
    }
}
session.run(config)
```

> **Important**

>  AR frames only contain depth data ([capturedDepthData](../../arframe/captureddepthdata.md)) in face-tracking sessions that use the TrueDepth camera.

## See Also

### Inspecting the video source

- [captureDevicePosition](capturedeviceposition.md): The position of the capture device.
- [AVCaptureDevicePosition](../../../avfoundation/avcapturedevice/position-swift.enum.md): Constants that indicate the physical position of a capture device.

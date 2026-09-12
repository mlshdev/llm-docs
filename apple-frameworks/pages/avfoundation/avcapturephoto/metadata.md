> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephoto/metadata](https://developer.apple.com/documentation/avfoundation/avcapturephoto/metadata)

# metadata (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A dictionary of metadata describing the captured image.

## Declaration

```swift
var metadata: [String : Any] { get }
```

<a id="Discussion"></a>

## Discussion

See `CGImageProperties` for possible keys and values. Metadata captured with a photo may include image orientation, Exif camera properties, and Live Photo metadata.

## See Also

### Accessing photo metadata

- [depthData](depthdata.md): Depth or disparity map data captured with the photo.
- [cameraCalibrationData](cameracalibrationdata.md): Calibration information for the camera device that captured the photo.
- [sourceDeviceType](sourcedevicetype.md): The type of device that captured the photo.
- [portraitEffectsMatte](portraiteffectsmatte.md): The portrait effects matte captured with the photo.

# metadata (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A dictionary of metadata describing the captured image.

## Declaration

```objectivec
@property (readonly) NSDictionary<NSString *,id> * metadata;
```

<a id="Discussion"></a>

## Discussion

See `CGImageProperties` for possible keys and values. Metadata captured with a photo may include image orientation, Exif camera properties, and Live Photo metadata.

## See Also

### Accessing photo metadata

- [depthData](depthdata.md): Depth or disparity map data captured with the photo.
- [cameraCalibrationData](cameracalibrationdata.md): Calibration information for the camera device that captured the photo.
- [sourceDeviceType](sourcedevicetype.md): The type of device that captured the photo.
- [portraitEffectsMatte](portraiteffectsmatte.md): The portrait effects matte captured with the photo.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arframe/exifdata](https://developer.apple.com/documentation/arkit/arframe/exifdata)

# exifData (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+

Auxiliary data for the captured image.

## Declaration

```swift
var exifData: [String : Any] { get }
```

<a id="Discussion"></a>

## Discussion

The system’s image capture pipeline produces pixel data and auxiliary information for each exposure. The AR frame exposes this pixel data through [capturedImage](capturedimage.md) and the auxilliary info through this property ([exifData](exifdata.md)). Example EXIF data includes camera manufacturer, orientation, compression, resolution, exposure, and the date and time that the exposure occurred.

## See Also

### Accessing camera data

- [camera](camera.md): Information about the camera position, orientation, and imaging parameters used to capture the frame.
- [capturedImage](capturedimage.md): A pixel buffer containing the image captured by the camera.
- [timestamp](timestamp.md): The time at which the frame was captured.
- [cameraGrainIntensity](cameragrainintensity.md): A value that specifies the amount of grain present in the camera grain texture.
- [cameraGrainTexture](cameragraintexture.md): A tileable Metal texture created by ARKit to match the visual characteristics of the current video stream.

# exifData (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+

Auxiliary data for the captured image.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) NSDictionary<NSString *,id> * exifData;
```

<a id="Discussion"></a>

## Discussion

The system’s image capture pipeline produces pixel data and auxiliary information for each exposure. The AR frame exposes this pixel data through [capturedImage](capturedimage.md) and the auxilliary info through this property ([exifData](exifdata.md)). Example EXIF data includes camera manufacturer, orientation, compression, resolution, exposure, and the date and time that the exposure occurred.

## See Also

### Accessing camera data

- [camera](camera.md): Information about the camera position, orientation, and imaging parameters used to capture the frame.
- [capturedImage](capturedimage.md): A pixel buffer containing the image captured by the camera.
- [timestamp](timestamp.md): The time at which the frame was captured.
- [cameraGrainIntensity](cameragrainintensity.md): A value that specifies the amount of grain present in the camera grain texture.
- [cameraGrainTexture](cameragraintexture.md): A tileable Metal texture created by ARKit to match the visual characteristics of the current video stream.

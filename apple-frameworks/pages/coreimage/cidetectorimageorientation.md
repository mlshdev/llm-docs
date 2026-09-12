> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cidetectorimageorientation](https://developer.apple.com/documentation/coreimage/cidetectorimageorientation)

# CIDetectorImageOrientation (Swift)

**Framework:** Core Image  
**Kind:** Global Variable  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS · visionOS 1.0+

An option for the display orientation of the image whose features you want to detect.

## Declaration

```swift
let CIDetectorImageOrientation: String
```

<a id="Discussion"></a>

## Discussion

The value of this key is an [NSNumber](../foundation/nsnumber.md) object whose value is an integer between `1` and `8`. The TIFF and EXIF specifications define these values to indicate where the pixel coordinate origin (0,0) of the image should appear when it is displayed. The default value is `1`, indicating that the origin is in the top left corner of the image. For further details, see [kCGImagePropertyOrientation](../imageio/kcgimagepropertyorientation.md).

Core Image detects only faces whose orientation matches that of the image. You should provide a value for this key if you want to detect faces in a different orientation.

## See Also

### Constants

- [CIDetectorEyeBlink](cidetectoreyeblink.md): An option for whether Core Image will perform additional processing to recognize closed eyes in detected faces.
- [CIDetectorSmile](cidetectorsmile.md): An option for whether Core Image will perform additional processing to recognize smiles in detected faces.
- [CIDetectorFocalLength](cidetectorfocallength.md): An option identifying the focal length in pixels used in capturing images to be processed by the detector.
- [CIDetectorAspectRatio](cidetectoraspectratio.md): An option specifying the aspect ratio (width divided by height) of rectangles to search for.
- [CIDetectorReturnSubFeatures](cidetectorreturnsubfeatures.md): An option specifying whether to return feature information for components of detected features.

# CIDetectorImageOrientation (Objective-C)

**Framework:** Core Image  
**Kind:** Global Variable  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS · visionOS 1.0+

An option for the display orientation of the image whose features you want to detect.

## Declaration

```objectivec
extern NSString * const CIDetectorImageOrientation;
```

<a id="Discussion"></a>

## Discussion

The value of this key is an [NSNumber](../foundation/nsnumber.md) object whose value is an integer between `1` and `8`. The TIFF and EXIF specifications define these values to indicate where the pixel coordinate origin (0,0) of the image should appear when it is displayed. The default value is `1`, indicating that the origin is in the top left corner of the image. For further details, see [kCGImagePropertyOrientation](../imageio/kcgimagepropertyorientation.md).

Core Image detects only faces whose orientation matches that of the image. You should provide a value for this key if you want to detect faces in a different orientation.

## See Also

### Constants

- [CIDetectorEyeBlink](cidetectoreyeblink.md): An option for whether Core Image will perform additional processing to recognize closed eyes in detected faces.
- [CIDetectorSmile](cidetectorsmile.md): An option for whether Core Image will perform additional processing to recognize smiles in detected faces.
- [CIDetectorFocalLength](cidetectorfocallength.md): An option identifying the focal length in pixels used in capturing images to be processed by the detector.
- [CIDetectorAspectRatio](cidetectoraspectratio.md): An option specifying the aspect ratio (width divided by height) of rectangles to search for.
- [CIDetectorReturnSubFeatures](cidetectorreturnsubfeatures.md): An option specifying whether to return feature information for components of detected features.

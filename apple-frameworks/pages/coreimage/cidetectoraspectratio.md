> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cidetectoraspectratio](https://developer.apple.com/documentation/coreimage/cidetectoraspectratio)

# CIDetectorAspectRatio (Swift)

**Framework:** Core Image  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+

An option specifying the aspect ratio (width divided by height) of rectangles to search for.

## Declaration

```swift
let CIDetectorAspectRatio: String
```

<a id="Discussion"></a>

## Discussion

The value of this key is an [NSNumber](../foundation/nsnumber.md) object whose value is a positive floating-point number. Use this option with the [CIDetectorTypeRectangle](cidetectortyperectangle.md) detector type to fine-tune the accuracy of the detector. For example, to more accurately find a business card (3.5 x 2 inches) in an image, specify an aspect ratio of `1.75` (3.5 / 2).

## See Also

### Constants

- [CIDetectorImageOrientation](cidetectorimageorientation.md): An option for the display orientation of the image whose features you want to detect.
- [CIDetectorEyeBlink](cidetectoreyeblink.md): An option for whether Core Image will perform additional processing to recognize closed eyes in detected faces.
- [CIDetectorSmile](cidetectorsmile.md): An option for whether Core Image will perform additional processing to recognize smiles in detected faces.
- [CIDetectorFocalLength](cidetectorfocallength.md): An option identifying the focal length in pixels used in capturing images to be processed by the detector.
- [CIDetectorReturnSubFeatures](cidetectorreturnsubfeatures.md): An option specifying whether to return feature information for components of detected features.

# CIDetectorAspectRatio (Objective-C)

**Framework:** Core Image  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+

An option specifying the aspect ratio (width divided by height) of rectangles to search for.

## Declaration

```objectivec
extern NSString * const CIDetectorAspectRatio;
```

<a id="Discussion"></a>

## Discussion

The value of this key is an [NSNumber](../foundation/nsnumber.md) object whose value is a positive floating-point number. Use this option with the [CIDetectorTypeRectangle](cidetectortyperectangle.md) detector type to fine-tune the accuracy of the detector. For example, to more accurately find a business card (3.5 x 2 inches) in an image, specify an aspect ratio of `1.75` (3.5 / 2).

## See Also

### Constants

- [CIDetectorImageOrientation](cidetectorimageorientation.md): An option for the display orientation of the image whose features you want to detect.
- [CIDetectorEyeBlink](cidetectoreyeblink.md): An option for whether Core Image will perform additional processing to recognize closed eyes in detected faces.
- [CIDetectorSmile](cidetectorsmile.md): An option for whether Core Image will perform additional processing to recognize smiles in detected faces.
- [CIDetectorFocalLength](cidetectorfocallength.md): An option identifying the focal length in pixels used in capturing images to be processed by the detector.
- [CIDetectorReturnSubFeatures](cidetectorreturnsubfeatures.md): An option specifying whether to return feature information for components of detected features.

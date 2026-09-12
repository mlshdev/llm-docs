> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cidetectorreturnsubfeatures](https://developer.apple.com/documentation/coreimage/cidetectorreturnsubfeatures)

# CIDetectorReturnSubFeatures (Swift)

**Framework:** Core Image  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

An option specifying whether to return feature information for components of detected features.

## Declaration

```swift
let CIDetectorReturnSubFeatures: String
```

<a id="Discussion"></a>

## Discussion

The value of this key is an [NSNumber](../foundation/nsnumber.md) object with a Boolean value. Use this option with the [CIDetectorTypeText](cidetectortypetext.md) detector type to choose whether to detect only regions likely to contain text (`false`, the default) or to also identify sub-regions likely to contain individual characters of text (`true`).

## See Also

### Constants

- [CIDetectorImageOrientation](cidetectorimageorientation.md): An option for the display orientation of the image whose features you want to detect.
- [CIDetectorEyeBlink](cidetectoreyeblink.md): An option for whether Core Image will perform additional processing to recognize closed eyes in detected faces.
- [CIDetectorSmile](cidetectorsmile.md): An option for whether Core Image will perform additional processing to recognize smiles in detected faces.
- [CIDetectorFocalLength](cidetectorfocallength.md): An option identifying the focal length in pixels used in capturing images to be processed by the detector.
- [CIDetectorAspectRatio](cidetectoraspectratio.md): An option specifying the aspect ratio (width divided by height) of rectangles to search for.

# CIDetectorReturnSubFeatures (Objective-C)

**Framework:** Core Image  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

An option specifying whether to return feature information for components of detected features.

## Declaration

```objectivec
extern NSString * const CIDetectorReturnSubFeatures;
```

<a id="Discussion"></a>

## Discussion

The value of this key is an [NSNumber](../foundation/nsnumber.md) object with a Boolean value. Use this option with the [CIDetectorTypeText](cidetectortypetext.md) detector type to choose whether to detect only regions likely to contain text (`false`, the default) or to also identify sub-regions likely to contain individual characters of text (`true`).

## See Also

### Constants

- [CIDetectorImageOrientation](cidetectorimageorientation.md): An option for the display orientation of the image whose features you want to detect.
- [CIDetectorEyeBlink](cidetectoreyeblink.md): An option for whether Core Image will perform additional processing to recognize closed eyes in detected faces.
- [CIDetectorSmile](cidetectorsmile.md): An option for whether Core Image will perform additional processing to recognize smiles in detected faces.
- [CIDetectorFocalLength](cidetectorfocallength.md): An option identifying the focal length in pixels used in capturing images to be processed by the detector.
- [CIDetectorAspectRatio](cidetectoraspectratio.md): An option specifying the aspect ratio (width divided by height) of rectangles to search for.

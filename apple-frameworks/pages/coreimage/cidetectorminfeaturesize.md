> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cidetectorminfeaturesize](https://developer.apple.com/documentation/coreimage/cidetectorminfeaturesize)

# CIDetectorMinFeatureSize (Swift)

**Framework:** Core Image  
**Kind:** Global Variable  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS · visionOS 1.0+

A key used to specify the minimum size that the detector will recognize as a feature.

## Declaration

```swift
let CIDetectorMinFeatureSize: String
```

<a id="Discussion"></a>

## Discussion

The value for this key is an `NSNumber` object ranging from 0.0 through 1.0 that represents a fraction of the minor dimension of the image.

## See Also

### Constants

- [CIDetectorAccuracy](cidetectoraccuracy.md): A key used to specify the desired accuracy for the detector.
- [CIDetectorTracking](cidetectortracking.md): A key used to enable or disable face tracking for the detector. Use this option when you want to track faces across frames in a video.
- [CIDetectorNumberOfAngles](cidetectornumberofangles.md): The number of perspectives to use for detecting a face in video input.
- [CIDetectorMaxFeatureCount](cidetectormaxfeaturecount.md): The key to the configuration dictionary whose value represents the maximum number of features the detector should return.

# CIDetectorMinFeatureSize (Objective-C)

**Framework:** Core Image  
**Kind:** Global Variable  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS · visionOS 1.0+

A key used to specify the minimum size that the detector will recognize as a feature.

## Declaration

```objectivec
extern NSString * const CIDetectorMinFeatureSize;
```

<a id="Discussion"></a>

## Discussion

The value for this key is an `NSNumber` object ranging from 0.0 through 1.0 that represents a fraction of the minor dimension of the image.

## See Also

### Constants

- [CIDetectorAccuracy](cidetectoraccuracy.md): A key used to specify the desired accuracy for the detector.
- [CIDetectorTracking](cidetectortracking.md): A key used to enable or disable face tracking for the detector. Use this option when you want to track faces across frames in a video.
- [CIDetectorNumberOfAngles](cidetectornumberofangles.md): The number of perspectives to use for detecting a face in video input.
- [CIDetectorMaxFeatureCount](cidetectormaxfeaturecount.md): The key to the configuration dictionary whose value represents the maximum number of features the detector should return.

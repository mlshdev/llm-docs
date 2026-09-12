> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cidetectoraccuracy](https://developer.apple.com/documentation/coreimage/cidetectoraccuracy)

# CIDetectorAccuracy (Swift)

**Framework:** Core Image  
**Kind:** Global Variable  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+

A key used to specify the desired accuracy for the detector.

## Declaration

```swift
let CIDetectorAccuracy: String
```

<a id="Discussion"></a>

## Discussion

The value associated with the key should be one of the values found in [Detector Accuracy Options](detector-accuracy-options.md).

## See Also

### Constants

- [CIDetectorTracking](cidetectortracking.md): A key used to enable or disable face tracking for the detector. Use this option when you want to track faces across frames in a video.
- [CIDetectorMinFeatureSize](cidetectorminfeaturesize.md): A key used to specify the minimum size that the detector will recognize as a feature.
- [CIDetectorNumberOfAngles](cidetectornumberofangles.md): The number of perspectives to use for detecting a face in video input.
- [CIDetectorMaxFeatureCount](cidetectormaxfeaturecount.md): The key to the configuration dictionary whose value represents the maximum number of features the detector should return.

# CIDetectorAccuracy (Objective-C)

**Framework:** Core Image  
**Kind:** Global Variable  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+

A key used to specify the desired accuracy for the detector.

## Declaration

```objectivec
extern NSString * const CIDetectorAccuracy;
```

<a id="Discussion"></a>

## Discussion

The value associated with the key should be one of the values found in [Detector Accuracy Options](detector-accuracy-options.md).

## See Also

### Constants

- [CIDetectorTracking](cidetectortracking.md): A key used to enable or disable face tracking for the detector. Use this option when you want to track faces across frames in a video.
- [CIDetectorMinFeatureSize](cidetectorminfeaturesize.md): A key used to specify the minimum size that the detector will recognize as a feature.
- [CIDetectorNumberOfAngles](cidetectornumberofangles.md): The number of perspectives to use for detecting a face in video input.
- [CIDetectorMaxFeatureCount](cidetectormaxfeaturecount.md): The key to the configuration dictionary whose value represents the maximum number of features the detector should return.

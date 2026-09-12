> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cidetectornumberofangles](https://developer.apple.com/documentation/coreimage/cidetectornumberofangles)

# CIDetectorNumberOfAngles (Swift)

**Framework:** Core Image  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The number of perspectives to use for detecting a face in video input.

## Declaration

```swift
let CIDetectorNumberOfAngles: String
```

<a id="Discussion"></a>

## Discussion

The value for this key is an `NSNumber` object containing the number 1, 3, 5, 7, 9, or 11. At higher numbers of angles, face detection in video becomes more accurate, but at a higher computational cost.

## See Also

### Constants

- [CIDetectorAccuracy](cidetectoraccuracy.md): A key used to specify the desired accuracy for the detector.
- [CIDetectorTracking](cidetectortracking.md): A key used to enable or disable face tracking for the detector. Use this option when you want to track faces across frames in a video.
- [CIDetectorMinFeatureSize](cidetectorminfeaturesize.md): A key used to specify the minimum size that the detector will recognize as a feature.
- [CIDetectorMaxFeatureCount](cidetectormaxfeaturecount.md): The key to the configuration dictionary whose value represents the maximum number of features the detector should return.

# CIDetectorNumberOfAngles (Objective-C)

**Framework:** Core Image  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The number of perspectives to use for detecting a face in video input.

## Declaration

```objectivec
extern NSString * const CIDetectorNumberOfAngles;
```

<a id="Discussion"></a>

## Discussion

The value for this key is an `NSNumber` object containing the number 1, 3, 5, 7, 9, or 11. At higher numbers of angles, face detection in video becomes more accurate, but at a higher computational cost.

## See Also

### Constants

- [CIDetectorAccuracy](cidetectoraccuracy.md): A key used to specify the desired accuracy for the detector.
- [CIDetectorTracking](cidetectortracking.md): A key used to enable or disable face tracking for the detector. Use this option when you want to track faces across frames in a video.
- [CIDetectorMinFeatureSize](cidetectorminfeaturesize.md): A key used to specify the minimum size that the detector will recognize as a feature.
- [CIDetectorMaxFeatureCount](cidetectormaxfeaturecount.md): The key to the configuration dictionary whose value represents the maximum number of features the detector should return.

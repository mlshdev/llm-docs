> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cidetectormaxfeaturecount](https://developer.apple.com/documentation/coreimage/cidetectormaxfeaturecount)

# CIDetectorMaxFeatureCount (Swift)

**Framework:** Core Image  
**Kind:** Global Variable  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The key to the configuration dictionary whose value represents the maximum number of features the detector should return.

## Declaration

```swift
let CIDetectorMaxFeatureCount: String
```

<a id="Discussion"></a>

## Discussion

The default value is 1.  Valid values fall between 1 and 256 inclusive.

## See Also

### Constants

- [CIDetectorAccuracy](cidetectoraccuracy.md): A key used to specify the desired accuracy for the detector.
- [CIDetectorTracking](cidetectortracking.md): A key used to enable or disable face tracking for the detector. Use this option when you want to track faces across frames in a video.
- [CIDetectorMinFeatureSize](cidetectorminfeaturesize.md): A key used to specify the minimum size that the detector will recognize as a feature.
- [CIDetectorNumberOfAngles](cidetectornumberofangles.md): The number of perspectives to use for detecting a face in video input.

# CIDetectorMaxFeatureCount (Objective-C)

**Framework:** Core Image  
**Kind:** Global Variable  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The key to the configuration dictionary whose value represents the maximum number of features the detector should return.

## Declaration

```objectivec
extern NSString * const CIDetectorMaxFeatureCount;
```

<a id="Discussion"></a>

## Discussion

The default value is 1.  Valid values fall between 1 and 256 inclusive.

## See Also

### Constants

- [CIDetectorAccuracy](cidetectoraccuracy.md): A key used to specify the desired accuracy for the detector.
- [CIDetectorTracking](cidetectortracking.md): A key used to enable or disable face tracking for the detector. Use this option when you want to track faces across frames in a video.
- [CIDetectorMinFeatureSize](cidetectorminfeaturesize.md): A key used to specify the minimum size that the detector will recognize as a feature.
- [CIDetectorNumberOfAngles](cidetectornumberofangles.md): The number of perspectives to use for detecting a face in video input.

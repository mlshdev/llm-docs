> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avspatialcapturediscomfortreason/subjecttooclose](https://developer.apple.com/documentation/avfoundation/avspatialcapturediscomfortreason/subjecttooclose)

# subjectTooClose (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+

A value that indicates the focus point of the current scene is too close.

## Declaration

```swift
static let subjectTooClose: AVSpatialCaptureDiscomfortReason
```

<a id="Discussion"></a>

## Discussion

The playback experience would likely be uncomfortable due to the subject being closer than the minimum focus distance of one or both of the lenses.

## See Also

### Discomfort reasons

- [notEnoughLight](notenoughlight.md): A value that indicates the lighting of the current scene isn’t bright enough.

# AVSpatialCaptureDiscomfortReasonSubjectTooClose (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+

A value that indicates the focus point of the current scene is too close.

## Declaration

```objectivec
extern AVSpatialCaptureDiscomfortReason const AVSpatialCaptureDiscomfortReasonSubjectTooClose;
```

<a id="Discussion"></a>

## Discussion

The playback experience would likely be uncomfortable due to the subject being closer than the minimum focus distance of one or both of the lenses.

## See Also

### Discomfort reasons

- [AVSpatialCaptureDiscomfortReasonNotEnoughLight](notenoughlight.md): A value that indicates the lighting of the current scene isn’t bright enough.

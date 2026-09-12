> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avspatialcapturediscomfortreason](https://developer.apple.com/documentation/avfoundation/avspatialcapturediscomfortreason)

# AVSpatialCaptureDiscomfortReason (Swift)

**Framework:** AVFoundation  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+

Constants that indicate the suitability of the current scene to create a comfortable viewing experience.

## Declaration

```swift
struct AVSpatialCaptureDiscomfortReason
```

## Topics

### Discomfort reasons

- [notEnoughLight](avspatialcapturediscomfortreason/notenoughlight.md): A value that indicates the lighting of the current scene isn’t bright enough.
- [subjectTooClose](avspatialcapturediscomfortreason/subjecttooclose.md): A value that indicates the focus point of the current scene is too close.

### Initializers

- [init(rawValue:)](avspatialcapturediscomfortreason/init%28rawvalue_%29.md): Creates a discomfort reason with a string value.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Supporting spatial capture

- [spatialCaptureDiscomfortReasons](avcapturedevice/spatialcapturediscomfortreasons.md): Reasons why current environmental conditions aren’t suitable to capturing spatial videos that are comfortable to view.

# AVSpatialCaptureDiscomfortReason (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Alias  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+

Constants that indicate the suitability of the current scene to create a comfortable viewing experience.

## Declaration

```objectivec
typedef NSString * AVSpatialCaptureDiscomfortReason;
```

## Topics

### Discomfort reasons

- [AVSpatialCaptureDiscomfortReasonNotEnoughLight](avspatialcapturediscomfortreason/notenoughlight.md): A value that indicates the lighting of the current scene isn’t bright enough.
- [AVSpatialCaptureDiscomfortReasonSubjectTooClose](avspatialcapturediscomfortreason/subjecttooclose.md): A value that indicates the focus point of the current scene is too close.

## See Also

### Supporting spatial capture

- [spatialCaptureDiscomfortReasons](avcapturedevice/spatialcapturediscomfortreasons.md): Reasons why current environmental conditions aren’t suitable to capturing spatial videos that are comfortable to view.

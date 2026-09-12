> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxeyetype](https://developer.apple.com/documentation/professional_video_applications/fxeyetype)

# FxEyeType (Swift)

**Framework:** Professional Video Applications  
**Kind:** Structure  
**Availability:** FxPlug 4.0+

Identifies which eye is being sent from a stereoscopic project.

## Declaration

```swift
struct FxEyeType
```

## Topics

### Constants

- [kFxEyeType_LEFT](kfxeyetype_left.md): The left eye portion of the stereoscopic image.
- [kFxEyeType_MONO](kfxeyetype_mono.md): Monoscopic only.
- [kFxEyeType_RIGHT](kfxeyetype_right.md): The right eye portion of the stereoscopic image.

### Initializers

- [init(\_:)](fxeyetype/init%28__%29.md)
- [init(rawValue:)](fxeyetype/init%28rawvalue_%29.md)

### Instance Properties

- [rawValue](fxeyetype/rawvalue.md)

### Default Implementations

- [Equatable Implementations](fxeyetype/equatable-implementations.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Enumerations

- [FxError](fxerror.md): Errors returned by plug-in hosts applications.
- [FxImageTileRequestSource](fximagetilerequestsource.md): An enumeration that identifies the requested frame.

# FxEyeType (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Enumeration

Identifies which eye is being sent from a stereoscopic project.

## Declaration

```objectivec
typedef enum FxEyeType;
```

## Topics

### Constants

- [kFxEyeType_LEFT](kfxeyetype_left.md): The left eye portion of the stereoscopic image.
- [kFxEyeType_MONO](kfxeyetype_mono.md): Monoscopic only.
- [kFxEyeType_RIGHT](kfxeyetype_right.md): The right eye portion of the stereoscopic image.

## See Also

### Enumerations

- [FxError](fxerror.md): Errors returned by plug-in hosts applications.
- [FxImageTileRequestSource](fximagetilerequestsource.md): An enumeration that identifies the requested frame.

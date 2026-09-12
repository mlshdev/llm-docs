> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fximagetilerequestsource](https://developer.apple.com/documentation/professional_video_applications/fximagetilerequestsource)

# FxImageTileRequestSource (Swift)

**Framework:** Professional Video Applications  
**Kind:** Structure  
**Availability:** FxPlug 4.0+

An enumeration that identifies the requested frame.

## Declaration

```swift
struct FxImageTileRequestSource
```

## Topics

### Constants

- [kFxImageTileRequestSourceEffectClip](kfximagetilerequestsourceeffectclip.md): A constant that indicates that the requested frame is associated with the source clip.
- [kFxImageTileRequestSourceNone](kfximagetilerequestsourcenone.md): A constant that indicates that the requested frame is not associated with an effect or parameter.
- [kFxImageTileRequestSourceOutput](kfximagetilerequestsourceoutput.md): A constant that indicates that the requested frame is the output of a plug-in.
- [kFxImageTileRequestSourceParameter](kfximagetilerequestsourceparameter.md): A constant that indicates that the requested frame is associated with an image well parameter.

### Initializers

- [init(\_:)](fximagetilerequestsource/init%28__%29.md)
- [init(rawValue:)](fximagetilerequestsource/init%28rawvalue_%29.md)

### Instance Properties

- [rawValue](fximagetilerequestsource/rawvalue.md)

### Default Implementations

- [Equatable Implementations](fximagetilerequestsource/equatable-implementations.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Enumerations

- [FxError](fxerror.md): Errors returned by plug-in hosts applications.
- [FxEyeType](fxeyetype.md): Identifies which eye is being sent from a stereoscopic project.

# FxImageTileRequestSource (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Enumeration

An enumeration that identifies the requested frame.

## Declaration

```objectivec
typedef enum FxImageTileRequestSource;
```

## Topics

### Constants

- [kFxImageTileRequestSourceEffectClip](kfximagetilerequestsourceeffectclip.md): A constant that indicates that the requested frame is associated with the source clip.
- [kFxImageTileRequestSourceNone](kfximagetilerequestsourcenone.md): A constant that indicates that the requested frame is not associated with an effect or parameter.
- [kFxImageTileRequestSourceOutput](kfximagetilerequestsourceoutput.md): A constant that indicates that the requested frame is the output of a plug-in.
- [kFxImageTileRequestSourceParameter](kfximagetilerequestsourceparameter.md): A constant that indicates that the requested frame is associated with an image well parameter.

## See Also

### Enumerations

- [FxError](fxerror.md): Errors returned by plug-in hosts applications.
- [FxEyeType](fxeyetype.md): Identifies which eye is being sent from a stereoscopic project.

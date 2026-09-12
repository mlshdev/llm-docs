> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiocomponentvalidationresult](https://developer.apple.com/documentation/audiotoolbox/audiocomponentvalidationresult)

# AudioComponentValidationResult (Swift)

**Framework:** Audio Toolbox  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

## Declaration

```swift
enum AudioComponentValidationResult
```

## Topics

### Constants

- [AudioComponentValidationResult.failed](audiocomponentvalidationresult/failed.md)
- [AudioComponentValidationResult.passed](audiocomponentvalidationresult/passed.md)
- [AudioComponentValidationResult.timedOut](audiocomponentvalidationresult/timedout.md)
- [AudioComponentValidationResult.unauthorizedError_Init](audiocomponentvalidationresult/unauthorizederror_init.md)
- [AudioComponentValidationResult.unauthorizedError_Open](audiocomponentvalidationresult/unauthorizederror_open.md)
- [AudioComponentValidationResult.unknown](audiocomponentvalidationresult/unknown.md)

### Initializers

- [init(rawValue:)](audiocomponentvalidationresult/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Validating an Audio Component

- [AudioComponentValidate(\_:\_:\_:)](audiocomponentvalidate%28______%29.md)
- [kAudioComponentValidationParameter_LoadOutOfProcess](kaudiocomponentvalidationparameter_loadoutofprocess.md)

# AudioComponentValidationResult (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

## Declaration

```objectivec
enum AudioComponentValidationResult : UInt32;
```

## Topics

### Constants

- [kAudioComponentValidationResult_Failed](audiocomponentvalidationresult/failed.md)
- [kAudioComponentValidationResult_Passed](audiocomponentvalidationresult/passed.md)
- [kAudioComponentValidationResult_TimedOut](audiocomponentvalidationresult/timedout.md)
- [kAudioComponentValidationResult_UnauthorizedError_Init](audiocomponentvalidationresult/unauthorizederror_init.md)
- [kAudioComponentValidationResult_UnauthorizedError_Open](audiocomponentvalidationresult/unauthorizederror_open.md)
- [kAudioComponentValidationResult_Unknown](audiocomponentvalidationresult/unknown.md)

## See Also

### Validating an Audio Component

- [AudioComponentValidate](audiocomponentvalidate%28______%29.md)
- [kAudioComponentValidationParameter_LoadOutOfProcess](kaudiocomponentvalidationparameter_loadoutofprocess.md)

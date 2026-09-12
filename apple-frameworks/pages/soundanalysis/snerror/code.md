> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/soundanalysis/snerror/code](https://developer.apple.com/documentation/soundanalysis/snerror/code)

# SNError.Code (Swift)

**Framework:** Sound Analysis  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The enumerated error codes that the Sound Analysis framework produces.

## Declaration

```swift
enum Code
```

## Topics

### Errors

- [SNError.Code.invalidModel](code/invalidmodel.md): An error that indicates the sound classifier’s underlying Core ML model is an invalid model type.
- [SNError.Code.invalidFormat](code/invalidformat.md): An error that indicates the audio data’s format isn’t valid.
- [SNError.Code.invalidFile](code/invalidfile.md): An error that indicates an audio file is invalid.
- [SNError.Code.operationFailed](code/operationfailed.md): An error that occurs when the framework fails to analyze audio.
- [SNError.Code.unknownError](code/unknownerror.md): An error that represents a failure that no other error handles.

### Initializers

- [init(rawValue:)](code/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors

- [SNError](../snerror.md): An error from the Sound Analysis framework.
- [SNErrorDomain](../snerrordomain.md): A string that identifies the Sound Analysis error domain.

# SNErrorCode (Objective-C)

**Framework:** Sound Analysis  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The enumerated error codes that the Sound Analysis framework produces.

## Declaration

```objectivec
enum SNErrorCode : NSInteger;
```

## Topics

### Errors

- [SNErrorCodeInvalidModel](code/invalidmodel.md): An error that indicates the sound classifier’s underlying Core ML model is an invalid model type.
- [SNErrorCodeInvalidFormat](code/invalidformat.md): An error that indicates the audio data’s format isn’t valid.
- [SNErrorCodeInvalidFile](code/invalidfile.md): An error that indicates an audio file is invalid.
- [SNErrorCodeOperationFailed](code/operationfailed.md): An error that occurs when the framework fails to analyze audio.
- [SNErrorCodeUnknownError](code/unknownerror.md): An error that represents a failure that no other error handles.

## See Also

### Errors

- [SNErrorDomain](../snerrordomain.md): A string that identifies the Sound Analysis error domain.

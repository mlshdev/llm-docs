> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/soundanalysis/snerror](https://developer.apple.com/documentation/soundanalysis/snerror)

# SNError

**Framework:** Sound Analysis  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An error from the Sound Analysis framework.

## Declaration

```swift
struct SNError
```

## Topics

### Error Codes

- [invalidModel](snerror/invalidmodel.md): An error that indicates the sound classifier’s underlying Core ML model is an invalid model type.
- [invalidFormat](snerror/invalidformat.md): An error that indicates the audio data’s format isn’t valid.
- [invalidFile](snerror/invalidfile.md): An error that indicates an audio file is invalid.
- [operationFailed](snerror/operationfailed.md): An error that occurs when the framework fails to analyze audio.
- [unknownError](snerror/unknownerror.md): An error that represents a failure that no other error handles.

### Error Information

- [SNError.Code](snerror/code.md): The enumerated error codes that the Sound Analysis framework produces.

### Error Domain

- [SNErrorDomain](snerrordomain.md): A string that identifies the Sound Analysis error domain.
- [errorDomain](snerror/errordomain.md): A statically accessible string that identifies the Sound Analysis error domain.

## Relationships

### Conforms To

- [CustomNSError](../foundation/customnserror.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors

- [SNError.Code](snerror/code.md): The enumerated error codes that the Sound Analysis framework produces.
- [SNErrorDomain](snerrordomain.md): A string that identifies the Sound Analysis error domain.

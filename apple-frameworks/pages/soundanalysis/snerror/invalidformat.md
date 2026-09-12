> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/soundanalysis/snerror/invalidformat](https://developer.apple.com/documentation/soundanalysis/snerror/invalidformat)

# invalidFormat

**Framework:** Sound Analysis  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An error that indicates the audio data’s format isn’t valid.

## Declaration

```swift
static var invalidFormat: SNError.Code { get }
```

## See Also

### Error Codes

- [invalidModel](invalidmodel.md): An error that indicates the sound classifier’s underlying Core ML model is an invalid model type.
- [invalidFile](invalidfile.md): An error that indicates an audio file is invalid.
- [operationFailed](operationfailed.md): An error that occurs when the framework fails to analyze audio.
- [unknownError](unknownerror.md): An error that represents a failure that no other error handles.

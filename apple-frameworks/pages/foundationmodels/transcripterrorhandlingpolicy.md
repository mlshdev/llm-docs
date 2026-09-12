> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/transcripterrorhandlingpolicy](https://developer.apple.com/documentation/foundationmodels/transcripterrorhandlingpolicy)

# TranscriptErrorHandlingPolicy

**Framework:** Foundation Models  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Options for controlling how a language model session manages the transcript when errors occur.

## Declaration

```swift
struct TranscriptErrorHandlingPolicy
```

## Topics

### Error handling policies

- [preserveTranscript](transcripterrorhandlingpolicy/preservetranscript.md): A policy that keeps the current transcript as is.
- [revertTranscript](transcripterrorhandlingpolicy/reverttranscript.md): A policy that reverts the transcript back to the state it was in just before the most recent request.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring the transcript error handling policy

- [transcriptErrorHandlingPolicy](languagemodelsession/transcripterrorhandlingpolicy.md): The session’s policy for managing the transcript when errors occur.

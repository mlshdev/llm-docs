> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/transcripterrorhandlingpolicy/reverttranscript

# revertTranscript

**Framework:** Foundation Models  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A policy that reverts the transcript back to the state it was in just before the most recent request.

## Declaration

```swift
static let revertTranscript: TranscriptErrorHandlingPolicy
```

## See Also

### Error handling policies

- [preserveTranscript](preservetranscript.md): A policy that keeps the current transcript as is.

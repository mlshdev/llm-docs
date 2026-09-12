> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/transcripterrorhandlingpolicy/preservetranscript](https://developer.apple.com/documentation/foundationmodels/transcripterrorhandlingpolicy/preservetranscript)

# preserveTranscript

**Framework:** Foundation Models  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A policy that keeps the current transcript as is.

## Declaration

```swift
static let preserveTranscript: TranscriptErrorHandlingPolicy
```

<a id="discussion"></a>

## Discussion

The last entry of the transcript may be partially generated.

## See Also

### Error handling policies

- [revertTranscript](reverttranscript.md): A policy that reverts the transcript back to the state it was in just before the most recent request.

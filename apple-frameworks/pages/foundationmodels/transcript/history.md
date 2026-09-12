> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/transcript/history](https://developer.apple.com/documentation/foundationmodels/transcript/history)

# history

**Framework:** Foundation Models  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The transcript entries excluding the leading instructions entry, if present.

## Declaration

```swift
var history: Transcript.HistoryView { get set }
```

## Mentioned In

- [Inspecting session transcripts and reporting model feedback](../inspecting-session-transcripts-and-reporting-model-feedback.md)

<a id="discussion"></a>

## Discussion

Use `history` to access just the conversational entries — prompts, responses, tool calls, and tool outputs — without the initial instructions that were used to configure the session.

When reading, if the first entry in the transcript is an [Transcript.Entry.instructions(\_:)](entry/instructions%28__%29.md) entry, it is excluded from the returned view. All other entries, including any subsequent instructions entries, are included.

When writing, the new value replaces all entries except the leading instructions entry, which is preserved.

## See Also

### Accessing the transcript history

- [Transcript.HistoryView](historyview.md): A mutable view into the conversational entries of a [Transcript](../transcript.md).

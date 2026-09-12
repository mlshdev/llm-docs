> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikitcloudmedia/queueplaypointer](https://developer.apple.com/documentation/sirikitcloudmedia/queueplaypointer)

# QueuePlayPointer

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Object  
**Availability:** SiriKit Cloud Media 1.0.2+

A position within a playback queue.

## Declaration

```
object QueuePlayPointer
```

## Properties

- `contentIdentifier` — `ContentIdentifier`: The current content.
  **Minimum length:** `1`  
  **Maximum length:** `1000`
- `offsetInMillis` — `int64`: The number of milliseconds into the playback progress of the current content. It’s the point where playback resumes after pausing.

## See Also

### Creating or Updating a Playback Queue

- [Queue](queue.md): A sequence of media content for playback, with links to the previous and next segments of a full playback queue.
- [QueueIdentifier](queueidentifier.md): A stable identifier for a playback queue.
- [QueueInsertPointer](queueinsertpointer.md): Instructions for editing the current playback queue.

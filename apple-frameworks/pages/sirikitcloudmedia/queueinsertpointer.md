> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikitcloudmedia/queueinsertpointer](https://developer.apple.com/documentation/sirikitcloudmedia/queueinsertpointer)

# QueueInsertPointer

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Object  
**Availability:** SiriKit Cloud Media 1.0.2+

Instructions for editing the current playback queue.

## Declaration

```
object QueueInsertPointer
```

## Properties

- `afterIdentifier` — `ContentIdentifier`: The client inserts the new queue segment after the content with this identifier.
  **Minimum length:** `1`  
  **Maximum length:** `1000`
- `replace` — `boolean`: If this value is `true`, the client discards all of the current queue’s content after the item that `afterIdentifier` specifies.
  **Default:** `false`

## See Also

### Creating or Updating a Playback Queue

- [Queue](queue.md): A sequence of media content for playback, with links to the previous and next segments of a full playback queue.
- [QueueIdentifier](queueidentifier.md): A stable identifier for a playback queue.
- [QueuePlayPointer](queueplaypointer.md): A position within a playback queue.

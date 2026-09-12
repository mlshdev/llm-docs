> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikitcloudmedia/playercontext](https://developer.apple.com/documentation/sirikitcloudmedia/playercontext)

# PlayerContext

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Object  
**Availability:** SiriKit Cloud Media 1.0.2+

Information about the current playback content.

## Declaration

```
object PlayerContext
```

## Properties

- `activityIdentifier` — `string`: The ID for the client’s current [UserActivity](useractivity.md).
  **Maximum length:** `250`
- `queueIdentifier` — `QueueIdentifier`: The ID of the playback queue that contains the current content.
  **Minimum length:** `1`  
  **Maximum length:** `1024`
- `contentIdentifier` — `ContentIdentifier`: The ID for the content the client is playing.
  **Minimum length:** `1`  
  **Maximum length:** `1000`
- `offsetInMillis` — `int64`: The number of milliseconds into the playback progress of the current content.
- `playbackSpeed` — `double`: The content’s playback speed.
  **Default:** `1`

## See Also

### Requests

- [Invocation](invocation.md): Properties that clients include in requests to all intent endpoints.
- [Session](session.md): Information the client provides about a sequence of requests and responses to process an intent.
- [Constraints](constraints.md): Client-originated limitations on how to process a request, such as including explicit content and how much content the client device can receive in a response.
- [InvocationResponse](invocationresponse.md): Properties to include in responses from all intent endpoints.

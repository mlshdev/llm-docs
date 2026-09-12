> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikitcloudmedia/constraints](https://developer.apple.com/documentation/sirikitcloudmedia/constraints)

# Constraints

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Object  
**Availability:** SiriKit Cloud Media 1.0.2+

Client-originated limitations on how to process a request, such as including explicit content and how much content the client device can receive in a response.

## Declaration

```
object Constraints
```

## Properties

- `allowExplicitContent` — `boolean`: An indicator of whether it’s OK for your service to provide explicit content.
  **Default:** `true`
- `maximumQueueSegmentItemCount` — `uint32`: The maximum number of pieces to provide in a [Queue](queue.md).
  **Default:** `1000`  
  **Minimum:** `50`  
  **Maximum:** `1000`
- `updateUserTasteProfile` — `boolean`: An indicator of whether to use these interactions to update your service’s model of the user’s likes and dislikes.
  **Default:** `true`

## See Also

### Requests

- [Invocation](invocation.md): Properties that clients include in requests to all intent endpoints.
- [Session](session.md): Information the client provides about a sequence of requests and responses to process an intent.
- [PlayerContext](playercontext.md): Information about the current playback content.
- [InvocationResponse](invocationresponse.md): Properties to include in responses from all intent endpoints.

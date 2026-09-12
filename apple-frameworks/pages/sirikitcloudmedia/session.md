> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikitcloudmedia/session](https://developer.apple.com/documentation/sirikitcloudmedia/session)

# Session

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Object  
**Availability:** SiriKit Cloud Media 1.0.2+

Information the client provides about a sequence of requests and responses to process an intent.

## Declaration

```
object Session
```

## Properties

- `identifier` — `string` (required): A stable identifier for all requests and responses relating to a specific intent.
  **Minimum length:** `1`  
  **Maximum length:** `128`
- `constraints` — `Constraints` (required): Client limitations on content quantity and type that apply to all responses your service makes for this session.
- `requested` — `date-time` (required): The time the user initiates the request.
- `deadline` — `date-time` (required): The time by which the client expects a response from your service to provide a real-time interaction with the user.
- `playerContext` — `PlayerContext`: Information about content the client is playing, if any.
- `version` — `string` (required): The version of the `SiriKitMediaAPI` library the client is using.
  **Allowed values:** `/[0-9]+\.[0-9]+\.[0-9]+/`

## See Also

### Requests

- [Invocation](invocation.md): Properties that clients include in requests to all intent endpoints.
- [Constraints](constraints.md): Client-originated limitations on how to process a request, such as including explicit content and how much content the client device can receive in a response.
- [PlayerContext](playercontext.md): Information about the current playback content.
- [InvocationResponse](invocationresponse.md): Properties to include in responses from all intent endpoints.

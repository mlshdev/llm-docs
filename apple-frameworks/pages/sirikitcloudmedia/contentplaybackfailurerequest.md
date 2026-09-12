> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikitcloudmedia/contentplaybackfailurerequest](https://developer.apple.com/documentation/sirikitcloudmedia/contentplaybackfailurerequest)

# ContentPlaybackFailureRequest

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Object  
**Availability:** SiriKit Cloud Media 1.0.2+

A request the client sends to recover from failed content playback.

## Declaration

```
object ContentPlaybackFailureRequest
```

## Properties

- `constraints` — `Constraints` (required): Limitations on the type and quantity of content to provide in the recovery [Queue](queue.md).
- `contentFailure` — `ContentFailure` (required): An object that describes why playback failed.
- `nextContentUrl` — `string`: The URL the client uses to request the next queue segment.
  **Minimum length:** `0`  
  **Maximum length:** `2000`
- `previousContentUrl` — `string`: The URL the client uses to request the previous queue segment.
  **Minimum length:** `0`  
  **Maximum length:** `2000`
- `sessionIdentifier` — `string` (required): The identifier that associates the requests and  responses of a specific intent.
  **Minimum length:** `1`  
  **Maximum length:** `128`
- `timestamp` — `date-time`: The time when the playback failure occurred.
- `userActivity` — `UserActivity`: A description of the client’s current playback queue.
- `version` — `string` (required): The version of the client’s `SiriKitMediaAPI` library.
  **Maximum length:** `25`  
  **Allowed values:** `/[0-9]+\.[0-9]+\.[0-9]+/`
- `whilePlaying` — `PlayerContext` (required): The content that failed to play.

<a id="Discussion"></a>

## Discussion

If the playback of a queue fails to start, or there’s an error during playback from which the client can recover, the client sends this request to your service to report the failure and retrieve a new queue.

## See Also

### Playback Failure

- [Recover from Content Playback Failure](contentplaybackfailure.md): Provide a recovery queue that allows the client to resume playback after an error.
- [ContentFailure](contentfailure.md): An object that describes why the client can’t play a specific piece of content.
- [ContentPlaybackFailureResponse](contentplaybackfailureresponse.md): A response that allows the client to recover from failed content playback.

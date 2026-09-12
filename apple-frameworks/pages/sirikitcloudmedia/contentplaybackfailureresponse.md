> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikitcloudmedia/contentplaybackfailureresponse](https://developer.apple.com/documentation/sirikitcloudmedia/contentplaybackfailureresponse)

# ContentPlaybackFailureResponse

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Object  
**Availability:** SiriKit Cloud Media 1.0.2+

A response that allows the client to recover from failed content playback.

## Declaration

```
object ContentPlaybackFailureResponse
```

## Properties

- `version` — `string`: The version of the client’s `SiriKitMediaAPI` library.
  **Maximum length:** `25`  
  **Allowed values:** `/[0-9]+\.[0-9]+\.[0-9]+/`
- `queue` — `Queue`: The [Queue](queue.md) segment the client uses to recover from the playback failure.

## See Also

### Playback Failure

- [Recover from Content Playback Failure](contentplaybackfailure.md): Provide a recovery queue that allows the client to resume playback after an error.
- [ContentFailure](contentfailure.md): An object that describes why the client can’t play a specific piece of content.
- [ContentPlaybackFailureRequest](contentplaybackfailurerequest.md): A request the client sends to recover from failed content playback.

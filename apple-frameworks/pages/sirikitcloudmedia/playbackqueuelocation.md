> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikitcloudmedia/playbackqueuelocation](https://developer.apple.com/documentation/sirikitcloudmedia/playbackqueuelocation)

# PlaybackQueueLocation

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Type  
**Availability:** SiriKit Cloud Media 1.0.2+

Possible locations in a playback queue to insert a media item.

## Declaration

```
string PlaybackQueueLocation
```

## Possible Values

- `now`: Play the media item immediately, interrupting any current playback.
- `next`: Play the media item after the current item finishes.
- `later`: Add the media item to the end of the current playback queue.
- `unknown`: An unknown playback queue location.

## See Also

### Resolving the Intended Queue Location

- [PlayMediaIntentHandlingResolvePlaybackQueueLocationInvocationResponse](playmediaintenthandlingresolveplaybackqueuelocationinvocationresponse.md): Your service’s response to a request to resolve the queue location in a play media intent.
- [PlaybackQueueLocationResolutionResult](playbackqueuelocationresolutionresult.md): Information about whether your service can resolve the specified queue location.

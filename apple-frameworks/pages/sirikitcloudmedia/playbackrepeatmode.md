> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikitcloudmedia/playbackrepeatmode](https://developer.apple.com/documentation/sirikitcloudmedia/playbackrepeatmode)

# PlaybackRepeatMode

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Type  
**Availability:** SiriKit Cloud Media 1.0.2+

The possible repeat modes for a media queue.

## Declaration

```
string PlaybackRepeatMode
```

## Possible Values

- `none`: Don’t repeat media items.
- `all`: Repeat all media items within the playback queue.
- `one`: Repeat the current media item.
- `unknown`: An unknown repeat mode.

## See Also

### Resolving the Intended Repeat Mode

- [PlayMediaIntentHandlingResolvePlaybackRepeatModeInvocationResponse](playmediaintenthandlingresolveplaybackrepeatmodeinvocationresponse.md): Your service’s response to a request to resolve the repeat mode in a play media intent.
- [PlayMediaIntentHandlingResolvePlaybackRepeatModeInvocationResponse.Result](playmediaintenthandlingresolveplaybackrepeatmodeinvocationresponse/result-data.dictionary.md): The result of resolving the repeat mode for a play media intent.
- [PlaybackRepeatModeResolutionResult](playbackrepeatmoderesolutionresult.md): Information about whether your service can identify the specified repeat mode.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmljs/player/1627331-statewillchange](https://developer.apple.com/documentation/tvmljs/player/1627331-statewillchange)

# stateWillChange

**Interface language:** Data

**Framework:** TVMLKit JS  
**Kind:** Instance Property  
**Availability:** tvOS 9.0+

An event that indicates the state of the player is about to change.

## Declaration

```
attribute  stateWillChange;
```

<a id="discussion"></a>

## Discussion

The listener is passed an event object with the following attributes:

- `oldState`—The previous state of the player. Valid values are `playing`, `paused`, and `scanning`.
- `state`—The state that the player is has switched to. Valid values are `playing`, `paused`, and `scanning`.
- `target`—The event object, which is the [Player](../player.md) object.
- `timeStamp`—The time that the event occurred.
- `type`—The name of the event.

## See Also

### Responding to Events

- [mediaItemDidChange](1627385-mediaitemdidchange.md): An event notifying the listener that the player changed a media item.
- [mediaItemWillChange](1627345-mediaitemwillchange.md): An event notifying the listener that the player is about to changed a media item.
- [playbackDidStall](1682114-playbackdidstall.md): An event that indicates that playback has stalled.
- [playbackError](1682115-playbackerror.md): An event that indicates an error has occurred during playback.
- [requestSeekToTime](1627354-requestseektotime.md): An event that indicates whether a seek-to-time request was accomplished.
- [shouldChangeToMediaAtIndex](1682117-shouldchangetomediaatindex.md): An event that indicates a request to play a media item in a different index is received.
- [shouldHandleStateChange](1627428-shouldhandlestatechange.md): An event that indicates a state change request has occurred.
- [stateDidChange](1627390-statedidchange.md): An event that indicates the state of the player has changed.
- [timeBoundaryDidCross](1627443-timeboundarydidcross.md): An event that indicates a specific playback time in the media item has been crossed.
- [timeDidChange](1627344-timedidchange.md): An event that happens at a specified interval.
- [timedMetadata](1627384-timedmetadata.md): An event that is triggered whenever a specified piece of metadata is encountered.
- [transportBarVisibilityDidChange](1682120-transportbarvisibilitydidchange.md): An event that indicates the state of the transport bar has changed.

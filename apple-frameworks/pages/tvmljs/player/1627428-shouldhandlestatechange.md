> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmljs/player/1627428-shouldhandlestatechange](https://developer.apple.com/documentation/tvmljs/player/1627428-shouldhandlestatechange)

# shouldHandleStateChange

**Interface language:** Data

**Framework:** TVMLKit JS  
**Kind:** Instance Property  
**Availability:** tvOS 9.0+

An event that indicates a state change request has occurred.

## Declaration

```
attribute  shouldHandleStateChange;
```

<a id="discussion"></a>

## Discussion

This event is called when the user requests a change, but before the change occurs. Only a single `shouldHandleStateChange` listener can be active at a time. If multiple listeners are set to listen for `shouldHandleStateChange`, only the last one will be updated. The listener is passed an event object with the following attributes:

- `duration`—The duration, in seconds, of the asset being played.
- `elapsedTime`—The elapsed time, in seconds, of the asset being played.
- `oldState`—The previous state of the player. Valid values are `playing`, `paused`, and `scanning`.
- `state`—The state that the player is about to switch to. Valid values are `playing`, `paused`, and `scanning`.
- `target`—The event object, which is the [Player](../player.md) object.
- `timeStamp`—The time that the event occurred.
- `type`—The name of the event.

The listener must return one of the following values:

- `true`. The state is allowed.
- `false`. The state change is not allowed.

> **Note**

> This event occurs after a user has performed an action and needs to be handled as quickly as possible.

## See Also

### Responding to Events

- [mediaItemDidChange](1627385-mediaitemdidchange.md): An event notifying the listener that the player changed a media item.
- [mediaItemWillChange](1627345-mediaitemwillchange.md): An event notifying the listener that the player is about to changed a media item.
- [playbackDidStall](1682114-playbackdidstall.md): An event that indicates that playback has stalled.
- [playbackError](1682115-playbackerror.md): An event that indicates an error has occurred during playback.
- [requestSeekToTime](1627354-requestseektotime.md): An event that indicates whether a seek-to-time request was accomplished.
- [shouldChangeToMediaAtIndex](1682117-shouldchangetomediaatindex.md): An event that indicates a request to play a media item in a different index is received.
- [stateDidChange](1627390-statedidchange.md): An event that indicates the state of the player has changed.
- [stateWillChange](1627331-statewillchange.md): An event that indicates the state of the player is about to change.
- [timeBoundaryDidCross](1627443-timeboundarydidcross.md): An event that indicates a specific playback time in the media item has been crossed.
- [timeDidChange](1627344-timedidchange.md): An event that happens at a specified interval.
- [timedMetadata](1627384-timedmetadata.md): An event that is triggered whenever a specified piece of metadata is encountered.
- [transportBarVisibilityDidChange](1682120-transportbarvisibilitydidchange.md): An event that indicates the state of the transport bar has changed.

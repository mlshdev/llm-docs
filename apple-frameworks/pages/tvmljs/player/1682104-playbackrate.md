> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmljs/player/1682104-playbackrate](https://developer.apple.com/documentation/tvmljs/player/1682104-playbackrate)

# playbackRate

**Interface language:** Data

**Framework:** TVMLKit JS  
**Kind:** Instance Property  
**Availability:** tvOS 10.0+

The playback speed.

## Declaration

```
attribute int playbackRate;
```

<a id="discussion"></a>

## Discussion

The default playback speed is `1.0`. Speeds with values smaller than `1.0` play in slow motion. Values higher than `1.0` are time-lapsed. Setting the playback rate to `0` or `1` is not supported, use [stop](1627406-stop.md) and [play](1627432-play.md) respectively.

## See Also

### Controlling Playback

- [changeToMediaAtIndex](1682100-changetomediaatindex.md): Immediately begins playing the media item at the specified index in the playlist.
- [pause](1627417-pause.md): Pauses the currently playing media item.
- [next](1682103-next.md): Immediately begins playing the next media item in the playlist.
- [play](1627432-play.md): Plays the currently selected media item.
- [playbackState](1627387-playbackstate.md): The current state of the player.
- [previous](1682106-previous.md): Immediately begins playing the previous media item in the playlist.
- [seekToTime](1627368-seektotime.md): Sets the playback point to a specified time.
- [stop](1627406-stop.md): Stops the currently playing item and dismisses the player UI.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmljs/player/1627387-playbackstate](https://developer.apple.com/documentation/tvmljs/player/1627387-playbackstate)

# playbackState

**Interface language:** Data

**Framework:** TVMLKit JS  
**Kind:** Instance Property  
**Availability:** tvOS 9.0+

The current state of the player.

## Declaration

```
readonly attribute String playbackState;
```

<a id="discussion"></a>

## Discussion

This property can contain the following valid values: `begin`, `end`, `loading`, `playing`, `paused`, and `scanning`.

## See Also

### Controlling Playback

- [changeToMediaAtIndex](1682100-changetomediaatindex.md): Immediately begins playing the media item at the specified index in the playlist.
- [pause](1627417-pause.md): Pauses the currently playing media item.
- [next](1682103-next.md): Immediately begins playing the next media item in the playlist.
- [play](1627432-play.md): Plays the currently selected media item.
- [playbackRate](1682104-playbackrate.md): The playback speed.
- [previous](1682106-previous.md): Immediately begins playing the previous media item in the playlist.
- [seekToTime](1627368-seektotime.md): Sets the playback point to a specified time.
- [stop](1627406-stop.md): Stops the currently playing item and dismisses the player UI.

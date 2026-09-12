> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmljs/player/1682100-changetomediaatindex](https://developer.apple.com/documentation/tvmljs/player/1682100-changetomediaatindex)

# changeToMediaAtIndex

**Interface language:** Data

**Framework:** TVMLKit JS  
**Kind:** Instance Method  
**Availability:** tvOS 10.0+

Immediately begins playing the media item at the specified index in the playlist.

## Declaration

```
void changeToMediaAtIndex(
    in int index
);
```

## Parameters

- `index`: An integer indicating a position in the playlist.

## See Also

### Controlling Playback

- [pause](1627417-pause.md): Pauses the currently playing media item.
- [next](1682103-next.md): Immediately begins playing the next media item in the playlist.
- [play](1627432-play.md): Plays the currently selected media item.
- [playbackState](1627387-playbackstate.md): The current state of the player.
- [playbackRate](1682104-playbackrate.md): The playback speed.
- [previous](1682106-previous.md): Immediately begins playing the previous media item in the playlist.
- [seekToTime](1627368-seektotime.md): Sets the playback point to a specified time.
- [stop](1627406-stop.md): Stops the currently playing item and dismisses the player UI.

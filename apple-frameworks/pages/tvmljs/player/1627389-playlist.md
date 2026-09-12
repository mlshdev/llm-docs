> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmljs/player/1627389-playlist](https://developer.apple.com/documentation/tvmljs/player/1627389-playlist)

# playlist

**Interface language:** Data

**Framework:** TVMLKit JS  
**Kind:** Instance Property  
**Availability:** tvOS 9.0+

The playlist for a player.

## Declaration

```
attribute Playlist playlist;
```

<a id="discussion"></a>

## Discussion

Setting this attribute changes the [Playlist](../playlist.md) object associated with the player. Inspect this attribute to get the [Playlist](../playlist.md) object currently associated with the player.

## See Also

### Setting Up the Player

- [interactiveOverlayDismissable](2123044-interactiveoverlaydismissable.md): Determines if an interactive overlay can be dismissed using the Menu button.
- [interactiveOverlayDocument](2123043-interactiveoverlaydocument.md): A DOM document that is presented over the entire video player, including the transport bar.
- [overlayDocument](1627320-overlaydocument.md): The annotations for a video created by placing a DOM document over the video.
- [Player](1627447-player.md): Creates a new player object.
- [present](1627418-present.md): Shows the player UI if it is not currently visible.

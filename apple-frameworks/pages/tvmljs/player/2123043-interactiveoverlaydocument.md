> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmljs/player/2123043-interactiveoverlaydocument](https://developer.apple.com/documentation/tvmljs/player/2123043-interactiveoverlaydocument)

# interactiveOverlayDocument

**Interface language:** Data

**Framework:** TVMLKit JS  
**Kind:** Instance Property  
**Availability:** tvOS 10.0+

A DOM document that is presented over the entire video player, including the transport bar.

## Declaration

```
attribute Document interactiveOverlayDocument;
```

<a id="discussion"></a>

## Discussion

The interactive overlay document can contain focusable elements and can be any template document. Set this attribute to `null` to remove the current overlay document.

## See Also

### Setting Up the Player

- [interactiveOverlayDismissable](2123044-interactiveoverlaydismissable.md): Determines if an interactive overlay can be dismissed using the Menu button.
- [overlayDocument](1627320-overlaydocument.md): The annotations for a video created by placing a DOM document over the video.
- [Player](1627447-player.md): Creates a new player object.
- [playlist](1627389-playlist.md): The playlist for a player.
- [present](1627418-present.md): Shows the player UI if it is not currently visible.

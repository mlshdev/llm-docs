> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmljs/player/1627320-overlaydocument](https://developer.apple.com/documentation/tvmljs/player/1627320-overlaydocument)

# overlayDocument

**Interface language:** Data

**Framework:** TVMLKit JS  
**Kind:** Instance Property  
**Availability:** tvOS 9.0+

The annotations for a video created by placing a DOM document over the video.

## Declaration

```
attribute Document overlayDocument;
```

<a id="discussion"></a>

## Discussion

Create a DOM document using the [divTemplate](https://developer.apple.com/library/archive/documentation/LanguagesUtilities/Conceptual/ATV_Template_Guide/DivTemplate.html#//apple_ref/doc/uid/TP40015064-CH28) and assign it to the `overlayDocument` property. Set this attribute to `null` to remove the current overlay document.

## See Also

### Setting Up the Player

- [interactiveOverlayDismissable](2123044-interactiveoverlaydismissable.md): Determines if an interactive overlay can be dismissed using the Menu button.
- [interactiveOverlayDocument](2123043-interactiveoverlaydocument.md): A DOM document that is presented over the entire video player, including the transport bar.
- [Player](1627447-player.md): Creates a new player object.
- [playlist](1627389-playlist.md): The playlist for a player.
- [present](1627418-present.md): Shows the player UI if it is not currently visible.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmljs/player/1627373-previousmediaitem](https://developer.apple.com/documentation/tvmljs/player/1627373-previousmediaitem)

# previousMediaItem

**Interface language:** Data

**Framework:** TVMLKit JS  
**Kind:** Instance Property  
**Availability:** tvOS 9.0+

The item in the playlist previous to the currently selected item.

## Declaration

```
readonly attribute MediaItem previousMediaItem;
```

<a id="discussion"></a>

## Discussion

This property returns `null` if there are no items in the playlist previous to the currently playing item.

## See Also

### Inspecting Media Items

- [currentMediaItem](1627325-currentmediaitem.md): The currently selected media item in the playlist.
- [currentMediaItemDate](1837542-currentmediaitemdate.md): Contains the current time of the media item as a `Date` object.
- [currentMediaItemDuration](1682110-currentmediaitemduration.md): The length, in seconds, of the current media item.
- [nextMediaItem](1627338-nextmediaitem.md): The next media item in the playlist after the currently selected item.

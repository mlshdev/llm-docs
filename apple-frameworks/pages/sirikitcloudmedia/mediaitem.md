> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikitcloudmedia/mediaitem](https://developer.apple.com/documentation/sirikitcloudmedia/mediaitem)

# MediaItem

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Object  
**Availability:** SiriKit Cloud Media 1.0.2+

A particular piece of media that an intent references, such as a song, podcast episode, or playlist.

## Declaration

```
object MediaItem
```

## Properties

- `identifier` — `string` (required): An identifier for the media item that’s stable within the [Session](session.md) and unique among all media of this `type` within this `Session`.
  **Maximum length:** `250`
- `title` — `string`: The name of this media item.
  **Maximum length:** `1000`
- `artist` — `string`: The performer of this media item.
  **Maximum length:** `1000`
- `type` — `MediaItemType` (required): The media item’s type.

## See Also

### Media Items

- [MediaReference](mediareference.md): A way of identifying the current media item rather than with metadata.
- [MediaSearch](mediasearch.md): A description of the media items the user wants to play, add to a playlist, or express a preference for.
- [MediaItemType](mediaitemtype.md): Types of media items or media searches.

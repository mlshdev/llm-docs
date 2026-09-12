> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikitcloudmedia/mediareference](https://developer.apple.com/documentation/sirikitcloudmedia/mediareference)

# MediaReference

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Type  
**Availability:** SiriKit Cloud Media 1.0.2+

A way of identifying the current media item rather than with metadata.

## Declaration

```
string MediaReference
```

## Possible Values

- `currentlyPlaying`: The media item the device is playing.
- `unknown`: An unspecified reference.
- `my`: Information specific to the user, as in *Play my Top 10 playlist*.

## See Also

### Media Items

- [MediaItem](mediaitem.md): A particular piece of media that an intent references, such as a song, podcast episode, or playlist.
- [MediaSearch](mediasearch.md): A description of the media items the user wants to play, add to a playlist, or express a preference for.
- [MediaItemType](mediaitemtype.md): Types of media items or media searches.

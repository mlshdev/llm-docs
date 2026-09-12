> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikitcloudmedia/contentattributes](https://developer.apple.com/documentation/sirikitcloudmedia/contentattributes)

# ContentAttributes

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Object  
**Availability:** SiriKit Cloud Media 1.0.2+

Metadata for some media content.

## Declaration

```
object ContentAttributes
```

## Properties

- `albumName` — `string`: The album that contains this media content.
  **Maximum length:** `250`
- `artistName` — `string`: The performer of this media content.
  **Maximum length:** `1000`
- `artwork` — `ContentAttributes.Artwork`: The album cover or other imagery.
- `composerName` — `string`: The composer of this media content.
  **Maximum length:** `250`
- `durationInMillis` — `uint64`: The length of the media content in milliseconds.
- `genreNames` — `[string]`: Genres that apply to this media content.
- `name` — `string`: The name of the media content.
  **Maximum length:** `250`
- `trackNumber` — `uint32`: The media content’s track number within the album.
- `contentKeyAssetIdentifier` — `string`: **Maximum length:** `4000`

## Topics

### Providing Artwork

- [ContentAttributes.Artwork](contentattributes/artwork-data.dictionary.md): Imagery for media content, such as an album cover.

## See Also

### Providing Queue Items

- [Content](content.md): A description of a piece of playback content, such as a song, podcast, or advertisement.
- [ContentIdentifier](contentidentifier.md): An identifier for a song, podcast, ad, or other media content. The identifier must be stable and unique within a queue.

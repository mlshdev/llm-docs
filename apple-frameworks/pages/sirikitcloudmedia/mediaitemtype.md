> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikitcloudmedia/mediaitemtype](https://developer.apple.com/documentation/sirikitcloudmedia/mediaitemtype)

# MediaItemType

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Type  
**Availability:** SiriKit Cloud Media 1.0.2+

Types of media items or media searches.

## Declaration

```
string MediaItemType
```

## Possible Values

- `unknown`: An unspecified media type.
- `song`: A song.
- `album`: An album.
- `artist`: An artist, composer, or performer.
- `genre`: A genre of media.
- `playlist`: A playlist of music.
- `musicStation`: A music station.
- `podcastShow`: A podcast series.
- `podcastEpisode`: A single episode in a podcast series.
- `podcastPlaylist`: A playlist of podcast episodes.
- `audioBook`: An audio book.
- `movie`: A movie.
- `tvShow`: A TV show or series.
- `tvShowEpisode`: An episode of a TV show or series.
- `musicVideo`: A music video.
- `podcastStation`: A podcast station.
- `radioStation`: A radio station.
- `station`: An unspecified station type.
- `music`: Some unspecified music.
- `algorithmicRadioStation`: A radio station curated with related content.
- `news`: Some unspecified news.

## See Also

### Media Items

- [MediaItem](mediaitem.md): A particular piece of media that an intent references, such as a song, podcast episode, or playlist.
- [MediaReference](mediareference.md): A way of identifying the current media item rather than with metadata.
- [MediaSearch](mediasearch.md): A description of the media items the user wants to play, add to a playlist, or express a preference for.

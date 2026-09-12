> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sirikitcloudmedia/mediasearch](https://developer.apple.com/documentation/sirikitcloudmedia/mediasearch)

# MediaSearch

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Object  
**Availability:** SiriKit Cloud Media 1.0.2+

A description of the media items the user wants to play, add to a playlist, or express a preference for.

## Declaration

```
object MediaSearch
```

## Properties

- `mediaName` — `string`: The name of the media item.
- `artistName` — `string`: The creator or performer of the media item.
- `albumName` — `string`: The album that contains the media item.
- `mediaType` — `MediaItemType`: The type of media the user wants.
- `genreNames` — `[string]`: Genres that apply to this media item. These are the same genres as those at [genreNames](../intents/inmediasearch/genrenames.md).
- `moodNames` — `[string]`: Feelings that describe the media item the user wants, such as `happy` or `focused`.
- `releaseDate` — `DateComponentsRange`: The date of the media item’s first publication, or a period of time.
- `sortOrder` — `MediaSortOrder`: The prioritization to apply to search results.
- `reference` — `MediaReference`: An indicator of whether the client is playing this media item.
- `mediaIdentifier` — `string`: The identifier for a specific media item.

<a id="Discussion"></a>

## Discussion

A `releaseDate` may refer to the publication of a specific media item, or to music typical of a particular decade. For example, the client represents *Play some 80s music* with a `releaseDate` ranging from the first moment of 1980 to the last moment of 1989.

## Topics

### Prioritizing Search Results

- [MediaSortOrder](mediasortorder.md): A prioritization for search results.

### Filtering by Release Date

- [DateComponentsRange](datecomponentsrange.md): A period of time from a specified start date to a specified end date.
- [DateComponents](datecomponents.md): A full or partial date and time.
- [ExplicitDateComponents](explicitdatecomponents.md): A date or time in specified of units (such as year, month, day, hour, and minute) for evaluation in a calendar system and time zone.

## See Also

### Media Items

- [MediaItem](mediaitem.md): A particular piece of media that an intent references, such as a song, podcast episode, or playlist.
- [MediaReference](mediareference.md): A way of identifying the current media item rather than with metadata.
- [MediaItemType](mediaitemtype.md): Types of media items or media searches.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmediaquery/podcasts()](https://developer.apple.com/documentation/mediaplayer/mpmediaquery/podcasts())

# podcasts() (Swift)

**Framework:** Media Player  
**Kind:** Type Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Creates a media query that matches podcast items and that groups and sorts collections by podcast name.

## Declaration

```swift
class func podcasts() -> MPMediaQuery
```

<a id="return-value"></a>

## Return Value

A media query that matches media items of type [podcast](../mpmediatype/podcast.md) and that has a grouping type of [MPMediaGrouping.podcastTitle](../mpmediagrouping/podcasttitle.md). This query only returns podcasts downloaded to the user’s library.

<a id="Discussion"></a>

## Discussion

A media item can have more than one media type; for example, an item could be of types “music” and “podcast.” A [podcasts()](podcasts%28%29.md) query matches all [podcast](../mpmediatype/podcast.md) items, whether or not they’re also of other media types.

## See Also

### Creating media queries

- [albums()](albums%28%29.md): Creates a media query that matches music items and that groups and sorts collections by album name.
- [artists()](artists%28%29.md): Creates a media query that matches music items and that groups and sorts collections by artist name.
- [songs()](songs%28%29.md): Creates a media query that matches music items and that groups and sorts collections by song name.
- [playlists()](playlists%28%29.md): Creates a media query that matches the entire library and that groups and sorts collections by playlist name.
- [audiobooks()](audiobooks%28%29.md): Creates a media query that matches audio book items and that groups and sorts collections by audio book name.
- [compilations()](compilations%28%29.md): Creates a media query that matches compilation items and that groups and sorts collections by album name.
- [composers()](composers%28%29.md): Creates a media query that matches all media items and that groups and sorts collections by composer name.
- [genres()](genres%28%29.md): Creates a media query that matches all media items and that groups and sorts collections by genre name.
- [init(filterPredicates:)](init%28filterpredicates_%29.md): Initializes a media query with a set of media property predicates.

# podcastsQuery (Objective-C)

**Framework:** Media Player  
**Kind:** Type Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Creates a media query that matches podcast items and that groups and sorts collections by podcast name.

## Declaration

```objectivec
+ (MPMediaQuery *) podcastsQuery;
```

<a id="return-value"></a>

## Return Value

A media query that matches media items of type [MPMediaTypePodcast](../mpmediatype/podcast.md) and that has a grouping type of [MPMediaGroupingPodcastTitle](../mpmediagrouping/podcasttitle.md). This query only returns podcasts downloaded to the user’s library.

<a id="Discussion"></a>

## Discussion

A media item can have more than one media type; for example, an item could be of types “music” and “podcast.” A [podcastsQuery](podcasts%28%29.md) query matches all [MPMediaTypePodcast](../mpmediatype/podcast.md) items, whether or not they’re also of other media types.

## See Also

### Creating media queries

- [albumsQuery](albums%28%29.md): Creates a media query that matches music items and that groups and sorts collections by album name.
- [artistsQuery](artists%28%29.md): Creates a media query that matches music items and that groups and sorts collections by artist name.
- [songsQuery](songs%28%29.md): Creates a media query that matches music items and that groups and sorts collections by song name.
- [playlistsQuery](playlists%28%29.md): Creates a media query that matches the entire library and that groups and sorts collections by playlist name.
- [audiobooksQuery](audiobooks%28%29.md): Creates a media query that matches audio book items and that groups and sorts collections by audio book name.
- [compilationsQuery](compilations%28%29.md): Creates a media query that matches compilation items and that groups and sorts collections by album name.
- [composersQuery](composers%28%29.md): Creates a media query that matches all media items and that groups and sorts collections by composer name.
- [genresQuery](genres%28%29.md): Creates a media query that matches all media items and that groups and sorts collections by genre name.
- [init](../mpmediaquery-init.md): Initializes a generic media query.
- [initWithFilterPredicates:](init%28filterpredicates_%29.md): Initializes a media query with a set of media property predicates.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmediaquery/artists()](https://developer.apple.com/documentation/mediaplayer/mpmediaquery/artists())

# artists() (Swift)

**Framework:** Media Player  
**Kind:** Type Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Creates a media query that matches music items and that groups and sorts collections by artist name.

## Declaration

```swift
class func artists() -> MPMediaQuery
```

<a id="return-value"></a>

## Return Value

A media query that matches media items of type [music](../mpmediatype/music.md) and has a grouping type of [MPMediaGrouping.artist](../mpmediagrouping/artist.md).

<a id="Discussion"></a>

## Discussion

A media item can have more than one media type; for example, an item could be of types “music” and “podcast.” An [artists()](artists%28%29.md) query matches all [music](../mpmediatype/music.md) items, whether or not they’re also of other media types.

## See Also

### Creating media queries

- [albums()](albums%28%29.md): Creates a media query that matches music items and that groups and sorts collections by album name.
- [songs()](songs%28%29.md): Creates a media query that matches music items and that groups and sorts collections by song name.
- [playlists()](playlists%28%29.md): Creates a media query that matches the entire library and that groups and sorts collections by playlist name.
- [podcasts()](podcasts%28%29.md): Creates a media query that matches podcast items and that groups and sorts collections by podcast name.
- [audiobooks()](audiobooks%28%29.md): Creates a media query that matches audio book items and that groups and sorts collections by audio book name.
- [compilations()](compilations%28%29.md): Creates a media query that matches compilation items and that groups and sorts collections by album name.
- [composers()](composers%28%29.md): Creates a media query that matches all media items and that groups and sorts collections by composer name.
- [genres()](genres%28%29.md): Creates a media query that matches all media items and that groups and sorts collections by genre name.
- [init(filterPredicates:)](init%28filterpredicates_%29.md): Initializes a media query with a set of media property predicates.

# artistsQuery (Objective-C)

**Framework:** Media Player  
**Kind:** Type Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Creates a media query that matches music items and that groups and sorts collections by artist name.

## Declaration

```objectivec
+ (MPMediaQuery *) artistsQuery;
```

<a id="return-value"></a>

## Return Value

A media query that matches media items of type [MPMediaTypeMusic](../mpmediatype/music.md) and has a grouping type of [MPMediaGroupingArtist](../mpmediagrouping/artist.md).

<a id="Discussion"></a>

## Discussion

A media item can have more than one media type; for example, an item could be of types “music” and “podcast.” An [artistsQuery](artists%28%29.md) query matches all [MPMediaTypeMusic](../mpmediatype/music.md) items, whether or not they’re also of other media types.

## See Also

### Creating media queries

- [albumsQuery](albums%28%29.md): Creates a media query that matches music items and that groups and sorts collections by album name.
- [songsQuery](songs%28%29.md): Creates a media query that matches music items and that groups and sorts collections by song name.
- [playlistsQuery](playlists%28%29.md): Creates a media query that matches the entire library and that groups and sorts collections by playlist name.
- [podcastsQuery](podcasts%28%29.md): Creates a media query that matches podcast items and that groups and sorts collections by podcast name.
- [audiobooksQuery](audiobooks%28%29.md): Creates a media query that matches audio book items and that groups and sorts collections by audio book name.
- [compilationsQuery](compilations%28%29.md): Creates a media query that matches compilation items and that groups and sorts collections by album name.
- [composersQuery](composers%28%29.md): Creates a media query that matches all media items and that groups and sorts collections by composer name.
- [genresQuery](genres%28%29.md): Creates a media query that matches all media items and that groups and sorts collections by genre name.
- [init](../mpmediaquery-init.md): Initializes a generic media query.
- [initWithFilterPredicates:](init%28filterpredicates_%29.md): Initializes a media query with a set of media property predicates.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmediaquery/compilations()](https://developer.apple.com/documentation/mediaplayer/mpmediaquery/compilations())

# compilations() (Swift)

**Framework:** Media Player  
**Kind:** Type Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Creates a media query that matches compilation items and that groups and sorts collections by album name.

## Declaration

```swift
class func compilations() -> MPMediaQuery
```

<a id="return-value"></a>

## Return Value

A media query that matches any media item that has the [MPMediaItemPropertyIsCompilation](../mpmediaitempropertyiscompilation.md) property; the returned query has a grouping type of [MPMediaGrouping.album](../mpmediagrouping/album.md).

<a id="Discussion"></a>

## Discussion

A media item can have more than one media type; for example, an item could be of types “music” and “podcast.” A [compilations()](compilations%28%29.md) query matches all media items that have the [MPMediaItemPropertyIsCompilation](../mpmediaitempropertyiscompilation.md) property, irrespective of their media types.

## See Also

### Creating media queries

- [albums()](albums%28%29.md): Creates a media query that matches music items and that groups and sorts collections by album name.
- [artists()](artists%28%29.md): Creates a media query that matches music items and that groups and sorts collections by artist name.
- [songs()](songs%28%29.md): Creates a media query that matches music items and that groups and sorts collections by song name.
- [playlists()](playlists%28%29.md): Creates a media query that matches the entire library and that groups and sorts collections by playlist name.
- [podcasts()](podcasts%28%29.md): Creates a media query that matches podcast items and that groups and sorts collections by podcast name.
- [audiobooks()](audiobooks%28%29.md): Creates a media query that matches audio book items and that groups and sorts collections by audio book name.
- [composers()](composers%28%29.md): Creates a media query that matches all media items and that groups and sorts collections by composer name.
- [genres()](genres%28%29.md): Creates a media query that matches all media items and that groups and sorts collections by genre name.
- [init(filterPredicates:)](init%28filterpredicates_%29.md): Initializes a media query with a set of media property predicates.

# compilationsQuery (Objective-C)

**Framework:** Media Player  
**Kind:** Type Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Creates a media query that matches compilation items and that groups and sorts collections by album name.

## Declaration

```objectivec
+ (MPMediaQuery *) compilationsQuery;
```

<a id="return-value"></a>

## Return Value

A media query that matches any media item that has the [MPMediaItemPropertyIsCompilation](../mpmediaitempropertyiscompilation.md) property; the returned query has a grouping type of [MPMediaGroupingAlbum](../mpmediagrouping/album.md).

<a id="Discussion"></a>

## Discussion

A media item can have more than one media type; for example, an item could be of types “music” and “podcast.” A [compilationsQuery](compilations%28%29.md) query matches all media items that have the [MPMediaItemPropertyIsCompilation](../mpmediaitempropertyiscompilation.md) property, irrespective of their media types.

## See Also

### Creating media queries

- [albumsQuery](albums%28%29.md): Creates a media query that matches music items and that groups and sorts collections by album name.
- [artistsQuery](artists%28%29.md): Creates a media query that matches music items and that groups and sorts collections by artist name.
- [songsQuery](songs%28%29.md): Creates a media query that matches music items and that groups and sorts collections by song name.
- [playlistsQuery](playlists%28%29.md): Creates a media query that matches the entire library and that groups and sorts collections by playlist name.
- [podcastsQuery](podcasts%28%29.md): Creates a media query that matches podcast items and that groups and sorts collections by podcast name.
- [audiobooksQuery](audiobooks%28%29.md): Creates a media query that matches audio book items and that groups and sorts collections by audio book name.
- [composersQuery](composers%28%29.md): Creates a media query that matches all media items and that groups and sorts collections by composer name.
- [genresQuery](genres%28%29.md): Creates a media query that matches all media items and that groups and sorts collections by genre name.
- [init](../mpmediaquery-init.md): Initializes a generic media query.
- [initWithFilterPredicates:](init%28filterpredicates_%29.md): Initializes a media query with a set of media property predicates.

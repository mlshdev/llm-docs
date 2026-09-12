> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmediaquery/composers()](https://developer.apple.com/documentation/mediaplayer/mpmediaquery/composers())

# composers() (Swift)

**Framework:** Media Player  
**Kind:** Type Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Creates a media query that matches all media items and that groups and sorts collections by composer name.

## Declaration

```swift
class func composers() -> MPMediaQuery
```

<a id="return-value"></a>

## Return Value

A media query that matches all media items and that has a grouping type of [MPMediaGrouping.composer](../mpmediagrouping/composer.md).

## See Also

### Creating media queries

- [albums()](albums%28%29.md): Creates a media query that matches music items and that groups and sorts collections by album name.
- [artists()](artists%28%29.md): Creates a media query that matches music items and that groups and sorts collections by artist name.
- [songs()](songs%28%29.md): Creates a media query that matches music items and that groups and sorts collections by song name.
- [playlists()](playlists%28%29.md): Creates a media query that matches the entire library and that groups and sorts collections by playlist name.
- [podcasts()](podcasts%28%29.md): Creates a media query that matches podcast items and that groups and sorts collections by podcast name.
- [audiobooks()](audiobooks%28%29.md): Creates a media query that matches audio book items and that groups and sorts collections by audio book name.
- [compilations()](compilations%28%29.md): Creates a media query that matches compilation items and that groups and sorts collections by album name.
- [genres()](genres%28%29.md): Creates a media query that matches all media items and that groups and sorts collections by genre name.
- [init(filterPredicates:)](init%28filterpredicates_%29.md): Initializes a media query with a set of media property predicates.

# composersQuery (Objective-C)

**Framework:** Media Player  
**Kind:** Type Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Creates a media query that matches all media items and that groups and sorts collections by composer name.

## Declaration

```objectivec
+ (MPMediaQuery *) composersQuery;
```

<a id="return-value"></a>

## Return Value

A media query that matches all media items and that has a grouping type of [MPMediaGroupingComposer](../mpmediagrouping/composer.md).

## See Also

### Creating media queries

- [albumsQuery](albums%28%29.md): Creates a media query that matches music items and that groups and sorts collections by album name.
- [artistsQuery](artists%28%29.md): Creates a media query that matches music items and that groups and sorts collections by artist name.
- [songsQuery](songs%28%29.md): Creates a media query that matches music items and that groups and sorts collections by song name.
- [playlistsQuery](playlists%28%29.md): Creates a media query that matches the entire library and that groups and sorts collections by playlist name.
- [podcastsQuery](podcasts%28%29.md): Creates a media query that matches podcast items and that groups and sorts collections by podcast name.
- [audiobooksQuery](audiobooks%28%29.md): Creates a media query that matches audio book items and that groups and sorts collections by audio book name.
- [compilationsQuery](compilations%28%29.md): Creates a media query that matches compilation items and that groups and sorts collections by album name.
- [genresQuery](genres%28%29.md): Creates a media query that matches all media items and that groups and sorts collections by genre name.
- [init](../mpmediaquery-init.md): Initializes a generic media query.
- [initWithFilterPredicates:](init%28filterpredicates_%29.md): Initializes a media query with a set of media property predicates.

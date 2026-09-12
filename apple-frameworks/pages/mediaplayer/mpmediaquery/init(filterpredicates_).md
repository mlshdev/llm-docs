> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmediaquery/init(filterpredicates:)](https://developer.apple.com/documentation/mediaplayer/mpmediaquery/init(filterpredicates:))

# init(filterPredicates:) (Swift)

**Framework:** Media Player  
**Kind:** Initializer  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Initializes a media query with a set of media property predicates.

## Declaration

```swift
init(filterPredicates: Set<MPMediaPredicate>?)
```

## Parameters

- `filterPredicates`: The set of media property predicates to use as a filter on the library.

<a id="return-value"></a>

## Return Value

An initialized media query.

<a id="Discussion"></a>

## Discussion

[MPMediaPropertyPredicate](../mpmediapropertypredicate.md) describes how to create media property predicates. The [General media item property keys](../general-media-item-property-keys.md) and `Podcast Item Property Keys` enumerations in [MPMediaItem](../mpmediaitem.md) contain the keys you can use to construct predicates.

## See Also

### Creating media queries

- [albums()](albums%28%29.md): Creates a media query that matches music items and that groups and sorts collections by album name.
- [artists()](artists%28%29.md): Creates a media query that matches music items and that groups and sorts collections by artist name.
- [songs()](songs%28%29.md): Creates a media query that matches music items and that groups and sorts collections by song name.
- [playlists()](playlists%28%29.md): Creates a media query that matches the entire library and that groups and sorts collections by playlist name.
- [podcasts()](podcasts%28%29.md): Creates a media query that matches podcast items and that groups and sorts collections by podcast name.
- [audiobooks()](audiobooks%28%29.md): Creates a media query that matches audio book items and that groups and sorts collections by audio book name.
- [compilations()](compilations%28%29.md): Creates a media query that matches compilation items and that groups and sorts collections by album name.
- [composers()](composers%28%29.md): Creates a media query that matches all media items and that groups and sorts collections by composer name.
- [genres()](genres%28%29.md): Creates a media query that matches all media items and that groups and sorts collections by genre name.

# initWithFilterPredicates: (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Initializes a media query with a set of media property predicates.

## Declaration

```objectivec
- (instancetype) initWithFilterPredicates:(NSSet<MPMediaPredicate *> *) filterPredicates;
```

## Parameters

- `filterPredicates`: The set of media property predicates to use as a filter on the library.

<a id="return-value"></a>

## Return Value

An initialized media query.

<a id="Discussion"></a>

## Discussion

[MPMediaPropertyPredicate](../mpmediapropertypredicate.md) describes how to create media property predicates. The [General media item property keys](../general-media-item-property-keys.md) and `Podcast Item Property Keys` enumerations in [MPMediaItem](../mpmediaitem.md) contain the keys you can use to construct predicates.

## See Also

### Creating media queries

- [albumsQuery](albums%28%29.md): Creates a media query that matches music items and that groups and sorts collections by album name.
- [artistsQuery](artists%28%29.md): Creates a media query that matches music items and that groups and sorts collections by artist name.
- [songsQuery](songs%28%29.md): Creates a media query that matches music items and that groups and sorts collections by song name.
- [playlistsQuery](playlists%28%29.md): Creates a media query that matches the entire library and that groups and sorts collections by playlist name.
- [podcastsQuery](podcasts%28%29.md): Creates a media query that matches podcast items and that groups and sorts collections by podcast name.
- [audiobooksQuery](audiobooks%28%29.md): Creates a media query that matches audio book items and that groups and sorts collections by audio book name.
- [compilationsQuery](compilations%28%29.md): Creates a media query that matches compilation items and that groups and sorts collections by album name.
- [composersQuery](composers%28%29.md): Creates a media query that matches all media items and that groups and sorts collections by composer name.
- [genresQuery](genres%28%29.md): Creates a media query that matches all media items and that groups and sorts collections by genre name.
- [init](../mpmediaquery-init.md): Initializes a generic media query.

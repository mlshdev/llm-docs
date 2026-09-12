> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmediaquery](https://developer.apple.com/documentation/mediaplayer/mpmediaquery)

# MPMediaQuery (Swift)

**Framework:** Media Player  
**Kind:** Class  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A query that specifies a set of media items from the device’s media library using a filter and a grouping type.

## Declaration

```swift
class MPMediaQuery
```

## Mentioned In

- [Playing audio using the built-in music player](playing-audio-using-the-built-in-music-player.md)

<a id="overview"></a>

## Overview

Filter and grouping types are both optional; an unqualified query matches the entire library.

A query has at most one grouping type. A query’s filter can consist of any number of media property predicates. You build filters using [MPMediaPropertyPredicate](mpmediapropertypredicate.md) objects, based on property keys described in [MPMediaItem](mpmediaitem.md).

After creating and configuring a query, you use it to retrieve media items or media item collections. You can also use a query to retrieve an array of [MPMediaQuerySection](mpmediaquerysection.md) instances, useful for displaying the results of a query in the user interface of your app. See the [itemSections](mpmediaquery/itemsections.md) and [collectionSections](mpmediaquery/collectionsections.md) properties.

This class includes several convenience constructors that each apply a grouping type and, in most cases, match a subset of the library. The following table summarizes the features of these constructors. See [MPMediaItem](mpmediaitem.md) for descriptions of the entries in the Filter column. See [MPMediaGrouping](mpmediagrouping.md) for descriptions of the entries in the Grouping type column.

| Constructor name | Matches entire library | Filter | Grouping type |
| --- | --- | --- | --- |
| [albums()](mpmediaquery/albums%28%29.md) | - | [music](mpmediatype/music.md) | [MPMediaGrouping.album](mpmediagrouping/album.md) |
| [artists()](mpmediaquery/artists%28%29.md) | - | [music](mpmediatype/music.md) | [MPMediaGrouping.artist](mpmediagrouping/artist.md) |
| [audiobooks()](mpmediaquery/audiobooks%28%29.md) | - | [audioBook](mpmediatype/audiobook.md) | [MPMediaGrouping.title](mpmediagrouping/title.md) |
| [compilations()](mpmediaquery/compilations%28%29.md) | - | [any](mpmediatype/any.md) with [MPMediaItemPropertyIsCompilation](mpmediaitempropertyiscompilation.md) | [MPMediaGrouping.album](mpmediagrouping/album.md) |
| [composers()](mpmediaquery/composers%28%29.md) | Yes | [any](mpmediatype/any.md) | [MPMediaGrouping.composer](mpmediagrouping/composer.md) |
| [genres()](mpmediaquery/genres%28%29.md) | Yes | [any](mpmediatype/any.md) | [MPMediaGrouping.genre](mpmediagrouping/genre.md) |
| [playlists()](mpmediaquery/playlists%28%29.md) | Yes | [any](mpmediatype/any.md) | [MPMediaGrouping.playlist](mpmediagrouping/playlist.md) |
| [podcasts()](mpmediaquery/podcasts%28%29.md) | - | [podcast](mpmediatype/podcast.md) | [MPMediaGrouping.podcastTitle](mpmediagrouping/podcasttitle.md) |
| [songs()](mpmediaquery/songs%28%29.md) | - | [music](mpmediatype/music.md) | [MPMediaGrouping.title](mpmediagrouping/title.md) |

## Topics

### Creating media queries

The class methods in this section create queries which you can use directly or modify as described in Configuring media queries.

- [albums()](mpmediaquery/albums%28%29.md): Creates a media query that matches music items and that groups and sorts collections by album name.
- [artists()](mpmediaquery/artists%28%29.md): Creates a media query that matches music items and that groups and sorts collections by artist name.
- [songs()](mpmediaquery/songs%28%29.md): Creates a media query that matches music items and that groups and sorts collections by song name.
- [playlists()](mpmediaquery/playlists%28%29.md): Creates a media query that matches the entire library and that groups and sorts collections by playlist name.
- [podcasts()](mpmediaquery/podcasts%28%29.md): Creates a media query that matches podcast items and that groups and sorts collections by podcast name.
- [audiobooks()](mpmediaquery/audiobooks%28%29.md): Creates a media query that matches audio book items and that groups and sorts collections by audio book name.
- [compilations()](mpmediaquery/compilations%28%29.md): Creates a media query that matches compilation items and that groups and sorts collections by album name.
- [composers()](mpmediaquery/composers%28%29.md): Creates a media query that matches all media items and that groups and sorts collections by composer name.
- [genres()](mpmediaquery/genres%28%29.md): Creates a media query that matches all media items and that groups and sorts collections by genre name.
- [init(filterPredicates:)](mpmediaquery/init%28filterpredicates_%29.md): Initializes a media query with a set of media property predicates.

### Configuring media queries

- [filterPredicates](mpmediaquery/filterpredicates.md): The media property predicates of the media query.
- [addFilterPredicate(\_:)](mpmediaquery/addfilterpredicate%28__%29.md): Adds a media property predicate to a query.
- [removeFilterPredicate(\_:)](mpmediaquery/removefilterpredicate%28__%29.md): Removes a filter predicate from a query.
- [groupingType](mpmediaquery/groupingtype.md): The grouping for collections retrieved with the media query.
- [itemSections](mpmediaquery/itemsections.md): An array representing the section grouping of the query’s specified media items.
- [collectionSections](mpmediaquery/collectionsections.md): An array representing the section grouping of the query’s specified media item collections.
- [MPMediaGrouping](mpmediagrouping.md): Keys used to configure a media query.

### Performing media queries

You obtain a specified array of media items or media item collections from the iPod library by calling the [items](mpmediaquery/items.md) or [collections](mpmediaquery/collections.md) accessor methods.

- [items](mpmediaquery/items.md): An array of media items that match the media query’s predicate.
- [collections](mpmediaquery/collections.md): An array of media item collections whose contained items match the query’s media property predicate.

### Initializers

- [init(coder:)](mpmediaquery/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Media item queries

- [Using filters to create specialized queries](using-filters-to-create-specialized-queries.md): Add a filter set to a query before populating a music player queue.
- [MPMediaQuerySection](mpmediaquerysection.md): A range of media items or media item collections from within a media query.
- [MPMediaPropertyPredicate](mpmediapropertypredicate.md): A set of predicates for defining a filter in a media query.
- [MPMediaPredicate](mpmediapredicate.md): An abstract class that defines classes for filtering media in a media query.

# MPMediaQuery (Objective-C)

**Framework:** Media Player  
**Kind:** Class  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A query that specifies a set of media items from the device’s media library using a filter and a grouping type.

## Declaration

```objectivec
@interface MPMediaQuery : NSObject
```

## Mentioned In

- [Playing audio using the built-in music player](playing-audio-using-the-built-in-music-player.md)

<a id="overview"></a>

## Overview

Filter and grouping types are both optional; an unqualified query matches the entire library.

A query has at most one grouping type. A query’s filter can consist of any number of media property predicates. You build filters using [MPMediaPropertyPredicate](mpmediapropertypredicate.md) objects, based on property keys described in [MPMediaItem](mpmediaitem.md).

After creating and configuring a query, you use it to retrieve media items or media item collections. You can also use a query to retrieve an array of [MPMediaQuerySection](mpmediaquerysection.md) instances, useful for displaying the results of a query in the user interface of your app. See the [itemSections](mpmediaquery/itemsections.md) and [collectionSections](mpmediaquery/collectionsections.md) properties.

This class includes several convenience constructors that each apply a grouping type and, in most cases, match a subset of the library. The following table summarizes the features of these constructors. See [MPMediaItem](mpmediaitem.md) for descriptions of the entries in the Filter column. See [MPMediaGrouping](mpmediagrouping.md) for descriptions of the entries in the Grouping type column.

| Constructor name | Matches entire library | Filter | Grouping type |
| --- | --- | --- | --- |
| [albumsQuery](mpmediaquery/albums%28%29.md) | - | [MPMediaTypeMusic](mpmediatype/music.md) | [MPMediaGroupingAlbum](mpmediagrouping/album.md) |
| [artistsQuery](mpmediaquery/artists%28%29.md) | - | [MPMediaTypeMusic](mpmediatype/music.md) | [MPMediaGroupingArtist](mpmediagrouping/artist.md) |
| [audiobooksQuery](mpmediaquery/audiobooks%28%29.md) | - | [MPMediaTypeAudioBook](mpmediatype/audiobook.md) | [MPMediaGroupingTitle](mpmediagrouping/title.md) |
| [compilationsQuery](mpmediaquery/compilations%28%29.md) | - | [MPMediaTypeAny](mpmediatype/any.md) with [MPMediaItemPropertyIsCompilation](mpmediaitempropertyiscompilation.md) | [MPMediaGroupingAlbum](mpmediagrouping/album.md) |
| [composersQuery](mpmediaquery/composers%28%29.md) | Yes | [MPMediaTypeAny](mpmediatype/any.md) | [MPMediaGroupingComposer](mpmediagrouping/composer.md) |
| [genresQuery](mpmediaquery/genres%28%29.md) | Yes | [MPMediaTypeAny](mpmediatype/any.md) | [MPMediaGroupingGenre](mpmediagrouping/genre.md) |
| [playlistsQuery](mpmediaquery/playlists%28%29.md) | Yes | [MPMediaTypeAny](mpmediatype/any.md) | [MPMediaGroupingPlaylist](mpmediagrouping/playlist.md) |
| [podcastsQuery](mpmediaquery/podcasts%28%29.md) | - | [MPMediaTypePodcast](mpmediatype/podcast.md) | [MPMediaGroupingPodcastTitle](mpmediagrouping/podcasttitle.md) |
| [songsQuery](mpmediaquery/songs%28%29.md) | - | [MPMediaTypeMusic](mpmediatype/music.md) | [MPMediaGroupingTitle](mpmediagrouping/title.md) |

## Topics

### Creating media queries

The class methods in this section create queries which you can use directly or modify as described in Configuring media queries.

- [albumsQuery](mpmediaquery/albums%28%29.md): Creates a media query that matches music items and that groups and sorts collections by album name.
- [artistsQuery](mpmediaquery/artists%28%29.md): Creates a media query that matches music items and that groups and sorts collections by artist name.
- [songsQuery](mpmediaquery/songs%28%29.md): Creates a media query that matches music items and that groups and sorts collections by song name.
- [playlistsQuery](mpmediaquery/playlists%28%29.md): Creates a media query that matches the entire library and that groups and sorts collections by playlist name.
- [podcastsQuery](mpmediaquery/podcasts%28%29.md): Creates a media query that matches podcast items and that groups and sorts collections by podcast name.
- [audiobooksQuery](mpmediaquery/audiobooks%28%29.md): Creates a media query that matches audio book items and that groups and sorts collections by audio book name.
- [compilationsQuery](mpmediaquery/compilations%28%29.md): Creates a media query that matches compilation items and that groups and sorts collections by album name.
- [composersQuery](mpmediaquery/composers%28%29.md): Creates a media query that matches all media items and that groups and sorts collections by composer name.
- [genresQuery](mpmediaquery/genres%28%29.md): Creates a media query that matches all media items and that groups and sorts collections by genre name.
- [init](mpmediaquery-init.md): Initializes a generic media query.
- [initWithFilterPredicates:](mpmediaquery/init%28filterpredicates_%29.md): Initializes a media query with a set of media property predicates.

### Configuring media queries

- [filterPredicates](mpmediaquery/filterpredicates.md): The media property predicates of the media query.
- [addFilterPredicate:](mpmediaquery/addfilterpredicate%28__%29.md): Adds a media property predicate to a query.
- [removeFilterPredicate:](mpmediaquery/removefilterpredicate%28__%29.md): Removes a filter predicate from a query.
- [groupingType](mpmediaquery/groupingtype.md): The grouping for collections retrieved with the media query.
- [itemSections](mpmediaquery/itemsections.md): An array representing the section grouping of the query’s specified media items.
- [collectionSections](mpmediaquery/collectionsections.md): An array representing the section grouping of the query’s specified media item collections.
- [MPMediaGrouping](mpmediagrouping.md): Keys used to configure a media query.

### Performing media queries

You obtain a specified array of media items or media item collections from the iPod library by calling the [items](mpmediaquery/items.md) or [collections](mpmediaquery/collections.md) accessor methods.

- [items](mpmediaquery/items.md): An array of media items that match the media query’s predicate.
- [collections](mpmediaquery/collections.md): An array of media item collections whose contained items match the query’s media property predicate.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Media item queries

- [Using filters to create specialized queries](using-filters-to-create-specialized-queries.md): Add a filter set to a query before populating a music player queue.
- [MPMediaQuerySection](mpmediaquerysection.md): A range of media items or media item collections from within a media query.
- [MPMediaPropertyPredicate](mpmediapropertypredicate.md): A set of predicates for defining a filter in a media query.
- [MPMediaPredicate](mpmediapredicate.md): An abstract class that defines classes for filtering media in a media query.

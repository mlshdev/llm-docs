> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmediagrouping](https://developer.apple.com/documentation/mediaplayer/mpmediagrouping)

# MPMediaGrouping (Swift)

**Framework:** Media Player  
**Kind:** Enumeration  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Keys used to configure a media query.

## Declaration

```swift
enum MPMediaGrouping
```

<a id="overview"></a>

## Overview

The following code snippet shows how to apply a grouping key:

**Swift**

```swift
let everything = MPMediaQuery()
everything.groupingType = MPMediaGrouping.album
let collections = [everything]
```

**Objective-C**

```objc
MPMediaQuery *everything = [[MPMediaQuery alloc] init];
[everything setGroupingType: MPMediaGroupingAlbum];
NSArray *collections = [everything collections];
```

After running these code lines, the `collections` array contains all the matched media items grouped and sorted according to album name.

To obtain a sorted list of songs, configure a media query with the `MPMediaGroupingTitle` key, or take advantage of the title key being the default for a media query. In either case, each obtained media item is, in effect, its own collection.

Collections sort according to the same rules used by iTunes on the desktop. This includes respecting the primary system language chosen by the user. The system ignores leading articles during sorting, including “A,” “An,” and “The” when using English, or “L’,” “La,” and “Le” when using French. If you need precise control over sorting, implement it in your application.

## Topics

### Media query keys

- [MPMediaGrouping.title](mpmediagrouping/title.md): Groups and sorts media item collections by title. For songs, for example, the title is the song name. This is the default grouping key.
- [MPMediaGrouping.album](mpmediagrouping/album.md): Groups and sorts media item collections by album, and sorts songs within an album by track order.
- [MPMediaGrouping.artist](mpmediagrouping/artist.md): Groups and sorts media item collections by performing artist.
- [MPMediaGrouping.albumArtist](mpmediagrouping/albumartist.md): Groups and sorts media item collections by album artist (the primary performing artist for an album as a whole).
- [MPMediaGrouping.composer](mpmediagrouping/composer.md): Groups and sorts media item collections by composer.
- [MPMediaGrouping.genre](mpmediagrouping/genre.md): Groups and sorts media item collections by musical or film genre.
- [MPMediaGrouping.playlist](mpmediagrouping/playlist.md): Groups and sorts media item collections by playlist.
- [MPMediaGrouping.podcastTitle](mpmediagrouping/podcasttitle.md): Groups and sorts media item collections by podcast title.

### Initializers

- [init(rawValue:)](mpmediagrouping/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring media queries

- [filterPredicates](mpmediaquery/filterpredicates.md): The media property predicates of the media query.
- [addFilterPredicate(\_:)](mpmediaquery/addfilterpredicate%28__%29.md): Adds a media property predicate to a query.
- [removeFilterPredicate(\_:)](mpmediaquery/removefilterpredicate%28__%29.md): Removes a filter predicate from a query.
- [groupingType](mpmediaquery/groupingtype.md): The grouping for collections retrieved with the media query.
- [itemSections](mpmediaquery/itemsections.md): An array representing the section grouping of the query’s specified media items.
- [collectionSections](mpmediaquery/collectionsections.md): An array representing the section grouping of the query’s specified media item collections.

# MPMediaGrouping (Objective-C)

**Framework:** Media Player  
**Kind:** Enumeration  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Keys used to configure a media query.

## Declaration

```objectivec
enum MPMediaGrouping : NSInteger;
```

<a id="overview"></a>

## Overview

The following code snippet shows how to apply a grouping key:

**Swift**

```swift
let everything = MPMediaQuery()
everything.groupingType = MPMediaGrouping.album
let collections = [everything]
```

**Objective-C**

```objc
MPMediaQuery *everything = [[MPMediaQuery alloc] init];
[everything setGroupingType: MPMediaGroupingAlbum];
NSArray *collections = [everything collections];
```

After running these code lines, the `collections` array contains all the matched media items grouped and sorted according to album name.

To obtain a sorted list of songs, configure a media query with the `MPMediaGroupingTitle` key, or take advantage of the title key being the default for a media query. In either case, each obtained media item is, in effect, its own collection.

Collections sort according to the same rules used by iTunes on the desktop. This includes respecting the primary system language chosen by the user. The system ignores leading articles during sorting, including “A,” “An,” and “The” when using English, or “L’,” “La,” and “Le” when using French. If you need precise control over sorting, implement it in your application.

## Topics

### Media query keys

- [MPMediaGroupingTitle](mpmediagrouping/title.md): Groups and sorts media item collections by title. For songs, for example, the title is the song name. This is the default grouping key.
- [MPMediaGroupingAlbum](mpmediagrouping/album.md): Groups and sorts media item collections by album, and sorts songs within an album by track order.
- [MPMediaGroupingArtist](mpmediagrouping/artist.md): Groups and sorts media item collections by performing artist.
- [MPMediaGroupingAlbumArtist](mpmediagrouping/albumartist.md): Groups and sorts media item collections by album artist (the primary performing artist for an album as a whole).
- [MPMediaGroupingComposer](mpmediagrouping/composer.md): Groups and sorts media item collections by composer.
- [MPMediaGroupingGenre](mpmediagrouping/genre.md): Groups and sorts media item collections by musical or film genre.
- [MPMediaGroupingPlaylist](mpmediagrouping/playlist.md): Groups and sorts media item collections by playlist.
- [MPMediaGroupingPodcastTitle](mpmediagrouping/podcasttitle.md): Groups and sorts media item collections by podcast title.

## See Also

### Configuring media queries

- [filterPredicates](mpmediaquery/filterpredicates.md): The media property predicates of the media query.
- [addFilterPredicate:](mpmediaquery/addfilterpredicate%28__%29.md): Adds a media property predicate to a query.
- [removeFilterPredicate:](mpmediaquery/removefilterpredicate%28__%29.md): Removes a filter predicate from a query.
- [groupingType](mpmediaquery/groupingtype.md): The grouping for collections retrieved with the media query.
- [itemSections](mpmediaquery/itemsections.md): An array representing the section grouping of the query’s specified media items.
- [collectionSections](mpmediaquery/collectionsections.md): An array representing the section grouping of the query’s specified media item collections.

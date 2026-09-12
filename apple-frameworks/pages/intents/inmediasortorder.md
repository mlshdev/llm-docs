> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inmediasortorder](https://developer.apple.com/documentation/intents/inmediasortorder)

# INMediaSortOrder (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

Constants indicating the sort order for the found media items.

## Declaration

```swift
enum INMediaSortOrder
```

## Topics

### Constants

- [INMediaSortOrder.unknown](inmediasortorder/unknown.md): The sort order is unknown.
- [INMediaSortOrder.newest](inmediasortorder/newest.md): The app sorts the media items from newest to oldest.
- [INMediaSortOrder.oldest](inmediasortorder/oldest.md): The app sorts the media items from oldest to newest.
- [INMediaSortOrder.best](inmediasortorder/best.md): The app sorts the media items from best to worst.
- [INMediaSortOrder.worst](inmediasortorder/worst.md): The app sorts the media items from worst to best.
- [INMediaSortOrder.popular](inmediasortorder/popular.md): The app sorts the media items from the most to least popular.
- [INMediaSortOrder.unpopular](inmediasortorder/unpopular.md): The app sorts the media items from the least to most popular.
- [INMediaSortOrder.trending](inmediasortorder/trending.md): The app sorts the media items with those trending the most first.
- [INMediaSortOrder.recommended](inmediasortorder/recommended.md): The app sorts the media items with those it recommends first.

### Initializers

- [init(rawValue:)](inmediasortorder/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Retrieving Search Information

- [genreNames](inmediasearch/genrenames.md): The media genres to search.
- [mediaIdentifier](inmediasearch/mediaidentifier.md): The unique media identifier to search for.
- [mediaName](inmediasearch/medianame.md): The name of the media to search for.
- [mediaType](inmediasearch/mediatype.md): The type of media to search for.
- [moodNames](inmediasearch/moodnames.md): The moods to search for.
- [reference](inmediasearch/reference.md): A reference for the media item to search for.
- [INMediaReference](inmediareference.md): Constants that describe a reference for a media item.
- [releaseDate](inmediasearch/releasedate.md): The release date to search for.
- [sortOrder](inmediasearch/sortorder.md): The sort order for the found media items.
- [activityNames](inmediasearch/activitynames.md): Deprecated. The activity names to search for.

# INMediaSortOrder (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

Constants indicating the sort order for the found media items.

## Declaration

```objectivec
enum INMediaSortOrder : NSInteger;
```

## Topics

### Constants

- [INMediaSortOrderUnknown](inmediasortorder/unknown.md): The sort order is unknown.
- [INMediaSortOrderNewest](inmediasortorder/newest.md): The app sorts the media items from newest to oldest.
- [INMediaSortOrderOldest](inmediasortorder/oldest.md): The app sorts the media items from oldest to newest.
- [INMediaSortOrderBest](inmediasortorder/best.md): The app sorts the media items from best to worst.
- [INMediaSortOrderWorst](inmediasortorder/worst.md): The app sorts the media items from worst to best.
- [INMediaSortOrderPopular](inmediasortorder/popular.md): The app sorts the media items from the most to least popular.
- [INMediaSortOrderUnpopular](inmediasortorder/unpopular.md): The app sorts the media items from the least to most popular.
- [INMediaSortOrderTrending](inmediasortorder/trending.md): The app sorts the media items with those trending the most first.
- [INMediaSortOrderRecommended](inmediasortorder/recommended.md): The app sorts the media items with those it recommends first.

## See Also

### Retrieving Search Information

- [genreNames](inmediasearch/genrenames.md): The media genres to search.
- [mediaIdentifier](inmediasearch/mediaidentifier.md): The unique media identifier to search for.
- [mediaName](inmediasearch/medianame.md): The name of the media to search for.
- [mediaType](inmediasearch/mediatype.md): The type of media to search for.
- [moodNames](inmediasearch/moodnames.md): The moods to search for.
- [reference](inmediasearch/reference.md): A reference for the media item to search for.
- [INMediaReference](inmediareference.md): Constants that describe a reference for a media item.
- [releaseDate](inmediasearch/releasedate.md): The release date to search for.
- [sortOrder](inmediasearch/sortorder.md): The sort order for the found media items.
- [activityNames](inmediasearch/activitynames.md): Deprecated. The activity names to search for.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inmediareference](https://developer.apple.com/documentation/intents/inmediareference)

# INMediaReference (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

Constants that describe a reference for a media item.

## Declaration

```swift
enum INMediaReference
```

## Topics

### Getting the Reference Status

- [INMediaReference.unknown](inmediareference/unknown.md): Indicates that the media item is unknown.
- [INMediaReference.currentlyPlaying](inmediareference/currentlyplaying.md): Indicates that the user is referring to the media item which is currently playing.
- [INMediaReference.my](inmediareference/my.md): Indicates that the specified content belongs to the user.

### Initializers

- [init(rawValue:)](inmediareference/init%28rawvalue_%29.md)

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
- [releaseDate](inmediasearch/releasedate.md): The release date to search for.
- [sortOrder](inmediasearch/sortorder.md): The sort order for the found media items.
- [INMediaSortOrder](inmediasortorder.md): Constants indicating the sort order for the found media items.
- [activityNames](inmediasearch/activitynames.md): Deprecated. The activity names to search for.

# INMediaReference (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

Constants that describe a reference for a media item.

## Declaration

```objectivec
enum INMediaReference : NSInteger;
```

## Topics

### Getting the Reference Status

- [INMediaReferenceUnknown](inmediareference/unknown.md): Indicates that the media item is unknown.
- [INMediaReferenceCurrentlyPlaying](inmediareference/currentlyplaying.md): Indicates that the user is referring to the media item which is currently playing.
- [INMediaReferenceMy](inmediareference/my.md): Indicates that the specified content belongs to the user.

## See Also

### Retrieving Search Information

- [genreNames](inmediasearch/genrenames.md): The media genres to search.
- [mediaIdentifier](inmediasearch/mediaidentifier.md): The unique media identifier to search for.
- [mediaName](inmediasearch/medianame.md): The name of the media to search for.
- [mediaType](inmediasearch/mediatype.md): The type of media to search for.
- [moodNames](inmediasearch/moodnames.md): The moods to search for.
- [reference](inmediasearch/reference.md): A reference for the media item to search for.
- [releaseDate](inmediasearch/releasedate.md): The release date to search for.
- [sortOrder](inmediasearch/sortorder.md): The sort order for the found media items.
- [INMediaSortOrder](inmediasortorder.md): Constants indicating the sort order for the found media items.
- [activityNames](inmediasearch/activitynames.md): Deprecated. The activity names to search for.

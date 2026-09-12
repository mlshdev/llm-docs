> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inmediasearch](https://developer.apple.com/documentation/intents/inmediasearch)

# INMediaSearch (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

An object that describes a media type to search for, such as a station name, song name, or album name.

## Declaration

```swift
class INMediaSearch
```

## Topics

### Initializing a Media Search Object

- [init(mediaType:sortOrder:mediaName:artistName:albumName:genreNames:moodNames:releaseDate:reference:mediaIdentifier:)](inmediasearch/init%28mediatype_sortorder_medianame_artistname_albumname_genrenames_moodnames_releasedate_reference_mediaidentifier_%29.md): Creates a new media search object with the specified parameters.

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
- [INMediaSortOrder](inmediasortorder.md): Constants indicating the sort order for the found media items.
- [activityNames](inmediasearch/activitynames.md): Deprecated. The activity names to search for.

### Modifying the Media Name

The following properties can only be used in conjunction with the [mediaName](inmediasearch/medianame.md) property.

- [albumName](inmediasearch/albumname.md): The name of the album to search for.
- [artistName](inmediasearch/artistname.md): The name of the artist to search for.

### Initializers

- [init(coder:)](inmediasearch/init%28coder_%29.md)

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

### Data Objects

- [INMediaItem](inmediaitem.md): An object that describes a piece of media content, such as a song, TV show, artist, or podcast playlist.

# INMediaSearch (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

An object that describes a media type to search for, such as a station name, song name, or album name.

## Declaration

```objectivec
@interface INMediaSearch : NSObject
```

## Topics

### Initializing a Media Search Object

- [initWithMediaType:sortOrder:mediaName:artistName:albumName:genreNames:moodNames:releaseDate:reference:mediaIdentifier:](https://developer.apple.com/documentation/intents/inmediasearch/initwithmediatype:sortorder:medianame:artistname:albumname:genrenames:moodnames:releasedate:reference:mediaidentifier:): Creates a new media search object with the specified parameters.

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
- [INMediaSortOrder](inmediasortorder.md): Constants indicating the sort order for the found media items.
- [activityNames](inmediasearch/activitynames.md): Deprecated. The activity names to search for.

### Modifying the Media Name

The following properties can only be used in conjunction with the [mediaName](inmediasearch/medianame.md) property.

- [albumName](inmediasearch/albumname.md): The name of the album to search for.
- [artistName](inmediasearch/artistname.md): The name of the artist to search for.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Data Objects

- [INMediaItem](inmediaitem.md): An object that describes a piece of media content, such as a song, TV show, artist, or podcast playlist.

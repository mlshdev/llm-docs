> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inmediasearch/init(mediatype:sortorder:medianame:artistname:albumname:genrenames:moodnames:releasedate:reference:mediaidentifier:)](https://developer.apple.com/documentation/intents/inmediasearch/init(mediatype:sortorder:medianame:artistname:albumname:genrenames:moodnames:releasedate:reference:mediaidentifier:))

# init(mediaType:sortOrder:mediaName:artistName:albumName:genreNames:moodNames:releaseDate:reference:mediaIdentifier:)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · tvOS 14.0+ · watchOS 6.0+

Creates a new media search object with the specified parameters.

## Declaration

```swift
@nonobjc convenience init(mediaType: INMediaItemType = .unknown, sortOrder: INMediaSortOrder = .unknown, mediaName: String? = nil, artistName: String? = nil, albumName: String? = nil, genreNames: [String]? = nil, moodNames: [String]? = nil, releaseDate: INDateComponentsRange? = nil, reference: INMediaReference = .unknown, mediaIdentifier: String? = nil)
```

## Parameters

- `mediaType`: The type of media to search for.
- `sortOrder`: The sort order for the media found by the search.
- `mediaName`: The name of the media to search for.
- `artistName`: The name of the artist to search for.
- `albumName`: The name of the album to search for.
- `genreNames`: The different genres to search.
- `moodNames`: The moods to search for. For example, “Play some happy music in ”.
- `releaseDate`: The release date of the media item to search for.
- `reference`: A reference for the media item to search for.
- `mediaIdentifier`: The unique identifier for the media item to search for.

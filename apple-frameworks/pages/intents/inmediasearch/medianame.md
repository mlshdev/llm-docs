> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inmediasearch/medianame](https://developer.apple.com/documentation/intents/inmediasearch/medianame)

# mediaName (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

The name of the media to search for.

## Declaration

```swift
var mediaName: String? { get }
```

<a id="Discussion"></a>

## Discussion

Use this property in conjunction with other properties to narrow down a user’s search.  For example, “Play the album requestedAlbumName”.

```swift
{
  mediaName: requestedAlbumName
  mediaType: album
}
```

## See Also

### Retrieving Search Information

- [genreNames](genrenames.md): The media genres to search.
- [mediaIdentifier](mediaidentifier.md): The unique media identifier to search for.
- [mediaType](mediatype.md): The type of media to search for.
- [moodNames](moodnames.md): The moods to search for.
- [reference](reference.md): A reference for the media item to search for.
- [INMediaReference](../inmediareference.md): Constants that describe a reference for a media item.
- [releaseDate](releasedate.md): The release date to search for.
- [sortOrder](sortorder.md): The sort order for the found media items.
- [INMediaSortOrder](../inmediasortorder.md): Constants indicating the sort order for the found media items.
- [activityNames](activitynames.md): Deprecated. The activity names to search for.

# mediaName (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

The name of the media to search for.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * mediaName;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSString * mediaName;
```

<a id="Discussion"></a>

## Discussion

Use this property in conjunction with other properties to narrow down a user’s search.  For example, “Play the album requestedAlbumName”.

```swift
{
  mediaName: requestedAlbumName
  mediaType: album
}
```

## See Also

### Retrieving Search Information

- [genreNames](genrenames.md): The media genres to search.
- [mediaIdentifier](mediaidentifier.md): The unique media identifier to search for.
- [mediaType](mediatype.md): The type of media to search for.
- [moodNames](moodnames.md): The moods to search for.
- [reference](reference.md): A reference for the media item to search for.
- [INMediaReference](../inmediareference.md): Constants that describe a reference for a media item.
- [releaseDate](releasedate.md): The release date to search for.
- [sortOrder](sortorder.md): The sort order for the found media items.
- [INMediaSortOrder](../inmediasortorder.md): Constants indicating the sort order for the found media items.
- [activityNames](activitynames.md): Deprecated. The activity names to search for.

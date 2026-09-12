> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inmediasearch/mediaidentifier](https://developer.apple.com/documentation/intents/inmediasearch/mediaidentifier)

# mediaIdentifier (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

The unique media identifier to search for.

## Declaration

```swift
var mediaIdentifier: String? { get }
```

<a id="Discussion"></a>

## Discussion

This property is only populated when your app is the currently playing app. It’s only present for currently playing reference items.

## See Also

### Retrieving Search Information

- [genreNames](genrenames.md): The media genres to search.
- [mediaName](medianame.md): The name of the media to search for.
- [mediaType](mediatype.md): The type of media to search for.
- [moodNames](moodnames.md): The moods to search for.
- [reference](reference.md): A reference for the media item to search for.
- [INMediaReference](../inmediareference.md): Constants that describe a reference for a media item.
- [releaseDate](releasedate.md): The release date to search for.
- [sortOrder](sortorder.md): The sort order for the found media items.
- [INMediaSortOrder](../inmediasortorder.md): Constants indicating the sort order for the found media items.
- [activityNames](activitynames.md): Deprecated. The activity names to search for.

# mediaIdentifier (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

The unique media identifier to search for.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * mediaIdentifier;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSString * mediaIdentifier;
```

<a id="Discussion"></a>

## Discussion

This property is only populated when your app is the currently playing app. It’s only present for currently playing reference items.

## See Also

### Retrieving Search Information

- [genreNames](genrenames.md): The media genres to search.
- [mediaName](medianame.md): The name of the media to search for.
- [mediaType](mediatype.md): The type of media to search for.
- [moodNames](moodnames.md): The moods to search for.
- [reference](reference.md): A reference for the media item to search for.
- [INMediaReference](../inmediareference.md): Constants that describe a reference for a media item.
- [releaseDate](releasedate.md): The release date to search for.
- [sortOrder](sortorder.md): The sort order for the found media items.
- [INMediaSortOrder](../inmediasortorder.md): Constants indicating the sort order for the found media items.
- [activityNames](activitynames.md): Deprecated. The activity names to search for.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inmediasearch/moodnames](https://developer.apple.com/documentation/intents/inmediasearch/moodnames)

# moodNames (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

The moods to search for.

## Declaration

```swift
var moodNames: [String]? { get }
```

<a id="Discussion"></a>

## Discussion

A mood is generally how the user feels. For example, the user may ask to play some happy, sad, or angry music.

## See Also

### Retrieving Search Information

- [genreNames](genrenames.md): The media genres to search.
- [mediaIdentifier](mediaidentifier.md): The unique media identifier to search for.
- [mediaName](medianame.md): The name of the media to search for.
- [mediaType](mediatype.md): The type of media to search for.
- [reference](reference.md): A reference for the media item to search for.
- [INMediaReference](../inmediareference.md): Constants that describe a reference for a media item.
- [releaseDate](releasedate.md): The release date to search for.
- [sortOrder](sortorder.md): The sort order for the found media items.
- [INMediaSortOrder](../inmediasortorder.md): Constants indicating the sort order for the found media items.
- [activityNames](activitynames.md): Deprecated. The activity names to search for.

# moodNames (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

The moods to search for.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSArray<NSString *> * moodNames;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSArray<NSString *> * moodNames;
```

<a id="Discussion"></a>

## Discussion

A mood is generally how the user feels. For example, the user may ask to play some happy, sad, or angry music.

## See Also

### Retrieving Search Information

- [genreNames](genrenames.md): The media genres to search.
- [mediaIdentifier](mediaidentifier.md): The unique media identifier to search for.
- [mediaName](medianame.md): The name of the media to search for.
- [mediaType](mediatype.md): The type of media to search for.
- [reference](reference.md): A reference for the media item to search for.
- [INMediaReference](../inmediareference.md): Constants that describe a reference for a media item.
- [releaseDate](releasedate.md): The release date to search for.
- [sortOrder](sortorder.md): The sort order for the found media items.
- [INMediaSortOrder](../inmediasortorder.md): Constants indicating the sort order for the found media items.
- [activityNames](activitynames.md): Deprecated. The activity names to search for.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inmediasearch/activitynames](https://developer.apple.com/documentation/intents/inmediasearch/activitynames)

# activityNames (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 13.0) · iPadOS 13.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS 13.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 6.0+ (deprecated in 6.0)

The activity names to search for.

> Use [moodNames](moodnames.md) instead.

## Declaration

```swift
var activityNames: [String]? { get }
```

<a id="Discussion"></a>

## Discussion

An activity is anything the user might be doing, such as working out, dancing, or meditating.

## See Also

### Retrieving Search Information

- [genreNames](genrenames.md): The media genres to search.
- [mediaIdentifier](mediaidentifier.md): The unique media identifier to search for.
- [mediaName](medianame.md): The name of the media to search for.
- [mediaType](mediatype.md): The type of media to search for.
- [moodNames](moodnames.md): The moods to search for.
- [reference](reference.md): A reference for the media item to search for.
- [INMediaReference](../inmediareference.md): Constants that describe a reference for a media item.
- [releaseDate](releasedate.md): The release date to search for.
- [sortOrder](sortorder.md): The sort order for the found media items.
- [INMediaSortOrder](../inmediasortorder.md): Constants indicating the sort order for the found media items.

# activityNames (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 13.0) · iPadOS 13.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS 13.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 6.0+ (deprecated in 6.0)

The activity names to search for.

> Use [moodNames](moodnames.md) instead.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSArray<NSString *> * activityNames;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSArray<NSString *> * activityNames;
```

<a id="Discussion"></a>

## Discussion

An activity is anything the user might be doing, such as working out, dancing, or meditating.

## See Also

### Retrieving Search Information

- [genreNames](genrenames.md): The media genres to search.
- [mediaIdentifier](mediaidentifier.md): The unique media identifier to search for.
- [mediaName](medianame.md): The name of the media to search for.
- [mediaType](mediatype.md): The type of media to search for.
- [moodNames](moodnames.md): The moods to search for.
- [reference](reference.md): A reference for the media item to search for.
- [INMediaReference](../inmediareference.md): Constants that describe a reference for a media item.
- [releaseDate](releasedate.md): The release date to search for.
- [sortOrder](sortorder.md): The sort order for the found media items.
- [INMediaSortOrder](../inmediasortorder.md): Constants indicating the sort order for the found media items.

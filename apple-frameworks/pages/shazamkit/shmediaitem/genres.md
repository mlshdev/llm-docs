> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/shazamkit/shmediaitem/genres](https://developer.apple.com/documentation/shazamkit/shmediaitem/genres)

# genres (Swift)

**Framework:** ShazamKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An array of genre names for the media item.

## Declaration

```swift
var genres: [String] { get }
```

<a id="Discussion"></a>

## Discussion

The array is empty if there are no media items.

## See Also

### Reading general media item properties

- [title](title.md): A title for the media item.
- [subtitle](subtitle.md): A subtitle for the media item.
- [artist](artist.md): The name of the artist for the media item, such as the performer of a song.
- [artworkURL](artworkurl.md): The URL for artwork for the media item, such as an album cover.
- [videoURL](videourl.md): The URL for a video for the media item, such as a music video.
- [explicitContent](explicitcontent.md): A Boolean value that indicates whether the media item contains explicit content.
- [creationDate](creationdate.md): The date the media item was created.
- [isrc](isrc.md): The International Standard Recording Code (ISRC) for the media item.
- [id](id.md): A unique identifier for this media item.

# genres (Objective-C)

**Framework:** ShazamKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An array of genre names for the media item.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) NSArray<NSString *> * genres;
```

```objectivec
@property (atomic, strong, readonly) NSArray<NSString *> * genres;
```

<a id="Discussion"></a>

## Discussion

The array is empty if there are no media items.

## See Also

### Reading general media item properties

- [title](title.md): A title for the media item.
- [subtitle](subtitle.md): A subtitle for the media item.
- [artist](artist.md): The name of the artist for the media item, such as the performer of a song.
- [artworkURL](artworkurl.md): The URL for artwork for the media item, such as an album cover.
- [videoURL](videourl.md): The URL for a video for the media item, such as a music video.
- [explicitContent](explicitcontent.md): A Boolean value that indicates whether the media item contains explicit content.
- [creationDate](creationdate.md): The date the media item was created.
- [isrc](isrc.md): The International Standard Recording Code (ISRC) for the media item.

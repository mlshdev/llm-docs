> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpcontentitem/artwork](https://developer.apple.com/documentation/mediaplayer/mpcontentitem/artwork)

# artwork (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 7.1+ · iPadOS 7.1+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 7.1+ · visionOS 1.0+

A single image that’s associated with the media item.

## Declaration

```swift
var artwork: MPMediaItemArtwork? { get set }
```

<a id="Discussion"></a>

## Discussion

An image that’s displayed with the media item. A song would have an album cover image, whereas a movie could have a movie poster image associated with it.

## See Also

### Retrieving information about a media item

- [isContainer](iscontainer.md): A Boolean value that indicates whether a media item is container of other items.
- [isExplicitContent](isexplicitcontent.md): A Boolean value that indicates whether the media item contains explicit content.
- [identifier](identifier.md): The unique identifier for the media item.
- [isPlayable](isplayable.md): A Boolean value that indicates whether a media item is able to be played.
- [isStreamingContent](isstreamingcontent.md): A Boolean value that indicates whether the content item is streaming content.
- [playbackProgress](playbackprogress.md): The amount of content played for the media item.
- [subtitle](subtitle.md): A secondary designator for the media item.
- [title](title.md): The public name of the media item.

# artwork (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 7.1+ · iPadOS 7.1+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 7.1+ · visionOS 1.0+

A single image that’s associated with the media item.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) MPMediaItemArtwork * artwork;
```

<a id="Discussion"></a>

## Discussion

An image that’s displayed with the media item. A song would have an album cover image, whereas a movie could have a movie poster image associated with it.

## See Also

### Retrieving information about a media item

- [container](iscontainer.md): A Boolean value that indicates whether a media item is container of other items.
- [explicitContent](isexplicitcontent.md): A Boolean value that indicates whether the media item contains explicit content.
- [identifier](identifier.md): The unique identifier for the media item.
- [playable](isplayable.md): A Boolean value that indicates whether a media item is able to be played.
- [streamingContent](isstreamingcontent.md): A Boolean value that indicates whether the content item is streaming content.
- [playbackProgress](playbackprogress.md): The amount of content played for the media item.
- [subtitle](subtitle.md): A secondary designator for the media item.
- [title](title.md): The public name of the media item.

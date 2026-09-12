> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpcontentitem/iscontainer](https://developer.apple.com/documentation/mediaplayer/mpcontentitem/iscontainer)

# isContainer (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 7.1+ · iPadOS 7.1+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 7.1+ · visionOS 1.0+

A Boolean value that indicates whether a media item is container of other items.

## Declaration

```swift
var isContainer: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When set to [true](https://developer.apple.com/documentation/swift/true), the designated content item’s identified as being able to contain other content items. For example, an album is a container that holds multiple songs.

## See Also

### Retrieving information about a media item

- [artwork](artwork.md): A single image that’s associated with the media item.
- [isExplicitContent](isexplicitcontent.md): A Boolean value that indicates whether the media item contains explicit content.
- [identifier](identifier.md): The unique identifier for the media item.
- [isPlayable](isplayable.md): A Boolean value that indicates whether a media item is able to be played.
- [isStreamingContent](isstreamingcontent.md): A Boolean value that indicates whether the content item is streaming content.
- [playbackProgress](playbackprogress.md): The amount of content played for the media item.
- [subtitle](subtitle.md): A secondary designator for the media item.
- [title](title.md): The public name of the media item.

# container (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 7.1+ · iPadOS 7.1+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 7.1+ · visionOS 1.0+

A Boolean value that indicates whether a media item is container of other items.

## Declaration

```objectivec
@property (nonatomic, assign, getter=isContainer) BOOL container;
```

<a id="Discussion"></a>

## Discussion

When set to [true](https://developer.apple.com/documentation/swift/true), the designated content item’s identified as being able to contain other content items. For example, an album is a container that holds multiple songs.

## See Also

### Retrieving information about a media item

- [artwork](artwork.md): A single image that’s associated with the media item.
- [explicitContent](isexplicitcontent.md): A Boolean value that indicates whether the media item contains explicit content.
- [identifier](identifier.md): The unique identifier for the media item.
- [playable](isplayable.md): A Boolean value that indicates whether a media item is able to be played.
- [streamingContent](isstreamingcontent.md): A Boolean value that indicates whether the content item is streaming content.
- [playbackProgress](playbackprogress.md): The amount of content played for the media item.
- [subtitle](subtitle.md): A secondary designator for the media item.
- [title](title.md): The public name of the media item.

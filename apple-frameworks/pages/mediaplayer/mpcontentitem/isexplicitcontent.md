> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpcontentitem/isexplicitcontent](https://developer.apple.com/documentation/mediaplayer/mpcontentitem/isexplicitcontent)

# isExplicitContent (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 10.0+ · visionOS 1.0+

A Boolean value that indicates whether the media item contains explicit content.

## Declaration

```swift
var isExplicitContent: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When set to [true](https://developer.apple.com/documentation/swift/true), the designated content item’s identified as containing explicit content.

## See Also

### Retrieving information about a media item

- [artwork](artwork.md): A single image that’s associated with the media item.
- [isContainer](iscontainer.md): A Boolean value that indicates whether a media item is container of other items.
- [identifier](identifier.md): The unique identifier for the media item.
- [isPlayable](isplayable.md): A Boolean value that indicates whether a media item is able to be played.
- [isStreamingContent](isstreamingcontent.md): A Boolean value that indicates whether the content item is streaming content.
- [playbackProgress](playbackprogress.md): The amount of content played for the media item.
- [subtitle](subtitle.md): A secondary designator for the media item.
- [title](title.md): The public name of the media item.

# explicitContent (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 10.0+ · visionOS 1.0+

A Boolean value that indicates whether the media item contains explicit content.

## Declaration

```objectivec
@property (nonatomic, assign, getter=isExplicitContent) BOOL explicitContent;
```

<a id="Discussion"></a>

## Discussion

When set to [true](https://developer.apple.com/documentation/swift/true), the designated content item’s identified as containing explicit content.

## See Also

### Retrieving information about a media item

- [artwork](artwork.md): A single image that’s associated with the media item.
- [container](iscontainer.md): A Boolean value that indicates whether a media item is container of other items.
- [identifier](identifier.md): The unique identifier for the media item.
- [playable](isplayable.md): A Boolean value that indicates whether a media item is able to be played.
- [streamingContent](isstreamingcontent.md): A Boolean value that indicates whether the content item is streaming content.
- [playbackProgress](playbackprogress.md): The amount of content played for the media item.
- [subtitle](subtitle.md): A secondary designator for the media item.
- [title](title.md): The public name of the media item.

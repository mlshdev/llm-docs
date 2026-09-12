> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpcontentitem/isplayable](https://developer.apple.com/documentation/mediaplayer/mpcontentitem/isplayable)

# isPlayable (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 7.1+ · iPadOS 7.1+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 7.1+ · visionOS 1.0+

A Boolean value that indicates whether a media item is able to be played.

## Declaration

```swift
var isPlayable: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When set to [true](https://developer.apple.com/documentation/swift/true), the designated content item is able to be played. Containers and individual content items can set this property to [true](https://developer.apple.com/documentation/swift/true). For example, a playlist with multiple songs in it. The playlist is a container that can be played, or the user could choose a song from inside of the playlist.

## See Also

### Retrieving information about a media item

- [artwork](artwork.md): A single image that’s associated with the media item.
- [isContainer](iscontainer.md): A Boolean value that indicates whether a media item is container of other items.
- [isExplicitContent](isexplicitcontent.md): A Boolean value that indicates whether the media item contains explicit content.
- [identifier](identifier.md): The unique identifier for the media item.
- [isStreamingContent](isstreamingcontent.md): A Boolean value that indicates whether the content item is streaming content.
- [playbackProgress](playbackprogress.md): The amount of content played for the media item.
- [subtitle](subtitle.md): A secondary designator for the media item.
- [title](title.md): The public name of the media item.

# playable (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 7.1+ · iPadOS 7.1+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 7.1+ · visionOS 1.0+

A Boolean value that indicates whether a media item is able to be played.

## Declaration

```objectivec
@property (nonatomic, assign, getter=isPlayable) BOOL playable;
```

<a id="Discussion"></a>

## Discussion

When set to [true](https://developer.apple.com/documentation/swift/true), the designated content item is able to be played. Containers and individual content items can set this property to [true](https://developer.apple.com/documentation/swift/true). For example, a playlist with multiple songs in it. The playlist is a container that can be played, or the user could choose a song from inside of the playlist.

## See Also

### Retrieving information about a media item

- [artwork](artwork.md): A single image that’s associated with the media item.
- [container](iscontainer.md): A Boolean value that indicates whether a media item is container of other items.
- [explicitContent](isexplicitcontent.md): A Boolean value that indicates whether the media item contains explicit content.
- [identifier](identifier.md): The unique identifier for the media item.
- [streamingContent](isstreamingcontent.md): A Boolean value that indicates whether the content item is streaming content.
- [playbackProgress](playbackprogress.md): The amount of content played for the media item.
- [subtitle](subtitle.md): A secondary designator for the media item.
- [title](title.md): The public name of the media item.

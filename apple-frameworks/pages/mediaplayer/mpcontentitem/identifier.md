> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpcontentitem/identifier](https://developer.apple.com/documentation/mediaplayer/mpcontentitem/identifier)

# identifier (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 7.1+ · iPadOS 7.1+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 7.1+ · visionOS 1.0+

The unique identifier for the media item.

## Declaration

```swift
var identifier: String { get }
```

<a id="Discussion"></a>

## Discussion

All media items must have a unique identifier. Identifiers must be unique so that Media Player can properly update existing media items or add new media items. Media items won’t update properly if multiple media items have the same identifier.

## See Also

### Related Documentation

- [init(identifier:)](init%28identifier_%29.md): Sets the identifier for a media item.

### Retrieving information about a media item

- [artwork](artwork.md): A single image that’s associated with the media item.
- [isContainer](iscontainer.md): A Boolean value that indicates whether a media item is container of other items.
- [isExplicitContent](isexplicitcontent.md): A Boolean value that indicates whether the media item contains explicit content.
- [isPlayable](isplayable.md): A Boolean value that indicates whether a media item is able to be played.
- [isStreamingContent](isstreamingcontent.md): A Boolean value that indicates whether the content item is streaming content.
- [playbackProgress](playbackprogress.md): The amount of content played for the media item.
- [subtitle](subtitle.md): A secondary designator for the media item.
- [title](title.md): The public name of the media item.

# identifier (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 7.1+ · iPadOS 7.1+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 7.1+ · visionOS 1.0+

The unique identifier for the media item.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * identifier;
```

<a id="Discussion"></a>

## Discussion

All media items must have a unique identifier. Identifiers must be unique so that Media Player can properly update existing media items or add new media items. Media items won’t update properly if multiple media items have the same identifier.

## See Also

### Related Documentation

- [initWithIdentifier:](init%28identifier_%29.md): Sets the identifier for a media item.

### Retrieving information about a media item

- [artwork](artwork.md): A single image that’s associated with the media item.
- [container](iscontainer.md): A Boolean value that indicates whether a media item is container of other items.
- [explicitContent](isexplicitcontent.md): A Boolean value that indicates whether the media item contains explicit content.
- [playable](isplayable.md): A Boolean value that indicates whether a media item is able to be played.
- [streamingContent](isstreamingcontent.md): A Boolean value that indicates whether the content item is streaming content.
- [playbackProgress](playbackprogress.md): The amount of content played for the media item.
- [subtitle](subtitle.md): A secondary designator for the media item.
- [title](title.md): The public name of the media item.

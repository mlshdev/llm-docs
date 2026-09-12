> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpcontentitem/playbackprogress](https://developer.apple.com/documentation/mediaplayer/mpcontentitem/playbackprogress)

# playbackProgress (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 7.1+ · iPadOS 7.1+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 7.1+ · visionOS 1.0+

The amount of content played for the media item.

## Declaration

```swift
var playbackProgress: Float { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property ranges from `0.0` to `1.0`. A value `0.0` indicates that the media item hasn’t played, while `1.0` indicates that the media item has completely played. The default value is `–1.0` indicates that the progress indicator isn’t displayed. The system displays a progress indicator automatically if this property has a value between `0.0` and `1.0`.

## See Also

### Retrieving information about a media item

- [artwork](artwork.md): A single image that’s associated with the media item.
- [isContainer](iscontainer.md): A Boolean value that indicates whether a media item is container of other items.
- [isExplicitContent](isexplicitcontent.md): A Boolean value that indicates whether the media item contains explicit content.
- [identifier](identifier.md): The unique identifier for the media item.
- [isPlayable](isplayable.md): A Boolean value that indicates whether a media item is able to be played.
- [isStreamingContent](isstreamingcontent.md): A Boolean value that indicates whether the content item is streaming content.
- [subtitle](subtitle.md): A secondary designator for the media item.
- [title](title.md): The public name of the media item.

# playbackProgress (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 7.1+ · iPadOS 7.1+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 7.1+ · visionOS 1.0+

The amount of content played for the media item.

## Declaration

```objectivec
@property (nonatomic, assign) float playbackProgress;
```

<a id="Discussion"></a>

## Discussion

The value of this property ranges from `0.0` to `1.0`. A value `0.0` indicates that the media item hasn’t played, while `1.0` indicates that the media item has completely played. The default value is `–1.0` indicates that the progress indicator isn’t displayed. The system displays a progress indicator automatically if this property has a value between `0.0` and `1.0`.

## See Also

### Retrieving information about a media item

- [artwork](artwork.md): A single image that’s associated with the media item.
- [container](iscontainer.md): A Boolean value that indicates whether a media item is container of other items.
- [explicitContent](isexplicitcontent.md): A Boolean value that indicates whether the media item contains explicit content.
- [identifier](identifier.md): The unique identifier for the media item.
- [playable](isplayable.md): A Boolean value that indicates whether a media item is able to be played.
- [streamingContent](isstreamingcontent.md): A Boolean value that indicates whether the content item is streaming content.
- [subtitle](subtitle.md): A secondary designator for the media item.
- [title](title.md): The public name of the media item.

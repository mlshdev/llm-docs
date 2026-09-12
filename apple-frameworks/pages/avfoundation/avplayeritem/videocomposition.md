> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritem/videocomposition](https://developer.apple.com/documentation/avfoundation/avplayeritem/videocomposition)

# videoComposition (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

The video composition settings to be applied during playback.

## Declaration

```swift
@NSCopying nonisolated var videoComposition: AVVideoComposition? { get set }
```

<a id="Discussion"></a>

## Discussion

A video composition can only be used with file-based media and is not supported for use with media served using HTTP Live Streaming.

## See Also

### Configuring video compositing

- [customVideoCompositor](customvideocompositor.md): The custom video compositor.
- [seekingWaitsForVideoCompositionRendering](seekingwaitsforvideocompositionrendering.md): A Boolean value that indicates whether the item’s timing follows the displayed video frame when seeking with a video composition.

# videoComposition (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

The video composition settings to be applied during playback.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) AVVideoComposition * videoComposition;
```

<a id="Discussion"></a>

## Discussion

A video composition can only be used with file-based media and is not supported for use with media served using HTTP Live Streaming.

## See Also

### Configuring video compositing

- [customVideoCompositor](customvideocompositor.md): The custom video compositor.
- [seekingWaitsForVideoCompositionRendering](seekingwaitsforvideocompositionrendering.md): A Boolean value that indicates whether the item’s timing follows the displayed video frame when seeking with a video composition.

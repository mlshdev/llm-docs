> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritem/customvideocompositor](https://developer.apple.com/documentation/avfoundation/avplayeritem/customvideocompositor)

# customVideoCompositor (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

The custom video compositor.

## Declaration

```swift
nonisolated var customVideoCompositor: (any AVVideoCompositing)? { get }
```

<a id="Discussion"></a>

## Discussion

The custom video compositor instance that is used during image generation is accessible via this property after the value of [videoComposition](videocomposition.md) is set to an [AVVideoComposition](../avvideocomposition.md) instance that specifies a custom video compositor class. Any additional communication between the application and that instance of the custom video compositor, if any is required for configuration or other purposes, can only occur once that has happened.

If the value of [videoComposition](videocomposition.md) is changed from an [AVVideoComposition](../avvideocomposition.md) that specifies a custom video compositor class to another instance of [AVVideoComposition](../avvideocomposition.md) that specifies the same custom video compositor class, the instance of the custom video compositor that was previously created will receive the [renderContextChanged(\_:)](../avvideocompositing/rendercontextchanged%28__%29.md) message and remain in use for subsequent image generation.

This property is `nil` if there is no video compositor, or if the internal video compositor is in use.

## See Also

### Configuring video compositing

- [videoComposition](videocomposition.md): The video composition settings to be applied during playback.
- [seekingWaitsForVideoCompositionRendering](seekingwaitsforvideocompositionrendering.md): A Boolean value that indicates whether the item’s timing follows the displayed video frame when seeking with a video composition.

# customVideoCompositor (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

The custom video compositor.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) id<AVVideoCompositing> customVideoCompositor;
```

<a id="Discussion"></a>

## Discussion

The custom video compositor instance that is used during image generation is accessible via this property after the value of [videoComposition](videocomposition.md) is set to an [AVVideoComposition](../avvideocomposition.md) instance that specifies a custom video compositor class. Any additional communication between the application and that instance of the custom video compositor, if any is required for configuration or other purposes, can only occur once that has happened.

If the value of [videoComposition](videocomposition.md) is changed from an [AVVideoComposition](../avvideocomposition.md) that specifies a custom video compositor class to another instance of [AVVideoComposition](../avvideocomposition.md) that specifies the same custom video compositor class, the instance of the custom video compositor that was previously created will receive the [renderContextChanged:](../avvideocompositing/rendercontextchanged%28__%29.md) message and remain in use for subsequent image generation.

This property is `nil` if there is no video compositor, or if the internal video compositor is in use.

## See Also

### Configuring video compositing

- [videoComposition](videocomposition.md): The video composition settings to be applied during playback.
- [seekingWaitsForVideoCompositionRendering](seekingwaitsforvideocompositionrendering.md): A Boolean value that indicates whether the item’s timing follows the displayed video frame when seeking with a video composition.

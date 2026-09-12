> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritem/seekingwaitsforvideocompositionrendering](https://developer.apple.com/documentation/avfoundation/avplayeritem/seekingwaitsforvideocompositionrendering)

# seekingWaitsForVideoCompositionRendering (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that indicates whether the item’s timing follows the displayed video frame when seeking with a video composition.

## Declaration

```swift
nonisolated var seekingWaitsForVideoCompositionRendering: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

By default, item timing is updated as quickly as possible during seeking. Specifically, the item does not wait for new frames to be rendered when seeking during normal playback. In most situations, the latency between the completion of a seek operation and the display of a video frame at the new time is negligible. However, when video compositions are in use, the processing of video may introduce noticeable latency. Setting the value of this property to [true](https://developer.apple.com/documentation/swift/true) causes the item’s timing to be updated only after the corresponding video frame has been displayed. For example, this allows an AVSynchronizedLayer object associated with the item to remain in sync with the displayed video.

This property has no effect on items whose [videoComposition](videocomposition.md) property is `nil`.

## See Also

### Configuring video compositing

- [videoComposition](videocomposition.md): The video composition settings to be applied during playback.
- [customVideoCompositor](customvideocompositor.md): The custom video compositor.

# seekingWaitsForVideoCompositionRendering (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that indicates whether the item’s timing follows the displayed video frame when seeking with a video composition.

## Declaration

```objectivec
@property BOOL seekingWaitsForVideoCompositionRendering;
```

<a id="Discussion"></a>

## Discussion

By default, item timing is updated as quickly as possible during seeking. Specifically, the item does not wait for new frames to be rendered when seeking during normal playback. In most situations, the latency between the completion of a seek operation and the display of a video frame at the new time is negligible. However, when video compositions are in use, the processing of video may introduce noticeable latency. Setting the value of this property to [true](https://developer.apple.com/documentation/swift/true) causes the item’s timing to be updated only after the corresponding video frame has been displayed. For example, this allows an AVSynchronizedLayer object associated with the item to remain in sync with the displayed video.

This property has no effect on items whose [videoComposition](videocomposition.md) property is `nil`.

## See Also

### Configuring video compositing

- [videoComposition](videocomposition.md): The video composition settings to be applied during playback.
- [customVideoCompositor](customvideocompositor.md): The custom video compositor.

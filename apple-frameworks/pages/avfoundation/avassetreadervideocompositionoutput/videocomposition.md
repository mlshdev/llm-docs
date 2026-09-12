> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetreadervideocompositionoutput/videocomposition](https://developer.apple.com/documentation/avfoundation/avassetreadervideocompositionoutput/videocomposition)

# videoComposition (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

The video composition to use for the output.

## Declaration

```swift
@NSCopying var videoComposition: AVVideoComposition? { get set }
```

<a id="Discussion"></a>

## Discussion

The value is an [AVVideoComposition](../avvideocomposition.md) object that specifies the visual arrangement of video frames read from each source track over the timeline of the source asset.

## See Also

### Configuring video settings

- [customVideoCompositor](customvideocompositor.md): A custom video compositor for the output.

# videoComposition (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

The video composition to use for the output.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) AVVideoComposition * videoComposition;
```

<a id="Discussion"></a>

## Discussion

The value is an [AVVideoComposition](../avvideocomposition.md) object that specifies the visual arrangement of video frames read from each source track over the timeline of the source asset.

## See Also

### Configuring video settings

- [customVideoCompositor](customvideocompositor.md): A custom video compositor for the output.

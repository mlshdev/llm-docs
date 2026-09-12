> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetimagegenerator/customvideocompositor](https://developer.apple.com/documentation/avfoundation/avassetimagegenerator/customvideocompositor)

# customVideoCompositor (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

A custom video compositor to use when extracting images from assets with multiple video tracks.

## Declaration

```swift
var customVideoCompositor: (any AVVideoCompositing)? { get }
```

## See Also

### Configuring compositing

- [videoComposition](videocomposition.md): A video composition to use when extracting images from assets with multiple video tracks.

# customVideoCompositor (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

A custom video compositor to use when extracting images from assets with multiple video tracks.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) id<AVVideoCompositing> customVideoCompositor;
```

## See Also

### Configuring compositing

- [videoComposition](videocomposition.md): A video composition to use when extracting images from assets with multiple video tracks.

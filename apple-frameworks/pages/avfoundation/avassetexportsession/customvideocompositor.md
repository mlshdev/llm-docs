> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avassetexportsession/customvideocompositor

# customVideoCompositor (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

An optional custom object to use when compositing video frames.

## Declaration

```swift
var customVideoCompositor: (any AVVideoCompositing)? { get }
```

## See Also

### Configuring video output

- [videoComposition](videocomposition.md): An optional object that provides instructions for how to composite frames of video.

# customVideoCompositor (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

An optional custom object to use when compositing video frames.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) id<AVVideoCompositing> customVideoCompositor;
```

## See Also

### Configuring video output

- [videoComposition](videocomposition.md): An optional object that provides instructions for how to composite frames of video.

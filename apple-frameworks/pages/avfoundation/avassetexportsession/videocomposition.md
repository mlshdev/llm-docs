> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetexportsession/videocomposition](https://developer.apple.com/documentation/avfoundation/avassetexportsession/videocomposition)

# videoComposition (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

An optional object that provides instructions for how to composite frames of video.

## Declaration

```swift
@NSCopying var videoComposition: AVVideoComposition? { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is `nil`.

This property is key-value observable.

## See Also

### Configuring video output

- [customVideoCompositor](customvideocompositor.md): An optional custom object to use when compositing video frames.

# videoComposition (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

An optional object that provides instructions for how to composite frames of video.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) AVVideoComposition * videoComposition;
```

<a id="Discussion"></a>

## Discussion

The default value is `nil`.

This property is key-value observable.

## See Also

### Configuring video output

- [customVideoCompositor](customvideocompositor.md): An optional custom object to use when compositing video frames.

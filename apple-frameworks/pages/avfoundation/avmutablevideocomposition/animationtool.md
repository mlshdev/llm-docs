> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablevideocomposition/animationtool](https://developer.apple.com/documentation/avfoundation/avmutablevideocomposition/animationtool)

# animationTool (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 26.0) · iPadOS 4.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.7+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

A video composition tool to use with Core Animation in offline rendering.

> Use AVVideoComposition.Configuration instead

## Declaration

```swift
var animationTool: AVVideoCompositionCoreAnimationTool? { get set }
```

<a id="Discussion"></a>

## Discussion

This attribute may be `nil`. Set an animation tool if you are using the composition in conjunction with [AVAssetExportSession](../avassetexportsession.md) for offline rendering, rather than with [AVPlayer](../avplayer.md).

## See Also

### Configuring video composition properties

- [frameDuration](frameduration.md): Deprecated. A time interval for which the video composition should render composed video frames.
- [renderSize](rendersize.md): Deprecated. The size at which the video composition should render.
- [renderScale](renderscale.md): Deprecated. The scale at which the video composition should render.

# animationTool (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

A video composition tool to use with Core Animation in offline rendering.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) AVVideoCompositionCoreAnimationTool * animationTool;
```

<a id="Discussion"></a>

## Discussion

This attribute may be `nil`. Set an animation tool if you are using the composition in conjunction with [AVAssetExportSession](../avassetexportsession.md) for offline rendering, rather than with [AVPlayer](../avplayer.md).

## See Also

### Configuring video composition properties

- [frameDuration](frameduration.md): Deprecated. A time interval for which the video composition should render composed video frames.
- [renderSize](rendersize.md): Deprecated. The size at which the video composition should render.
- [renderScale](renderscale.md): Deprecated. The scale at which the video composition should render.
- [outputBufferDescription](outputbufferdescription.md): The output buffers of the video composition can be specified with the outputBufferDescription. The value is an array of CMTagCollectionRef objects that describes the output buffers.

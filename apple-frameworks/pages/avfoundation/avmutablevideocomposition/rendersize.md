> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablevideocomposition/rendersize](https://developer.apple.com/documentation/avfoundation/avmutablevideocomposition/rendersize)

# renderSize (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 26.0) · iPadOS 4.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.7+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

The size at which the video composition should render.

> Use AVVideoComposition.Configuration instead

## Declaration

```swift
var renderSize: CGSize { get set }
```

## See Also

### Configuring video composition properties

- [frameDuration](frameduration.md): Deprecated. A time interval for which the video composition should render composed video frames.
- [renderScale](renderscale.md): Deprecated. The scale at which the video composition should render.
- [animationTool](animationtool.md): Deprecated. A video composition tool to use with Core Animation in offline rendering.

# renderSize (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

The size at which the video composition should render.

## Declaration

```objectivec
@property (nonatomic) CGSize renderSize;
```

## See Also

### Configuring video composition properties

- [frameDuration](frameduration.md): Deprecated. A time interval for which the video composition should render composed video frames.
- [renderScale](renderscale.md): Deprecated. The scale at which the video composition should render.
- [animationTool](animationtool.md): Deprecated. A video composition tool to use with Core Animation in offline rendering.
- [outputBufferDescription](outputbufferdescription.md): The output buffers of the video composition can be specified with the outputBufferDescription. The value is an array of CMTagCollectionRef objects that describes the output buffers.

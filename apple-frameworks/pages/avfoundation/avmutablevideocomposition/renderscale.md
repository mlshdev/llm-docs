> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablevideocomposition/renderscale](https://developer.apple.com/documentation/avfoundation/avmutablevideocomposition/renderscale)

# renderScale (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 26.0) · iPadOS 4.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.14+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

The scale at which the video composition should render.

## Declaration

```swift
var renderScale: Float { get set }
```

<a id="Discussion"></a>

## Discussion

May only be other than `1.0` for a video composition set on an [AVPlayerItem](../avplayeritem.md).

## See Also

### Configuring video composition properties

- [frameDuration](frameduration.md): Deprecated. A time interval for which the video composition should render composed video frames.
- [renderSize](rendersize.md): Deprecated. The size at which the video composition should render.
- [animationTool](animationtool.md): Deprecated. A video composition tool to use with Core Animation in offline rendering.

# renderScale (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 9.0+ · visionOS 1.0+

The scale at which the video composition should render.

## Declaration

```objectivec
@property (nonatomic) float renderScale;
```

<a id="Discussion"></a>

## Discussion

May only be other than `1.0` for a video composition set on an [AVPlayerItem](../avplayeritem.md).

## See Also

### Configuring video composition properties

- [frameDuration](frameduration.md): Deprecated. A time interval for which the video composition should render composed video frames.
- [renderSize](rendersize.md): Deprecated. The size at which the video composition should render.
- [animationTool](animationtool.md): Deprecated. A video composition tool to use with Core Animation in offline rendering.
- [outputBufferDescription](outputbufferdescription.md): The output buffers of the video composition can be specified with the outputBufferDescription. The value is an array of CMTagCollectionRef objects that describes the output buffers.

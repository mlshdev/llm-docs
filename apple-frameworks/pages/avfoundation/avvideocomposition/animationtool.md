> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avvideocomposition/animationtool](https://developer.apple.com/documentation/avfoundation/avvideocomposition/animationtool)

# animationTool (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

A video composition tool to use with Core Animation in offline rendering.

## Declaration

```swift
var animationTool: AVVideoCompositionCoreAnimationTool? { get }
```

<a id="Discussion"></a>

## Discussion

This attribute may be `nil`. Set an animation tool if you’re using the composition in conjunction with [AVAssetExportSession](../avassetexportsession.md) for offline rendering, rather than with [AVPlayer](../avplayer.md).

## See Also

### Inspecting the video composition

- [renderSize](rendersize.md): The size at which the video composition should render.
- [renderScale](renderscale.md): The scale at which the video composition should render.
- [frameDuration](frameduration.md): A time interval for which the video composition should render composed video frames.
- [colorPrimaries](colorprimaries.md): The color primaries used for video composition.
- [colorTransferFunction](colortransferfunction.md): The transfer function used for video composition.
- [colorYCbCrMatrix](colorycbcrmatrix.md): The YCbCr matrix used for video composition.
- [customVideoCompositorClass](customvideocompositorclass.md): A custom compositor class to use.
- [outputBufferDescription](outputbufferdescription-3ayt8.md): The output buffers of the video composition can be specified with the outputBufferDescription. The value is an array of an array of CMTag objects that describes the output buffers.
- [spatialVideoConfigurations](spatialvideoconfigurations-80iab.md): Indicates the spatial configurations that are available to associate with the output of the video composition.
- [AVSpatialVideoConfiguration](../avspatialvideoconfiguration-swift.struct.md)

# animationTool (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

A video composition tool to use with Core Animation in offline rendering.

## Declaration

```objectivec
@property (nonatomic, retain, readonly, nullable) AVVideoCompositionCoreAnimationTool * animationTool;
```

<a id="Discussion"></a>

## Discussion

This attribute may be `nil`. Set an animation tool if you’re using the composition in conjunction with [AVAssetExportSession](../avassetexportsession.md) for offline rendering, rather than with [AVPlayer](../avplayer.md).

## See Also

### Inspecting the video composition

- [renderSize](rendersize.md): The size at which the video composition should render.
- [renderScale](renderscale.md): The scale at which the video composition should render.
- [frameDuration](frameduration.md): A time interval for which the video composition should render composed video frames.
- [colorPrimaries](colorprimaries.md): The color primaries used for video composition.
- [colorTransferFunction](colortransferfunction.md): The transfer function used for video composition.
- [colorYCbCrMatrix](colorycbcrmatrix.md): The YCbCr matrix used for video composition.
- [customVideoCompositorClass](customvideocompositorclass.md): A custom compositor class to use.
- [outputBufferDescription](outputbufferdescription-3wsar.md): The output buffers of the video composition can be specified with the outputBufferDescription. The value is an array of CMTagCollectionRef objects that describes the output buffers.
- [spatialVideoConfigurations](spatialvideoconfigurations-2ipps.md): Indicates the spatial configurations that are available to associate with the output of the video composition.
- [AVSpatialVideoConfiguration](../avspatialvideoconfiguration-c.class.md): An AVSpatialVideoConfiguration specifies spatial video properties.

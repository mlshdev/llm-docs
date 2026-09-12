> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avvideocomposition/customvideocompositorclass](https://developer.apple.com/documentation/avfoundation/avvideocomposition/customvideocompositorclass)

# customVideoCompositorClass (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

A custom compositor class to use.

## Declaration

```swift
var customVideoCompositorClass: (any AVVideoCompositing.Type)? { get }
```

<a id="Discussion"></a>

## Discussion

The default is `nil`, which indicates to use the internal video compositor. The `customVideoCompositorClass` must implement the [AVVideoCompositing](../avvideocompositing.md) protocol.

## See Also

### Inspecting the video composition

- [renderSize](rendersize.md): The size at which the video composition should render.
- [renderScale](renderscale.md): The scale at which the video composition should render.
- [frameDuration](frameduration.md): A time interval for which the video composition should render composed video frames.
- [animationTool](animationtool.md): A video composition tool to use with Core Animation in offline rendering.
- [colorPrimaries](colorprimaries.md): The color primaries used for video composition.
- [colorTransferFunction](colortransferfunction.md): The transfer function used for video composition.
- [colorYCbCrMatrix](colorycbcrmatrix.md): The YCbCr matrix used for video composition.
- [outputBufferDescription](outputbufferdescription-3ayt8.md): The output buffers of the video composition can be specified with the outputBufferDescription. The value is an array of an array of CMTag objects that describes the output buffers.
- [spatialVideoConfigurations](spatialvideoconfigurations-80iab.md): Indicates the spatial configurations that are available to associate with the output of the video composition.
- [AVSpatialVideoConfiguration](../avspatialvideoconfiguration-swift.struct.md)

# customVideoCompositorClass (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

A custom compositor class to use.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) Class<AVVideoCompositing> * customVideoCompositorClass;
```

<a id="Discussion"></a>

## Discussion

The default is `nil`, which indicates to use the internal video compositor. The `customVideoCompositorClass` must implement the [AVVideoCompositing](../avvideocompositing.md) protocol.

## See Also

### Inspecting the video composition

- [renderSize](rendersize.md): The size at which the video composition should render.
- [renderScale](renderscale.md): The scale at which the video composition should render.
- [frameDuration](frameduration.md): A time interval for which the video composition should render composed video frames.
- [animationTool](animationtool.md): A video composition tool to use with Core Animation in offline rendering.
- [colorPrimaries](colorprimaries.md): The color primaries used for video composition.
- [colorTransferFunction](colortransferfunction.md): The transfer function used for video composition.
- [colorYCbCrMatrix](colorycbcrmatrix.md): The YCbCr matrix used for video composition.
- [outputBufferDescription](outputbufferdescription-3wsar.md): The output buffers of the video composition can be specified with the outputBufferDescription. The value is an array of CMTagCollectionRef objects that describes the output buffers.
- [spatialVideoConfigurations](spatialvideoconfigurations-2ipps.md): Indicates the spatial configurations that are available to associate with the output of the video composition.
- [AVSpatialVideoConfiguration](../avspatialvideoconfiguration-c.class.md): An AVSpatialVideoConfiguration specifies spatial video properties.

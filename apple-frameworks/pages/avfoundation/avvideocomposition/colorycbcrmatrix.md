> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avvideocomposition/colorycbcrmatrix](https://developer.apple.com/documentation/avfoundation/avvideocomposition/colorycbcrmatrix)

# colorYCbCrMatrix (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The YCbCr matrix used for video composition.

## Declaration

```swift
var colorYCbCrMatrix: String? { get }
```

<a id="Discussion"></a>

## Discussion

The default value is `nil`. When the value of this property is `nil`, the source’s matrix is propagated and used. Valid values are those suitable for [AVVideoYCbCrMatrixKey](../avvideoycbcrmatrixkey.md).

## See Also

### Inspecting the video composition

- [renderSize](rendersize.md): The size at which the video composition should render.
- [renderScale](renderscale.md): The scale at which the video composition should render.
- [frameDuration](frameduration.md): A time interval for which the video composition should render composed video frames.
- [animationTool](animationtool.md): A video composition tool to use with Core Animation in offline rendering.
- [colorPrimaries](colorprimaries.md): The color primaries used for video composition.
- [colorTransferFunction](colortransferfunction.md): The transfer function used for video composition.
- [customVideoCompositorClass](customvideocompositorclass.md): A custom compositor class to use.
- [outputBufferDescription](outputbufferdescription-3ayt8.md): The output buffers of the video composition can be specified with the outputBufferDescription. The value is an array of an array of CMTag objects that describes the output buffers.
- [spatialVideoConfigurations](spatialvideoconfigurations-80iab.md): Indicates the spatial configurations that are available to associate with the output of the video composition.
- [AVSpatialVideoConfiguration](../avspatialvideoconfiguration-swift.struct.md)

# colorYCbCrMatrix (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The YCbCr matrix used for video composition.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSString * colorYCbCrMatrix;
```

<a id="Discussion"></a>

## Discussion

The default value is `nil`. When the value of this property is `nil`, the source’s matrix is propagated and used. Valid values are those suitable for [AVVideoYCbCrMatrixKey](../avvideoycbcrmatrixkey.md).

## See Also

### Inspecting the video composition

- [renderSize](rendersize.md): The size at which the video composition should render.
- [renderScale](renderscale.md): The scale at which the video composition should render.
- [frameDuration](frameduration.md): A time interval for which the video composition should render composed video frames.
- [animationTool](animationtool.md): A video composition tool to use with Core Animation in offline rendering.
- [colorPrimaries](colorprimaries.md): The color primaries used for video composition.
- [colorTransferFunction](colortransferfunction.md): The transfer function used for video composition.
- [customVideoCompositorClass](customvideocompositorclass.md): A custom compositor class to use.
- [outputBufferDescription](outputbufferdescription-3wsar.md): The output buffers of the video composition can be specified with the outputBufferDescription. The value is an array of CMTagCollectionRef objects that describes the output buffers.
- [spatialVideoConfigurations](spatialvideoconfigurations-2ipps.md): Indicates the spatial configurations that are available to associate with the output of the video composition.
- [AVSpatialVideoConfiguration](../avspatialvideoconfiguration-c.class.md): An AVSpatialVideoConfiguration specifies spatial video properties.

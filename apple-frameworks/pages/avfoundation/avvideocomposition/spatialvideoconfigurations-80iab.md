> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avvideocomposition/spatialvideoconfigurations-80iab](https://developer.apple.com/documentation/avfoundation/avvideocomposition/spatialvideoconfigurations-80iab)

# spatialVideoConfigurations

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Indicates the spatial configurations that are available to associate with the output of the video composition.

## Declaration

```swift
var spatialVideoConfigurations: [AVSpatialVideoConfiguration] { get }
```

<a id="discussion"></a>

## Discussion

A custom compositor can output spatial video by specifying one of these spatial configurations. A spatial configuration with all nil values indicates the video is not spatial. A nil spatial configuration also indicates the video is not spatial. The value can be nil, which indicates the output will not be spatial. NOTE: If this property is not empty, then the client must attach one of the spatial configurations in this array to all of the pixel buffers, otherwise an exception will be thrown.

## See Also

### Inspecting the video composition

- [renderSize](rendersize.md): The size at which the video composition should render.
- [renderScale](renderscale.md): The scale at which the video composition should render.
- [frameDuration](frameduration.md): A time interval for which the video composition should render composed video frames.
- [animationTool](animationtool.md): A video composition tool to use with Core Animation in offline rendering.
- [colorPrimaries](colorprimaries.md): The color primaries used for video composition.
- [colorTransferFunction](colortransferfunction.md): The transfer function used for video composition.
- [colorYCbCrMatrix](colorycbcrmatrix.md): The YCbCr matrix used for video composition.
- [customVideoCompositorClass](customvideocompositorclass.md): A custom compositor class to use.
- [outputBufferDescription](outputbufferdescription-3ayt8.md): The output buffers of the video composition can be specified with the outputBufferDescription. The value is an array of an array of CMTag objects that describes the output buffers.
- [AVSpatialVideoConfiguration](../avspatialvideoconfiguration-swift.struct.md)

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avvideocomposition/configuration/perframehdrdisplaymetadatapolicy](https://developer.apple.com/documentation/avfoundation/avvideocomposition/configuration/perframehdrdisplaymetadatapolicy)

# perFrameHDRDisplayMetadataPolicy

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

The policy for display of HDR display metadata on the rendered frame.

## Declaration

```swift
var perFrameHDRDisplayMetadataPolicy: AVVideoComposition.PerFrameHDRDisplayMetadataPolicy { get set }
```

## See Also

### Inspecting the configuration

- [renderSize](rendersize.md): The size at which the video composition should render.
- [renderScale](renderscale.md): The scale at which the video composition should render.
- [frameDuration](frameduration.md): A time interval for which the video composition should render composed video frames.
- [animationTool](animationtool.md): A video composition tool to use with Core Animation in offline rendering.
- [colorPrimaries](colorprimaries.md): The color primaries used for video composition.
- [colorTransferFunction](colortransferfunction.md): The transfer function used for video composition.
- [colorYCbCrMatrix](colorycbcrmatrix.md): The YCbCr matrix used for video composition.
- [customVideoCompositorClass](customvideocompositorclass.md): A custom compositor class to use.
- [outputBufferDescription](outputbufferdescription.md): The output buffers of the video composition can be specified with the outputBufferDescription. The value is an array of an array of CMTag objects that describes the output buffers.
- [instructions](instructions.md): The video composition instructions.
- [spatialVideoConfigurations](spatialvideoconfigurations.md): Indicates the spatial configurations that are available to associate with the output of the video composition.
- [sourceSampleDataTrackIDs](sourcesampledatatrackids.md): The identifiers of source sample data tracks in the composition that the object requires to compose frames.
- [sourceTrackIDForFrameTiming](sourcetrackidforframetiming.md): An identifier of the source track from which the video composition derives frame timing.

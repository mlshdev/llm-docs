> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avvideocomposition/configuration](https://developer.apple.com/documentation/avfoundation/avvideocomposition/configuration)

# AVVideoComposition.Configuration

**Framework:** AVFoundation  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Configurable properties for initializing a new AVVideoComposition instance.

## Declaration

```swift
struct Configuration
```

## Topics

### Creating a configuration

- [init(for:prototypeInstruction:)](configuration/init%28for_prototypeinstruction_%29.md): Initializes a video composition configuration with the specified asset properties and optional prototype video composition instruction.
- [init(animationTool:colorPrimaries:colorTransferFunction:colorYCbCrMatrix:customVideoCompositorClass:frameDuration:instructions:outputBufferDescription:perFrameHDRDisplayMetadataPolicy:renderScale:renderSize:sourceSampleDataTrackIDs:sourceTrackIDForFrameTiming:spatialVideoConfigurations:)](configuration/init%28animationtool_colorprimaries_colortransferfunction_colorycbcrmatrix_customvideocompositorclass_frameduration_instructions_outputbufferdescription_perframehdrdisplaymetadatapol~d13e75cb.md)
- [init(animationTool:colorPrimaries:colorTransferFunction:colorYCbCrMatrix:customVideoCompositorClass:frameDuration:instructions:outputBufferDescription:renderScale:renderSize:sourceSampleDataTrackIDs:sourceTrackIDForFrameTiming:spatialVideoConfigurations:)](configuration/init%28animationtool_colorprimaries_colortransferfunction_colorycbcrmatrix_customvideocompositorclass_frameduration_instructions_outputbufferdescription_renderscale_rendersize_source~e67dc1c7.md)

### Inspecting the configuration

- [renderSize](configuration/rendersize.md): The size at which the video composition should render.
- [renderScale](configuration/renderscale.md): The scale at which the video composition should render.
- [frameDuration](configuration/frameduration.md): A time interval for which the video composition should render composed video frames.
- [animationTool](configuration/animationtool.md): A video composition tool to use with Core Animation in offline rendering.
- [colorPrimaries](configuration/colorprimaries.md): The color primaries used for video composition.
- [colorTransferFunction](configuration/colortransferfunction.md): The transfer function used for video composition.
- [colorYCbCrMatrix](configuration/colorycbcrmatrix.md): The YCbCr matrix used for video composition.
- [customVideoCompositorClass](configuration/customvideocompositorclass.md): A custom compositor class to use.
- [outputBufferDescription](configuration/outputbufferdescription.md): The output buffers of the video composition can be specified with the outputBufferDescription. The value is an array of an array of CMTag objects that describes the output buffers.
- [instructions](configuration/instructions.md): The video composition instructions.
- [spatialVideoConfigurations](configuration/spatialvideoconfigurations.md): Indicates the spatial configurations that are available to associate with the output of the video composition.
- [perFrameHDRDisplayMetadataPolicy](configuration/perframehdrdisplaymetadatapolicy.md): The policy for display of HDR display metadata on the rendered frame.
- [sourceSampleDataTrackIDs](configuration/sourcesampledatatrackids.md): The identifiers of source sample data tracks in the composition that the object requires to compose frames.
- [sourceTrackIDForFrameTiming](configuration/sourcetrackidforframetiming.md): An identifier of the source track from which the video composition derives frame timing.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating a video composition

- [init(configuration:)](init%28configuration_%29.md): Initialize an AVVideoComposition with a configuration.
- [init(applyingFiltersTo:applier:)](init%28applyingfiltersto_applier_%29.md): Creates a video composition configured to apply Core Image filters to each video frame of the specified asset.
- [videoComposition(with:applyingCIFiltersWithHandler:completionHandler:)](videocomposition%28with_applyingcifilterswithhandler_completionhandler_%29.md): Deprecated. Returns a new video composition that’s configured to apply Core Image filters to each video frame of the specified asset.
- [AVAsynchronousCIImageFilteringRequest](../avasynchronousciimagefilteringrequest.md): Deprecated. An object that supports using Core Image filters to process an individual video frame in a video composition.
- [AVCIImageFilteringParameters](../avciimagefilteringparameters.md)
- [AVCIImageFilteringResult](../avciimagefilteringresult.md): An output video frame processed with Core Image filtering.
- [videoComposition(withPropertiesOf:completionHandler:)](videocomposition%28withpropertiesof_completionhandler_%29.md): Returns a new video composition that’s configured to present the video tracks of the specified asset.
- [init(propertiesOf:)](init%28propertiesof_%29.md): Deprecated. Creates a video composition object configured to present the video tracks of the specified asset.
- [init(asset:applyingCIFiltersWithHandler:)](init%28asset_applyingcifilterswithhandler_%29.md): Deprecated. Creates a video composition configured to apply Core Image filters to each video frame of the specified asset.

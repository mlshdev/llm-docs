> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avvideocomposition/configuration/init(for:prototypeinstruction:)](https://developer.apple.com/documentation/avfoundation/avvideocomposition/configuration/init(for:prototypeinstruction:))

# init(for:prototypeInstruction:)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Initializes a video composition configuration with the specified asset properties and optional prototype video composition instruction.

## Declaration

```swift
nonisolated(nonsending) init(for asset: AVAsset, prototypeInstruction: AVVideoCompositionInstruction? = nil) async throws
```

## Parameters

- `asset`: Asset to use with the video composition
- `prototypeInstruction`: A video composition instruction to use as a prototype.

## See Also

### Creating a configuration

- [init(animationTool:colorPrimaries:colorTransferFunction:colorYCbCrMatrix:customVideoCompositorClass:frameDuration:instructions:outputBufferDescription:perFrameHDRDisplayMetadataPolicy:renderScale:renderSize:sourceSampleDataTrackIDs:sourceTrackIDForFrameTiming:spatialVideoConfigurations:)](init%28animationtool_colorprimaries_colortransferfunction_colorycbcrmatrix_customvideocompositorclass_frameduration_instructions_outputbufferdescription_perframehdrdisplaymetadatapol~d13e75cb.md)
- [init(animationTool:colorPrimaries:colorTransferFunction:colorYCbCrMatrix:customVideoCompositorClass:frameDuration:instructions:outputBufferDescription:renderScale:renderSize:sourceSampleDataTrackIDs:sourceTrackIDForFrameTiming:spatialVideoConfigurations:)](init%28animationtool_colorprimaries_colortransferfunction_colorycbcrmatrix_customvideocompositorclass_frameduration_instructions_outputbufferdescription_renderscale_rendersize_source~e67dc1c7.md)

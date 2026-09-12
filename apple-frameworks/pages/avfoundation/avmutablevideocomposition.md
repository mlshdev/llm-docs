> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablevideocomposition](https://developer.apple.com/documentation/avfoundation/avmutablevideocomposition)

# AVMutableVideoComposition (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 4.0+ (deprecated in 26.0) · iPadOS 4.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.7+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

A mutable video composition subclass.

> Use [AVVideoComposition.Configuration](avvideocomposition/configuration.md) instead.

## Declaration

```swift
class AVMutableVideoComposition
```

<a id="overview"></a>

## Overview

If you use the built-in video compositor, the instructions a video composition contain can specify a spatial transformation, an opacity value, and a cropping rectangle for each video source. This values can vary over time by applying linear ramping functions.

You can create a custom video compositor by implementing the [AVVideoCompositing](avvideocompositing.md) protocol. The system provides the custom video compositor with pixel buffers for each of its video sources during playback, and can perform arbitrary graphical operations on them to produce visual output.

## Topics

### Creating a video composition

- [videoComposition(withPropertiesOf:completionHandler:)](avmutablevideocomposition/videocomposition%28withpropertiesof_completionhandler_%29.md): Deprecated. Returns a new video composition that’s configured to present the video tracks of the specified asset.
- [videoComposition(withPropertiesOf:prototypeInstruction:completionHandler:)](avmutablevideocomposition/videocomposition%28withpropertiesof_prototypeinstruction_completionhandler_%29.md): Deprecated. Returns a new mutable video composition with the specified asset properties and a prototype video composition instruction.
- [videoComposition(with:applyingCIFiltersWithHandler:completionHandler:)](avmutablevideocomposition/videocomposition%28with_applyingcifilterswithhandler_completionhandler_%29.md): Returns a new video composition that’s configured to apply Core Image filters to each video frame of the specified asset.
- [init(propertiesOf:)](avmutablevideocomposition/init%28propertiesof_%29.md): Deprecated. Creates a mutable video composition with the specified asset properties.
- [init(propertiesOf:prototypeInstruction:)](avmutablevideocomposition/init%28propertiesof_prototypeinstruction_%29.md): Deprecated. Creates a mutable video composition with the specified asset properties and a prototype video composition instruction.
- [init(asset:applyingCIFiltersWithHandler:)](avmutablevideocomposition/init%28asset_applyingcifilterswithhandler_%29.md): Deprecated. Creates a mutable video composition configured to apply Core Image filters to each video frame of the specified asset.

### Configuring video composition properties

- [frameDuration](avmutablevideocomposition/frameduration.md): Deprecated. A time interval for which the video composition should render composed video frames.
- [renderSize](avmutablevideocomposition/rendersize.md): Deprecated. The size at which the video composition should render.
- [renderScale](avmutablevideocomposition/renderscale.md): Deprecated. The scale at which the video composition should render.
- [animationTool](avmutablevideocomposition/animationtool.md): Deprecated. A video composition tool to use with Core Animation in offline rendering.

### Specifying composition instructions

- [instructions](avmutablevideocomposition/instructions.md): Deprecated. The video composition instructions.
- [AVVideoCompositionInstructionProtocol](avvideocompositioninstructionprotocol.md): A protocol that defines the interface for a video composition instruction.

### Configuring HDR metadata

- [perFrameHDRDisplayMetadataPolicy](avmutablevideocomposition/perframehdrdisplaymetadatapolicy.md): Configures the policy for display of HDR display metadata on the rendered frame.
- [AVVideoComposition.PerFrameHDRDisplayMetadataPolicy](avvideocomposition/perframehdrdisplaymetadatapolicy-swift.struct.md): A type that defines the policy for handling of per frame HDR metadata.

### Configuring color

- [colorPrimaries](avmutablevideocomposition/colorprimaries.md): The color primaries used for video composition.
- [colorTransferFunction](avmutablevideocomposition/colortransferfunction.md): The transfer function used for video composition.
- [colorYCbCrMatrix](avmutablevideocomposition/colorycbcrmatrix.md): The YCbCr matrix used for video composition.

### Identifying source tracks

- [sourceTrackIDForFrameTiming](avmutablevideocomposition/sourcetrackidforframetiming.md): Deprecated. An identifier of the source track from which the video composition derives frame timing.
- [sourceSampleDataTrackIDs](avmutablevideocomposition/sourcesampledatatrackids-7i02t.md): The identifiers of source sample data tracks in the composition that the object requires to compose frames.

### Specifying a custom compositor

- [customVideoCompositorClass](avmutablevideocomposition/customvideocompositorclass.md): Deprecated. The custom compositor class to use.

### Initializers

- [init(propertiesOfAsset:prototypeInstruction:)](avmutablevideocomposition/init%28propertiesofasset_prototypeinstruction_%29.md): Deprecated.

## Relationships

### Inherits From

- [AVVideoComposition](avvideocomposition.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSMutableCopying](../foundation/nsmutablecopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Built-in video compositing

- [Editing and playing HDR video](editing-and-playing-hdr-video.md): Support high-dynamic-range (HDR) video content in your app by using the HDR editing and playback capabilities of AVFoundation.
- [Debugging AVFoundation audio mixes, compositions, and video compositions](debugging-avfoundation-audio-mixes-compositions-and-video-compositions.md): Resolve common problems when creating compositions, video compositions, and audio mixes.
- [AVVideoComposition](avvideocomposition.md): An object that describes how to compose video frames at particular points in time.
- [AVVideoCompositionInstruction](avvideocompositioninstruction-swift.class.md): An operation that a compositor performs.
- [AVVideoCompositionLayerInstruction](avvideocompositionlayerinstruction.md): An object used to modify the transform, cropping, and opacity ramps applied to a given track in a composition.
- [AVMutableVideoCompositionInstruction](avmutablevideocompositioninstruction.md): Deprecated. A mutable video composition instruction subclass.
- [AVMutableVideoCompositionLayerInstruction](avmutablevideocompositionlayerinstruction.md): Deprecated. An object used to modify the transform, cropping, and opacity ramps applied to a given track in a mutable composition.

# AVMutableVideoComposition (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

A mutable video composition subclass.

## Declaration

```objectivec
@interface AVMutableVideoComposition : AVVideoComposition
```

<a id="overview"></a>

## Overview

If you use the built-in video compositor, the instructions a video composition contain can specify a spatial transformation, an opacity value, and a cropping rectangle for each video source. This values can vary over time by applying linear ramping functions.

You can create a custom video compositor by implementing the [AVVideoCompositing](avvideocompositing.md) protocol. The system provides the custom video compositor with pixel buffers for each of its video sources during playback, and can perform arbitrary graphical operations on them to produce visual output.

## Topics

### Creating a video composition

- [videoCompositionWithPropertiesOfAsset:completionHandler:](avmutablevideocomposition/videocomposition%28withpropertiesof_completionhandler_%29.md): Deprecated. Returns a new video composition that’s configured to present the video tracks of the specified asset.
- [videoCompositionWithPropertiesOfAsset:prototypeInstruction:completionHandler:](avmutablevideocomposition/videocomposition%28withpropertiesof_prototypeinstruction_completionhandler_%29.md): Deprecated. Returns a new mutable video composition with the specified asset properties and a prototype video composition instruction.
- [videoCompositionWithAsset:applyingCIFiltersWithHandler:completionHandler:](avmutablevideocomposition/videocomposition%28with_applyingcifilterswithhandler_completionhandler_%29.md): Returns a new video composition that’s configured to apply Core Image filters to each video frame of the specified asset.
- [videoComposition](avmutablevideocomposition/videocomposition.md): Creates a new mutable video composition.
- [videoCompositionWithPropertiesOfAsset:](avmutablevideocomposition/init%28propertiesof_%29.md): Deprecated. Creates a mutable video composition with the specified asset properties.
- [videoCompositionWithPropertiesOfAsset:prototypeInstruction:](avmutablevideocomposition/init%28propertiesof_prototypeinstruction_%29.md): Deprecated. Creates a mutable video composition with the specified asset properties and a prototype video composition instruction.
- [videoCompositionWithAsset:applyingCIFiltersWithHandler:](avmutablevideocomposition/init%28asset_applyingcifilterswithhandler_%29.md): Deprecated. Creates a mutable video composition configured to apply Core Image filters to each video frame of the specified asset.

### Configuring video composition properties

- [frameDuration](avmutablevideocomposition/frameduration.md): Deprecated. A time interval for which the video composition should render composed video frames.
- [renderSize](avmutablevideocomposition/rendersize.md): Deprecated. The size at which the video composition should render.
- [renderScale](avmutablevideocomposition/renderscale.md): Deprecated. The scale at which the video composition should render.
- [animationTool](avmutablevideocomposition/animationtool.md): Deprecated. A video composition tool to use with Core Animation in offline rendering.
- [outputBufferDescription](avmutablevideocomposition/outputbufferdescription.md): The output buffers of the video composition can be specified with the outputBufferDescription. The value is an array of CMTagCollectionRef objects that describes the output buffers.

### Specifying composition instructions

- [instructions](avmutablevideocomposition/instructions.md): Deprecated. The video composition instructions.
- [AVVideoCompositionInstruction](avvideocompositioninstructionprotocol.md): A protocol that defines the interface for a video composition instruction.

### Configuring HDR metadata

- [perFrameHDRDisplayMetadataPolicy](avmutablevideocomposition/perframehdrdisplaymetadatapolicy.md): Configures the policy for display of HDR display metadata on the rendered frame.
- [AVVideoCompositionPerFrameHDRDisplayMetadataPolicy](avvideocomposition/perframehdrdisplaymetadatapolicy-swift.struct.md): A type that defines the policy for handling of per frame HDR metadata.

### Configuring color

- [colorPrimaries](avmutablevideocomposition/colorprimaries.md): The color primaries used for video composition.
- [colorTransferFunction](avmutablevideocomposition/colortransferfunction.md): The transfer function used for video composition.
- [colorYCbCrMatrix](avmutablevideocomposition/colorycbcrmatrix.md): The YCbCr matrix used for video composition.

### Identifying source tracks

- [sourceTrackIDForFrameTiming](avmutablevideocomposition/sourcetrackidforframetiming.md): Deprecated. An identifier of the source track from which the video composition derives frame timing.
- [sourceSampleDataTrackIDs](avmutablevideocomposition/sourcesampledatatrackids-21o6b.md): The identifiers of source sample data tracks in the composition that the compositor requires to compose frames.

### Specifying a custom compositor

- [customVideoCompositorClass](avmutablevideocomposition/customvideocompositorclass.md): Deprecated. The custom compositor class to use.

## Relationships

### Inherits From

- [AVVideoComposition](avvideocomposition.md)

## See Also

### Built-in video compositing

- [Editing and playing HDR video](editing-and-playing-hdr-video.md): Support high-dynamic-range (HDR) video content in your app by using the HDR editing and playback capabilities of AVFoundation.
- [AVVideoComposition](avvideocomposition.md): An object that describes how to compose video frames at particular points in time.
- [AVVideoCompositionInstruction](avvideocompositioninstruction-swift.class.md): An operation that a compositor performs.
- [AVVideoCompositionLayerInstruction](avvideocompositionlayerinstruction.md): An object used to modify the transform, cropping, and opacity ramps applied to a given track in a composition.
- [AVMutableVideoCompositionInstruction](avmutablevideocompositioninstruction.md): Deprecated. A mutable video composition instruction subclass.
- [AVMutableVideoCompositionLayerInstruction](avmutablevideocompositionlayerinstruction.md): Deprecated. An object used to modify the transform, cropping, and opacity ramps applied to a given track in a mutable composition.

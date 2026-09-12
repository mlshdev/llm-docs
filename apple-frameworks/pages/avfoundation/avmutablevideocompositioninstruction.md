> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablevideocompositioninstruction](https://developer.apple.com/documentation/avfoundation/avmutablevideocompositioninstruction)

# AVMutableVideoCompositionInstruction (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 4.0+ (deprecated in 26.0) · iPadOS 4.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.7+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

A mutable video composition instruction subclass.

> Use [AVVideoCompositionInstruction.Configuration](avvideocompositioninstruction-swift.class/configuration.md) instead.

## Declaration

```swift
class AVMutableVideoCompositionInstruction
```

<a id="overview"></a>

## Overview

An [AVVideoComposition](avvideocomposition.md) object maintains an array of [instructions](avvideocomposition/instructions.md) to perform its composition.

## Topics

### Configuring the instructions

- [backgroundColor](avmutablevideocompositioninstruction/backgroundcolor.md): Deprecated. The background color of the composition.
- [layerInstructions](avmutablevideocompositioninstruction/layerinstructions.md): Deprecated. Instructions that specify how to layer and compose video frames from source tracks.
- [timeRange](avmutablevideocompositioninstruction/timerange.md): Deprecated. The time range to which the instruction applies.
- [enablePostProcessing](avmutablevideocompositioninstruction/enablepostprocessing.md): Deprecated. A Boolean value that indicates whether the instruction requires post processing.

### Configuring source tracks

- [requiredSourceSampleDataTrackIDs](avmutablevideocompositioninstruction/requiredsourcesampledatatrackids.md): Deprecated. The track identifiers of source sample data that the compositor requires to compose frames for the instruction.

## Relationships

### Inherits From

- [AVVideoCompositionInstruction](avvideocompositioninstruction-swift.class.md)

### Conforms To

- [AVVideoCompositionInstructionProtocol](avvideocompositioninstructionprotocol.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSMutableCopying](../foundation/nsmutablecopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Built-in video compositing

- [Editing and playing HDR video](editing-and-playing-hdr-video.md): Support high-dynamic-range (HDR) video content in your app by using the HDR editing and playback capabilities of AVFoundation.
- [Debugging AVFoundation audio mixes, compositions, and video compositions](debugging-avfoundation-audio-mixes-compositions-and-video-compositions.md): Resolve common problems when creating compositions, video compositions, and audio mixes.
- [AVVideoComposition](avvideocomposition.md): An object that describes how to compose video frames at particular points in time.
- [AVVideoCompositionInstruction](avvideocompositioninstruction-swift.class.md): An operation that a compositor performs.
- [AVVideoCompositionLayerInstruction](avvideocompositionlayerinstruction.md): An object used to modify the transform, cropping, and opacity ramps applied to a given track in a composition.
- [AVMutableVideoComposition](avmutablevideocomposition.md): Deprecated. A mutable video composition subclass.
- [AVMutableVideoCompositionLayerInstruction](avmutablevideocompositionlayerinstruction.md): Deprecated. An object used to modify the transform, cropping, and opacity ramps applied to a given track in a mutable composition.

# AVMutableVideoCompositionInstruction (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

A mutable video composition instruction subclass.

## Declaration

```objectivec
@interface AVMutableVideoCompositionInstruction : AVVideoCompositionInstruction
```

<a id="overview"></a>

## Overview

An [AVVideoComposition](avvideocomposition.md) object maintains an array of [instructions](avvideocomposition/instructions.md) to perform its composition.

## Topics

### Creating an instruction

- [videoCompositionInstruction](avmutablevideocompositioninstruction/videocompositioninstruction.md): Returns a new mutable video composition instruction.

### Configuring the instructions

- [backgroundColor](avmutablevideocompositioninstruction/backgroundcolor.md): Deprecated. The background color of the composition.
- [layerInstructions](avmutablevideocompositioninstruction/layerinstructions.md): Deprecated. Instructions that specify how to layer and compose video frames from source tracks.
- [timeRange](avmutablevideocompositioninstruction/timerange.md): Deprecated. The time range to which the instruction applies.
- [enablePostProcessing](avmutablevideocompositioninstruction/enablepostprocessing.md): Deprecated. A Boolean value that indicates whether the instruction requires post processing.

### Configuring source tracks

- [requiredSourceSampleDataTrackIDs](avmutablevideocompositioninstruction/requiredsourcesampledatatrackids.md): Deprecated. The track identifiers of source sample data that the compositor requires to compose frames for the instruction.

## Relationships

### Inherits From

- [AVVideoCompositionInstruction](avvideocompositioninstruction-swift.class.md)

## See Also

### Built-in video compositing

- [Editing and playing HDR video](editing-and-playing-hdr-video.md): Support high-dynamic-range (HDR) video content in your app by using the HDR editing and playback capabilities of AVFoundation.
- [AVVideoComposition](avvideocomposition.md): An object that describes how to compose video frames at particular points in time.
- [AVVideoCompositionInstruction](avvideocompositioninstruction-swift.class.md): An operation that a compositor performs.
- [AVVideoCompositionLayerInstruction](avvideocompositionlayerinstruction.md): An object used to modify the transform, cropping, and opacity ramps applied to a given track in a composition.
- [AVMutableVideoComposition](avmutablevideocomposition.md): Deprecated. A mutable video composition subclass.
- [AVMutableVideoCompositionLayerInstruction](avmutablevideocompositionlayerinstruction.md): Deprecated. An object used to modify the transform, cropping, and opacity ramps applied to a given track in a mutable composition.

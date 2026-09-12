> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avvideocompositioninstruction-swift.class](https://developer.apple.com/documentation/avfoundation/avvideocompositioninstruction-swift.class)

# AVVideoCompositionInstruction (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

An operation that a compositor performs.

## Declaration

```swift
class AVVideoCompositionInstruction
```

<a id="overview"></a>

## Overview

An [AVVideoComposition](avvideocomposition.md) object maintains an array of [instructions](avvideocomposition/instructions.md) to perform its composition.

## Topics

### Creating an instruction

- [init(configuration:)](avvideocompositioninstruction-swift.class/init%28configuration_%29.md): Initialize an AVVideoCompositionInstruction with a configuration.
- [AVVideoCompositionInstruction.Configuration](avvideocompositioninstruction-swift.class/configuration.md): Configurable properties for initializing a new AVVideoCompositionInstruction instance.

### Inspecting the instruction

- [backgroundColor](avvideocompositioninstruction-swift.class/backgroundcolor.md): The background color of the composition.
- [layerInstructions](avvideocompositioninstruction-swift.class/layerinstructions.md): Instructions that specify how to layer and compose video frames from source tracks.
- [timeRange](avvideocompositioninstruction-swift.class/timerange.md): The time range to which the instruction applies.
- [enablePostProcessing](avvideocompositioninstruction-swift.class/enablepostprocessing.md): A Boolean value that indicates whether the instruction requires post processing.

### Identifying source tracks

- [requiredSourceTrackIDs](avvideocompositioninstruction-swift.class/requiredsourcetrackids.md): The identifiers of source video tracks that the compositor requires to compose frames for the instruction.
- [requiredSourceSampleDataTrackIDs](avvideocompositioninstruction-swift.class/requiredsourcesampledatatrackids.md): The identifiers of source sample data tracks that the compositor requires to compose frames for the instruction.
- [passthroughTrackID](avvideocompositioninstruction-swift.class/passthroughtrackid.md): The track identifier from an instruction source frame.

### Initializers

- [init(coder:)](avvideocompositioninstruction-swift.class/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [AVMutableVideoCompositionInstruction](avmutablevideocompositioninstruction.md)

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
- [AVVideoCompositionLayerInstruction](avvideocompositionlayerinstruction.md): An object used to modify the transform, cropping, and opacity ramps applied to a given track in a composition.
- [AVMutableVideoComposition](avmutablevideocomposition.md): Deprecated. A mutable video composition subclass.
- [AVMutableVideoCompositionInstruction](avmutablevideocompositioninstruction.md): Deprecated. A mutable video composition instruction subclass.
- [AVMutableVideoCompositionLayerInstruction](avmutablevideocompositionlayerinstruction.md): Deprecated. An object used to modify the transform, cropping, and opacity ramps applied to a given track in a mutable composition.

# AVVideoCompositionInstruction (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

An operation that a compositor performs.

## Declaration

```objectivec
@interface AVVideoCompositionInstruction : NSObject
```

<a id="overview"></a>

## Overview

An [AVVideoComposition](avvideocomposition.md) object maintains an array of [instructions](avvideocomposition/instructions.md) to perform its composition.

## Topics

### Creating an instruction

- [videoCompositionInstructionWithInstruction:](avvideocompositioninstruction-swift.class/videocompositioninstructionwithinstruction_.md): Pass-through initializer, for internal use in AVFoundation only

### Inspecting the instruction

- [backgroundColor](avvideocompositioninstruction-swift.class/backgroundcolor.md): The background color of the composition.
- [layerInstructions](avvideocompositioninstruction-swift.class/layerinstructions.md): Instructions that specify how to layer and compose video frames from source tracks.
- [timeRange](avvideocompositioninstruction-swift.class/timerange.md): The time range to which the instruction applies.
- [enablePostProcessing](avvideocompositioninstruction-swift.class/enablepostprocessing.md): A Boolean value that indicates whether the instruction requires post processing.

### Identifying source tracks

- [requiredSourceTrackIDs](avvideocompositioninstruction-swift.class/requiredsourcetrackids.md): The identifiers of source video tracks that the compositor requires to compose frames for the instruction.
- [requiredSourceSampleDataTrackIDs](avvideocompositioninstruction-swift.class/requiredsourcesampledatatrackids.md): The identifiers of source sample data tracks that the compositor requires to compose frames for the instruction.
- [passthroughTrackID](avvideocompositioninstruction-swift.class/passthroughtrackid.md): The track identifier from an instruction source frame.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [AVMutableVideoCompositionInstruction](avmutablevideocompositioninstruction.md)

### Conforms To

- [AVVideoCompositionInstruction](avvideocompositioninstructionprotocol.md)
- [NSCopying](../foundation/nscopying.md)
- [NSMutableCopying](../foundation/nsmutablecopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Built-in video compositing

- [Editing and playing HDR video](editing-and-playing-hdr-video.md): Support high-dynamic-range (HDR) video content in your app by using the HDR editing and playback capabilities of AVFoundation.
- [AVVideoComposition](avvideocomposition.md): An object that describes how to compose video frames at particular points in time.
- [AVVideoCompositionLayerInstruction](avvideocompositionlayerinstruction.md): An object used to modify the transform, cropping, and opacity ramps applied to a given track in a composition.
- [AVMutableVideoComposition](avmutablevideocomposition.md): Deprecated. A mutable video composition subclass.
- [AVMutableVideoCompositionInstruction](avmutablevideocompositioninstruction.md): Deprecated. A mutable video composition instruction subclass.
- [AVMutableVideoCompositionLayerInstruction](avmutablevideocompositionlayerinstruction.md): Deprecated. An object used to modify the transform, cropping, and opacity ramps applied to a given track in a mutable composition.

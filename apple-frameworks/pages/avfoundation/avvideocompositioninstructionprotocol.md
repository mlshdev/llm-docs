> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avvideocompositioninstructionprotocol](https://developer.apple.com/documentation/avfoundation/avvideocompositioninstructionprotocol)

# AVVideoCompositionInstructionProtocol (Swift)

**Framework:** AVFoundation  
**Kind:** Protocol  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

A protocol that defines the interface for a video composition instruction.

## Declaration

```swift
protocol AVVideoCompositionInstructionProtocol : NSObjectProtocol, Sendable
```

<a id="overview"></a>

## Overview

A video composition maintains an array of instructions that describe how to compose its content.

## Topics

### Getting track ID settings

- [passthroughTrackID](avvideocompositioninstructionprotocol/passthroughtrackid.md): An identifier of a source track to pass through without compositing.
- [requiredSourceTrackIDs](avvideocompositioninstructionprotocol/requiredsourcetrackids.md): The identifiers of the video tracks the instruction requires to compose frames.
- [requiredSourceSampleDataTrackIDs](avvideocompositioninstructionprotocol/requiredsourcesampledatatrackids.md): The identifiers of the sample data tracks the instruction requires to compose frames.

### Getting tweening settings

- [containsTweening](avvideocompositioninstructionprotocol/containstweening.md): A Boolean value that indicates whether the composition contains tweening.

### Getting post-processing status

- [enablePostProcessing](avvideocompositioninstructionprotocol/enablepostprocessing.md): A Boolean value that indicates whether the composition enables post-processing.

### Getting timing settings

- [timeRange](avvideocompositioninstructionprotocol/timerange.md): The time range during which the instruction is effective.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Conforming Types

- [AVMutableVideoCompositionInstruction](avmutablevideocompositioninstruction.md)
- [AVVideoCompositionInstruction](avvideocompositioninstruction-swift.class.md)

## See Also

### Specifying composition instructions

- [instructions](avmutablevideocomposition/instructions.md): Deprecated. The video composition instructions.

# AVVideoCompositionInstruction (Objective-C)

**Framework:** AVFoundation  
**Kind:** Protocol  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

A protocol that defines the interface for a video composition instruction.

## Declaration

```objectivec
@protocol AVVideoCompositionInstruction <NSObject>
```

<a id="overview"></a>

## Overview

A video composition maintains an array of instructions that describe how to compose its content.

## Topics

### Getting track ID settings

- [passthroughTrackID](avvideocompositioninstructionprotocol/passthroughtrackid.md): An identifier of a source track to pass through without compositing.
- [requiredSourceTrackIDs](avvideocompositioninstructionprotocol/requiredsourcetrackids.md): The identifiers of the video tracks the instruction requires to compose frames.
- [requiredSourceSampleDataTrackIDs](avvideocompositioninstructionprotocol/requiredsourcesampledatatrackids.md): The identifiers of the sample data tracks the instruction requires to compose frames.

### Getting tweening settings

- [containsTweening](avvideocompositioninstructionprotocol/containstweening.md): A Boolean value that indicates whether the composition contains tweening.

### Getting post-processing status

- [enablePostProcessing](avvideocompositioninstructionprotocol/enablepostprocessing.md): A Boolean value that indicates whether the composition enables post-processing.

### Getting timing settings

- [timeRange](avvideocompositioninstructionprotocol/timerange.md): The time range during which the instruction is effective.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [AVVideoCompositionInstruction](avvideocompositioninstruction-swift.class.md)

## See Also

### Specifying composition instructions

- [instructions](avmutablevideocomposition/instructions.md): Deprecated. The video composition instructions.

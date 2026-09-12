> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avvideocompositioninstruction-swift.class/timerange](https://developer.apple.com/documentation/avfoundation/avvideocompositioninstruction-swift.class/timerange)

# timeRange (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

The time range to which the instruction applies.

## Declaration

```swift
var timeRange: CMTimeRange { get }
```

<a id="Discussion"></a>

## Discussion

If the time range is invalid, the video compositor will ignore it. See also the requirements of the [timeRange](timerange.md) property in the array of objects implementing the [AVVideoCompositionInstructionProtocol](../avvideocompositioninstructionprotocol.md) protocol as described in the [AVVideoComposition](../avvideocomposition.md) class’s [instructions](../avvideocomposition/instructions.md) property.

## See Also

### Inspecting the instruction

- [backgroundColor](backgroundcolor.md): The background color of the composition.
- [layerInstructions](layerinstructions.md): Instructions that specify how to layer and compose video frames from source tracks.
- [enablePostProcessing](enablepostprocessing.md): A Boolean value that indicates whether the instruction requires post processing.

# timeRange (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

The time range to which the instruction applies.

## Declaration

```objectivec
@property (nonatomic, readonly) CMTimeRange timeRange;
```

<a id="Discussion"></a>

## Discussion

If the time range is invalid, the video compositor will ignore it. See also the requirements of the [timeRange](timerange.md) property in the array of objects implementing the [AVVideoCompositionInstruction](../avvideocompositioninstructionprotocol.md) protocol as described in the [AVVideoComposition](../avvideocomposition.md) class’s [instructions](../avvideocomposition/instructions.md) property.

## See Also

### Inspecting the instruction

- [backgroundColor](backgroundcolor.md): The background color of the composition.
- [layerInstructions](layerinstructions.md): Instructions that specify how to layer and compose video frames from source tracks.
- [enablePostProcessing](enablepostprocessing.md): A Boolean value that indicates whether the instruction requires post processing.

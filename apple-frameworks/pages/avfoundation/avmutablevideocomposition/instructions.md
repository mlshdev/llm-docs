> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablevideocomposition/instructions](https://developer.apple.com/documentation/avfoundation/avmutablevideocomposition/instructions)

# instructions (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 26.0) · iPadOS 4.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.7+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

The video composition instructions.

> Use AVVideoComposition.Configuration instead

## Declaration

```swift
var instructions: [any AVVideoCompositionInstructionProtocol] { get set }
```

<a id="Discussion"></a>

## Discussion

The array contains instances of [AVVideoCompositionInstruction](../avvideocompositioninstruction-swift.class.md). For the first instruction in the array, `timeRange.start` must be less than or equal to the earliest time for which playback or other processing will be attempted (typically `kCMTimeZero`). For subsequent instructions, `timeRange.start` must be equal to the prior instruction’s end time. The end time of the last instruction must be greater than or equal to the latest time for which playback or other processing will be attempted (typically be the duration of the asset with which the instance of `AVVideoComposition` is associated).

## See Also

### Specifying composition instructions

- [AVVideoCompositionInstructionProtocol](../avvideocompositioninstructionprotocol.md): A protocol that defines the interface for a video composition instruction.

# instructions (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

The video composition instructions.

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<id<AVVideoCompositionInstruction>> * instructions;
```

<a id="Discussion"></a>

## Discussion

The array contains instances of [AVVideoCompositionInstruction](../avvideocompositioninstruction-swift.class.md). For the first instruction in the array, `timeRange.start` must be less than or equal to the earliest time for which playback or other processing will be attempted (typically `kCMTimeZero`). For subsequent instructions, `timeRange.start` must be equal to the prior instruction’s end time. The end time of the last instruction must be greater than or equal to the latest time for which playback or other processing will be attempted (typically be the duration of the asset with which the instance of `AVVideoComposition` is associated).

## See Also

### Specifying composition instructions

- [AVVideoCompositionInstruction](../avvideocompositioninstructionprotocol.md): A protocol that defines the interface for a video composition instruction.

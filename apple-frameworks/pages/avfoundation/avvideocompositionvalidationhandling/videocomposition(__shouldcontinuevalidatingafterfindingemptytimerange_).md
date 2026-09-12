> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avvideocompositionvalidationhandling/videocomposition(_:shouldcontinuevalidatingafterfindingemptytimerange:)](https://developer.apple.com/documentation/avfoundation/avvideocompositionvalidationhandling/videocomposition(_:shouldcontinuevalidatingafterfindingemptytimerange:))

# videoComposition(\_:shouldContinueValidatingAfterFindingEmptyTimeRange:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

Reports a time range that has no corresponding video composition instruction.

## Declaration

```swift
optional func videoComposition(_ videoComposition: AVVideoComposition, shouldContinueValidatingAfterFindingEmptyTimeRange timeRange: CMTimeRange) -> Bool
```

## Parameters

- `videoComposition`: The video composition being validated.
- `timeRange`: The time range that has no corresponding video composition instruction.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the video composition should continue validation in order to report additional problems that may exist, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring validation methods

- [videoComposition(\_:shouldContinueValidatingAfterFindingInvalidValueForKey:)](videocomposition%28__shouldcontinuevalidatingafterfindinginvalidvalueforkey_%29.md): Reports that a key that has an invalid value.
- [videoComposition(\_:shouldContinueValidatingAfterFindingInvalidTimeRangeIn:)](videocomposition%28__shouldcontinuevalidatingafterfindinginvalidtimerangein_%29.md): Reports a video composition instruction with a time range that is invalid.
- [videoComposition(\_:shouldContinueValidatingAfterFindingInvalidTrackIDIn:layerInstruction:asset:)](videocomposition%28__shouldcontinuevalidatingafterfindinginvalidtrackidin_layerinstruction_asset_%29.md): Reports a video composition layer instruction that does not correspond to the track ID used for the composition’s animation or to a track of the asset.

# videoComposition:shouldContinueValidatingAfterFindingEmptyTimeRange: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

Reports a time range that has no corresponding video composition instruction.

## Declaration

```objectivec
- (BOOL) videoComposition:(AVVideoComposition *) videoComposition shouldContinueValidatingAfterFindingEmptyTimeRange:(CMTimeRange) timeRange;
```

## Parameters

- `videoComposition`: The video composition being validated.
- `timeRange`: The time range that has no corresponding video composition instruction.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the video composition should continue validation in order to report additional problems that may exist, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring validation methods

- [videoComposition:shouldContinueValidatingAfterFindingInvalidValueForKey:](videocomposition%28__shouldcontinuevalidatingafterfindinginvalidvalueforkey_%29.md): Reports that a key that has an invalid value.
- [videoComposition:shouldContinueValidatingAfterFindingInvalidTimeRangeInInstruction:](videocomposition%28__shouldcontinuevalidatingafterfindinginvalidtimerangein_%29.md): Reports a video composition instruction with a time range that is invalid.
- [videoComposition:shouldContinueValidatingAfterFindingInvalidTrackIDInInstruction:layerInstruction:asset:](videocomposition%28__shouldcontinuevalidatingafterfindinginvalidtrackidin_layerinstruction_asset_%29.md): Reports a video composition layer instruction that does not correspond to the track ID used for the composition’s animation or to a track of the asset.

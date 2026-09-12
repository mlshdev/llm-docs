> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avvideocompositionvalidationhandling/videocomposition(_:shouldcontinuevalidatingafterfindinginvalidtrackidin:layerinstruction:asset:)](https://developer.apple.com/documentation/avfoundation/avvideocompositionvalidationhandling/videocomposition(_:shouldcontinuevalidatingafterfindinginvalidtrackidin:layerinstruction:asset:))

# videoComposition(\_:shouldContinueValidatingAfterFindingInvalidTrackIDIn:layerInstruction:asset:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

Reports a video composition layer instruction that does not correspond to the track ID used for the composition’s animation or to a track of the asset.

## Declaration

```swift
optional func videoComposition(_ videoComposition: AVVideoComposition, shouldContinueValidatingAfterFindingInvalidTrackIDIn videoCompositionInstruction: any AVVideoCompositionInstructionProtocol, layerInstruction: AVVideoCompositionLayerInstruction, asset: AVAsset) -> Bool
```

## Parameters

- `videoComposition`: The video composition being validated.
- `videoCompositionInstruction`: The video composition instruction.
- `layerInstruction`: The layer instruction.
- `asset`: The underlying asset.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the video composition should continue validation in order to report additional problems that may exist, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The asset track is specified in the [isValid(for:timeRange:validationDelegate:)](../avvideocomposition/isvalid%28for_timerange_validationdelegate_%29.md) method.

## See Also

### Configuring validation methods

- [videoComposition(\_:shouldContinueValidatingAfterFindingInvalidValueForKey:)](videocomposition%28__shouldcontinuevalidatingafterfindinginvalidvalueforkey_%29.md): Reports that a key that has an invalid value.
- [videoComposition(\_:shouldContinueValidatingAfterFindingEmptyTimeRange:)](videocomposition%28__shouldcontinuevalidatingafterfindingemptytimerange_%29.md): Reports a time range that has no corresponding video composition instruction.
- [videoComposition(\_:shouldContinueValidatingAfterFindingInvalidTimeRangeIn:)](videocomposition%28__shouldcontinuevalidatingafterfindinginvalidtimerangein_%29.md): Reports a video composition instruction with a time range that is invalid.

# videoComposition:shouldContinueValidatingAfterFindingInvalidTrackIDInInstruction:layerInstruction:asset: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

Reports a video composition layer instruction that does not correspond to the track ID used for the composition’s animation or to a track of the asset.

## Declaration

```objectivec
- (BOOL) videoComposition:(AVVideoComposition *) videoComposition shouldContinueValidatingAfterFindingInvalidTrackIDInInstruction:(id<AVVideoCompositionInstruction>) videoCompositionInstruction layerInstruction:(AVVideoCompositionLayerInstruction *) layerInstruction asset:(AVAsset *) asset;
```

## Parameters

- `videoComposition`: The video composition being validated.
- `videoCompositionInstruction`: The video composition instruction.
- `layerInstruction`: The layer instruction.
- `asset`: The underlying asset.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the video composition should continue validation in order to report additional problems that may exist, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The asset track is specified in the [isValidForAsset:timeRange:validationDelegate:](../avvideocomposition/isvalid%28for_timerange_validationdelegate_%29.md) method.

## See Also

### Configuring validation methods

- [videoComposition:shouldContinueValidatingAfterFindingInvalidValueForKey:](videocomposition%28__shouldcontinuevalidatingafterfindinginvalidvalueforkey_%29.md): Reports that a key that has an invalid value.
- [videoComposition:shouldContinueValidatingAfterFindingEmptyTimeRange:](videocomposition%28__shouldcontinuevalidatingafterfindingemptytimerange_%29.md): Reports a time range that has no corresponding video composition instruction.
- [videoComposition:shouldContinueValidatingAfterFindingInvalidTimeRangeInInstruction:](videocomposition%28__shouldcontinuevalidatingafterfindinginvalidtimerangein_%29.md): Reports a video composition instruction with a time range that is invalid.

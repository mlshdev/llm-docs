> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avvideocompositionvalidationhandling](https://developer.apple.com/documentation/avfoundation/avvideocompositionvalidationhandling)

# AVVideoCompositionValidationHandling (Swift)

**Framework:** AVFoundation  
**Kind:** Protocol  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

Methods you can implement to indicate whether validation of a video composition should continue after specific errors are found.

## Declaration

```swift
protocol AVVideoCompositionValidationHandling : NSObjectProtocol
```

<a id="overview"></a>

## Overview

You might chose to stop validation after particular errors have been found so as to avoid unnecessary subsequent processing following an eror from which there is no suitable recovery.

## Topics

### Configuring validation methods

- [videoComposition(\_:shouldContinueValidatingAfterFindingInvalidValueForKey:)](avvideocompositionvalidationhandling/videocomposition%28__shouldcontinuevalidatingafterfindinginvalidvalueforkey_%29.md): Reports that a key that has an invalid value.
- [videoComposition(\_:shouldContinueValidatingAfterFindingEmptyTimeRange:)](avvideocompositionvalidationhandling/videocomposition%28__shouldcontinuevalidatingafterfindingemptytimerange_%29.md): Reports a time range that has no corresponding video composition instruction.
- [videoComposition(\_:shouldContinueValidatingAfterFindingInvalidTimeRangeIn:)](avvideocompositionvalidationhandling/videocomposition%28__shouldcontinuevalidatingafterfindinginvalidtimerangein_%29.md): Reports a video composition instruction with a time range that is invalid.
- [videoComposition(\_:shouldContinueValidatingAfterFindingInvalidTrackIDIn:layerInstruction:asset:)](avvideocompositionvalidationhandling/videocomposition%28__shouldcontinuevalidatingafterfindinginvalidtrackidin_layerinstruction_asset_%29.md): Reports a video composition layer instruction that does not correspond to the track ID used for the composition’s animation or to a track of the asset.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Validating the time range

- [isValid(for:assetDuration:timeRange:validationDelegate:)](avvideocomposition/isvalid%28for_assetduration_timerange_validationdelegate_%29.md): Indicates whether the time ranges of the composition’s instructions conform to validation requirements.
- [determineValidity(for:timeRange:validationDelegate:completionHandler:)](avvideocomposition/determinevalidity%28for_timerange_validationdelegate_completionhandler_%29.md): Deprecated. Determines whether the time ranges of the composition’s instructions conform to validation requirements.
- [isValid(for:timeRange:validationDelegate:)](avvideocomposition/isvalid%28for_timerange_validationdelegate_%29.md): Deprecated. Indicates whether the time ranges of the composition’s instructions conform to validation requirements.

# AVVideoCompositionValidationHandling (Objective-C)

**Framework:** AVFoundation  
**Kind:** Protocol  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

Methods you can implement to indicate whether validation of a video composition should continue after specific errors are found.

## Declaration

```objectivec
@protocol AVVideoCompositionValidationHandling <NSObject>
```

<a id="overview"></a>

## Overview

You might chose to stop validation after particular errors have been found so as to avoid unnecessary subsequent processing following an eror from which there is no suitable recovery.

## Topics

### Configuring validation methods

- [videoComposition:shouldContinueValidatingAfterFindingInvalidValueForKey:](avvideocompositionvalidationhandling/videocomposition%28__shouldcontinuevalidatingafterfindinginvalidvalueforkey_%29.md): Reports that a key that has an invalid value.
- [videoComposition:shouldContinueValidatingAfterFindingEmptyTimeRange:](avvideocompositionvalidationhandling/videocomposition%28__shouldcontinuevalidatingafterfindingemptytimerange_%29.md): Reports a time range that has no corresponding video composition instruction.
- [videoComposition:shouldContinueValidatingAfterFindingInvalidTimeRangeInInstruction:](avvideocompositionvalidationhandling/videocomposition%28__shouldcontinuevalidatingafterfindinginvalidtimerangein_%29.md): Reports a video composition instruction with a time range that is invalid.
- [videoComposition:shouldContinueValidatingAfterFindingInvalidTrackIDInInstruction:layerInstruction:asset:](avvideocompositionvalidationhandling/videocomposition%28__shouldcontinuevalidatingafterfindinginvalidtrackidin_layerinstruction_asset_%29.md): Reports a video composition layer instruction that does not correspond to the track ID used for the composition’s animation or to a track of the asset.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Validating the time range

- [isValidForTracks:assetDuration:timeRange:validationDelegate:](avvideocomposition/isvalid%28for_assetduration_timerange_validationdelegate_%29.md): Indicates whether the time ranges of the composition’s instructions conform to validation requirements.
- [determineValidityForAsset:timeRange:validationDelegate:completionHandler:](avvideocomposition/determinevalidity%28for_timerange_validationdelegate_completionhandler_%29.md): Deprecated. Determines whether the time ranges of the composition’s instructions conform to validation requirements.
- [isValidForAsset:timeRange:validationDelegate:](avvideocomposition/isvalid%28for_timerange_validationdelegate_%29.md): Deprecated. Indicates whether the time ranges of the composition’s instructions conform to validation requirements.

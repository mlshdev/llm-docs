> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avvideocomposition/isvalid(for:timerange:validationdelegate:)](https://developer.apple.com/documentation/avfoundation/avvideocomposition/isvalid(for:timerange:validationdelegate:))

# isValid(for:timeRange:validationDelegate:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ (deprecated in 18.0) · iPadOS 5.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.8+ (deprecated in 15.0) · tvOS 9.0+ (deprecated in 18.0)

Indicates whether the time ranges of the composition’s instructions conform to validation requirements.

> Use [isValid(for:assetDuration:timeRange:validationDelegate:)](isvalid%28for_assetduration_timerange_validationdelegate_%29.md) instead.

## Declaration

```swift
func isValid(for asset: AVAsset?, timeRange: CMTimeRange, validationDelegate: (any AVVideoCompositionValidationHandling)?) -> Bool
```

## Parameters

- `asset`: An asset object, if you require validating the time ranges of the instructions against the duration of the asset and the track IDs of the layer instructions against the asset’s tracks.

  Pass `nil` to skip that validation.
- `timeRange`: A time range over which to validate instructions. The method validates only instructions with time ranges that overlap with this time range. To validate all instructions that you can use for playback or other processing, regardless of time range, pass `CMTimeRange(start: .zero, duration: .positiveInfinity)`.
- `validationDelegate`: An object that adopts the [AVVideoCompositionValidationHandling](../avvideocompositionvalidationhandling.md) protocol to receive detailed information about problematic sections of a video composition during processing.

  Pass `nil` if you don’t require the details.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the time ranges of the composition’s instructions conform to validation requirements, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Apple discourages using this method in iOS 16, tvOS 16, and macOS 13 or later. Use [determineValidity(for:timeRange:validationDelegate:completionHandler:)](determinevalidity%28for_timerange_validationdelegate_completionhandler_%29.md) instead.

During validation, the video composition calls the validation delegate, if one exists, with a reference to any trouble spots in the video composition.

This method raises an exception if the delegate modifies the video composition’s instructions, or the array of layer instructions of any [AVVideoCompositionInstruction](../avvideocompositioninstruction-swift.class.md) object contained therein during validation.

## See Also

### Validating the time range

- [isValid(for:assetDuration:timeRange:validationDelegate:)](isvalid%28for_assetduration_timerange_validationdelegate_%29.md): Indicates whether the time ranges of the composition’s instructions conform to validation requirements.
- [AVVideoCompositionValidationHandling](../avvideocompositionvalidationhandling.md): Methods you can implement to indicate whether validation of a video composition should continue after specific errors are found.
- [determineValidity(for:timeRange:validationDelegate:completionHandler:)](determinevalidity%28for_timerange_validationdelegate_completionhandler_%29.md): Deprecated. Determines whether the time ranges of the composition’s instructions conform to validation requirements.

# isValidForAsset:timeRange:validationDelegate: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ (deprecated in 18.0) · iPadOS 5.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.8+ (deprecated in 15.0) · tvOS 9.0+ (deprecated in 18.0)

Indicates whether the time ranges of the composition’s instructions conform to validation requirements.

> Use [isValidForTracks:assetDuration:timeRange:validationDelegate:](isvalid%28for_assetduration_timerange_validationdelegate_%29.md) instead.

## Declaration

```objectivec
- (BOOL) isValidForAsset:(AVAsset *) asset timeRange:(CMTimeRange) timeRange validationDelegate:(id<AVVideoCompositionValidationHandling>) validationDelegate;
```

## Parameters

- `asset`: An asset object, if you require validating the time ranges of the instructions against the duration of the asset and the track IDs of the layer instructions against the asset’s tracks.

  Pass `nil` to skip that validation.
- `timeRange`: A time range over which to validate instructions. The method validates only instructions with time ranges that overlap with this time range. To validate all instructions that you can use for playback or other processing, regardless of time range, pass `CMTimeRange(start: .zero, duration: .positiveInfinity)`.
- `validationDelegate`: An object that adopts the [AVVideoCompositionValidationHandling](../avvideocompositionvalidationhandling.md) protocol to receive detailed information about problematic sections of a video composition during processing.

  Pass `nil` if you don’t require the details.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the time ranges of the composition’s instructions conform to validation requirements, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Apple discourages using this method in iOS 16, tvOS 16, and macOS 13 or later. Use [determineValidityForAsset:timeRange:validationDelegate:completionHandler:](determinevalidity%28for_timerange_validationdelegate_completionhandler_%29.md) instead.

During validation, the video composition calls the validation delegate, if one exists, with a reference to any trouble spots in the video composition.

This method raises an exception if the delegate modifies the video composition’s instructions, or the array of layer instructions of any [AVVideoCompositionInstruction](../avvideocompositioninstruction-swift.class.md) object contained therein during validation.

## See Also

### Validating the time range

- [isValidForTracks:assetDuration:timeRange:validationDelegate:](isvalid%28for_assetduration_timerange_validationdelegate_%29.md): Indicates whether the time ranges of the composition’s instructions conform to validation requirements.
- [AVVideoCompositionValidationHandling](../avvideocompositionvalidationhandling.md): Methods you can implement to indicate whether validation of a video composition should continue after specific errors are found.
- [determineValidityForAsset:timeRange:validationDelegate:completionHandler:](determinevalidity%28for_timerange_validationdelegate_completionhandler_%29.md): Deprecated. Determines whether the time ranges of the composition’s instructions conform to validation requirements.

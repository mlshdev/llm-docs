> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avvideocomposition/determinevalidity(for:timerange:validationdelegate:completionhandler:)](https://developer.apple.com/documentation/avfoundation/avvideocomposition/determinevalidity(for:timerange:validationdelegate:completionhandler:))

# determineValidity(for:timeRange:validationDelegate:completionHandler:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ (deprecated in 18.0) · iPadOS 16.0+ (deprecated in 18.0) · Mac Catalyst 16.0+ (deprecated in 18.0) · macOS 13.0+ (deprecated in 15.0) · tvOS 16.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Determines whether the time ranges of the composition’s instructions conform to validation requirements.

> Use [isValid(for:assetDuration:timeRange:validationDelegate:)](isvalid%28for_assetduration_timerange_validationdelegate_%29.md) instead.

## Declaration

```swift
func determineValidity(for asset: AVAsset?, timeRange: CMTimeRange, validationDelegate: (any AVVideoCompositionValidationHandling)?, completionHandler: @escaping @Sendable (Bool, (any Error)?) -> Void)
```

```swift
func isValid(for asset: AVAsset?, timeRange: CMTimeRange, validationDelegate: (any AVVideoCompositionValidationHandling)?) async throws -> Bool
```

## Parameters

- `asset`: An asset object, if you require validating the time ranges of the instructions against the duration of the asset and the track IDs of the layer instructions against the asset’s tracks. Pass `nil` to skip that validation.
- `timeRange`: A time range over which to validate instructions. The method validates only instructions with time ranges that overlap with this time range. To validate all instructions that you can use for playback or other processing, regardless of time range, pass `CMTimeRange(start: .zero, duration: .positiveInfinity)`.
- `validationDelegate`: An object that adopts the [AVVideoCompositionValidationHandling](../avvideocompositionvalidationhandling.md) protocol to receive detailed information about problematic sections of a video composition during processing. Pass `nil` if you don’t require the details.
- `completionHandler`: A block the system calls when it determines whether the video composition is valid.

<a id="Discussion"></a>

## Discussion

During validation, the video composition calls the validation delegate, if one exists, with a reference to any trouble spots in the video composition.

This method raises an exception if the delegate modifies the video composition’s instructions, or the array of layer instructions of any [AVVideoCompositionInstruction](../avvideocompositioninstruction-swift.class.md) object contained therein during validation.

## See Also

### Validating the time range

- [isValid(for:assetDuration:timeRange:validationDelegate:)](isvalid%28for_assetduration_timerange_validationdelegate_%29.md): Indicates whether the time ranges of the composition’s instructions conform to validation requirements.
- [AVVideoCompositionValidationHandling](../avvideocompositionvalidationhandling.md): Methods you can implement to indicate whether validation of a video composition should continue after specific errors are found.
- [isValid(for:timeRange:validationDelegate:)](isvalid%28for_timerange_validationdelegate_%29.md): Deprecated. Indicates whether the time ranges of the composition’s instructions conform to validation requirements.

# determineValidityForAsset:timeRange:validationDelegate:completionHandler: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ (deprecated in 18.0) · iPadOS 16.0+ (deprecated in 18.0) · Mac Catalyst 16.0+ (deprecated in 18.0) · macOS 13.0+ (deprecated in 15.0) · tvOS 16.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Determines whether the time ranges of the composition’s instructions conform to validation requirements.

> Use [isValidForTracks:assetDuration:timeRange:validationDelegate:](isvalid%28for_assetduration_timerange_validationdelegate_%29.md) instead.

## Declaration

```objectivec
- (void) determineValidityForAsset:(AVAsset *) asset timeRange:(CMTimeRange) timeRange validationDelegate:(id<AVVideoCompositionValidationHandling>) validationDelegate completionHandler:(void (^)(BOOL isValid, NSError *error)) completionHandler;
```

## Parameters

- `asset`: An asset object, if you require validating the time ranges of the instructions against the duration of the asset and the track IDs of the layer instructions against the asset’s tracks. Pass `nil` to skip that validation.
- `timeRange`: A time range over which to validate instructions. The method validates only instructions with time ranges that overlap with this time range. To validate all instructions that you can use for playback or other processing, regardless of time range, pass `CMTimeRange(start: .zero, duration: .positiveInfinity)`.
- `validationDelegate`: An object that adopts the [AVVideoCompositionValidationHandling](../avvideocompositionvalidationhandling.md) protocol to receive detailed information about problematic sections of a video composition during processing. Pass `nil` if you don’t require the details.
- `completionHandler`: A block the system calls when it determines whether the video composition is valid.

<a id="Discussion"></a>

## Discussion

During validation, the video composition calls the validation delegate, if one exists, with a reference to any trouble spots in the video composition.

This method raises an exception if the delegate modifies the video composition’s instructions, or the array of layer instructions of any [AVVideoCompositionInstruction](../avvideocompositioninstruction-swift.class.md) object contained therein during validation.

## See Also

### Validating the time range

- [isValidForTracks:assetDuration:timeRange:validationDelegate:](isvalid%28for_assetduration_timerange_validationdelegate_%29.md): Indicates whether the time ranges of the composition’s instructions conform to validation requirements.
- [AVVideoCompositionValidationHandling](../avvideocompositionvalidationhandling.md): Methods you can implement to indicate whether validation of a video composition should continue after specific errors are found.
- [isValidForAsset:timeRange:validationDelegate:](isvalid%28for_timerange_validationdelegate_%29.md): Deprecated. Indicates whether the time ranges of the composition’s instructions conform to validation requirements.

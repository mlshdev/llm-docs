> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avvideocomposition/isvalid(for:assetduration:timerange:validationdelegate:)](https://developer.apple.com/documentation/avfoundation/avvideocomposition/isvalid(for:assetduration:timerange:validationdelegate:))

# isValid(for:assetDuration:timeRange:validationDelegate:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

Indicates whether the time ranges of the composition’s instructions conform to validation requirements.

## Declaration

```swift
func isValid(for tracks: [AVAssetTrack], assetDuration duration: CMTime, timeRange: CMTimeRange, validationDelegate: (any AVVideoCompositionValidationHandling)?) -> Bool
```

## Parameters

- `tracks`: Pass a reference to an asset’s tracks if you wish to validate the track IDs of the layer instructions against the asset’s tracks. Pass `nil` to skip that validation. This method throws an exception if the tracks aren’t all from the same asset.
- `duration`: Pass the asset duration to validate the time ranges of the instructions. Pass [invalid](../../coremedia/cmtime/invalid.md) to skip that validation.
- `timeRange`: The composition only validates those instructions with time ranges that overlap with the specified time range. To validate all instructions that the composition may use for playback or other processing, regardless of time range, pass `CMTimeRange(start: .zero, end: .positiveInfinity)`.
- `validationDelegate`: A delegate that handles validation requests. May be `nil`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the validation succeeds; otherwise; [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Validating the time range

- [AVVideoCompositionValidationHandling](../avvideocompositionvalidationhandling.md): Methods you can implement to indicate whether validation of a video composition should continue after specific errors are found.
- [determineValidity(for:timeRange:validationDelegate:completionHandler:)](determinevalidity%28for_timerange_validationdelegate_completionhandler_%29.md): Deprecated. Determines whether the time ranges of the composition’s instructions conform to validation requirements.
- [isValid(for:timeRange:validationDelegate:)](isvalid%28for_timerange_validationdelegate_%29.md): Deprecated. Indicates whether the time ranges of the composition’s instructions conform to validation requirements.

# isValidForTracks:assetDuration:timeRange:validationDelegate: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

Indicates whether the time ranges of the composition’s instructions conform to validation requirements.

## Declaration

```objectivec
- (BOOL) isValidForTracks:(NSArray<AVAssetTrack *> *) tracks assetDuration:(CMTime) duration timeRange:(CMTimeRange) timeRange validationDelegate:(id<AVVideoCompositionValidationHandling>) validationDelegate;
```

## Parameters

- `tracks`: Pass a reference to an asset’s tracks if you wish to validate the track IDs of the layer instructions against the asset’s tracks. Pass `nil` to skip that validation. This method throws an exception if the tracks aren’t all from the same asset.
- `duration`: Pass the asset duration to validate the time ranges of the instructions. Pass [kCMTimeInvalid](../../coremedia/cmtime/invalid.md) to skip that validation.
- `timeRange`: The composition only validates those instructions with time ranges that overlap with the specified time range. To validate all instructions that the composition may use for playback or other processing, regardless of time range, pass `CMTimeRange(start: .zero, end: .positiveInfinity)`.
- `validationDelegate`: A delegate that handles validation requests. May be `nil`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the validation succeeds; otherwise; [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Validating the time range

- [AVVideoCompositionValidationHandling](../avvideocompositionvalidationhandling.md): Methods you can implement to indicate whether validation of a video composition should continue after specific errors are found.
- [determineValidityForAsset:timeRange:validationDelegate:completionHandler:](determinevalidity%28for_timerange_validationdelegate_completionhandler_%29.md): Deprecated. Determines whether the time ranges of the composition’s instructions conform to validation requirements.
- [isValidForAsset:timeRange:validationDelegate:](isvalid%28for_timerange_validationdelegate_%29.md): Deprecated. Indicates whether the time ranges of the composition’s instructions conform to validation requirements.

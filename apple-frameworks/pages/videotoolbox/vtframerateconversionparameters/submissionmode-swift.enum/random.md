> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtframerateconversionparameters/submissionmode-swift.enum/random](https://developer.apple.com/documentation/videotoolbox/vtframerateconversionparameters/submissionmode-swift.enum/random)

# VTFrameRateConversionParameters.SubmissionMode.random (Swift)

**Framework:** Video Toolbox  
**Kind:** Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 15.4+

A submission follow presentation time order with a jump or skip in a frame sequence.

## Declaration

```swift
case random
```

<a id="discussion"></a>

## Discussion

If this value is set, the internal cache will be cleared during the processWithParameters call.

## See Also

### Submission modes

- [VTFrameRateConversionParameters.SubmissionMode.sequential](sequential.md): A submission follow presentation time order without a jump or skip when compared to a previous submission.

# VTFrameRateConversionParametersSubmissionModeRandom (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Enumeration Case  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

A submission follow presentation time order with a jump or skip in a frame sequence.

## Declaration

```objectivec
VTFrameRateConversionParametersSubmissionModeRandom
```

<a id="discussion"></a>

## Discussion

If this value is set, the internal cache will be cleared during the processWithParameters call.

## See Also

### Submission modes

- [VTFrameRateConversionParametersSubmissionModeSequential](sequential.md): A submission follow presentation time order without a jump or skip when compared to a previous submission.

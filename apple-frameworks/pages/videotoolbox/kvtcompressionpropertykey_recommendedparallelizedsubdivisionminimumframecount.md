> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/kvtcompressionpropertykey_recommendedparallelizedsubdivisionminimumframecount](https://developer.apple.com/documentation/videotoolbox/kvtcompressionpropertykey_recommendedparallelizedsubdivisionminimumframecount)

# kVTCompressionPropertyKey_RecommendedParallelizedSubdivisionMinimumFrameCount (Swift)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 14.0+ · tvOS 26.0+ · visionOS 26.0+

The recommended minimum number of video frames for a given subdivision in a parallel encoding configuration.

## Declaration

```swift
let kVTCompressionPropertyKey_RecommendedParallelizedSubdivisionMinimumFrameCount: CFString
```

<a id="Discussion"></a>

## Discussion

For best results, ensure that the total number of frames of a parallelized subdivision is greater than or equal to this value.

> **Note**

>  This configuration isn’t supported by all video encoders.

## See Also

### Parallelization

- [kVTCompressionPropertyKey_RecommendedParallelizationLimit](kvtcompressionpropertykey_recommendedparallelizationlimit.md): The recommended number of compression sessions to instantiate in a parallel encoding configuration.
- [kVTCompressionPropertyKey_RecommendedParallelizedSubdivisionMinimumDuration](kvtcompressionpropertykey_recommendedparallelizedsubdivisionminimumduration.md): The recommended minimum duration for a given subdivision in a parallel encoding configuration.

# kVTCompressionPropertyKey_RecommendedParallelizedSubdivisionMinimumFrameCount (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 14.0+ · tvOS 26.0+ · visionOS 26.0+

The recommended minimum number of video frames for a given subdivision in a parallel encoding configuration.

## Declaration

```objectivec
extern CFStringRef const kVTCompressionPropertyKey_RecommendedParallelizedSubdivisionMinimumFrameCount;
```

<a id="Discussion"></a>

## Discussion

For best results, ensure that the total number of frames of a parallelized subdivision is greater than or equal to this value.

> **Note**

>  This configuration isn’t supported by all video encoders.

## See Also

### Parallelization

- [kVTCompressionPropertyKey_RecommendedParallelizationLimit](kvtcompressionpropertykey_recommendedparallelizationlimit.md): The recommended number of compression sessions to instantiate in a parallel encoding configuration.
- [kVTCompressionPropertyKey_RecommendedParallelizedSubdivisionMinimumDuration](kvtcompressionpropertykey_recommendedparallelizedsubdivisionminimumduration.md): The recommended minimum duration for a given subdivision in a parallel encoding configuration.

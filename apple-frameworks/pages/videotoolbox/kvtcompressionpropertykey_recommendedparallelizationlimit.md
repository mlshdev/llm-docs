> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/kvtcompressionpropertykey_recommendedparallelizationlimit](https://developer.apple.com/documentation/videotoolbox/kvtcompressionpropertykey_recommendedparallelizationlimit)

# kVTCompressionPropertyKey_RecommendedParallelizationLimit (Swift)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** macOS 14.0+

The recommended number of compression sessions to instantiate in a parallel encoding configuration.

## Declaration

```swift
let kVTCompressionPropertyKey_RecommendedParallelizationLimit: CFString
```

<a id="Discussion"></a>

## Discussion

Configuring a compression session for parallel encoding requires the use of the [kVTCompressionPropertyKey_MoreFramesBeforeStart](kvtcompressionpropertykey_moreframesbeforestart.md), [kVTCompressionPropertyKey_MoreFramesAfterEnd](kvtcompressionpropertykey_moreframesafterend.md), and [kVTCompressionPropertyKey_SourceFrameCount](kvtcompressionpropertykey_sourceframecount.md) properties.

For example, if the recommended parallelization limit is 4, a setup for 4 compression sessions for a 400 frame movie might look like the following:

- ****Compression Session 1****: [kVTCompressionPropertyKey_MoreFramesBeforeStart](kvtcompressionpropertykey_moreframesbeforestart.md) `= false`

  [kVTCompressionPropertyKey_MoreFramesAfterEnd](kvtcompressionpropertykey_moreframesafterend.md) `= true`

  [kVTCompressionPropertyKey_SourceFrameCount](kvtcompressionpropertykey_sourceframecount.md) `= 100`
- ****Compression Session 2****: [kVTCompressionPropertyKey_MoreFramesBeforeStart](kvtcompressionpropertykey_moreframesbeforestart.md) `= true`

  [kVTCompressionPropertyKey_MoreFramesAfterEnd](kvtcompressionpropertykey_moreframesafterend.md) `= true`

  [kVTCompressionPropertyKey_SourceFrameCount](kvtcompressionpropertykey_sourceframecount.md) `= 100`
- ****Compression Session 3****: [kVTCompressionPropertyKey_MoreFramesBeforeStart](kvtcompressionpropertykey_moreframesbeforestart.md) `= true`

  [kVTCompressionPropertyKey_MoreFramesAfterEnd](kvtcompressionpropertykey_moreframesafterend.md) `= true`

  [kVTCompressionPropertyKey_SourceFrameCount](kvtcompressionpropertykey_sourceframecount.md) `= 100`
- ****Compression Session 4****: [kVTCompressionPropertyKey_MoreFramesBeforeStart](kvtcompressionpropertykey_moreframesbeforestart.md) `= true`

  [kVTCompressionPropertyKey_MoreFramesAfterEnd](kvtcompressionpropertykey_moreframesafterend.md) `= false`

  [kVTCompressionPropertyKey_SourceFrameCount](kvtcompressionpropertykey_sourceframecount.md) `= 100`

## See Also

### Parallelization

- [kVTCompressionPropertyKey_RecommendedParallelizedSubdivisionMinimumDuration](kvtcompressionpropertykey_recommendedparallelizedsubdivisionminimumduration.md): The recommended minimum duration for a given subdivision in a parallel encoding configuration.
- [kVTCompressionPropertyKey_RecommendedParallelizedSubdivisionMinimumFrameCount](kvtcompressionpropertykey_recommendedparallelizedsubdivisionminimumframecount.md): The recommended minimum number of video frames for a given subdivision in a parallel encoding configuration.

# kVTCompressionPropertyKey_RecommendedParallelizationLimit (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** macOS 14.0+

The recommended number of compression sessions to instantiate in a parallel encoding configuration.

## Declaration

```objectivec
extern CFStringRef const kVTCompressionPropertyKey_RecommendedParallelizationLimit;
```

<a id="Discussion"></a>

## Discussion

Configuring a compression session for parallel encoding requires the use of the [kVTCompressionPropertyKey_MoreFramesBeforeStart](kvtcompressionpropertykey_moreframesbeforestart.md), [kVTCompressionPropertyKey_MoreFramesAfterEnd](kvtcompressionpropertykey_moreframesafterend.md), and [kVTCompressionPropertyKey_SourceFrameCount](kvtcompressionpropertykey_sourceframecount.md) properties.

For example, if the recommended parallelization limit is 4, a setup for 4 compression sessions for a 400 frame movie might look like the following:

- ****Compression Session 1****: [kVTCompressionPropertyKey_MoreFramesBeforeStart](kvtcompressionpropertykey_moreframesbeforestart.md) `= false`

  [kVTCompressionPropertyKey_MoreFramesAfterEnd](kvtcompressionpropertykey_moreframesafterend.md) `= true`

  [kVTCompressionPropertyKey_SourceFrameCount](kvtcompressionpropertykey_sourceframecount.md) `= 100`
- ****Compression Session 2****: [kVTCompressionPropertyKey_MoreFramesBeforeStart](kvtcompressionpropertykey_moreframesbeforestart.md) `= true`

  [kVTCompressionPropertyKey_MoreFramesAfterEnd](kvtcompressionpropertykey_moreframesafterend.md) `= true`

  [kVTCompressionPropertyKey_SourceFrameCount](kvtcompressionpropertykey_sourceframecount.md) `= 100`
- ****Compression Session 3****: [kVTCompressionPropertyKey_MoreFramesBeforeStart](kvtcompressionpropertykey_moreframesbeforestart.md) `= true`

  [kVTCompressionPropertyKey_MoreFramesAfterEnd](kvtcompressionpropertykey_moreframesafterend.md) `= true`

  [kVTCompressionPropertyKey_SourceFrameCount](kvtcompressionpropertykey_sourceframecount.md) `= 100`
- ****Compression Session 4****: [kVTCompressionPropertyKey_MoreFramesBeforeStart](kvtcompressionpropertykey_moreframesbeforestart.md) `= true`

  [kVTCompressionPropertyKey_MoreFramesAfterEnd](kvtcompressionpropertykey_moreframesafterend.md) `= false`

  [kVTCompressionPropertyKey_SourceFrameCount](kvtcompressionpropertykey_sourceframecount.md) `= 100`

## See Also

### Parallelization

- [kVTCompressionPropertyKey_RecommendedParallelizedSubdivisionMinimumDuration](kvtcompressionpropertykey_recommendedparallelizedsubdivisionminimumduration.md): The recommended minimum duration for a given subdivision in a parallel encoding configuration.
- [kVTCompressionPropertyKey_RecommendedParallelizedSubdivisionMinimumFrameCount](kvtcompressionpropertykey_recommendedparallelizedsubdivisionminimumframecount.md): The recommended minimum number of video frames for a given subdivision in a parallel encoding configuration.

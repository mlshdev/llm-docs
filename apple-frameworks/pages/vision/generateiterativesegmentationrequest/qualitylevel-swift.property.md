> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/generateiterativesegmentationrequest/qualitylevel-swift.property](https://developer.apple.com/documentation/vision/generateiterativesegmentationrequest/qualitylevel-swift.property)

# qualityLevel

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Controls the resolution of the produced mask.

## Declaration

```swift
final var qualityLevel: GenerateIterativeSegmentationRequest.QualityLevel { get set }
```

<a id="discussion"></a>

## Discussion

Higher resolutions will produce a smoother mask. Lower resolutions will be faster.

## See Also

### Accessing the quality level

- [GenerateIterativeSegmentationRequest.QualityLevel](qualitylevel-swift.enum.md): The resolution and quality of the segmentation mask the request produces.

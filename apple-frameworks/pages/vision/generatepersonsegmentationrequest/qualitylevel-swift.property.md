> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/generatepersonsegmentationrequest/qualitylevel-swift.property](https://developer.apple.com/documentation/vision/generatepersonsegmentationrequest/qualitylevel-swift.property)

# qualityLevel

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

A value that indicates how the request balances accuracy and performance.

## Declaration

```swift
final var qualityLevel: GeneratePersonSegmentationRequest.QualityLevel { get set }
```

<a id="Discussion"></a>

## Discussion

The default is [GeneratePersonSegmentationRequest.QualityLevel.accurate](qualitylevel-swift.enum/accurate.md).

## See Also

### Configuring a request

- [GeneratePersonSegmentationRequest.QualityLevel](qualitylevel-swift.enum.md): Constants that define the levels of quality for a person-segmentation request.
- [outputPixelFormatType](outputpixelformattype.md): The desired pixel format of the observation.
- [supportedOutputPixelFormats](supportedoutputpixelformats.md): The collection of supported pixel format types.

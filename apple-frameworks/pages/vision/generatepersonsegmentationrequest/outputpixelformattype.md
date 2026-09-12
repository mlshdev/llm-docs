> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/generatepersonsegmentationrequest/outputpixelformattype](https://developer.apple.com/documentation/vision/generatepersonsegmentationrequest/outputpixelformattype)

# outputPixelFormatType

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

The desired pixel format of the observation.

## Declaration

```swift
final var outputPixelFormatType: OSType { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is [kCVPixelFormatType_OneComponent8](../../corevideo/kcvpixelformattype_onecomponent8.md).

## See Also

### Configuring a request

- [qualityLevel](qualitylevel-swift.property.md): A value that indicates how the request balances accuracy and performance.
- [GeneratePersonSegmentationRequest.QualityLevel](qualitylevel-swift.enum.md): Constants that define the levels of quality for a person-segmentation request.
- [supportedOutputPixelFormats](supportedoutputpixelformats.md): The collection of supported pixel format types.

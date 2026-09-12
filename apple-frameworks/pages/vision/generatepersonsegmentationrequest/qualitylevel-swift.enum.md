> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/generatepersonsegmentationrequest/qualitylevel-swift.enum](https://developer.apple.com/documentation/vision/generatepersonsegmentationrequest/qualitylevel-swift.enum)

# GeneratePersonSegmentationRequest.QualityLevel

**Framework:** Vision  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

Constants that define the levels of quality for a person-segmentation request.

## Declaration

```swift
enum QualityLevel
```

## Topics

### Getting the quality levels

- [GeneratePersonSegmentationRequest.QualityLevel.accurate](qualitylevel-swift.enum/accurate.md): A quality option that prefers image quality over performance.
- [GeneratePersonSegmentationRequest.QualityLevel.balanced](qualitylevel-swift.enum/balanced.md): A quality option that prefers processing that balances image quality and performance.
- [GeneratePersonSegmentationRequest.QualityLevel.fast](qualitylevel-swift.enum/fast.md): A quality option that prefers performance over image quality.

## Relationships

### Conforms To

- [CaseIterable](https://developer.apple.com/documentation/swift/caseiterable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring a request

- [qualityLevel](qualitylevel-swift.property.md): A value that indicates how the request balances accuracy and performance.
- [outputPixelFormatType](outputpixelformattype.md): The desired pixel format of the observation.
- [supportedOutputPixelFormats](supportedoutputpixelformats.md): The collection of supported pixel format types.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vngeneratepersonsegmentationrequest/qualitylevel-swift.enum](https://developer.apple.com/documentation/vision/vngeneratepersonsegmentationrequest/qualitylevel-swift.enum)

# VNGeneratePersonSegmentationRequest.QualityLevel (Swift)

**Framework:** Vision  
**Kind:** Enumeration

Constants that define the levels of quality for a person segmentation request.

## Declaration

```swift
enum QualityLevel
```

## Topics

### Quality Levels

- [VNGeneratePersonSegmentationRequest.QualityLevel.accurate](qualitylevel-swift.enum/accurate.md): Prefers image quality over performance.
- [VNGeneratePersonSegmentationRequest.QualityLevel.balanced](qualitylevel-swift.enum/balanced.md): Prefers processing that balances image quality and performance.
- [VNGeneratePersonSegmentationRequest.QualityLevel.fast](qualitylevel-swift.enum/fast.md): Prefers performance over image quality.

### Creating a Quality Level

- [init(rawValue:)](qualitylevel-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring the Request

- [outputPixelFormat](outputpixelformat.md): The pixel format of the output image.
- [qualityLevel](qualitylevel-swift.property.md): A value that indicates how the request balances accuracy and performance.

# VNGeneratePersonSegmentationRequestQualityLevel (Objective-C)

**Framework:** Vision  
**Kind:** Enumeration

Constants that define the levels of quality for a person segmentation request.

## Declaration

```objectivec
enum VNGeneratePersonSegmentationRequestQualityLevel : NSUInteger;
```

## Topics

### Quality Levels

- [VNGeneratePersonSegmentationRequestQualityLevelAccurate](qualitylevel-swift.enum/accurate.md): Prefers image quality over performance.
- [VNGeneratePersonSegmentationRequestQualityLevelBalanced](qualitylevel-swift.enum/balanced.md): Prefers processing that balances image quality and performance.
- [VNGeneratePersonSegmentationRequestQualityLevelFast](qualitylevel-swift.enum/fast.md): Prefers performance over image quality.

## See Also

### Configuring the Request

- [outputPixelFormat](outputpixelformat.md): The pixel format of the output image.
- [qualityLevel](qualitylevel-swift.property.md): A value that indicates how the request balances accuracy and performance.

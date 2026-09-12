> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/generateiterativesegmentationrequest/qualitylevel-swift.enum](https://developer.apple.com/documentation/vision/generateiterativesegmentationrequest/qualitylevel-swift.enum)

# GenerateIterativeSegmentationRequest.QualityLevel

**Framework:** Vision  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The resolution and quality of the segmentation mask the request produces.

## Declaration

```swift
enum QualityLevel
```

<a id="overview"></a>

## Overview

Higher quality levels produce a smoother, higher-resolution mask. Lower quality levels favor speed over resolution.

## Topics

### Quality cases

- [GenerateIterativeSegmentationRequest.QualityLevel.accurate](qualitylevel-swift.enum/accurate.md): Produces a high-resolution mask.
- [GenerateIterativeSegmentationRequest.QualityLevel.balanced](qualitylevel-swift.enum/balanced.md): Produces a medium-resolution mask that balances speed and accuracy. This is the default setting.
- [GenerateIterativeSegmentationRequest.QualityLevel.fast](qualitylevel-swift.enum/fast.md): Produces a low-resolution mask, but runs very quickly.

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

### Accessing the quality level

- [qualityLevel](qualitylevel-swift.property.md): Controls the resolution of the produced mask.

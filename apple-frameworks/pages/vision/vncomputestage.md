> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/vision/vncomputestage

# VNComputeStage (Swift)

**Framework:** Vision  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Types that represent the compute stage.

## Declaration

```swift
struct VNComputeStage
```

## Topics

### Get the Compute Stages

- [main](vncomputestage/main.md): A stage that represents where the system performs the main functionality.
- [postProcessing](vncomputestage/postprocessing.md): A stage that represents where the system performs additional analysis from the main compute stage.

### Create a Compute Stage

- [init(rawValue:)](vncomputestage/init%28rawvalue_%29.md): Creates a compute stage with the value you specify.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Utilities

- [VNGeometryUtils](vngeometryutils.md): Utility methods to determine the geometries of various Vision types.
- [VNVideoProcessor](vnvideoprocessor.md): An object that performs offline analysis of video content.
- [VNVideoProcessingOption](vnvideoprocessingoption.md): Deprecated. Options to pass to the video processor when adding requests.

# VNComputeStage (Objective-C)

**Framework:** Vision  
**Kind:** Type Alias  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Types that represent the compute stage.

## Declaration

```objectivec
typedef NSString * VNComputeStage;
```

## Topics

### Get the Compute Stages

- [VNComputeStageMain](vncomputestage/main.md): A stage that represents where the system performs the main functionality.
- [VNComputeStagePostProcessing](vncomputestage/postprocessing.md): A stage that represents where the system performs additional analysis from the main compute stage.

## See Also

### Utilities

- [VNGeometryUtils](vngeometryutils.md): Utility methods to determine the geometries of various Vision types.
- [VNVideoProcessor](vnvideoprocessor.md): An object that performs offline analysis of video content.
- [VNVideoProcessingOption](vnvideoprocessingoption.md): Deprecated. Options to pass to the video processor when adding requests.

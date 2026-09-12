> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlprimitivetopologyclass](https://developer.apple.com/documentation/metal/mtlprimitivetopologyclass)

# MTLPrimitiveTopologyClass (Swift)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 12.0+ · visionOS 1.0+

The primitive topologies available for rendering.

## Declaration

```swift
enum MTLPrimitiveTopologyClass
```

## Topics

### Topology classes

- [MTLPrimitiveTopologyClass.unspecified](mtlprimitivetopologyclass/unspecified.md): An unspecified primitive.
- [MTLPrimitiveTopologyClass.point](mtlprimitivetopologyclass/point.md): A point primitive.
- [MTLPrimitiveTopologyClass.line](mtlprimitivetopologyclass/line.md): A line primitive.
- [MTLPrimitiveTopologyClass.triangle](mtlprimitivetopologyclass/triangle.md): A triangle primitive.

### Initializers

- [init(rawValue:)](mtlprimitivetopologyclass/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Specifying rasterization and visibility state

- [isAlphaToCoverageEnabled](mtlrenderpipelinedescriptor/isalphatocoverageenabled.md): A Boolean value that indicates whether to read and use the alpha channel fragment output for color attachments to compute a sample coverage mask.
- [isAlphaToOneEnabled](mtlrenderpipelinedescriptor/isalphatooneenabled.md): A Boolean value that indicates whether to force alpha channel values for color attachments to the largest representable value.
- [isRasterizationEnabled](mtlrenderpipelinedescriptor/israsterizationenabled.md): A Boolean value that determines whether the pipeline rasterizes primitives.
- [inputPrimitiveTopology](mtlrenderpipelinedescriptor/inputprimitivetopology.md): The type of primitive topology the pipeline renders.
- [rasterSampleCount](mtlrenderpipelinedescriptor/rastersamplecount.md): The number of samples the pipeline applies for each fragment.
- [sampleCount](mtlrenderpipelinedescriptor/samplecount.md): Deprecated. The number of samples the pipeline applies for each fragment.

# MTLPrimitiveTopologyClass (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 12.0+ · visionOS 1.0+

The primitive topologies available for rendering.

## Declaration

```objectivec
enum MTLPrimitiveTopologyClass : NSUInteger;
```

## Topics

### Topology classes

- [MTLPrimitiveTopologyClassUnspecified](mtlprimitivetopologyclass/unspecified.md): An unspecified primitive.
- [MTLPrimitiveTopologyClassPoint](mtlprimitivetopologyclass/point.md): A point primitive.
- [MTLPrimitiveTopologyClassLine](mtlprimitivetopologyclass/line.md): A line primitive.
- [MTLPrimitiveTopologyClassTriangle](mtlprimitivetopologyclass/triangle.md): A triangle primitive.

## See Also

### Specifying rasterization and visibility state

- [alphaToCoverageEnabled](mtlrenderpipelinedescriptor/isalphatocoverageenabled.md): A Boolean value that indicates whether to read and use the alpha channel fragment output for color attachments to compute a sample coverage mask.
- [alphaToOneEnabled](mtlrenderpipelinedescriptor/isalphatooneenabled.md): A Boolean value that indicates whether to force alpha channel values for color attachments to the largest representable value.
- [rasterizationEnabled](mtlrenderpipelinedescriptor/israsterizationenabled.md): A Boolean value that determines whether the pipeline rasterizes primitives.
- [inputPrimitiveTopology](mtlrenderpipelinedescriptor/inputprimitivetopology.md): The type of primitive topology the pipeline renders.
- [rasterSampleCount](mtlrenderpipelinedescriptor/rastersamplecount.md): The number of samples the pipeline applies for each fragment.
- [sampleCount](mtlrenderpipelinedescriptor/samplecount.md): Deprecated. The number of samples the pipeline applies for each fragment.

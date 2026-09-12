> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrenderpipelinedescriptor/isalphatocoverageenabled](https://developer.apple.com/documentation/metal/mtlrenderpipelinedescriptor/isalphatocoverageenabled)

# isAlphaToCoverageEnabled (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

A Boolean value that indicates whether to read and use the alpha channel fragment output for color attachments to compute a sample coverage mask.

## Declaration

```swift
var isAlphaToCoverageEnabled: Bool { get set }
```

<a id="discussion"></a>

## Discussion

The default value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Specifying rasterization and visibility state

- [isAlphaToOneEnabled](isalphatooneenabled.md): A Boolean value that indicates whether to force alpha channel values for color attachments to the largest representable value.
- [isRasterizationEnabled](israsterizationenabled.md): A Boolean value that determines whether the pipeline rasterizes primitives.
- [inputPrimitiveTopology](inputprimitivetopology.md): The type of primitive topology the pipeline renders.
- [rasterSampleCount](rastersamplecount.md): The number of samples the pipeline applies for each fragment.
- [MTLPrimitiveTopologyClass](../mtlprimitivetopologyclass.md): The primitive topologies available for rendering.
- [sampleCount](samplecount.md): Deprecated. The number of samples the pipeline applies for each fragment.

# alphaToCoverageEnabled (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

A Boolean value that indicates whether to read and use the alpha channel fragment output for color attachments to compute a sample coverage mask.

## Declaration

```objectivec
@property (nonatomic, readwrite, getter=isAlphaToCoverageEnabled) BOOL alphaToCoverageEnabled;
```

<a id="discussion"></a>

## Discussion

The default value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Specifying rasterization and visibility state

- [alphaToOneEnabled](isalphatooneenabled.md): A Boolean value that indicates whether to force alpha channel values for color attachments to the largest representable value.
- [rasterizationEnabled](israsterizationenabled.md): A Boolean value that determines whether the pipeline rasterizes primitives.
- [inputPrimitiveTopology](inputprimitivetopology.md): The type of primitive topology the pipeline renders.
- [rasterSampleCount](rastersamplecount.md): The number of samples the pipeline applies for each fragment.
- [MTLPrimitiveTopologyClass](../mtlprimitivetopologyclass.md): The primitive topologies available for rendering.
- [sampleCount](samplecount.md): Deprecated. The number of samples the pipeline applies for each fragment.

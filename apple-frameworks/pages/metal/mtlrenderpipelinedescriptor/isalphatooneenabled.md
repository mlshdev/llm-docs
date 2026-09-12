> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrenderpipelinedescriptor/isalphatooneenabled](https://developer.apple.com/documentation/metal/mtlrenderpipelinedescriptor/isalphatooneenabled)

# isAlphaToOneEnabled (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

A Boolean value that indicates whether to force alpha channel values for color attachments to the largest representable value.

## Declaration

```swift
var isAlphaToOneEnabled: Bool { get set }
```

<a id="discussion"></a>

## Discussion

The default value is [false](https://developer.apple.com/documentation/swift/false).

If enabled, alpha channel fragment values are only forced for `colorAttachments[0]`. Other attachments are unaffected.

You may use `alphaToOneEnabled` when you want to write an alpha value that represents partial coverage of the pixel, but also want to disable blending (by forcing alpha to one).

## See Also

### Specifying rasterization and visibility state

- [isAlphaToCoverageEnabled](isalphatocoverageenabled.md): A Boolean value that indicates whether to read and use the alpha channel fragment output for color attachments to compute a sample coverage mask.
- [isRasterizationEnabled](israsterizationenabled.md): A Boolean value that determines whether the pipeline rasterizes primitives.
- [inputPrimitiveTopology](inputprimitivetopology.md): The type of primitive topology the pipeline renders.
- [rasterSampleCount](rastersamplecount.md): The number of samples the pipeline applies for each fragment.
- [MTLPrimitiveTopologyClass](../mtlprimitivetopologyclass.md): The primitive topologies available for rendering.
- [sampleCount](samplecount.md): Deprecated. The number of samples the pipeline applies for each fragment.

# alphaToOneEnabled (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

A Boolean value that indicates whether to force alpha channel values for color attachments to the largest representable value.

## Declaration

```objectivec
@property (nonatomic, readwrite, getter=isAlphaToOneEnabled) BOOL alphaToOneEnabled;
```

<a id="discussion"></a>

## Discussion

The default value is [false](https://developer.apple.com/documentation/swift/false).

If enabled, alpha channel fragment values are only forced for `colorAttachments[0]`. Other attachments are unaffected.

You may use `alphaToOneEnabled` when you want to write an alpha value that represents partial coverage of the pixel, but also want to disable blending (by forcing alpha to one).

## See Also

### Specifying rasterization and visibility state

- [alphaToCoverageEnabled](isalphatocoverageenabled.md): A Boolean value that indicates whether to read and use the alpha channel fragment output for color attachments to compute a sample coverage mask.
- [rasterizationEnabled](israsterizationenabled.md): A Boolean value that determines whether the pipeline rasterizes primitives.
- [inputPrimitiveTopology](inputprimitivetopology.md): The type of primitive topology the pipeline renders.
- [rasterSampleCount](rastersamplecount.md): The number of samples the pipeline applies for each fragment.
- [MTLPrimitiveTopologyClass](../mtlprimitivetopologyclass.md): The primitive topologies available for rendering.
- [sampleCount](samplecount.md): Deprecated. The number of samples the pipeline applies for each fragment.

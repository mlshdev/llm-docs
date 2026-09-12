> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrenderpipelinedescriptor/israsterizationenabled](https://developer.apple.com/documentation/metal/mtlrenderpipelinedescriptor/israsterizationenabled)

# isRasterizationEnabled (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

A Boolean value that determines whether the pipeline rasterizes primitives.

## Declaration

```swift
var isRasterizationEnabled: Bool { get set }
```

<a id="discussion"></a>

## Discussion

The default value is [true](https://developer.apple.com/documentation/swift/true), indicating that primitives are rasterized. If the value is [false](https://developer.apple.com/documentation/swift/false), then primitives are dropped prior to rasterization (i.e. rasterization is disabled). Disabling rasterization may be useful to gather data from vertex-only transformations.

When this value is [false](https://developer.apple.com/documentation/swift/false), no fragments are processed and the vertex shader function needs to return `void`.

## See Also

### Specifying rasterization and visibility state

- [isAlphaToCoverageEnabled](isalphatocoverageenabled.md): A Boolean value that indicates whether to read and use the alpha channel fragment output for color attachments to compute a sample coverage mask.
- [isAlphaToOneEnabled](isalphatooneenabled.md): A Boolean value that indicates whether to force alpha channel values for color attachments to the largest representable value.
- [inputPrimitiveTopology](inputprimitivetopology.md): The type of primitive topology the pipeline renders.
- [rasterSampleCount](rastersamplecount.md): The number of samples the pipeline applies for each fragment.
- [MTLPrimitiveTopologyClass](../mtlprimitivetopologyclass.md): The primitive topologies available for rendering.
- [sampleCount](samplecount.md): Deprecated. The number of samples the pipeline applies for each fragment.

# rasterizationEnabled (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

A Boolean value that determines whether the pipeline rasterizes primitives.

## Declaration

```objectivec
@property (nonatomic, readwrite, getter=isRasterizationEnabled) BOOL rasterizationEnabled;
```

<a id="discussion"></a>

## Discussion

The default value is [true](https://developer.apple.com/documentation/swift/true), indicating that primitives are rasterized. If the value is [false](https://developer.apple.com/documentation/swift/false), then primitives are dropped prior to rasterization (i.e. rasterization is disabled). Disabling rasterization may be useful to gather data from vertex-only transformations.

When this value is [false](https://developer.apple.com/documentation/swift/false), no fragments are processed and the vertex shader function needs to return `void`.

## See Also

### Specifying rasterization and visibility state

- [alphaToCoverageEnabled](isalphatocoverageenabled.md): A Boolean value that indicates whether to read and use the alpha channel fragment output for color attachments to compute a sample coverage mask.
- [alphaToOneEnabled](isalphatooneenabled.md): A Boolean value that indicates whether to force alpha channel values for color attachments to the largest representable value.
- [inputPrimitiveTopology](inputprimitivetopology.md): The type of primitive topology the pipeline renders.
- [rasterSampleCount](rastersamplecount.md): The number of samples the pipeline applies for each fragment.
- [MTLPrimitiveTopologyClass](../mtlprimitivetopologyclass.md): The primitive topologies available for rendering.
- [sampleCount](samplecount.md): Deprecated. The number of samples the pipeline applies for each fragment.

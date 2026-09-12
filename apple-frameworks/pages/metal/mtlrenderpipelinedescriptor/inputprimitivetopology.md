> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrenderpipelinedescriptor/inputprimitivetopology](https://developer.apple.com/documentation/metal/mtlrenderpipelinedescriptor/inputprimitivetopology)

# inputPrimitiveTopology (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 14.5+ · visionOS 1.0+

The type of primitive topology the pipeline renders.

## Declaration

```swift
var inputPrimitiveTopology: MTLPrimitiveTopologyClass { get set }
```

## Mentioned In

- [Rendering to multiple texture slices in a draw command](../rendering-to-multiple-texture-slices-in-a-draw-command.md)

<a id="discussion"></a>

## Discussion

Your app needs to specify this value when layered rendering is enabled.

The default value is `MTLPrimitiveTopologyClassUnspecified`.

## See Also

### Related Documentation

- [renderTargetArrayLength](../mtlrenderpassdescriptor/rendertargetarraylength.md): The number of active layers that all attachments need to have for layered rendering.

### Specifying rasterization and visibility state

- [isAlphaToCoverageEnabled](isalphatocoverageenabled.md): A Boolean value that indicates whether to read and use the alpha channel fragment output for color attachments to compute a sample coverage mask.
- [isAlphaToOneEnabled](isalphatooneenabled.md): A Boolean value that indicates whether to force alpha channel values for color attachments to the largest representable value.
- [isRasterizationEnabled](israsterizationenabled.md): A Boolean value that determines whether the pipeline rasterizes primitives.
- [rasterSampleCount](rastersamplecount.md): The number of samples the pipeline applies for each fragment.
- [MTLPrimitiveTopologyClass](../mtlprimitivetopologyclass.md): The primitive topologies available for rendering.
- [sampleCount](samplecount.md): Deprecated. The number of samples the pipeline applies for each fragment.

# inputPrimitiveTopology (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 14.5+ · visionOS 1.0+

The type of primitive topology the pipeline renders.

## Declaration

```objectivec
@property (nonatomic, readwrite) MTLPrimitiveTopologyClass inputPrimitiveTopology;
```

## Mentioned In

- [Rendering to multiple texture slices in a draw command](../rendering-to-multiple-texture-slices-in-a-draw-command.md)

<a id="discussion"></a>

## Discussion

Your app needs to specify this value when layered rendering is enabled.

The default value is `MTLPrimitiveTopologyClassUnspecified`.

## See Also

### Related Documentation

- [renderTargetArrayLength](../mtlrenderpassdescriptor/rendertargetarraylength.md): The number of active layers that all attachments need to have for layered rendering.

### Specifying rasterization and visibility state

- [alphaToCoverageEnabled](isalphatocoverageenabled.md): A Boolean value that indicates whether to read and use the alpha channel fragment output for color attachments to compute a sample coverage mask.
- [alphaToOneEnabled](isalphatooneenabled.md): A Boolean value that indicates whether to force alpha channel values for color attachments to the largest representable value.
- [rasterizationEnabled](israsterizationenabled.md): A Boolean value that determines whether the pipeline rasterizes primitives.
- [rasterSampleCount](rastersamplecount.md): The number of samples the pipeline applies for each fragment.
- [MTLPrimitiveTopologyClass](../mtlprimitivetopologyclass.md): The primitive topologies available for rendering.
- [sampleCount](samplecount.md): Deprecated. The number of samples the pipeline applies for each fragment.

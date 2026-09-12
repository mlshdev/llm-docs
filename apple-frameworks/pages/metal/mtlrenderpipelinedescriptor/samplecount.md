> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrenderpipelinedescriptor/samplecount](https://developer.apple.com/documentation/metal/mtlrenderpipelinedescriptor/samplecount)

# sampleCount (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 16.0) · iPadOS 8.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.11+ (deprecated in 13.0) · tvOS  (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0)

The number of samples the pipeline applies for each fragment.

> Use [rasterSampleCount](rastersamplecount.md) instead.

## Declaration

```swift
var sampleCount: Int { get set }
```

<a id="discussion"></a>

## Discussion

The render pipeline state honors this property only if the pipeline render targets support multisampling.

> **Important**

>  This property needs to be `1` if the render targets don’t support multisampling.

When your create an [MTLRenderCommandEncoder](../mtlrendercommandencoder.md) instance, this property’s value needs to be equal to the number of render target textures. Furthermore, the texture type of all render target textures need to be [MTLTextureType.type2DMultisample](../mtltexturetype/type2dmultisample.md).

The number of samples a GPU supports varies by device. You can check whether an [MTLDevice](../mtldevice.md) instance supports a specific sample count by calling its [supportsTextureSampleCount(\_:)](../mtldevice/supportstexturesamplecount%28__%29.md) method.

The default value for this property is `1`.

## See Also

### Specifying rasterization and visibility state

- [isAlphaToCoverageEnabled](isalphatocoverageenabled.md): A Boolean value that indicates whether to read and use the alpha channel fragment output for color attachments to compute a sample coverage mask.
- [isAlphaToOneEnabled](isalphatooneenabled.md): A Boolean value that indicates whether to force alpha channel values for color attachments to the largest representable value.
- [isRasterizationEnabled](israsterizationenabled.md): A Boolean value that determines whether the pipeline rasterizes primitives.
- [inputPrimitiveTopology](inputprimitivetopology.md): The type of primitive topology the pipeline renders.
- [rasterSampleCount](rastersamplecount.md): The number of samples the pipeline applies for each fragment.
- [MTLPrimitiveTopologyClass](../mtlprimitivetopologyclass.md): The primitive topologies available for rendering.

# sampleCount (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 16.0) · iPadOS 8.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.11+ (deprecated in 13.0) · tvOS  (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0)

The number of samples the pipeline applies for each fragment.

> Use [rasterSampleCount](rastersamplecount.md) instead.

## Declaration

```objectivec
@property (nonatomic, readwrite) NSUInteger sampleCount;
```

<a id="discussion"></a>

## Discussion

The render pipeline state honors this property only if the pipeline render targets support multisampling.

> **Important**

>  This property needs to be `1` if the render targets don’t support multisampling.

When your create an [MTLRenderCommandEncoder](../mtlrendercommandencoder.md) instance, this property’s value needs to be equal to the number of render target textures. Furthermore, the texture type of all render target textures need to be [MTLTextureType2DMultisample](../mtltexturetype/type2dmultisample.md).

The number of samples a GPU supports varies by device. You can check whether an [MTLDevice](../mtldevice.md) instance supports a specific sample count by calling its [supportsTextureSampleCount:](../mtldevice/supportstexturesamplecount%28__%29.md) method.

The default value for this property is `1`.

## See Also

### Specifying rasterization and visibility state

- [alphaToCoverageEnabled](isalphatocoverageenabled.md): A Boolean value that indicates whether to read and use the alpha channel fragment output for color attachments to compute a sample coverage mask.
- [alphaToOneEnabled](isalphatooneenabled.md): A Boolean value that indicates whether to force alpha channel values for color attachments to the largest representable value.
- [rasterizationEnabled](israsterizationenabled.md): A Boolean value that determines whether the pipeline rasterizes primitives.
- [inputPrimitiveTopology](inputprimitivetopology.md): The type of primitive topology the pipeline renders.
- [rasterSampleCount](rastersamplecount.md): The number of samples the pipeline applies for each fragment.
- [MTLPrimitiveTopologyClass](../mtlprimitivetopologyclass.md): The primitive topologies available for rendering.

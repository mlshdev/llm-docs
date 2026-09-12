> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevice/supportstexturesamplecount(_:)](https://developer.apple.com/documentation/metal/mtldevice/supportstexturesamplecount(_:))

# supportsTextureSampleCount(\_:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns a Boolean value that indicates whether the GPU can sample a texture with a specific number of sample points.

## Declaration

```swift
func supportsTextureSampleCount(_ sampleCount: Int) -> Bool
```

## Parameters

- `sampleCount`: The number of points a GPU can sample from a texture.

## Mentioned In

- [Positioning samples programmatically](../positioning-samples-programmatically.md)

<a id="discussion"></a>

## Discussion

The number of points the GPU can sample a texture varies by device:

| Sample count | Devices |
| --- | --- |
| 1 | All devices |
| 2 | All iOS devices ![](https://developer.apple.com/images/com.apple.metal/spacer.png) All tvOS devices ![](https://developer.apple.com/images/com.apple.metal/spacer.png) Some macOS devices |
| 4 | All devices |
| 8 | Some macOS devices |

Consider a GPU device’s limitations for sample count by checking [MTLTexture](../mtltexture.md)`.`[sampleCount](../mtltexture/samplecount.md) when configuring these properties:

- [MTLTextureDescriptor](../mtltexturedescriptor.md)`.`[sampleCount](../mtltexturedescriptor/samplecount.md)
- [MTLRenderPipelineDescriptor](../mtlrenderpipelinedescriptor.md)`.`[rasterSampleCount](../mtlrenderpipelinedescriptor/rastersamplecount.md)
- [MTLTileRenderPipelineDescriptor](../mtltilerenderpipelinedescriptor.md)`.`[rasterSampleCount](../mtltilerenderpipelinedescriptor/rastersamplecount.md)
- [MTLMeshRenderPipelineDescriptor](../mtlmeshrenderpipelinedescriptor.md)`.`[rasterSampleCount](../mtlmeshrenderpipelinedescriptor/rastersamplecount.md)
- [MTKView](../../metalkit/mtkview.md)`.`[sampleCount](../../metalkit/mtkview/samplecount.md)

## See Also

### Creating samplers

- [makeSamplerState(descriptor:)](makesamplerstate%28descriptor_%29.md): Creates a sampler state instance.
- [getDefaultSamplePositions(sampleCount:)](getdefaultsamplepositions%28samplecount_%29.md): Returns the default sample locations based on the number of samples.

# supportsTextureSampleCount: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns a Boolean value that indicates whether the GPU can sample a texture with a specific number of sample points.

## Declaration

```objectivec
- (BOOL) supportsTextureSampleCount:(NSUInteger) sampleCount;
```

## Parameters

- `sampleCount`: The number of points a GPU can sample from a texture.

## Mentioned In

- [Positioning samples programmatically](../positioning-samples-programmatically.md)

<a id="discussion"></a>

## Discussion

The number of points the GPU can sample a texture varies by device:

| Sample count | Devices |
| --- | --- |
| 1 | All devices |
| 2 | All iOS devices ![](https://developer.apple.com/images/com.apple.metal/spacer.png) All tvOS devices ![](https://developer.apple.com/images/com.apple.metal/spacer.png) Some macOS devices |
| 4 | All devices |
| 8 | Some macOS devices |

Consider a GPU device’s limitations for sample count by checking [MTLTexture](../mtltexture.md)`.`[sampleCount](../mtltexture/samplecount.md) when configuring these properties:

- [MTLTextureDescriptor](../mtltexturedescriptor.md)`.`[sampleCount](../mtltexturedescriptor/samplecount.md)
- [MTLRenderPipelineDescriptor](../mtlrenderpipelinedescriptor.md)`.`[rasterSampleCount](../mtlrenderpipelinedescriptor/rastersamplecount.md)
- [MTLTileRenderPipelineDescriptor](../mtltilerenderpipelinedescriptor.md)`.`[rasterSampleCount](../mtltilerenderpipelinedescriptor/rastersamplecount.md)
- [MTLMeshRenderPipelineDescriptor](../mtlmeshrenderpipelinedescriptor.md)`.`[rasterSampleCount](../mtlmeshrenderpipelinedescriptor/rastersamplecount.md)
- [MTKView](../../metalkit/mtkview.md)`.`[sampleCount](../../metalkit/mtkview/samplecount.md)

## See Also

### Creating samplers

- [newSamplerStateWithDescriptor:](makesamplerstate%28descriptor_%29.md): Creates a sampler state instance.
- [getDefaultSamplePositions:count:](getdefaultsamplepositions_count_.md): Retrieves the default sample positions for a specific sample count.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4commandqueue/copytexturemappingsfromtexture:totexture:operations:count:](https://developer.apple.com/documentation/metal/mtl4commandqueue/copytexturemappingsfromtexture:totexture:operations:count:)

# copyTextureMappingsFromTexture:toTexture:operations:count:

**Interface language:** Objective-C

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Copies multiple regions within a source placement sparse texture to a destination placement sparse texture.

## Declaration

```objectivec
- (void) copyTextureMappingsFromTexture:(id<MTLTexture>) sourceTexture toTexture:(id<MTLTexture>) destinationTexture operations:(const MTL4CopySparseTextureMappingOperation[]) operations count:(NSUInteger) count;
```

## Parameters

- `sourceTexture`: The source placement sparse [MTLTexture](../mtltexture.md).
- `destinationTexture`: The destination placement sparse [MTLTexture](../mtltexture.md).
- `operations`: An array of [MTL4CopySparseTextureMappingOperation](../mtl4copysparsetexturemappingoperation.md) instances to perform.
- `count`: Number of operations to perform.

<a id="discussion"></a>

## Discussion

You are responsible for ensuring the source and destination textures have the same [placementSparsePageSize](../mtltexturedescriptor/placementsparsepagesize.md).

Additionally, you are responsible for ensuring that the source and destination textures don’t use the same aliased tiles at the same time.

> **Note**

> If a sparse texture and a sparse buffer share the same backing tiles, these don’t provide you you with meaningful views of the other resource’s data.

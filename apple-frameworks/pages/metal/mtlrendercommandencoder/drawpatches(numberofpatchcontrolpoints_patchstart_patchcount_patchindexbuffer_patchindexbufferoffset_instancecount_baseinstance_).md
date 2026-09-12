> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrendercommandencoder/drawpatches(numberofpatchcontrolpoints:patchstart:patchcount:patchindexbuffer:patchindexbufferoffset:instancecount:baseinstance:)](https://developer.apple.com/documentation/metal/mtlrendercommandencoder/drawpatches(numberofpatchcontrolpoints:patchstart:patchcount:patchindexbuffer:patchindexbufferoffset:instancecount:baseinstance:))

# drawPatches(numberOfPatchControlPoints:patchStart:patchCount:patchIndexBuffer:patchIndexBufferOffset:instanceCount:baseInstance:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Encodes a draw command that renders multiple instances of tessellated patches.

## Declaration

```swift
func drawPatches(numberOfPatchControlPoints: Int, patchStart: Int, patchCount: Int, patchIndexBuffer: (any MTLBuffer)?, patchIndexBufferOffset: Int, instanceCount: Int, baseInstance: Int)
```

## Parameters

- `numberOfPatchControlPoints`: The number of control points for each patch, which needs to be in the range `[0, 32]`.
- `patchStart`: The first patch the command draws.
- `patchCount`: The number of patches the command draws for each instance.
- `patchIndexBuffer`: An [MTLBuffer](../mtlbuffer.md) instance that contains the indices to patches.
- `patchIndexBufferOffset`: An integer that represents the location, in bytes, from the start of `patchIndexBuffer` where the patch indices begin.
- `instanceCount`: The number of times the command draws `patchCount` patches.
- `baseInstance`: The lowest value the command passes to your vertex shader’s parameter with the `instance_id` attribute.

  The command assigns each drawing instance a unique `instance_id` value that increases from `baseInstance` through `(baseInstance + instanceCount - 1)`. Your shader can use that value to identify which instance the vertex belongs to.

  For more information about the `instance_id` argument attribute for vertex shaders, see the [Metal Shading Language Specification (PDF)](https://developer.apple.com/metal/Metal-Shading-Language-Specification.pdf).

<a id="discussion"></a>

## Discussion

The method records the encoder’s current rendering state and resources the command needs as it runs. You can safely change the encoder’s render pipeline state to encode other commands after calling this method. Subsequent changes to the state don’t affect the commands already in the encoder’s [MTLCommandBuffer](../mtlcommandbuffer.md).

## See Also

### Drawing with tessellation patches

- [drawPatches(numberOfPatchControlPoints:patchIndexBuffer:patchIndexBufferOffset:indirectBuffer:indirectBufferOffset:)](drawpatches%28numberofpatchcontrolpoints_patchindexbuffer_patchindexbufferoffset_indirectbuffer_indirectbufferoffset_%29.md): Encodes a draw command that renders multiple instances of tessellated patches with indirect arguments.

# drawPatches:patchStart:patchCount:patchIndexBuffer:patchIndexBufferOffset:instanceCount:baseInstance: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Encodes a draw command that renders multiple instances of tessellated patches.

## Declaration

```objectivec
- (void) drawPatches:(NSUInteger) numberOfPatchControlPoints patchStart:(NSUInteger) patchStart patchCount:(NSUInteger) patchCount patchIndexBuffer:(id<MTLBuffer>) patchIndexBuffer patchIndexBufferOffset:(NSUInteger) patchIndexBufferOffset instanceCount:(NSUInteger) instanceCount baseInstance:(NSUInteger) baseInstance;
```

## Parameters

- `numberOfPatchControlPoints`: The number of control points for each patch, which needs to be in the range `[0, 32]`.
- `patchStart`: The first patch the command draws.
- `patchCount`: The number of patches the command draws for each instance.
- `patchIndexBuffer`: An [MTLBuffer](../mtlbuffer.md) instance that contains the indices to patches.
- `patchIndexBufferOffset`: An integer that represents the location, in bytes, from the start of `patchIndexBuffer` where the patch indices begin.
- `instanceCount`: The number of times the command draws `patchCount` patches.
- `baseInstance`: The lowest value the command passes to your vertex shader’s parameter with the `instance_id` attribute.

  The command assigns each drawing instance a unique `instance_id` value that increases from `baseInstance` through `(baseInstance + instanceCount - 1)`. Your shader can use that value to identify which instance the vertex belongs to.

  For more information about the `instance_id` argument attribute for vertex shaders, see the [Metal Shading Language Specification (PDF)](https://developer.apple.com/metal/Metal-Shading-Language-Specification.pdf).

<a id="discussion"></a>

## Discussion

The method records the encoder’s current rendering state and resources the command needs as it runs. You can safely change the encoder’s render pipeline state to encode other commands after calling this method. Subsequent changes to the state don’t affect the commands already in the encoder’s [MTLCommandBuffer](../mtlcommandbuffer.md).

## See Also

### Drawing with tessellation patches

- [drawPatches:patchIndexBuffer:patchIndexBufferOffset:indirectBuffer:indirectBufferOffset:](drawpatches%28numberofpatchcontrolpoints_patchindexbuffer_patchindexbufferoffset_indirectbuffer_indirectbufferoffset_%29.md): Encodes a draw command that renders multiple instances of tessellated patches with indirect arguments.

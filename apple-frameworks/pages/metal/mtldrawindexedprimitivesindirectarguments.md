> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldrawindexedprimitivesindirectarguments](https://developer.apple.com/documentation/metal/mtldrawindexedprimitivesindirectarguments)

# MTLDrawIndexedPrimitivesIndirectArguments (Swift)

**Framework:** Metal  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The data layout required for drawing indexed primitives via indirect buffer calls.

## Declaration

```swift
struct MTLDrawIndexedPrimitivesIndirectArguments
```

## Mentioned In

- [Specifying drawing and dispatch arguments indirectly](specifying-drawing-and-dispatch-arguments-indirectly.md)

<a id="overview"></a>

## Overview

See also the [drawIndexedPrimitives(type:indexType:indexBuffer:indexBufferOffset:indirectBuffer:indirectBufferOffset:)](mtlrendercommandencoder/drawindexedprimitives%28type_indextype_indexbuffer_indexbufferoffset_indirectbuffer_indirectbufferoffset_%29.md) method.

## Topics

### Initializers

- [init()](mtldrawindexedprimitivesindirectarguments/init%28%29.md): Returns a new data layout for drawing indexed primitives via indirect buffer calls.
- [init(indexCount:instanceCount:indexStart:baseVertex:baseInstance:)](mtldrawindexedprimitivesindirectarguments/init%28indexcount_instancecount_indexstart_basevertex_baseinstance_%29.md): Returns a new data layout for drawing indexed primitives via indirect buffer calls, with specified parameters.

### Instance Properties

- [baseInstance](mtldrawindexedprimitivesindirectarguments/baseinstance.md): The first instance to draw.
- [baseVertex](mtldrawindexedprimitivesindirectarguments/basevertex.md): The first vertex to draw.
- [indexCount](mtldrawindexedprimitivesindirectarguments/indexcount.md): For each instance, the number of indices to read from the index buffer.
- [indexStart](mtldrawindexedprimitivesindirectarguments/indexstart.md): The first index to draw.
- [instanceCount](mtldrawindexedprimitivesindirectarguments/instancecount.md): The number of instances to draw.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Render compute commands

- [MTLIndirectRenderCommand](mtlindirectrendercommand.md): A render command in an indirect command buffer.
- [MTLDrawPatchIndirectArguments](mtldrawpatchindirectarguments.md): The data layout required for drawing patches via indirect buffer calls.
- [MTLDrawPrimitivesIndirectArguments](mtldrawprimitivesindirectarguments.md): The data layout required for drawing primitives via indirect buffer calls.

# MTLDrawIndexedPrimitivesIndirectArguments (Objective-C)

**Framework:** Metal  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The data layout required for drawing indexed primitives via indirect buffer calls.

## Declaration

```objectivec
typedef struct { ... } MTLDrawIndexedPrimitivesIndirectArguments;
```

## Mentioned In

- [Specifying drawing and dispatch arguments indirectly](specifying-drawing-and-dispatch-arguments-indirectly.md)

<a id="overview"></a>

## Overview

See also the [drawIndexedPrimitives:indexType:indexBuffer:indexBufferOffset:indirectBuffer:indirectBufferOffset:](mtlrendercommandencoder/drawindexedprimitives%28type_indextype_indexbuffer_indexbufferoffset_indirectbuffer_indirectbufferoffset_%29.md) method.

## Topics

### Instance Properties

- [baseInstance](mtldrawindexedprimitivesindirectarguments/baseinstance.md): The first instance to draw.
- [baseVertex](mtldrawindexedprimitivesindirectarguments/basevertex.md): The first vertex to draw.
- [indexCount](mtldrawindexedprimitivesindirectarguments/indexcount.md): For each instance, the number of indices to read from the index buffer.
- [indexStart](mtldrawindexedprimitivesindirectarguments/indexstart.md): The first index to draw.
- [instanceCount](mtldrawindexedprimitivesindirectarguments/instancecount.md): The number of instances to draw.

## See Also

### Render compute commands

- [MTLIndirectRenderCommand](mtlindirectrendercommand.md): A render command in an indirect command buffer.
- [MTLDrawPatchIndirectArguments](mtldrawpatchindirectarguments.md): The data layout required for drawing patches via indirect buffer calls.
- [MTLDrawPrimitivesIndirectArguments](mtldrawprimitivesindirectarguments.md): The data layout required for drawing primitives via indirect buffer calls.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldrawprimitivesindirectarguments](https://developer.apple.com/documentation/metal/mtldrawprimitivesindirectarguments)

# MTLDrawPrimitivesIndirectArguments (Swift)

**Framework:** Metal  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The data layout required for drawing primitives via indirect buffer calls.

## Declaration

```swift
struct MTLDrawPrimitivesIndirectArguments
```

## Mentioned In

- [Specifying drawing and dispatch arguments indirectly](specifying-drawing-and-dispatch-arguments-indirectly.md)

<a id="overview"></a>

## Overview

See also the [drawPrimitives(type:indirectBuffer:indirectBufferOffset:)](mtlrendercommandencoder/drawprimitives%28type_indirectbuffer_indirectbufferoffset_%29.md) method.

## Topics

### Initializers

- [init()](mtldrawprimitivesindirectarguments/init%28%29.md): Returns a new data layout for drawing primitives via indirect buffer calls.
- [init(vertexCount:instanceCount:vertexStart:baseInstance:)](mtldrawprimitivesindirectarguments/init%28vertexcount_instancecount_vertexstart_baseinstance_%29.md): Returns a new data layout for drawing primitives via indirect buffer calls, with specified parameters.

### Instance Properties

- [baseInstance](mtldrawprimitivesindirectarguments/baseinstance.md): The first instance to draw.
- [instanceCount](mtldrawprimitivesindirectarguments/instancecount.md): The number of instances to draw.
- [vertexCount](mtldrawprimitivesindirectarguments/vertexcount.md): The number of vertices to draw.
- [vertexStart](mtldrawprimitivesindirectarguments/vertexstart.md): The first vertex to draw.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Render compute commands

- [MTLIndirectRenderCommand](mtlindirectrendercommand.md): A render command in an indirect command buffer.
- [MTLDrawPatchIndirectArguments](mtldrawpatchindirectarguments.md): The data layout required for drawing patches via indirect buffer calls.
- [MTLDrawIndexedPrimitivesIndirectArguments](mtldrawindexedprimitivesindirectarguments.md): The data layout required for drawing indexed primitives via indirect buffer calls.

# MTLDrawPrimitivesIndirectArguments (Objective-C)

**Framework:** Metal  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The data layout required for drawing primitives via indirect buffer calls.

## Declaration

```objectivec
typedef struct { ... } MTLDrawPrimitivesIndirectArguments;
```

## Mentioned In

- [Specifying drawing and dispatch arguments indirectly](specifying-drawing-and-dispatch-arguments-indirectly.md)

<a id="overview"></a>

## Overview

See also the [drawPrimitives:indirectBuffer:indirectBufferOffset:](mtlrendercommandencoder/drawprimitives%28type_indirectbuffer_indirectbufferoffset_%29.md) method.

## Topics

### Instance Properties

- [baseInstance](mtldrawprimitivesindirectarguments/baseinstance.md): The first instance to draw.
- [instanceCount](mtldrawprimitivesindirectarguments/instancecount.md): The number of instances to draw.
- [vertexCount](mtldrawprimitivesindirectarguments/vertexcount.md): The number of vertices to draw.
- [vertexStart](mtldrawprimitivesindirectarguments/vertexstart.md): The first vertex to draw.

## See Also

### Render compute commands

- [MTLIndirectRenderCommand](mtlindirectrendercommand.md): A render command in an indirect command buffer.
- [MTLDrawPatchIndirectArguments](mtldrawpatchindirectarguments.md): The data layout required for drawing patches via indirect buffer calls.
- [MTLDrawIndexedPrimitivesIndirectArguments](mtldrawindexedprimitivesindirectarguments.md): The data layout required for drawing indexed primitives via indirect buffer calls.

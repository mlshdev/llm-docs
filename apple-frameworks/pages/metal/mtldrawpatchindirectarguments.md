> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldrawpatchindirectarguments](https://developer.apple.com/documentation/metal/mtldrawpatchindirectarguments)

# MTLDrawPatchIndirectArguments (Swift)

**Framework:** Metal  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The data layout required for drawing patches via indirect buffer calls.

## Declaration

```swift
struct MTLDrawPatchIndirectArguments
```

## Mentioned In

- [Specifying drawing and dispatch arguments indirectly](specifying-drawing-and-dispatch-arguments-indirectly.md)

<a id="overview"></a>

## Overview

See also the following methods:

- [drawPatches(numberOfPatchControlPoints:patchIndexBuffer:patchIndexBufferOffset:indirectBuffer:indirectBufferOffset:)](mtlrendercommandencoder/drawpatches%28numberofpatchcontrolpoints_patchindexbuffer_patchindexbufferoffset_indirectbuffer_indirectbufferoffset_%29.md)
- [drawIndexedPatches(numberOfPatchControlPoints:patchIndexBuffer:patchIndexBufferOffset:controlPointIndexBuffer:controlPointIndexBufferOffset:indirectBuffer:indirectBufferOffset:)](mtlrendercommandencoder/drawindexedpatches%28numberofpatchcontrolpoints_patchindexbuffer_patchindexbufferoffset_controlpointindexbuffer_controlpointindexbufferoffset_indirectbuffer_indirectbufferoffset_%29.md)

## Topics

### Initializers

- [init()](mtldrawpatchindirectarguments/init%28%29.md): Returns a new data layout for drawing patches via indirect buffer calls.
- [init(patchCount:instanceCount:patchStart:baseInstance:)](mtldrawpatchindirectarguments/init%28patchcount_instancecount_patchstart_baseinstance_%29.md): Returns a new data layout for drawing patches via indirect buffer calls, with specified parameters.

### Instance Properties

- [baseInstance](mtldrawpatchindirectarguments/baseinstance.md): The first instance to draw.
- [instanceCount](mtldrawpatchindirectarguments/instancecount.md): The number of instances to draw.
- [patchCount](mtldrawpatchindirectarguments/patchcount.md): The number of patches in each instance.
- [patchStart](mtldrawpatchindirectarguments/patchstart.md): The patch start index.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Render compute commands

- [MTLIndirectRenderCommand](mtlindirectrendercommand.md): A render command in an indirect command buffer.
- [MTLDrawPrimitivesIndirectArguments](mtldrawprimitivesindirectarguments.md): The data layout required for drawing primitives via indirect buffer calls.
- [MTLDrawIndexedPrimitivesIndirectArguments](mtldrawindexedprimitivesindirectarguments.md): The data layout required for drawing indexed primitives via indirect buffer calls.

# MTLDrawPatchIndirectArguments (Objective-C)

**Framework:** Metal  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The data layout required for drawing patches via indirect buffer calls.

## Declaration

```objectivec
typedef struct { ... } MTLDrawPatchIndirectArguments;
```

## Mentioned In

- [Specifying drawing and dispatch arguments indirectly](specifying-drawing-and-dispatch-arguments-indirectly.md)

<a id="overview"></a>

## Overview

See also the following methods:

- [drawPatches:patchIndexBuffer:patchIndexBufferOffset:indirectBuffer:indirectBufferOffset:](mtlrendercommandencoder/drawpatches%28numberofpatchcontrolpoints_patchindexbuffer_patchindexbufferoffset_indirectbuffer_indirectbufferoffset_%29.md)
- [drawIndexedPatches:patchIndexBuffer:patchIndexBufferOffset:controlPointIndexBuffer:controlPointIndexBufferOffset:indirectBuffer:indirectBufferOffset:](mtlrendercommandencoder/drawindexedpatches%28numberofpatchcontrolpoints_patchindexbuffer_patchindexbufferoffset_controlpointindexbuffer_controlpointindexbufferoffset_indirectbuffer_indirectbufferoffset_%29.md)

## Topics

### Instance Properties

- [baseInstance](mtldrawpatchindirectarguments/baseinstance.md): The first instance to draw.
- [instanceCount](mtldrawpatchindirectarguments/instancecount.md): The number of instances to draw.
- [patchCount](mtldrawpatchindirectarguments/patchcount.md): The number of patches in each instance.
- [patchStart](mtldrawpatchindirectarguments/patchstart.md): The patch start index.

## See Also

### Render compute commands

- [MTLIndirectRenderCommand](mtlindirectrendercommand.md): A render command in an indirect command buffer.
- [MTLDrawPrimitivesIndirectArguments](mtldrawprimitivesindirectarguments.md): The data layout required for drawing primitives via indirect buffer calls.
- [MTLDrawIndexedPrimitivesIndirectArguments](mtldrawindexedprimitivesindirectarguments.md): The data layout required for drawing indexed primitives via indirect buffer calls.

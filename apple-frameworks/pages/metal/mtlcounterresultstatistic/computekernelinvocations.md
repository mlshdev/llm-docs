> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcounterresultstatistic/computekernelinvocations](https://developer.apple.com/documentation/metal/mtlcounterresultstatistic/computekernelinvocations)

# computeKernelInvocations (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

The number of times a pass calls any compute kernel.

## Declaration

```swift
var computeKernelInvocations: UInt64
```

## See Also

### Statistics values

- [tessellationInputPatches](tessellationinputpatches.md): The number of tessellation patches a render pass sends to the tessellation stage.
- [vertexInvocations](vertexinvocations.md): The number of times a render pass calls any vertex shader.
- [postTessellationVertexInvocations](posttessellationvertexinvocations.md): The number of vertices a render pass sends to a post-tessellation vertex shader.
- [clipperInvocations](clipperinvocations.md): The number of primitives a render pass sends to the clip stage.
- [clipperPrimitivesOut](clipperprimitivesout.md): The number of primitives the clip stage produces during a render pass.
- [fragmentInvocations](fragmentinvocations.md): The number of times a render pass calls fragment shaders.
- [fragmentsPassed](fragmentspassed.md): The number of fragments a render pass sends to the visibility and blend stages because they pass the scissor, depth, and stencil tests.

# computeKernelInvocations (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The number of times a pass calls any compute kernel.

## Declaration

```objectivec
uint64_t computeKernelInvocations;
```

## See Also

### Statistics values

- [tessellationInputPatches](tessellationinputpatches.md): The number of tessellation patches a render pass sends to the tessellation stage.
- [vertexInvocations](vertexinvocations.md): The number of times a render pass calls any vertex shader.
- [postTessellationVertexInvocations](posttessellationvertexinvocations.md): The number of vertices a render pass sends to a post-tessellation vertex shader.
- [clipperInvocations](clipperinvocations.md): The number of primitives a render pass sends to the clip stage.
- [clipperPrimitivesOut](clipperprimitivesout.md): The number of primitives the clip stage produces during a render pass.
- [fragmentInvocations](fragmentinvocations.md): The number of times a render pass calls fragment shaders.
- [fragmentsPassed](fragmentspassed.md): The number of fragments a render pass sends to the visibility and blend stages because they pass the scissor, depth, and stencil tests.

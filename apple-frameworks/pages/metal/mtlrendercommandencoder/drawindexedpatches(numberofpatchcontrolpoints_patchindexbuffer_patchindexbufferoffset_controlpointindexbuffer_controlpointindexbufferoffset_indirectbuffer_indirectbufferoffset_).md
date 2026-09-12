> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrendercommandencoder/drawindexedpatches(numberofpatchcontrolpoints:patchindexbuffer:patchindexbufferoffset:controlpointindexbuffer:controlpointindexbufferoffset:indirectbuffer:indirectbufferoffset:)](https://developer.apple.com/documentation/metal/mtlrendercommandencoder/drawindexedpatches(numberofpatchcontrolpoints:patchindexbuffer:patchindexbufferoffset:controlpointindexbuffer:controlpointindexbufferoffset:indirectbuffer:indirectbufferoffset:))

# drawIndexedPatches(numberOfPatchControlPoints:patchIndexBuffer:patchIndexBufferOffset:controlPointIndexBuffer:controlPointIndexBufferOffset:indirectBuffer:indirectBufferOffset:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 14.5+ · visionOS 1.0+

Encodes a draw command that renders multiple instances of tessellated patches with a control point index buffer and indirect arguments.

## Declaration

```swift
func drawIndexedPatches(numberOfPatchControlPoints: Int, patchIndexBuffer: (any MTLBuffer)?, patchIndexBufferOffset: Int, controlPointIndexBuffer: any MTLBuffer, controlPointIndexBufferOffset: Int, indirectBuffer: any MTLBuffer, indirectBufferOffset: Int)
```

## Parameters

- `numberOfPatchControlPoints`: The number of control points for each patch, which needs to be in the range `[0, 32]`.
- `patchIndexBuffer`: An [MTLBuffer](../mtlbuffer.md) instance that contains the indices to patches.
- `patchIndexBufferOffset`: An integer that represents the location, in bytes, from the start of `patchIndexBuffer` where the patch indices begin.
- `controlPointIndexBuffer`: An [MTLBuffer](../mtlbuffer.md) instance that contains the indices to control points.
- `controlPointIndexBufferOffset`: An integer that represents the location, in bytes, from the start of `controlPointIndexBuffer` where the control point indices begin.
- `indirectBuffer`: An [MTLBuffer](../mtlbuffer.md) instance with data that matches the layout of the [MTLDrawPatchIndirectArguments](../mtldrawpatchindirectarguments.md) structure.
- `indirectBufferOffset`: An integer that represents the location, in bytes, from the start of `indirectBuffer` where the indirect arguments structure begins.

  See the [Metal feature set tables (PDF)](https://developer.apple.com/metal/Metal-Feature-Set-Tables.pdf) to check for offset alignment requirements for buffers in `device` and `constant` address space.

<a id="discussion"></a>

## Discussion

Indirect drawing methods may help your app avoid expensive latency costs. This is because the command reads arguments from an [MTLBuffer](../mtlbuffer.md) instance instead of using the CPU to pass parameters to the command.

The method records the encoder’s current rendering state and resources the command needs as it runs. You can safely change the encoder’s render pipeline state to encode other commands after calling this method. Subsequent changes to the state don’t affect the commands already in the encoder’s [MTLCommandBuffer](../mtlcommandbuffer.md).

## See Also

### Drawing with indexed tessellation patches

- [drawIndexedPatches(numberOfPatchControlPoints:patchStart:patchCount:patchIndexBuffer:patchIndexBufferOffset:controlPointIndexBuffer:controlPointIndexBufferOffset:instanceCount:baseInstance:)](drawindexedpatches%28numberofpatchcontrolpoints_patchstart_patchcount_patchindexbuffer_patchindexbufferoffset_controlpointindexbuffer_controlpointindexbufferoffset_instancecount_base~12f3c1a5.md): Encodes a draw command that renders multiple instances of tessellated patches with a control point index buffer.

# drawIndexedPatches:patchIndexBuffer:patchIndexBufferOffset:controlPointIndexBuffer:controlPointIndexBufferOffset:indirectBuffer:indirectBufferOffset: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 14.5+ · visionOS 1.0+

Encodes a draw command that renders multiple instances of tessellated patches with a control point index buffer and indirect arguments.

## Declaration

```objectivec
- (void) drawIndexedPatches:(NSUInteger) numberOfPatchControlPoints patchIndexBuffer:(id<MTLBuffer>) patchIndexBuffer patchIndexBufferOffset:(NSUInteger) patchIndexBufferOffset controlPointIndexBuffer:(id<MTLBuffer>) controlPointIndexBuffer controlPointIndexBufferOffset:(NSUInteger) controlPointIndexBufferOffset indirectBuffer:(id<MTLBuffer>) indirectBuffer indirectBufferOffset:(NSUInteger) indirectBufferOffset;
```

## Parameters

- `numberOfPatchControlPoints`: The number of control points for each patch, which needs to be in the range `[0, 32]`.
- `patchIndexBuffer`: An [MTLBuffer](../mtlbuffer.md) instance that contains the indices to patches.
- `patchIndexBufferOffset`: An integer that represents the location, in bytes, from the start of `patchIndexBuffer` where the patch indices begin.
- `controlPointIndexBuffer`: An [MTLBuffer](../mtlbuffer.md) instance that contains the indices to control points.
- `controlPointIndexBufferOffset`: An integer that represents the location, in bytes, from the start of `controlPointIndexBuffer` where the control point indices begin.
- `indirectBuffer`: An [MTLBuffer](../mtlbuffer.md) instance with data that matches the layout of the [MTLDrawPatchIndirectArguments](../mtldrawpatchindirectarguments.md) structure.
- `indirectBufferOffset`: An integer that represents the location, in bytes, from the start of `indirectBuffer` where the indirect arguments structure begins.

  See the [Metal feature set tables (PDF)](https://developer.apple.com/metal/Metal-Feature-Set-Tables.pdf) to check for offset alignment requirements for buffers in `device` and `constant` address space.

<a id="discussion"></a>

## Discussion

Indirect drawing methods may help your app avoid expensive latency costs. This is because the command reads arguments from an [MTLBuffer](../mtlbuffer.md) instance instead of using the CPU to pass parameters to the command.

The method records the encoder’s current rendering state and resources the command needs as it runs. You can safely change the encoder’s render pipeline state to encode other commands after calling this method. Subsequent changes to the state don’t affect the commands already in the encoder’s [MTLCommandBuffer](../mtlcommandbuffer.md).

## See Also

### Drawing with indexed tessellation patches

- [drawIndexedPatches:patchStart:patchCount:patchIndexBuffer:patchIndexBufferOffset:controlPointIndexBuffer:controlPointIndexBufferOffset:instanceCount:baseInstance:](drawindexedpatches%28numberofpatchcontrolpoints_patchstart_patchcount_patchindexbuffer_patchindexbufferoffset_controlpointindexbuffer_controlpointindexbufferoffset_instancecount_base~12f3c1a5.md): Encodes a draw command that renders multiple instances of tessellated patches with a control point index buffer.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcomputecommandencoder/dispatchthreadgroups(indirectbuffer:indirectbufferoffset:threadsperthreadgroup:)](https://developer.apple.com/documentation/metal/mtlcomputecommandencoder/dispatchthreadgroups(indirectbuffer:indirectbufferoffset:threadsperthreadgroup:))

# dispatchThreadgroups(indirectBuffer:indirectBufferOffset:threadsPerThreadgroup:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Encodes a dispatch call for a compute pass, using an indirect buffer that defines the size of a grid that aligns to threadgroup boundaries.

## Declaration

```swift
func dispatchThreadgroups(indirectBuffer: any MTLBuffer, indirectBufferOffset: Int, threadsPerThreadgroup: MTLSize)
```

## Parameters

- `indirectBuffer`: An [MTLBuffer](../mtlbuffer.md) instance providing compute parameters. Lay out the data in this buffer as described in the [MTLDispatchThreadgroupsIndirectArguments](../mtldispatchthreadgroupsindirectarguments.md) structure.
- `indirectBufferOffset`: Where the data begins, in bytes, from the start of the buffer. This value needs to be a multiple of `4`.
- `threadsPerThreadgroup`: The number of threads in one threadgroup, in each dimension.

<a id="discussion"></a>

## Discussion

The GPU fetches parameters from the indirect buffer just before the thread grid starts. This process lets the compute function run based on GPU feedback, without latency from data transfer between the CPU and the GPU.

## See Also

### Dispatching from indirect command buffers

- [executeCommandsInBuffer(\_:range:)](executecommandsinbuffer%28__range_%29.md): Encodes an instruction to run commands from an indirect buffer.
- [executeCommandsInBuffer(\_:indirectBuffer:offset:)](executecommandsinbuffer%28__indirectbuffer_offset_%29.md): Encodes an instruction to run commands from an indirect buffer, using another buffer to provide the command range.
- [executeCommands(in:indirectBuffer:indirectBufferOffset:)](executecommands%28in_indirectbuffer_indirectbufferoffset_%29.md): Deprecated. Encodes an instruction to run commands from an indirect buffer, using another buffer to provide the command range.
- [executeCommands(in:with:)](executecommands%28in_with_%29.md): Deprecated. Encodes an instruction to run commands from an indirect buffer.

# dispatchThreadgroupsWithIndirectBuffer:indirectBufferOffset:threadsPerThreadgroup: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Encodes a dispatch call for a compute pass, using an indirect buffer that defines the size of a grid that aligns to threadgroup boundaries.

## Declaration

```objectivec
- (void) dispatchThreadgroupsWithIndirectBuffer:(id<MTLBuffer>) indirectBuffer indirectBufferOffset:(NSUInteger) indirectBufferOffset threadsPerThreadgroup:(MTLSize) threadsPerThreadgroup;
```

## Parameters

- `indirectBuffer`: An [MTLBuffer](../mtlbuffer.md) instance providing compute parameters. Lay out the data in this buffer as described in the [MTLDispatchThreadgroupsIndirectArguments](../mtldispatchthreadgroupsindirectarguments.md) structure.
- `indirectBufferOffset`: Where the data begins, in bytes, from the start of the buffer. This value needs to be a multiple of `4`.
- `threadsPerThreadgroup`: The number of threads in one threadgroup, in each dimension.

<a id="discussion"></a>

## Discussion

The GPU fetches parameters from the indirect buffer just before the thread grid starts. This process lets the compute function run based on GPU feedback, without latency from data transfer between the CPU and the GPU.

## See Also

### Dispatching from indirect command buffers

- [executeCommandsInBuffer:indirectBuffer:indirectBufferOffset:](executecommandsinbuffer_indirectbuffer_indirectbufferoffset_.md): Encodes an instruction to run commands from an indirect buffer, using another buffer to provide the command range.
- [executeCommandsInBuffer:withRange:](executecommandsinbuffer_withrange_.md): Encodes an instruction to run commands from an indirect buffer.

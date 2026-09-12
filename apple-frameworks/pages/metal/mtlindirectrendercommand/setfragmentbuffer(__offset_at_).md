> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlindirectrendercommand/setfragmentbuffer(_:offset:at:)](https://developer.apple.com/documentation/metal/mtlindirectrendercommand/setfragmentbuffer(_:offset:at:))

# setFragmentBuffer(\_:offset:at:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

Sets a fragment buffer argument for the command.

## Declaration

```swift
func setFragmentBuffer(_ buffer: any MTLBuffer, offset: Int, at index: Int)
```

## Parameters

- `buffer`: The buffer to set in the buffer argument table.
- `offset`: The location, in bytes relative to start of `buffer`, of the first byte of data for the fragment shader.
- `index`: An index in the buffer argument table. The maximum index is determined when you created the indirect command buffer.

<a id="discussion"></a>

## Discussion

You don’t need to call this method if you create an indirect command buffer with its [inheritBuffers](../mtlindirectcommandbufferdescriptor/inheritbuffers.md) equal to [true](https://developer.apple.com/documentation/swift/true). The command gets the arguments from the parent encoder when it runs.

If you need to pass other kinds of parameters to your shader, such as textures and samplers, create an argument buffer and pass it to the shader using this method.

## See Also

### Setting command arguments

- [setRenderPipelineState(\_:)](setrenderpipelinestate%28__%29.md): Sets the render pipeline state for the command.
- [setVertexBuffer(\_:offset:at:)](setvertexbuffer%28__offset_at_%29.md): Sets a vertex buffer argument for the command.

# setFragmentBuffer:offset:atIndex: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

Sets a fragment buffer argument for the command.

## Declaration

```objectivec
- (void) setFragmentBuffer:(id<MTLBuffer>) buffer offset:(NSUInteger) offset atIndex:(NSUInteger) index;
```

## Parameters

- `buffer`: The buffer to set in the buffer argument table.
- `offset`: The location, in bytes relative to start of `buffer`, of the first byte of data for the fragment shader.
- `index`: An index in the buffer argument table. The maximum index is determined when you created the indirect command buffer.

<a id="discussion"></a>

## Discussion

You don’t need to call this method if you create an indirect command buffer with its [inheritBuffers](../mtlindirectcommandbufferdescriptor/inheritbuffers.md) equal to [true](https://developer.apple.com/documentation/swift/true). The command gets the arguments from the parent encoder when it runs.

If you need to pass other kinds of parameters to your shader, such as textures and samplers, create an argument buffer and pass it to the shader using this method.

## See Also

### Setting command arguments

- [setRenderPipelineState:](setrenderpipelinestate%28__%29.md): Sets the render pipeline state for the command.
- [setVertexBuffer:offset:atIndex:](setvertexbuffer%28__offset_at_%29.md): Sets a vertex buffer argument for the command.

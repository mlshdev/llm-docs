> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlindirectrendercommand/setrenderpipelinestate(_:)](https://developer.apple.com/documentation/metal/mtlindirectrendercommand/setrenderpipelinestate(_:))

# setRenderPipelineState(\_:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 13.0+ · visionOS 1.0+

Sets the render pipeline state for the command.

## Declaration

```swift
func setRenderPipelineState(_ pipelineState: any MTLRenderPipelineState)
```

## Parameters

- `pipelineState`: The rendering pipeline state object to use.

<a id="discussion"></a>

## Discussion

You don’t need to call this method if you create an indirect command buffer with its [inheritPipelineState](../mtlindirectcommandbufferdescriptor/inheritpipelinestate.md) property equal to [true](https://developer.apple.com/documentation/swift/true). The command gets the pipeline state from the parent encoder when it runs.

If you created the indirect command buffer with [inheritPipelineState](../mtlindirectcommandbufferdescriptor/inheritpipelinestate.md) set to [false](https://developer.apple.com/documentation/swift/false), you need to set the pipeline state prior to encoding the drawing command.

## See Also

### Setting command arguments

- [setVertexBuffer(\_:offset:at:)](setvertexbuffer%28__offset_at_%29.md): Sets a vertex buffer argument for the command.
- [setFragmentBuffer(\_:offset:at:)](setfragmentbuffer%28__offset_at_%29.md): Sets a fragment buffer argument for the command.

# setRenderPipelineState: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 13.0+ · visionOS 1.0+

Sets the render pipeline state for the command.

## Declaration

```objectivec
- (void) setRenderPipelineState:(id<MTLRenderPipelineState>) pipelineState;
```

## Parameters

- `pipelineState`: The rendering pipeline state object to use.

<a id="discussion"></a>

## Discussion

You don’t need to call this method if you create an indirect command buffer with its [inheritPipelineState](../mtlindirectcommandbufferdescriptor/inheritpipelinestate.md) property equal to [true](https://developer.apple.com/documentation/swift/true). The command gets the pipeline state from the parent encoder when it runs.

If you created the indirect command buffer with [inheritPipelineState](../mtlindirectcommandbufferdescriptor/inheritpipelinestate.md) set to [false](https://developer.apple.com/documentation/swift/false), you need to set the pipeline state prior to encoding the drawing command.

## See Also

### Setting command arguments

- [setVertexBuffer:offset:atIndex:](setvertexbuffer%28__offset_at_%29.md): Sets a vertex buffer argument for the command.
- [setFragmentBuffer:offset:atIndex:](setfragmentbuffer%28__offset_at_%29.md): Sets a fragment buffer argument for the command.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4archive/newcomputepipelinestatewithdescriptor:dynamiclinkingdescriptor:error:](https://developer.apple.com/documentation/metal/mtl4archive/newcomputepipelinestatewithdescriptor:dynamiclinkingdescriptor:error:)

# newComputePipelineStateWithDescriptor:dynamicLinkingDescriptor:error:

**Interface language:** Objective-C

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Creates a compute pipeline state from the archive with a compute descriptor and a dynamic linking descriptor.

## Declaration

```objectivec
- (id<MTLComputePipelineState>) newComputePipelineStateWithDescriptor:(MTL4ComputePipelineDescriptor *) descriptor dynamicLinkingDescriptor:(MTL4PipelineStageDynamicLinkingDescriptor *) dynamicLinkingDescriptor error:(NSError **) error;
```

## Parameters

- `descriptor`: A compute pipeline descriptor.
- `dynamicLinkingDescriptor`: A descriptor that provides additional properties to link other functions with the pipeline.
- `error`: On return, if the method fails, a pointer to an error information instance; otherwise `nil`.

<a id="return-value"></a>

## Return Value

A compute pipeline state if the method succeeds, otherwise `nil`.

## See Also

### Creating compute pipeline states

- [newComputePipelineStateWithDescriptor:error:](newcomputepipelinestatewithdescriptor_error_.md): Creates a compute pipeline state from the archive with a descriptor.

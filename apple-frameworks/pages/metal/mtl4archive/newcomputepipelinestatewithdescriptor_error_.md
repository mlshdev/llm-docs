> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4archive/newcomputepipelinestatewithdescriptor:error:](https://developer.apple.com/documentation/metal/mtl4archive/newcomputepipelinestatewithdescriptor:error:)

# newComputePipelineStateWithDescriptor:error:

**Interface language:** Objective-C

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Creates a compute pipeline state from the archive with a descriptor.

## Declaration

```objectivec
- (id<MTLComputePipelineState>) newComputePipelineStateWithDescriptor:(MTL4ComputePipelineDescriptor *) descriptor error:(NSError **) error;
```

## Parameters

- `descriptor`: A compute pipeline descriptor.
- `error`: On return, if the method fails, a pointer to an error information instance; otherwise `nil`.

<a id="return-value"></a>

## Return Value

A compute pipeline state if the method succeeds, otherwise `nil`.

## See Also

### Creating compute pipeline states

- [newComputePipelineStateWithDescriptor:dynamicLinkingDescriptor:error:](newcomputepipelinestatewithdescriptor_dynamiclinkingdescriptor_error_.md): Creates a compute pipeline state from the archive with a compute descriptor and a dynamic linking descriptor.

> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metal/mtl4archive/makecomputepipelinestate(descriptor:dynamiclinkingdescriptor:)

# makeComputePipelineState(descriptor:dynamicLinkingDescriptor:)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Creates a compute pipeline state from the archive with a compute descriptor and a dynamic linking descriptor.

## Declaration

```swift
func makeComputePipelineState(descriptor: MTL4ComputePipelineDescriptor, dynamicLinkingDescriptor: MTL4PipelineStageDynamicLinkingDescriptor? = nil) throws -> any MTLComputePipelineState
```

## Parameters

- `descriptor`: A compute pipeline descriptor.
- `dynamicLinkingDescriptor`: A descriptor that provides additional properties to link other functions with the pipeline.

<a id="return-value"></a>

## Return Value

A compute pipeline state object upon success, otherwise this function throws.

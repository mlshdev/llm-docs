> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4compiler/makecomputepipelinestate(descriptor:dynamiclinkingdescriptor:compilertaskoptions:)-19x](https://developer.apple.com/documentation/metal/mtl4compiler/makecomputepipelinestate(descriptor:dynamiclinkingdescriptor:compilertaskoptions:)-19x)

# makeComputePipelineState(descriptor:dynamicLinkingDescriptor:compilerTaskOptions:)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Creates a new compute pipeline state asynchronously.

## Declaration

```swift
func makeComputePipelineState(descriptor: MTL4ComputePipelineDescriptor, dynamicLinkingDescriptor: MTL4PipelineStageDynamicLinkingDescriptor? = nil, compilerTaskOptions: MTL4CompilerTaskOptions? = nil) async throws -> any MTLComputePipelineState
```

## Parameters

- `descriptor`: A compute pipeline state descriptor, describing the compute pipeline to create.
- `dynamicLinkingDescriptor`: An optional parameter that provides additional configuration for linking the pipeline state object.
- `compilerTaskOptions`: A description of the compilation process itself, providing parameters that influence execution of the compilation process.

<a id="return-value"></a>

## Return Value

A compute pipeline state upon success, otherwise this method throws.

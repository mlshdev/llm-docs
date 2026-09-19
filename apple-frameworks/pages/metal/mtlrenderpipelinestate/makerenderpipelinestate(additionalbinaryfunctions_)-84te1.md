> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metal/mtlrenderpipelinestate/makerenderpipelinestate(additionalbinaryfunctions:)-84te1

# makeRenderPipelineState(additionalBinaryFunctions:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

Creates a new pipeline state that’s a copy of the current pipeline state with additional shaders.

## Declaration

```swift
func makeRenderPipelineState(additionalBinaryFunctions: MTLRenderPipelineFunctionsDescriptor) throws -> any MTLRenderPipelineState
```

## Parameters

- `additionalBinaryFunctions`: An [MTLRenderPipelineFunctionsDescriptor](../mtlrenderpipelinefunctionsdescriptor.md) instance, which contains [MTLFunction](../mtlfunction.md) arrays for vertex, fragment, and tile shaders.

# newRenderPipelineStateWithAdditionalBinaryFunctions:error: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

Creates a new pipeline state that’s a copy of the current pipeline state with additional shaders.

## Declaration

```objectivec
- (id<MTLRenderPipelineState>) newRenderPipelineStateWithAdditionalBinaryFunctions:(MTLRenderPipelineFunctionsDescriptor *) additionalBinaryFunctions error:(NSError **) error;
```

## Parameters

- `additionalBinaryFunctions`: An [MTLRenderPipelineFunctionsDescriptor](../mtlrenderpipelinefunctionsdescriptor.md) instance, which contains [MTLFunction](../mtlfunction.md) arrays for vertex, fragment, and tile shaders.
- `error`: On return, if an error occurs, a pointer to an error information instance; otherwise `nil`.

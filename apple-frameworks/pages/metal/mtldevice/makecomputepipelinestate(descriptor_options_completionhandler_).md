> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevice/makecomputepipelinestate(descriptor:options:completionhandler:)](https://developer.apple.com/documentation/metal/mtldevice/makecomputepipelinestate(descriptor:options:completionhandler:))

# makeComputePipelineState(descriptor:options:completionHandler:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Asynchronously creates a compute pipeline state and reflection information.

## Declaration

```swift
func makeComputePipelineState(descriptor: MTLComputePipelineDescriptor, options: MTLPipelineOption, completionHandler: @escaping @Sendable ((any MTLComputePipelineState)?, MTLComputePipelineReflection?, (any Error)?) -> Void)
```

```swift
func makeComputePipelineState(descriptor: MTLComputePipelineDescriptor, options: MTLPipelineOption) async throws -> (any MTLComputePipelineState, MTLComputePipelineReflection?)
```

## Parameters

- `descriptor`: An [MTLComputePipelineDescriptor](../mtlcomputepipelinedescriptor.md) instance.
- `options`: An [MTLPipelineOption](../mtlpipelineoption.md) instance that represents the reflection information you want the method to generate.
- `completionHandler`: A Swift closure or an Objective-C block the method calls when it finishes creating the compute pipeline state.

<a id="discussion"></a>

## Discussion

Use the compute pipeline state to configure a compute pass by calling the [setComputePipelineState(\_:)](../mtlcomputecommandencoder/setcomputepipelinestate%28__%29.md) method of an [MTLComputeCommandEncoder](../mtlcomputecommandencoder.md) instance.

## Default Implementations

### MTLDevice Implementations

- [makeComputePipelineState(descriptor:options:)](makecomputepipelinestate%28descriptor_options_%29.md)

## See Also

### Creating compute pipeline states

- [makeComputePipelineState(descriptor:options:reflection:)](makecomputepipelinestate%28descriptor_options_reflection_%29.md): Synchronously creates a compute pipeline state and reflection information.
- [makeComputePipelineState(function:)](makecomputepipelinestate%28function_%29.md): Synchronously creates a compute pipeline state with a function instance.
- [makeComputePipelineState(function:completionHandler:)](makecomputepipelinestate%28function_completionhandler_%29.md): Asynchronously creates a compute pipeline state with a function instance.
- [makeComputePipelineState(function:options:reflection:)](makecomputepipelinestate%28function_options_reflection_%29.md): Synchronously creates a compute pipeline state and reflection with a function instance.
- [makeComputePipelineState(function:options:completionHandler:)](makecomputepipelinestate%28function_options_completionhandler_%29.md): Asynchronously creates a compute pipeline state and reflection with a function instance.

# newComputePipelineStateWithDescriptor:options:completionHandler: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Asynchronously creates a compute pipeline state and reflection information.

## Declaration

```objectivec
- (void) newComputePipelineStateWithDescriptor:(MTLComputePipelineDescriptor *) descriptor options:(MTLPipelineOption) options completionHandler:(MTLNewComputePipelineStateWithReflectionCompletionHandler) completionHandler;
```

## Parameters

- `descriptor`: An [MTLComputePipelineDescriptor](../mtlcomputepipelinedescriptor.md) instance.
- `options`: An [MTLPipelineOption](../mtlpipelineoption.md) instance that represents the reflection information you want the method to generate.
- `completionHandler`: A Swift closure or an Objective-C block the method calls when it finishes creating the compute pipeline state.

<a id="discussion"></a>

## Discussion

Use the compute pipeline state to configure a compute pass by calling the [setComputePipelineState:](../mtlcomputecommandencoder/setcomputepipelinestate%28__%29.md) method of an [MTLComputeCommandEncoder](../mtlcomputecommandencoder.md) instance.

## Default Implementations

### MTLDevice Implementations

- [makeComputePipelineState(descriptor:options:)](makecomputepipelinestate%28descriptor_options_%29.md)

## See Also

### Creating compute pipeline states

- [newComputePipelineStateWithDescriptor:options:reflection:error:](makecomputepipelinestate%28descriptor_options_reflection_%29.md): Synchronously creates a compute pipeline state and reflection information.
- [newComputePipelineStateWithFunction:error:](makecomputepipelinestate%28function_%29.md): Synchronously creates a compute pipeline state with a function instance.
- [newComputePipelineStateWithFunction:completionHandler:](makecomputepipelinestate%28function_completionhandler_%29.md): Asynchronously creates a compute pipeline state with a function instance.
- [newComputePipelineStateWithFunction:options:reflection:error:](makecomputepipelinestate%28function_options_reflection_%29.md): Synchronously creates a compute pipeline state and reflection with a function instance.
- [newComputePipelineStateWithFunction:options:completionHandler:](makecomputepipelinestate%28function_options_completionhandler_%29.md): Asynchronously creates a compute pipeline state and reflection with a function instance.

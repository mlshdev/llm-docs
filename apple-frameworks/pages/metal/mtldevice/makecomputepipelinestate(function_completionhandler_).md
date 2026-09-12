> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevice/makecomputepipelinestate(function:completionhandler:)](https://developer.apple.com/documentation/metal/mtldevice/makecomputepipelinestate(function:completionhandler:))

# makeComputePipelineState(function:completionHandler:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Asynchronously creates a compute pipeline state with a function instance.

## Declaration

```swift
func makeComputePipelineState(function computeFunction: any MTLFunction, completionHandler: @escaping @Sendable ((any MTLComputePipelineState)?, (any Error)?) -> Void)
```

```swift
func makeComputePipelineState(function computeFunction: any MTLFunction) async throws -> any MTLComputePipelineState
```

## Parameters

- `computeFunction`: An [MTLFunction](../mtlfunction.md) instance.
- `completionHandler`: A Swift closure or an Objective-C block the method calls when it finishes creating the compute pipeline state.

<a id="discussion"></a>

## Discussion

Use the compute pipeline state to configure a compute pass by calling the [setComputePipelineState(\_:)](../mtlcomputecommandencoder/setcomputepipelinestate%28__%29.md) method of an [MTLComputeCommandEncoder](../mtlcomputecommandencoder.md) instance.

## See Also

### Creating compute pipeline states

- [makeComputePipelineState(descriptor:options:reflection:)](makecomputepipelinestate%28descriptor_options_reflection_%29.md): Synchronously creates a compute pipeline state and reflection information.
- [makeComputePipelineState(descriptor:options:completionHandler:)](makecomputepipelinestate%28descriptor_options_completionhandler_%29.md): Asynchronously creates a compute pipeline state and reflection information.
- [makeComputePipelineState(function:)](makecomputepipelinestate%28function_%29.md): Synchronously creates a compute pipeline state with a function instance.
- [makeComputePipelineState(function:options:reflection:)](makecomputepipelinestate%28function_options_reflection_%29.md): Synchronously creates a compute pipeline state and reflection with a function instance.
- [makeComputePipelineState(function:options:completionHandler:)](makecomputepipelinestate%28function_options_completionhandler_%29.md): Asynchronously creates a compute pipeline state and reflection with a function instance.

# newComputePipelineStateWithFunction:completionHandler: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Asynchronously creates a compute pipeline state with a function instance.

## Declaration

```objectivec
- (void) newComputePipelineStateWithFunction:(id<MTLFunction>) computeFunction completionHandler:(MTLNewComputePipelineStateCompletionHandler) completionHandler;
```

## Parameters

- `computeFunction`: An [MTLFunction](../mtlfunction.md) instance.
- `completionHandler`: A Swift closure or an Objective-C block the method calls when it finishes creating the compute pipeline state.

<a id="discussion"></a>

## Discussion

Use the compute pipeline state to configure a compute pass by calling the [setComputePipelineState:](../mtlcomputecommandencoder/setcomputepipelinestate%28__%29.md) method of an [MTLComputeCommandEncoder](../mtlcomputecommandencoder.md) instance.

## See Also

### Creating compute pipeline states

- [newComputePipelineStateWithDescriptor:options:reflection:error:](makecomputepipelinestate%28descriptor_options_reflection_%29.md): Synchronously creates a compute pipeline state and reflection information.
- [newComputePipelineStateWithDescriptor:options:completionHandler:](makecomputepipelinestate%28descriptor_options_completionhandler_%29.md): Asynchronously creates a compute pipeline state and reflection information.
- [newComputePipelineStateWithFunction:error:](makecomputepipelinestate%28function_%29.md): Synchronously creates a compute pipeline state with a function instance.
- [newComputePipelineStateWithFunction:options:reflection:error:](makecomputepipelinestate%28function_options_reflection_%29.md): Synchronously creates a compute pipeline state and reflection with a function instance.
- [newComputePipelineStateWithFunction:options:completionHandler:](makecomputepipelinestate%28function_options_completionhandler_%29.md): Asynchronously creates a compute pipeline state and reflection with a function instance.

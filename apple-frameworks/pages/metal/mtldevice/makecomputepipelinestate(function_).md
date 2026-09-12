> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevice/makecomputepipelinestate(function:)](https://developer.apple.com/documentation/metal/mtldevice/makecomputepipelinestate(function:))

# makeComputePipelineState(function:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Synchronously creates a compute pipeline state with a function instance.

## Declaration

```swift
func makeComputePipelineState(function computeFunction: any MTLFunction) throws -> any MTLComputePipelineState
```

## Parameters

- `computeFunction`: An [MTLFunction](../mtlfunction.md) instance.

<a id="discussion"></a>

## Discussion

Use the compute pipeline state to configure a compute pass by calling the [setComputePipelineState(\_:)](../mtlcomputecommandencoder/setcomputepipelinestate%28__%29.md) method of an [MTLComputeCommandEncoder](../mtlcomputecommandencoder.md) instance.

## See Also

### Creating compute pipeline states

- [makeComputePipelineState(descriptor:options:reflection:)](makecomputepipelinestate%28descriptor_options_reflection_%29.md): Synchronously creates a compute pipeline state and reflection information.
- [makeComputePipelineState(descriptor:options:completionHandler:)](makecomputepipelinestate%28descriptor_options_completionhandler_%29.md): Asynchronously creates a compute pipeline state and reflection information.
- [makeComputePipelineState(function:completionHandler:)](makecomputepipelinestate%28function_completionhandler_%29.md): Asynchronously creates a compute pipeline state with a function instance.
- [makeComputePipelineState(function:options:reflection:)](makecomputepipelinestate%28function_options_reflection_%29.md): Synchronously creates a compute pipeline state and reflection with a function instance.
- [makeComputePipelineState(function:options:completionHandler:)](makecomputepipelinestate%28function_options_completionhandler_%29.md): Asynchronously creates a compute pipeline state and reflection with a function instance.

# newComputePipelineStateWithFunction:error: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Synchronously creates a compute pipeline state with a function instance.

## Declaration

```objectivec
- (id<MTLComputePipelineState>) newComputePipelineStateWithFunction:(id<MTLFunction>) computeFunction error:(NSError **) error;
```

## Parameters

- `computeFunction`: An [MTLFunction](../mtlfunction.md) instance.
- `error`: On return, if an error occurs, a pointer to an error information instance; otherwise `nil`.

<a id="discussion"></a>

## Discussion

Use the compute pipeline state to configure a compute pass by calling the [setComputePipelineState:](../mtlcomputecommandencoder/setcomputepipelinestate%28__%29.md) method of an [MTLComputeCommandEncoder](../mtlcomputecommandencoder.md) instance.

## See Also

### Creating compute pipeline states

- [newComputePipelineStateWithDescriptor:options:reflection:error:](makecomputepipelinestate%28descriptor_options_reflection_%29.md): Synchronously creates a compute pipeline state and reflection information.
- [newComputePipelineStateWithDescriptor:options:completionHandler:](makecomputepipelinestate%28descriptor_options_completionhandler_%29.md): Asynchronously creates a compute pipeline state and reflection information.
- [newComputePipelineStateWithFunction:completionHandler:](makecomputepipelinestate%28function_completionhandler_%29.md): Asynchronously creates a compute pipeline state with a function instance.
- [newComputePipelineStateWithFunction:options:reflection:error:](makecomputepipelinestate%28function_options_reflection_%29.md): Synchronously creates a compute pipeline state and reflection with a function instance.
- [newComputePipelineStateWithFunction:options:completionHandler:](makecomputepipelinestate%28function_options_completionhandler_%29.md): Asynchronously creates a compute pipeline state and reflection with a function instance.

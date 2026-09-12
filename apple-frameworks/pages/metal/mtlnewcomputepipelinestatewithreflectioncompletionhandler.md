> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlnewcomputepipelinestatewithreflectioncompletionhandler](https://developer.apple.com/documentation/metal/mtlnewcomputepipelinestatewithreflectioncompletionhandler)

# MTLNewComputePipelineStateWithReflectionCompletionHandler (Swift)

**Framework:** Metal  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A completion handler signature a method calls when it finishes creating a compute pipeline and reflection information.

## Declaration

```swift
typealias MTLNewComputePipelineStateWithReflectionCompletionHandler = ((any MTLComputePipelineState)?, MTLComputePipelineReflection?, (any Error)?) -> Void
```

## Parameters

- `computePipelineState`: An [MTLComputePipelineState](mtlcomputepipelinestate.md) instance if the method completes successfully; otherwise `nil`.
- `reflection`: An [MTLComputePipelineReflection](mtlcomputepipelinereflection.md) instance if the method completes successfully; otherwise `nil`.
- `error`: On return, if an error occurs, a pointer to an error information instance; otherwise `nil`.

## See Also

### Supporting types

- [MTLNewRenderPipelineStateCompletionHandler](mtlnewrenderpipelinestatecompletionhandler.md): A completion handler signature a method calls when it finishes creating a render pipeline.
- [MTLNewRenderPipelineStateWithReflectionCompletionHandler](mtlnewrenderpipelinestatewithreflectioncompletionhandler.md): A completion handler signature a method calls when it finishes creating a render pipeline and reflection information.
- [MTLNewComputePipelineStateCompletionHandler](mtlnewcomputepipelinestatecompletionhandler.md): A completion handler signature a method calls when it finishes creating a compute pipeline.

# MTLNewComputePipelineStateWithReflectionCompletionHandler (Objective-C)

**Framework:** Metal  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A completion handler signature a method calls when it finishes creating a compute pipeline and reflection information.

## Declaration

```objectivec
typedef void (^)(id<MTLComputePipelineState>, MTLComputePipelineReflection *, NSError *) MTLNewComputePipelineStateWithReflectionCompletionHandler;
```

## Parameters

- `computePipelineState`: An [MTLComputePipelineState](mtlcomputepipelinestate.md) instance if the method completes successfully; otherwise `nil`.
- `reflection`: An [MTLComputePipelineReflection](mtlcomputepipelinereflection.md) instance if the method completes successfully; otherwise `nil`.
- `error`: On return, if an error occurs, a pointer to an error information instance; otherwise `nil`.

## See Also

### Supporting types

- [MTLNewRenderPipelineStateCompletionHandler](mtlnewrenderpipelinestatecompletionhandler.md): A completion handler signature a method calls when it finishes creating a render pipeline.
- [MTLNewRenderPipelineStateWithReflectionCompletionHandler](mtlnewrenderpipelinestatewithreflectioncompletionhandler.md): A completion handler signature a method calls when it finishes creating a render pipeline and reflection information.
- [MTLNewComputePipelineStateCompletionHandler](mtlnewcomputepipelinestatecompletionhandler.md): A completion handler signature a method calls when it finishes creating a compute pipeline.

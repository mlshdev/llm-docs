> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlnewcomputepipelinestatecompletionhandler](https://developer.apple.com/documentation/metal/mtlnewcomputepipelinestatecompletionhandler)

# MTLNewComputePipelineStateCompletionHandler (Swift)

**Framework:** Metal  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A completion handler signature a method calls when it finishes creating a compute pipeline.

## Declaration

```swift
typealias MTLNewComputePipelineStateCompletionHandler = ((any MTLComputePipelineState)?, (any Error)?) -> Void
```

## Parameters

- `computePipelineState`: An [MTLComputePipelineState](mtlcomputepipelinestate.md) instance if the method completes successfully; otherwise `nil`.
- `error`: On return, if an error occurs, a pointer to an error information instance; otherwise `nil`.

## See Also

### Supporting types

- [MTLNewRenderPipelineStateCompletionHandler](mtlnewrenderpipelinestatecompletionhandler.md): A completion handler signature a method calls when it finishes creating a render pipeline.
- [MTLNewRenderPipelineStateWithReflectionCompletionHandler](mtlnewrenderpipelinestatewithreflectioncompletionhandler.md): A completion handler signature a method calls when it finishes creating a render pipeline and reflection information.
- [MTLNewComputePipelineStateWithReflectionCompletionHandler](mtlnewcomputepipelinestatewithreflectioncompletionhandler.md): A completion handler signature a method calls when it finishes creating a compute pipeline and reflection information.

# MTLNewComputePipelineStateCompletionHandler (Objective-C)

**Framework:** Metal  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A completion handler signature a method calls when it finishes creating a compute pipeline.

## Declaration

```objectivec
typedef void (^)(id<MTLComputePipelineState>, NSError *) MTLNewComputePipelineStateCompletionHandler;
```

## Parameters

- `computePipelineState`: An [MTLComputePipelineState](mtlcomputepipelinestate.md) instance if the method completes successfully; otherwise `nil`.
- `error`: On return, if an error occurs, a pointer to an error information instance; otherwise `nil`.

## See Also

### Supporting types

- [MTLNewRenderPipelineStateCompletionHandler](mtlnewrenderpipelinestatecompletionhandler.md): A completion handler signature a method calls when it finishes creating a render pipeline.
- [MTLNewRenderPipelineStateWithReflectionCompletionHandler](mtlnewrenderpipelinestatewithreflectioncompletionhandler.md): A completion handler signature a method calls when it finishes creating a render pipeline and reflection information.
- [MTLNewComputePipelineStateWithReflectionCompletionHandler](mtlnewcomputepipelinestatewithreflectioncompletionhandler.md): A completion handler signature a method calls when it finishes creating a compute pipeline and reflection information.

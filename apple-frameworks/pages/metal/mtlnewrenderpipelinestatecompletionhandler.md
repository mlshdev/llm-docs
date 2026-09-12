> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlnewrenderpipelinestatecompletionhandler](https://developer.apple.com/documentation/metal/mtlnewrenderpipelinestatecompletionhandler)

# MTLNewRenderPipelineStateCompletionHandler (Swift)

**Framework:** Metal  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A completion handler signature a method calls when it finishes creating a render pipeline.

## Declaration

```swift
typealias MTLNewRenderPipelineStateCompletionHandler = ((any MTLRenderPipelineState)?, (any Error)?) -> Void
```

## Parameters

- `renderPipelineState`: An [MTLRenderPipelineState](mtlrenderpipelinestate.md) instance if the method completes successfully; otherwise `nil`.
- `error`: If an error occurs, an error information instance; otherwise `nil`.

## See Also

### Supporting types

- [MTLNewRenderPipelineStateWithReflectionCompletionHandler](mtlnewrenderpipelinestatewithreflectioncompletionhandler.md): A completion handler signature a method calls when it finishes creating a render pipeline and reflection information.
- [MTLNewComputePipelineStateCompletionHandler](mtlnewcomputepipelinestatecompletionhandler.md): A completion handler signature a method calls when it finishes creating a compute pipeline.
- [MTLNewComputePipelineStateWithReflectionCompletionHandler](mtlnewcomputepipelinestatewithreflectioncompletionhandler.md): A completion handler signature a method calls when it finishes creating a compute pipeline and reflection information.

# MTLNewRenderPipelineStateCompletionHandler (Objective-C)

**Framework:** Metal  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A completion handler signature a method calls when it finishes creating a render pipeline.

## Declaration

```objectivec
typedef void (^)(id<MTLRenderPipelineState>, NSError *) MTLNewRenderPipelineStateCompletionHandler;
```

## Parameters

- `renderPipelineState`: An [MTLRenderPipelineState](mtlrenderpipelinestate.md) instance if the method completes successfully; otherwise `nil`.
- `error`: If an error occurs, an error information instance; otherwise `nil`.

## See Also

### Supporting types

- [MTLNewRenderPipelineStateWithReflectionCompletionHandler](mtlnewrenderpipelinestatewithreflectioncompletionhandler.md): A completion handler signature a method calls when it finishes creating a render pipeline and reflection information.
- [MTLNewComputePipelineStateCompletionHandler](mtlnewcomputepipelinestatecompletionhandler.md): A completion handler signature a method calls when it finishes creating a compute pipeline.
- [MTLNewComputePipelineStateWithReflectionCompletionHandler](mtlnewcomputepipelinestatewithreflectioncompletionhandler.md): A completion handler signature a method calls when it finishes creating a compute pipeline and reflection information.

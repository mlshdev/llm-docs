> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlnewrenderpipelinestatewithreflectioncompletionhandler](https://developer.apple.com/documentation/metal/mtlnewrenderpipelinestatewithreflectioncompletionhandler)

# MTLNewRenderPipelineStateWithReflectionCompletionHandler (Swift)

**Framework:** Metal  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A completion handler signature a method calls when it finishes creating a render pipeline and reflection information.

## Declaration

```swift
typealias MTLNewRenderPipelineStateWithReflectionCompletionHandler = ((any MTLRenderPipelineState)?, MTLRenderPipelineReflection?, (any Error)?) -> Void
```

## Parameters

- `renderPipelineState`: An [MTLRenderPipelineState](mtlrenderpipelinestate.md) instance if the method successfully compiles the library without any errors; otherwise `nil`.
- `reflection`: An [MTLRenderPipelineReflection](mtlrenderpipelinereflection.md) instance if the method completes successfully; otherwise `nil`.
- `error`: If an error occurs, an error information instance; otherwise `nil`.

## See Also

### Supporting types

- [MTLNewRenderPipelineStateCompletionHandler](mtlnewrenderpipelinestatecompletionhandler.md): A completion handler signature a method calls when it finishes creating a render pipeline.
- [MTLNewComputePipelineStateCompletionHandler](mtlnewcomputepipelinestatecompletionhandler.md): A completion handler signature a method calls when it finishes creating a compute pipeline.
- [MTLNewComputePipelineStateWithReflectionCompletionHandler](mtlnewcomputepipelinestatewithreflectioncompletionhandler.md): A completion handler signature a method calls when it finishes creating a compute pipeline and reflection information.

# MTLNewRenderPipelineStateWithReflectionCompletionHandler (Objective-C)

**Framework:** Metal  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A completion handler signature a method calls when it finishes creating a render pipeline and reflection information.

## Declaration

```objectivec
typedef void (^)(id<MTLRenderPipelineState>, MTLRenderPipelineReflection *, NSError *) MTLNewRenderPipelineStateWithReflectionCompletionHandler;
```

## Parameters

- `renderPipelineState`: An [MTLRenderPipelineState](mtlrenderpipelinestate.md) instance if the method successfully compiles the library without any errors; otherwise `nil`.
- `reflection`: An [MTLRenderPipelineReflection](mtlrenderpipelinereflection.md) instance if the method completes successfully; otherwise `nil`.
- `error`: If an error occurs, an error information instance; otherwise `nil`.

## See Also

### Supporting types

- [MTLNewRenderPipelineStateCompletionHandler](mtlnewrenderpipelinestatecompletionhandler.md): A completion handler signature a method calls when it finishes creating a render pipeline.
- [MTLNewComputePipelineStateCompletionHandler](mtlnewcomputepipelinestatecompletionhandler.md): A completion handler signature a method calls when it finishes creating a compute pipeline.
- [MTLNewComputePipelineStateWithReflectionCompletionHandler](mtlnewcomputepipelinestatewithreflectioncompletionhandler.md): A completion handler signature a method calls when it finishes creating a compute pipeline and reflection information.

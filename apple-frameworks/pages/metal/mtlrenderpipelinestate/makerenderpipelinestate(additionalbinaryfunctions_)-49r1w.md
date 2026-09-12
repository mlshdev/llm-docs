> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrenderpipelinestate/makerenderpipelinestate(additionalbinaryfunctions:)-49r1w](https://developer.apple.com/documentation/metal/mtlrenderpipelinestate/makerenderpipelinestate(additionalbinaryfunctions:)-49r1w)

# makeRenderPipelineState(additionalBinaryFunctions:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Creates a new render pipeline state by adding binary functions to each stage of this pipeline state.

## Declaration

```swift
func makeRenderPipelineState(additionalBinaryFunctions binaryFunctionsDescriptor: MTL4RenderPipelineBinaryFunctionsDescriptor) throws -> any MTLRenderPipelineState
```

## Parameters

- `binaryFunctionsDescriptor`: A non-`nil` dynamic linking descriptor.

<a id="return-value"></a>

## Return Value

A new render pipeline state upon success, otherwise `nil`.

# newRenderPipelineStateWithBinaryFunctions:error: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Creates a new render pipeline state by adding binary functions to each stage of this pipeline state.

## Declaration

```objectivec
- (id<MTLRenderPipelineState>) newRenderPipelineStateWithBinaryFunctions:(MTL4RenderPipelineBinaryFunctionsDescriptor *) binaryFunctionsDescriptor error:(NSError **) error;
```

## Parameters

- `binaryFunctionsDescriptor`: A non-`nil` dynamic linking descriptor.
- `error`: An optional pointer that Metal populates with information in case of an error.

<a id="return-value"></a>

## Return Value

A new render pipeline state upon success, otherwise `nil`.

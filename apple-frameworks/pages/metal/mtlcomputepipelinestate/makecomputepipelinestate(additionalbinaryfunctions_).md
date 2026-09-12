> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcomputepipelinestate/makecomputepipelinestate(additionalbinaryfunctions:)](https://developer.apple.com/documentation/metal/mtlcomputepipelinestate/makecomputepipelinestate(additionalbinaryfunctions:))

# makeComputePipelineState(additionalBinaryFunctions:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Allocates a new compute pipeline state by adding binary functions to this pipeline state.

## Declaration

```swift
func makeComputePipelineState(additionalBinaryFunctions: [any MTL4BinaryFunction]) throws -> any MTLComputePipelineState
```

## Parameters

- `additionalBinaryFunctions`: A non-`nil` array containing binary functions to add to this pipeline.

<a id="return-value"></a>

## Return Value

A new compute pipeline state upon success, otherwise `nil`.

# newComputePipelineStateWithBinaryFunctions:error: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Allocates a new compute pipeline state by adding binary functions to this pipeline state.

## Declaration

```objectivec
- (id<MTLComputePipelineState>) newComputePipelineStateWithBinaryFunctions:(NSArray<id<MTL4BinaryFunction>> *) additionalBinaryFunctions error:(NSError **) error;
```

## Parameters

- `additionalBinaryFunctions`: A non-`nil` array containing binary functions to add to this pipeline.
- `error`: An optional parameter into which Metal stores information in case of an error.

<a id="return-value"></a>

## Return Value

A new compute pipeline state upon success, otherwise `nil`.

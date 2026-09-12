> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcomputepipelinestate/makecomputepipelinestatewithadditionalbinaryfunctions(functions:)](https://developer.apple.com/documentation/metal/mtlcomputepipelinestate/makecomputepipelinestatewithadditionalbinaryfunctions(functions:))

# makeComputePipelineStateWithAdditionalBinaryFunctions(functions:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

Creates a new pipeline state object with additional callable functions.

## Declaration

```swift
func makeComputePipelineStateWithAdditionalBinaryFunctions(functions: [any MTLFunction]) throws -> any MTLComputePipelineState
```

## Parameters

- `functions`: The list of additional functions that you want to be able to call.

<a id="return-value"></a>

## Return Value

A new compute pipeline state with access to the provided functions. When this value is `nil`, an error occurred during handle creation.

# newComputePipelineStateWithAdditionalBinaryFunctions:error: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

Creates a new pipeline state object with additional callable functions.

## Declaration

```objectivec
- (id<MTLComputePipelineState>) newComputePipelineStateWithAdditionalBinaryFunctions:(NSArray<id<MTLFunction>> *) functions error:(NSError **) error;
```

## Parameters

- `functions`: The list of additional functions that you want to be able to call.
- `error`: On input, a pointer to an error object variable. On output, an error object that describes any error that occurred, or `nil` if the operation succeeded.

<a id="return-value"></a>

## Return Value

A new compute pipeline state with access to the provided functions. When this value is `nil`, an error occurred during handle creation.

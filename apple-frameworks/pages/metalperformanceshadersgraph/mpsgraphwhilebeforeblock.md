> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphwhilebeforeblock](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphwhilebeforeblock)

# MPSGraphWhileBeforeBlock (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Type Alias  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The block that executes before the condition evaluates for each iteration.

## Declaration

```swift
typealias MPSGraphWhileBeforeBlock = ([MPSGraphTensor], NSMutableArray) -> MPSGraphTensor
```

## Parameters

- `inputTensors`: Input tensors to the `whileConditionBlock`, for the first iteration will be same as initialInputs passed to the while loop.
- `resultTensors`: A valid `MPSGraphTensor` array with results forwarded to after block or returned from the while loop depending on the predicate tensor. It will be empty and the caller block should fill it up before returning.

<a id="return-value"></a>

## Return Value

Tensor MUST be set and have a single scalar value, used to decide between executing the body block or returning from the while loop.

# MPSGraphWhileBeforeBlock (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Type Alias  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The block that executes before the condition evaluates for each iteration.

## Declaration

```objectivec
typedef MPSGraphTensor *(^)(NSArray<MPSGraphTensor *> *, NSMutableArray<MPSGraphTensor *> *) MPSGraphWhileBeforeBlock;
```

## Parameters

- `inputTensors`: Input tensors to the `whileConditionBlock`, for the first iteration will be same as initialInputs passed to the while loop.
- `resultTensors`: A valid `MPSGraphTensor` array with results forwarded to after block or returned from the while loop depending on the predicate tensor. It will be empty and the caller block should fill it up before returning.

<a id="return-value"></a>

## Return Value

Tensor MUST be set and have a single scalar value, used to decide between executing the body block or returning from the while loop.

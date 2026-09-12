> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphforloopbodyblock](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphforloopbodyblock)

# MPSGraphForLoopBodyBlock (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Type Alias  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A block for the body in the for loop.

## Declaration

```swift
typealias MPSGraphForLoopBodyBlock = (MPSGraphTensor, [MPSGraphTensor]) -> [MPSGraphTensor]
```

## Parameters

- `index`: The for loop index per iteration, it is a scalar tensor.
- `iterationArguments`: Arguments for this iteration, with the same count and corresponding element types as `initialIterationArguments` and return types of the `for` loop.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor array with same count and corresponding element types as `initialIterationArguments` and return types of the `for` loop.

# MPSGraphForLoopBodyBlock (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Type Alias  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A block for the body in the for loop.

## Declaration

```objectivec
typedef NSArray<MPSGraphTensor *> *(^)(MPSGraphTensor *, NSArray<MPSGraphTensor *> *) MPSGraphForLoopBodyBlock;
```

## Parameters

- `index`: The for loop index per iteration, it is a scalar tensor.
- `iterationArguments`: Arguments for this iteration, with the same count and corresponding element types as `initialIterationArguments` and return types of the `for` loop.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor array with same count and corresponding element types as `initialIterationArguments` and return types of the `for` loop.

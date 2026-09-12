> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphwhileafterblock](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphwhileafterblock)

# MPSGraphWhileAfterBlock (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Type Alias  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The block that executes after the condition evaluates for each iteration.

## Declaration

```swift
typealias MPSGraphWhileAfterBlock = ([MPSGraphTensor]) -> [MPSGraphTensor]
```

## Parameters

- `bodyBlockArguments`: Inputs to the body of the while loop passed by the condition block return, and should be the same element types as the return of the while loop.

<a id="return-value"></a>

## Return Value

A valid `MPSGraphTensor` array with results forwarded to the condition block.

# MPSGraphWhileAfterBlock (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Type Alias  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The block that executes after the condition evaluates for each iteration.

## Declaration

```objectivec
typedef NSArray<MPSGraphTensor *> *(^)(NSArray<MPSGraphTensor *> *) MPSGraphWhileAfterBlock;
```

## Parameters

- `bodyBlockArguments`: Inputs to the body of the while loop passed by the condition block return, and should be the same element types as the return of the while loop.

<a id="return-value"></a>

## Return Value

A valid `MPSGraphTensor` array with results forwarded to the condition block.

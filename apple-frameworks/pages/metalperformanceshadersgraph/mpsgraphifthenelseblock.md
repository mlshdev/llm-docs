> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphifthenelseblock](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphifthenelseblock)

# MPSGraphIfThenElseBlock (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Type Alias  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A block of operations executed under either the if or else condition.

## Declaration

```swift
typealias MPSGraphIfThenElseBlock = () -> [MPSGraphTensor]
```

<a id="return-value"></a>

## Return Value

Tensors returned by user. If not empty, the user must define both the then and else blocks, both should have the same number of arguments, and each corresponding argument should have the same element types.

# MPSGraphIfThenElseBlock (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Type Alias  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A block of operations executed under either the if or else condition.

## Declaration

```objectivec
typedef NSArray<MPSGraphTensor *> *(^)() MPSGraphIfThenElseBlock;
```

<a id="return-value"></a>

## Return Value

Tensors returned by user. If not empty, the user must define both the then and else blocks, both should have the same number of arguments, and each corresponding argument should have the same element types.

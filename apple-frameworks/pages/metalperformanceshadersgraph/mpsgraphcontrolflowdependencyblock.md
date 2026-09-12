> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphcontrolflowdependencyblock](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphcontrolflowdependencyblock)

# MPSGraphControlFlowDependencyBlock (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Type Alias  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The scope where all the operations defined in this block get control-dependency operations.

## Declaration

```swift
typealias MPSGraphControlFlowDependencyBlock = () -> [MPSGraphTensor]
```

<a id="return-value"></a>

## Return Value

A valid tensor with the results forwarded to the return of `controlDependency` call.

# MPSGraphControlFlowDependencyBlock (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Type Alias  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The scope where all the operations defined in this block get control-dependency operations.

## Declaration

```objectivec
typedef NSArray<MPSGraphTensor *> *(^)() MPSGraphControlFlowDependencyBlock;
```

<a id="return-value"></a>

## Return Value

A valid tensor with the results forwarded to the return of `controlDependency` call.

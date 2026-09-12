> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphexecutable/feedtensors](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphexecutable/feedtensors)

# feedTensors (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Tensors fed to the graph, can be used to order the inputs when executable is created with a graph.

## Declaration

```swift
var feedTensors: [MPSGraphTensor]? { get }
```

# feedTensors (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Tensors fed to the graph, can be used to order the inputs when executable is created with a graph.

## Declaration

```objectivec
@property (atomic, readonly, nullable) NSArray<MPSGraphTensor *> * feedTensors;
```

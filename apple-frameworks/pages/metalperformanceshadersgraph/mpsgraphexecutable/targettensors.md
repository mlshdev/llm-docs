> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphexecutable/targettensors

# targetTensors (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Tensors targeted by the graph, can be used to order the outputs when executable was created with a graph.

## Declaration

```swift
var targetTensors: [MPSGraphTensor]? { get }
```

# targetTensors (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Tensors targeted by the graph, can be used to order the outputs when executable was created with a graph.

## Declaration

```objectivec
@property (atomic, readonly, nullable) NSArray<MPSGraphTensor *> * targetTensors;
```

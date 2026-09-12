> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsnnforwardlossnode/init(source:labels:weights:lossdescriptor:)-9bsd7](https://developer.apple.com/documentation/metalperformanceshaders/mpsnnforwardlossnode/init(source:labels:weights:lossdescriptor:)-9bsd7)

# init(source:labels:weights:lossDescriptor:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```swift
convenience init(source: MPSNNImageNode, labels: MPSNNImageNode, weights: MPSNNImageNode, lossDescriptor descriptor: MPSCNNLossDescriptor)
```

# nodeWithSource:labels:weights:lossDescriptor: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

## Declaration

```objectivec
+ (instancetype) nodeWithSource:(MPSNNImageNode *) source labels:(MPSNNImageNode *) labels weights:(MPSNNImageNode *) weights lossDescriptor:(MPSCNNLossDescriptor *) descriptor;
```

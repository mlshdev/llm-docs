> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphpooling2dopdescriptor/returnindicesmode](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphpooling2dopdescriptor/returnindicesmode)

# returnIndicesMode (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 15.3+ · iPadOS 15.3+ · Mac Catalyst 15.3+ · macOS 12.2+ · tvOS 15.3+ · visionOS 1.0+

Defines the mode for returned indices of maximum values within each pooling window. Use this in conjunction with [maxPooling2DReturnIndices(\_:descriptor:name:)](../mpsgraph/maxpooling2dreturnindices%28__descriptor_name_%29.md) API. If `returnIndicesMode = MPSGraphPoolingReturnIndicesNone` then only the first result MPSGraph returns from [maxPooling2DReturnIndices(\_:descriptor:name:)](../mpsgraph/maxpooling2dreturnindices%28__descriptor_name_%29.md) will be valid and using the second result will assert. Default value: `MPSGraphPoolingReturnIndicesNone`.

## Declaration

```swift
var returnIndicesMode: MPSGraphPoolingReturnIndicesMode { get set }
```

# returnIndicesMode (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 15.3+ · iPadOS 15.3+ · Mac Catalyst 15.3+ · macOS 12.2+ · tvOS 15.3+ · visionOS 1.0+

Defines the mode for returned indices of maximum values within each pooling window. Use this in conjunction with [maxPooling2DReturnIndicesWithSourceTensor:descriptor:name:](../mpsgraph/maxpooling2dreturnindices%28__descriptor_name_%29.md) API. If `returnIndicesMode = MPSGraphPoolingReturnIndicesNone` then only the first result MPSGraph returns from [maxPooling2DReturnIndicesWithSourceTensor:descriptor:name:](../mpsgraph/maxpooling2dreturnindices%28__descriptor_name_%29.md) will be valid and using the second result will assert. Default value: `MPSGraphPoolingReturnIndicesNone`.

## Declaration

```objectivec
@property (nonatomic, readwrite) MPSGraphPoolingReturnIndicesMode returnIndicesMode;
```

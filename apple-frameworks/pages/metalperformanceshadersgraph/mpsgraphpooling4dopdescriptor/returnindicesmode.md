> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphpooling4dopdescriptor/returnindicesmode](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphpooling4dopdescriptor/returnindicesmode)

# returnIndicesMode (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 15.3+ · iPadOS 15.3+ · Mac Catalyst 15.3+ · macOS 12.2+ · tvOS 15.3+ · visionOS 1.0+

Defines the mode for returned indices of maximum values within each pooling window.

## Declaration

```swift
var returnIndicesMode: MPSGraphPoolingReturnIndicesMode { get set }
```

<a id="discussion"></a>

## Discussion

Use this in conjunction with [maxPooling4DReturnIndices(\_:descriptor:name:)](../mpsgraph/maxpooling4dreturnindices%28__descriptor_name_%29.md) API. If `returnIndicesMode = MPSGraphPoolingReturnIndicesNone` then only the first result MPSGraph returns from [maxPooling4DReturnIndices(\_:descriptor:name:)](../mpsgraph/maxpooling4dreturnindices%28__descriptor_name_%29.md) will be valid and using the second result will assert. Default value: `MPSGraphPoolingReturnIndicesNone`.

# returnIndicesMode (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 15.3+ · iPadOS 15.3+ · Mac Catalyst 15.3+ · macOS 12.2+ · tvOS 15.3+ · visionOS 1.0+

Defines the mode for returned indices of maximum values within each pooling window.

## Declaration

```objectivec
@property (nonatomic, readwrite) MPSGraphPoolingReturnIndicesMode returnIndicesMode;
```

<a id="discussion"></a>

## Discussion

Use this in conjunction with [maxPooling4DReturnIndicesWithSourceTensor:descriptor:name:](../mpsgraph/maxpooling4dreturnindices%28__descriptor_name_%29.md) API. If `returnIndicesMode = MPSGraphPoolingReturnIndicesNone` then only the first result MPSGraph returns from [maxPooling4DReturnIndicesWithSourceTensor:descriptor:name:](../mpsgraph/maxpooling4dreturnindices%28__descriptor_name_%29.md) will be valid and using the second result will assert. Default value: `MPSGraphPoolingReturnIndicesNone`.

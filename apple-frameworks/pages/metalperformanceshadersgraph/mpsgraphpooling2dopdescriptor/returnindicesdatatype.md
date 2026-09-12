> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphpooling2dopdescriptor/returnindicesdatatype](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphpooling2dopdescriptor/returnindicesdatatype)

# returnIndicesDataType (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 15.3+ · iPadOS 15.3+ · Mac Catalyst 15.3+ · macOS 12.2+ · tvOS 15.3+ · visionOS 1.0+

Defines the data type for returned indices. Use this in conjunction with [maxPooling2DReturnIndices(\_:descriptor:name:)](../mpsgraph/maxpooling2dreturnindices%28__descriptor_name_%29.md) API. Currently MPSGraph supports the following datatypes: `MPSDataTypeInt32`. Default value: `MPSDataTypeInt32`.

## Declaration

```swift
var returnIndicesDataType: MPSDataType { get set }
```

# returnIndicesDataType (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Property  
**Availability:** iOS 15.3+ · iPadOS 15.3+ · Mac Catalyst 15.3+ · macOS 12.2+ · tvOS 15.3+ · visionOS 1.0+

Defines the data type for returned indices. Use this in conjunction with [maxPooling2DReturnIndicesWithSourceTensor:descriptor:name:](../mpsgraph/maxpooling2dreturnindices%28__descriptor_name_%29.md) API. Currently MPSGraph supports the following datatypes: `MPSDataTypeInt32`. Default value: `MPSDataTypeInt32`.

## Declaration

```objectivec
@property (nonatomic, readwrite) MPSDataType returnIndicesDataType;
```

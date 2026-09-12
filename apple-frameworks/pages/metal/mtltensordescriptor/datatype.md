> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtltensordescriptor/datatype](https://developer.apple.com/documentation/metal/mtltensordescriptor/datatype)

# dataType (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

The data format of all elements in the data plane.

## Declaration

```swift
var dataType: MTLTensorDataType { get set }
```

<a id="discussion"></a>

## Discussion

The default value of this property is [MTLTensorDataType.float32](../mtltensordatatype/float32.md).

[MTLTensorDataType.metalFloat8ue8m0](../mtltensordatatype/metalfloat8ue8m0.md) is not a valid data type for this property.

# dataType (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

The data format of all elements in the data plane.

## Declaration

```objectivec
@property (nonatomic, readwrite) MTLTensorDataType dataType;
```

<a id="discussion"></a>

## Discussion

The default value of this property is [MTLTensorDataTypeFloat32](../mtltensordatatype/float32.md).

[MTLTensorDataTypeMetalFloat8UE8M0](../mtltensordatatype/metalfloat8ue8m0.md) is not a valid data type for this property.

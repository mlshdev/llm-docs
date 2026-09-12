> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtltensorauxiliaryplanedescriptor/datatype](https://developer.apple.com/documentation/metal/mtltensorauxiliaryplanedescriptor/datatype)

# dataType (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The data format of all elements in the plane.

## Declaration

```swift
var dataType: MTLTensorDataType { get set }
```

<a id="discussion"></a>

## Discussion

The default value of this property is [MTLTensorDataType.metalFloat8ue8m0](../mtltensordatatype/metalfloat8ue8m0.md).

# dataType (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The data format of all elements in the plane.

## Declaration

```objectivec
@property (nonatomic, readwrite) MTLTensorDataType dataType;
```

<a id="discussion"></a>

## Discussion

The default value of this property is [MTLTensorDataTypeMetalFloat8UE8M0](../mtltensordatatype/metalfloat8ue8m0.md).

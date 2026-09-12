> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlaccelerationstructurecurvegeometrydescriptor/indextype](https://developer.apple.com/documentation/metal/mtlaccelerationstructurecurvegeometrydescriptor/indextype)

# indexType (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

The size of each index in the index buffer.

## Declaration

```swift
var indexType: MTLIndexType { get set }
```

<a id="discussion"></a>

## Discussion

Set this property to a value that reflects the size of the indices in the [indexBuffer](indexbuffer.md) property, such as [MTLIndexType.uint16](../mtlindextype/uint16.md) or [MTLIndexType.uint32](../mtlindextype/uint32.md).

# indexType (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

The size of each index in the index buffer.

## Declaration

```objectivec
@property (nonatomic) MTLIndexType indexType;
```

<a id="discussion"></a>

## Discussion

Set this property to a value that reflects the size of the indices in the [indexBuffer](indexbuffer.md) property, such as [MTLIndexTypeUInt16](../mtlindextype/uint16.md) or [MTLIndexTypeUInt32](../mtlindextype/uint32.md).

> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metal/mtlarraytype/elementtype

# elementType (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The data type of the array’s elements.

## Declaration

```swift
var elementType: MTLDataType { get }
```

<a id="discussion"></a>

## Discussion

For information on possible values, see [MTLDataType](../mtldatatype.md).

## See Also

### Describing the array elements

- [arrayLength](arraylength.md): The number of elements in the array.
- [stride](stride.md): The stride between array elements, in bytes.
- [argumentIndexStride](argumentindexstride.md): The stride, in bytes, between argument indices.

# elementType (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The data type of the array’s elements.

## Declaration

```objectivec
@property (readonly) MTLDataType elementType;
```

<a id="discussion"></a>

## Discussion

For information on possible values, see [MTLDataType](../mtldatatype.md).

## See Also

### Describing the array elements

- [arrayLength](arraylength.md): The number of elements in the array.
- [stride](stride.md): The stride between array elements, in bytes.
- [argumentIndexStride](argumentindexstride.md): The stride, in bytes, between argument indices.

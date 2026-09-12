> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlstructmember/datatype](https://developer.apple.com/documentation/metal/mtlstructmember/datatype)

# dataType (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The data type of the struct member.

## Declaration

```swift
var dataType: MTLDataType { get }
```

<a id="discussion"></a>

## Discussion

For information on possible values, see [MTLDataType](../mtldatatype.md). If the value is [MTLDataType.array](../mtldatatype/array.md), then the [arrayType()](arraytype%28%29.md) method returns an object that describes the underlying array. If the value is [MTLDataType.struct](../mtldatatype/struct.md), then the [structType()](structtype%28%29.md) method returns an object that describes the underlying struct.

## See Also

### Describing the struct member

- [name](name.md): The name of the struct member.
- [offset](offset.md): The location of this member relative to the start of its struct, in bytes.
- [argumentIndex](argumentindex.md): The index in the argument table that corresponds to the struct member.

# dataType (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

The data type of the struct member.

## Declaration

```objectivec
@property (readonly) MTLDataType dataType;
```

<a id="discussion"></a>

## Discussion

For information on possible values, see [MTLDataType](../mtldatatype.md). If the value is [MTLDataTypeArray](../mtldatatype/array.md), then the [arrayType](arraytype%28%29.md) method returns an object that describes the underlying array. If the value is [MTLDataTypeStruct](../mtldatatype/struct.md), then the [structType](structtype%28%29.md) method returns an object that describes the underlying struct.

## See Also

### Describing the struct member

- [name](name.md): The name of the struct member.
- [offset](offset.md): The location of this member relative to the start of its struct, in bytes.
- [argumentIndex](argumentindex.md): The index in the argument table that corresponds to the struct member.

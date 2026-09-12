> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlargument/bufferstructtype](https://developer.apple.com/documentation/metal/mtlargument/bufferstructtype)

# bufferStructType (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 16.0) · iPadOS 8.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.11+ (deprecated in 13.0) · tvOS  (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0)

A description of the structure data of a buffer argument.

## Declaration

```swift
var bufferStructType: MTLStructType? { get }
```

<a id="discussion"></a>

## Discussion

If the buffer data type is [MTLDataType.struct](../mtldatatype/struct.md), this property describes the type of the struct; otherwise, this property is `nil`.

## See Also

### Describing a buffer argument

- [bufferAlignment](bufferalignment.md): Deprecated. The required byte alignment in memory for the buffer data.
- [bufferDataSize](bufferdatasize.md): Deprecated. The size, in bytes, of the buffer data.
- [bufferDataType](bufferdatatype.md): Deprecated. The data type of the buffer data.
- [bufferPointerType](bufferpointertype.md): Deprecated. A description of the pointer to a buffer argument.

# bufferStructType (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 16.0) · iPadOS 8.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.11+ (deprecated in 13.0) · tvOS  (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0)

A description of the structure data of a buffer argument.

## Declaration

```objectivec
@property (readonly, nullable) MTLStructType * bufferStructType;
```

<a id="discussion"></a>

## Discussion

If the buffer data type is [MTLDataTypeStruct](../mtldatatype/struct.md), this property describes the type of the struct; otherwise, this property is `nil`.

## See Also

### Describing a buffer argument

- [bufferAlignment](bufferalignment.md): Deprecated. The required byte alignment in memory for the buffer data.
- [bufferDataSize](bufferdatasize.md): Deprecated. The size, in bytes, of the buffer data.
- [bufferDataType](bufferdatatype.md): Deprecated. The data type of the buffer data.
- [bufferPointerType](bufferpointertype.md): Deprecated. A description of the pointer to a buffer argument.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlargument/bufferalignment](https://developer.apple.com/documentation/metal/mtlargument/bufferalignment)

# bufferAlignment (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 16.0) · iPadOS 8.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.11+ (deprecated in 13.0) · tvOS  (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0)

The required byte alignment in memory for the buffer data.

## Declaration

```swift
var bufferAlignment: Int { get }
```

<a id="discussion"></a>

## Discussion

If the argument is not a buffer, querying this property is a fatal error.

## See Also

### Describing a buffer argument

- [bufferDataSize](bufferdatasize.md): Deprecated. The size, in bytes, of the buffer data.
- [bufferDataType](bufferdatatype.md): Deprecated. The data type of the buffer data.
- [bufferStructType](bufferstructtype.md): Deprecated. A description of the structure data of a buffer argument.
- [bufferPointerType](bufferpointertype.md): Deprecated. A description of the pointer to a buffer argument.

# bufferAlignment (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 16.0) · iPadOS 8.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · macOS 10.11+ (deprecated in 13.0) · tvOS  (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0)

The required byte alignment in memory for the buffer data.

## Declaration

```objectivec
@property (readonly) NSUInteger bufferAlignment;
```

<a id="discussion"></a>

## Discussion

If the argument is not a buffer, querying this property is a fatal error.

## See Also

### Describing a buffer argument

- [bufferDataSize](bufferdatasize.md): Deprecated. The size, in bytes, of the buffer data.
- [bufferDataType](bufferdatatype.md): Deprecated. The data type of the buffer data.
- [bufferStructType](bufferstructtype.md): Deprecated. A description of the structure data of a buffer argument.
- [bufferPointerType](bufferpointertype.md): Deprecated. A description of the pointer to a buffer argument.

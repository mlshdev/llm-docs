> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdata/getbytes(_:)](https://developer.apple.com/documentation/foundation/nsdata/getbytes(_:))

# getBytes(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 8.0) · iPadOS 2.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.10) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Copies a data object’s contents into a given buffer.

> This method is unsafe because it could potentially cause buffer overruns. Use [getBytes(\_:length:)](getbytes%28__length_%29.md) or [getBytes(\_:range:)](getbytes%28__range_%29.md) instead.

## Declaration

```swift
func getBytes(_ buffer: UnsafeMutableRawPointer)
```

## Parameters

- `buffer`: A buffer into which to copy the receiver’s data. The buffer must be at least [length](length.md) bytes.

<a id="Discussion"></a>

## Discussion

You can see a sample using this method in [Working With Binary Data](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/BinaryData/Tasks/WorkingBinaryData.html#//apple_ref/doc/uid/20000717).

## See Also

### Related Documentation

- [description](description.md): A string that contains a hexadecimal representation of the data object’s contents in a property list format.

### Accessing Underlying Bytes

- [bytes](bytes.md): A pointer to the data object’s contents.
- [enumerateBytes(\_:)](enumeratebytes%28__%29.md): Enumerates each range of bytes in the data object using a block.
- [getBytes(\_:length:)](getbytes%28__length_%29.md): Copies a number of bytes from the start of the data object into a given buffer.
- [getBytes(\_:range:)](getbytes%28__range_%29.md): Copies a range of bytes from the data object into a given buffer.

# getBytes: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 8.0) · iPadOS 2.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.10) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Copies a data object’s contents into a given buffer.

> This method is unsafe because it could potentially cause buffer overruns. Use [getBytes:length:](getbytes%28__length_%29.md) or [getBytes:range:](getbytes%28__range_%29.md) instead.

## Declaration

```objectivec
- (void) getBytes:(void *) buffer;
```

## Parameters

- `buffer`: A buffer into which to copy the receiver’s data. The buffer must be at least [length](length.md) bytes.

<a id="Discussion"></a>

## Discussion

You can see a sample using this method in [Working With Binary Data](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/BinaryData/Tasks/WorkingBinaryData.html#//apple_ref/doc/uid/20000717).

## See Also

### Related Documentation

- [description](description.md): A string that contains a hexadecimal representation of the data object’s contents in a property list format.

### Accessing Underlying Bytes

- [bytes](bytes.md): A pointer to the data object’s contents.
- [enumerateByteRangesUsingBlock:](enumeratebytes%28__%29.md): Enumerates each range of bytes in the data object using a block.
- [getBytes:length:](getbytes%28__length_%29.md): Copies a number of bytes from the start of the data object into a given buffer.
- [getBytes:range:](getbytes%28__range_%29.md): Copies a range of bytes from the data object into a given buffer.

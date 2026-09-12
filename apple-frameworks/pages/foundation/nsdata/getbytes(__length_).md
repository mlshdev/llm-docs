> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdata/getbytes(_:length:)](https://developer.apple.com/documentation/foundation/nsdata/getbytes(_:length:))

# getBytes(\_:length:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Copies a number of bytes from the start of the data object into a given buffer.

## Declaration

```swift
func getBytes(_ buffer: UnsafeMutableRawPointer, length: Int)
```

## Parameters

- `buffer`: A buffer into which to copy data.
- `length`: The number of bytes from the start of the receiver’s data to copy to `buffer`.

<a id="Discussion"></a>

## Discussion

The number of bytes copied is the smaller of the `length` parameter and the [length](length.md) of the data encapsulated in the object.

## See Also

### Related Documentation

- [description](description.md): A string that contains a hexadecimal representation of the data object’s contents in a property list format.

### Accessing Underlying Bytes

- [bytes](bytes.md): A pointer to the data object’s contents.
- [enumerateBytes(\_:)](enumeratebytes%28__%29.md): Enumerates each range of bytes in the data object using a block.
- [getBytes(\_:)](getbytes%28__%29.md): Deprecated. Copies a data object’s contents into a given buffer.
- [getBytes(\_:range:)](getbytes%28__range_%29.md): Copies a range of bytes from the data object into a given buffer.

# getBytes:length: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Copies a number of bytes from the start of the data object into a given buffer.

## Declaration

```objectivec
- (void) getBytes:(void *) buffer length:(NSUInteger) length;
```

## Parameters

- `buffer`: A buffer into which to copy data.
- `length`: The number of bytes from the start of the receiver’s data to copy to `buffer`.

<a id="Discussion"></a>

## Discussion

The number of bytes copied is the smaller of the `length` parameter and the [length](length.md) of the data encapsulated in the object.

## See Also

### Related Documentation

- [description](description.md): A string that contains a hexadecimal representation of the data object’s contents in a property list format.

### Accessing Underlying Bytes

- [bytes](bytes.md): A pointer to the data object’s contents.
- [enumerateByteRangesUsingBlock:](enumeratebytes%28__%29.md): Enumerates each range of bytes in the data object using a block.
- [getBytes:](getbytes%28__%29.md): Deprecated. Copies a data object’s contents into a given buffer.
- [getBytes:range:](getbytes%28__range_%29.md): Copies a range of bytes from the data object into a given buffer.

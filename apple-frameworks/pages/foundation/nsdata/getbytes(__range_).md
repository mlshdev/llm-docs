> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdata/getbytes(_:range:)](https://developer.apple.com/documentation/foundation/nsdata/getbytes(_:range:))

# getBytes(\_:range:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Copies a range of bytes from the data object into a given buffer.

## Declaration

```swift
func getBytes(_ buffer: UnsafeMutableRawPointer, range: NSRange)
```

## Parameters

- `buffer`: A buffer into which to copy data.
- `range`: The range of bytes in the receiver’s data to copy to `buffer`. The range must lie within the range of bytes of the receiver’s data.

<a id="Discussion"></a>

## Discussion

If `range` isn’t within the receiver’s range of bytes, an [rangeException](../nsexceptionname/rangeexception.md) is raised.

## See Also

### Related Documentation

- [description](description.md): A string that contains a hexadecimal representation of the data object’s contents in a property list format.

### Accessing Underlying Bytes

- [bytes](bytes.md): A pointer to the data object’s contents.
- [enumerateBytes(\_:)](enumeratebytes%28__%29.md): Enumerates each range of bytes in the data object using a block.
- [getBytes(\_:)](getbytes%28__%29.md): Deprecated. Copies a data object’s contents into a given buffer.
- [getBytes(\_:length:)](getbytes%28__length_%29.md): Copies a number of bytes from the start of the data object into a given buffer.

# getBytes:range: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Copies a range of bytes from the data object into a given buffer.

## Declaration

```objectivec
- (void) getBytes:(void *) buffer range:(NSRange) range;
```

## Parameters

- `buffer`: A buffer into which to copy data.
- `range`: The range of bytes in the receiver’s data to copy to `buffer`. The range must lie within the range of bytes of the receiver’s data.

<a id="Discussion"></a>

## Discussion

If `range` isn’t within the receiver’s range of bytes, an [NSRangeException](../nsexceptionname/rangeexception.md) is raised.

## See Also

### Related Documentation

- [description](description.md): A string that contains a hexadecimal representation of the data object’s contents in a property list format.

### Accessing Underlying Bytes

- [bytes](bytes.md): A pointer to the data object’s contents.
- [enumerateByteRangesUsingBlock:](enumeratebytes%28__%29.md): Enumerates each range of bytes in the data object using a block.
- [getBytes:](getbytes%28__%29.md): Deprecated. Copies a data object’s contents into a given buffer.
- [getBytes:length:](getbytes%28__length_%29.md): Copies a number of bytes from the start of the data object into a given buffer.

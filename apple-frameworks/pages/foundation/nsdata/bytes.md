> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdata/bytes](https://developer.apple.com/documentation/foundation/nsdata/bytes)

# bytes (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A pointer to the data object’s contents.

## Declaration

```swift
var bytes: UnsafeRawPointer { get }
```

<a id="Discussion"></a>

## Discussion

If the [length](length.md) of the [NSData](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/PropertyLists/OldStylePlists/OldStylePLists.html#//apple_ref/doc/uid/20001012-47169) object is 0, this property returns `nil`.

For an immutable data object, the returned pointer is valid until the data object is deallocated. For a mutable data object, the returned pointer is valid until the data object is deallocated or the data is mutated.

## See Also

### Related Documentation

- [description](description.md): A string that contains a hexadecimal representation of the data object’s contents in a property list format.

### Accessing Underlying Bytes

- [enumerateBytes(\_:)](enumeratebytes%28__%29.md): Enumerates each range of bytes in the data object using a block.
- [getBytes(\_:)](getbytes%28__%29.md): Deprecated. Copies a data object’s contents into a given buffer.
- [getBytes(\_:length:)](getbytes%28__length_%29.md): Copies a number of bytes from the start of the data object into a given buffer.
- [getBytes(\_:range:)](getbytes%28__range_%29.md): Copies a range of bytes from the data object into a given buffer.

# bytes (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A pointer to the data object’s contents.

## Declaration

```objectivec
@property (readonly) const void * bytes;
```

<a id="Discussion"></a>

## Discussion

If the [length](length.md) of the [NSData](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/PropertyLists/OldStylePlists/OldStylePLists.html#//apple_ref/doc/uid/20001012-47169) object is 0, this property returns `nil`.

For an immutable data object, the returned pointer is valid until the data object is deallocated. For a mutable data object, the returned pointer is valid until the data object is deallocated or the data is mutated.

## See Also

### Related Documentation

- [description](description.md): A string that contains a hexadecimal representation of the data object’s contents in a property list format.

### Accessing Underlying Bytes

- [enumerateByteRangesUsingBlock:](enumeratebytes%28__%29.md): Enumerates each range of bytes in the data object using a block.
- [getBytes:](getbytes%28__%29.md): Deprecated. Copies a data object’s contents into a given buffer.
- [getBytes:length:](getbytes%28__length_%29.md): Copies a number of bytes from the start of the data object into a given buffer.
- [getBytes:range:](getbytes%28__range_%29.md): Copies a range of bytes from the data object into a given buffer.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdata/enumeratebytes(_:)](https://developer.apple.com/documentation/foundation/nsdata/enumeratebytes(_:))

# enumerateBytes(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Enumerates each range of bytes in the data object using a block.

## Declaration

```swift
func enumerateBytes(_ block: (UnsafeRawPointer, NSRange, UnsafeMutablePointer<ObjCBool>) -> Void)
```

## Parameters

- `block`: The block to apply to byte ranges in the array.

  The block takes three arguments:

  - **bytes**: The bytes for the current range. This pointer is valid until the data object is deallocated.
  - **byteRange**: The range of the current data bytes.
  - **stop**: A reference to a Boolean value. The block can set the value to [true](https://developer.apple.com/documentation/swift/true) to stop further processing of the data. The stop argument is an out-only argument. You should only ever set this Boolean to [true](https://developer.apple.com/documentation/swift/true) within the Block.

<a id="Discussion"></a>

## Discussion

The enumeration block is called once for each contiguous region of memory in the receiver (once total for a contiguous [NSData](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/PropertyLists/OldStylePlists/OldStylePLists.html#//apple_ref/doc/uid/20001012-47169) object), until either all bytes have been enumerated, or the `stop` parameter is set to [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Accessing Underlying Bytes

- [bytes](bytes.md): A pointer to the data object’s contents.
- [getBytes(\_:)](getbytes%28__%29.md): Deprecated. Copies a data object’s contents into a given buffer.
- [getBytes(\_:length:)](getbytes%28__length_%29.md): Copies a number of bytes from the start of the data object into a given buffer.
- [getBytes(\_:range:)](getbytes%28__range_%29.md): Copies a range of bytes from the data object into a given buffer.

# enumerateByteRangesUsingBlock: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Enumerates each range of bytes in the data object using a block.

## Declaration

```objectivec
- (void) enumerateByteRangesUsingBlock:(void (^)(const void *bytes, NSRange byteRange, BOOL *stop)) block;
```

## Parameters

- `block`: The block to apply to byte ranges in the array.

  The block takes three arguments:

  - **bytes**: The bytes for the current range. This pointer is valid until the data object is deallocated.
  - **byteRange**: The range of the current data bytes.
  - **stop**: A reference to a Boolean value. The block can set the value to [true](https://developer.apple.com/documentation/swift/true) to stop further processing of the data. The stop argument is an out-only argument. You should only ever set this Boolean to [true](https://developer.apple.com/documentation/swift/true) within the Block.

<a id="Discussion"></a>

## Discussion

The enumeration block is called once for each contiguous region of memory in the receiver (once total for a contiguous [NSData](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/PropertyLists/OldStylePlists/OldStylePLists.html#//apple_ref/doc/uid/20001012-47169) object), until either all bytes have been enumerated, or the `stop` parameter is set to [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Accessing Underlying Bytes

- [bytes](bytes.md): A pointer to the data object’s contents.
- [getBytes:](getbytes%28__%29.md): Deprecated. Copies a data object’s contents into a given buffer.
- [getBytes:length:](getbytes%28__length_%29.md): Copies a number of bytes from the start of the data object into a given buffer.
- [getBytes:range:](getbytes%28__range_%29.md): Copies a range of bytes from the data object into a given buffer.

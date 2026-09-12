> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdata/data](https://developer.apple.com/documentation/foundation/nsdata/data)

# data

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an empty data object.

## Declaration

```objectivec
+ (instancetype) data;
```

<a id="Discussion"></a>

## Discussion

This method is declared primarily for the use of mutable subclasses of [NSData](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/PropertyLists/OldStylePlists/OldStylePLists.html#//apple_ref/doc/uid/20001012-47169).

## See Also

### Related Documentation

- [Binary Data Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/BinaryData/BinaryData.html#//apple_ref/doc/uid/10000037i)
- [Property List Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/PropertyLists/Introduction/Introduction.html#//apple_ref/doc/uid/10000048i)

### Creating Data

- [dataWithBytes:length:](datawithbytes_length_.md): Creates a data object containing a given number of bytes copied from a given buffer.
- [dataWithBytesNoCopy:length:](datawithbytesnocopy_length_.md): Creates a data object that holds a given number of bytes from a given buffer.
- [dataWithBytesNoCopy:length:freeWhenDone:](datawithbytesnocopy_length_freewhendone_.md): Creates a data object that holds a given number of bytes from a given buffer.
- [dataWithData:](datawithdata_.md): Creates a data object containing the contents of another data object.
- [initWithBytes:length:](init%28bytes_length_%29.md): Initializes a data object filled with a given number of bytes copied from a given buffer.
- [initWithBytesNoCopy:length:](init%28bytesnocopy_length_%29.md): Initializes a data object filled with a given number of bytes of data from a given buffer.
- [initWithBytesNoCopy:length:deallocator:](init%28bytesnocopy_length_deallocator_%29.md): Initializes a data object filled with a given number of bytes of data from a given buffer, with a custom deallocator block.
- [initWithBytesNoCopy:length:freeWhenDone:](init%28bytesnocopy_length_freewhendone_%29.md): Initializes a newly allocated data object by adding the given number of bytes from the given buffer.
- [initWithData:](init%28data_%29.md): Initializes a data object with the contents of another data object.

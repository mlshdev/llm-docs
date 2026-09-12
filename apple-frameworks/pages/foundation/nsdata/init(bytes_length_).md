> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdata/init(bytes:length:)](https://developer.apple.com/documentation/foundation/nsdata/init(bytes:length:))

# init(bytes:length:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes a data object filled with a given number of bytes copied from a given buffer.

## Declaration

```swift
init(bytes: UnsafeRawPointer?, length: Int)
```

<a id="Discussion"></a>

## Discussion

A data object initialized by adding to it `length` bytes of data copied from the buffer `bytes`. The returned object might be different than the original receiver.

## See Also

### Creating Data

- [init(bytesNoCopy:length:)](init%28bytesnocopy_length_%29.md): Initializes a data object filled with a given number of bytes of data from a given buffer.
- [init(bytesNoCopy:length:deallocator:)](init%28bytesnocopy_length_deallocator_%29.md): Initializes a data object filled with a given number of bytes of data from a given buffer, with a custom deallocator block.
- [init(bytesNoCopy:length:freeWhenDone:)](init%28bytesnocopy_length_freewhendone_%29.md): Initializes a newly allocated data object by adding the given number of bytes from the given buffer.
- [init(data:)](init%28data_%29.md): Initializes a data object with the contents of another data object.

# initWithBytes:length: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes a data object filled with a given number of bytes copied from a given buffer.

## Declaration

```objectivec
- (instancetype) initWithBytes:(const void *) bytes length:(NSUInteger) length;
```

<a id="Discussion"></a>

## Discussion

A data object initialized by adding to it `length` bytes of data copied from the buffer `bytes`. The returned object might be different than the original receiver.

## See Also

### Related Documentation

- [dataWithBytes:length:](datawithbytes_length_.md): Creates a data object containing a given number of bytes copied from a given buffer.

### Creating Data

- [data](data.md): Creates an empty data object.
- [dataWithBytes:length:](datawithbytes_length_.md): Creates a data object containing a given number of bytes copied from a given buffer.
- [dataWithBytesNoCopy:length:](datawithbytesnocopy_length_.md): Creates a data object that holds a given number of bytes from a given buffer.
- [dataWithBytesNoCopy:length:freeWhenDone:](datawithbytesnocopy_length_freewhendone_.md): Creates a data object that holds a given number of bytes from a given buffer.
- [dataWithData:](datawithdata_.md): Creates a data object containing the contents of another data object.
- [initWithBytesNoCopy:length:](init%28bytesnocopy_length_%29.md): Initializes a data object filled with a given number of bytes of data from a given buffer.
- [initWithBytesNoCopy:length:deallocator:](init%28bytesnocopy_length_deallocator_%29.md): Initializes a data object filled with a given number of bytes of data from a given buffer, with a custom deallocator block.
- [initWithBytesNoCopy:length:freeWhenDone:](init%28bytesnocopy_length_freewhendone_%29.md): Initializes a newly allocated data object by adding the given number of bytes from the given buffer.
- [initWithData:](init%28data_%29.md): Initializes a data object with the contents of another data object.

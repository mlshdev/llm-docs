> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdata/init(bytesnocopy:length:freewhendone:)](https://developer.apple.com/documentation/foundation/nsdata/init(bytesnocopy:length:freewhendone:))

# init(bytesNoCopy:length:freeWhenDone:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes a newly allocated data object by adding the given number of bytes from the given buffer.

## Declaration

```swift
init(bytesNoCopy bytes: UnsafeMutableRawPointer, length: Int, freeWhenDone b: Bool)
```

## Parameters

- `bytes`: A buffer containing data for the new object. If `flag` is [true](https://developer.apple.com/documentation/swift/true), `bytes` must point to a memory block allocated with `malloc`.
- `length`: The number of bytes to hold from `bytes`. This value must not exceed the length of `bytes`.
- `b`: If [true](https://developer.apple.com/documentation/swift/true), the returned object takes ownership of the `bytes` pointer and frees it on deallocation.

## See Also

### Creating Data

- [init(bytes:length:)](init%28bytes_length_%29.md): Initializes a data object filled with a given number of bytes copied from a given buffer.
- [init(bytesNoCopy:length:)](init%28bytesnocopy_length_%29.md): Initializes a data object filled with a given number of bytes of data from a given buffer.
- [init(bytesNoCopy:length:deallocator:)](init%28bytesnocopy_length_deallocator_%29.md): Initializes a data object filled with a given number of bytes of data from a given buffer, with a custom deallocator block.
- [init(data:)](init%28data_%29.md): Initializes a data object with the contents of another data object.

# initWithBytesNoCopy:length:freeWhenDone: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes a newly allocated data object by adding the given number of bytes from the given buffer.

## Declaration

```objectivec
- (instancetype) initWithBytesNoCopy:(void *) bytes length:(NSUInteger) length freeWhenDone:(BOOL) b;
```

## Parameters

- `bytes`: A buffer containing data for the new object. If `flag` is [true](https://developer.apple.com/documentation/swift/true), `bytes` must point to a memory block allocated with `malloc`.
- `length`: The number of bytes to hold from `bytes`. This value must not exceed the length of `bytes`.
- `b`: If [true](https://developer.apple.com/documentation/swift/true), the returned object takes ownership of the `bytes` pointer and frees it on deallocation.

## See Also

### Related Documentation

- [dataWithBytesNoCopy:length:freeWhenDone:](datawithbytesnocopy_length_freewhendone_.md): Creates a data object that holds a given number of bytes from a given buffer.

### Creating Data

- [data](data.md): Creates an empty data object.
- [dataWithBytes:length:](datawithbytes_length_.md): Creates a data object containing a given number of bytes copied from a given buffer.
- [dataWithBytesNoCopy:length:](datawithbytesnocopy_length_.md): Creates a data object that holds a given number of bytes from a given buffer.
- [dataWithBytesNoCopy:length:freeWhenDone:](datawithbytesnocopy_length_freewhendone_.md): Creates a data object that holds a given number of bytes from a given buffer.
- [dataWithData:](datawithdata_.md): Creates a data object containing the contents of another data object.
- [initWithBytes:length:](init%28bytes_length_%29.md): Initializes a data object filled with a given number of bytes copied from a given buffer.
- [initWithBytesNoCopy:length:](init%28bytesnocopy_length_%29.md): Initializes a data object filled with a given number of bytes of data from a given buffer.
- [initWithBytesNoCopy:length:deallocator:](init%28bytesnocopy_length_deallocator_%29.md): Initializes a data object filled with a given number of bytes of data from a given buffer, with a custom deallocator block.
- [initWithData:](init%28data_%29.md): Initializes a data object with the contents of another data object.

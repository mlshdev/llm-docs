> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdata/init(bytesnocopy:length:)](https://developer.apple.com/documentation/foundation/nsdata/init(bytesnocopy:length:))

# init(bytesNoCopy:length:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes a data object filled with a given number of bytes of data from a given buffer.

## Declaration

```swift
init(bytesNoCopy bytes: UnsafeMutableRawPointer, length: Int)
```

## Parameters

- `bytes`: A buffer containing data for the new object. `bytes` must point to a memory block allocated with `malloc`.
- `length`: The number of bytes to hold from `bytes`. This value must not exceed the length of `bytes`.

<a id="return-value"></a>

## Return Value

A data object initialized by adding to it `length` bytes of data from the buffer `bytes`. The returned object might be different than the original receiver.

<a id="Discussion"></a>

## Discussion

The returned object takes ownership of the `bytes` pointer and frees it on deallocation. Therefore, `bytes` must point to a memory block allocated with `malloc`.

## See Also

### Creating Data

- [init(bytes:length:)](init%28bytes_length_%29.md): Initializes a data object filled with a given number of bytes copied from a given buffer.
- [init(bytesNoCopy:length:deallocator:)](init%28bytesnocopy_length_deallocator_%29.md): Initializes a data object filled with a given number of bytes of data from a given buffer, with a custom deallocator block.
- [init(bytesNoCopy:length:freeWhenDone:)](init%28bytesnocopy_length_freewhendone_%29.md): Initializes a newly allocated data object by adding the given number of bytes from the given buffer.
- [init(data:)](init%28data_%29.md): Initializes a data object with the contents of another data object.

# initWithBytesNoCopy:length: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes a data object filled with a given number of bytes of data from a given buffer.

## Declaration

```objectivec
- (instancetype) initWithBytesNoCopy:(void *) bytes length:(NSUInteger) length;
```

## Parameters

- `bytes`: A buffer containing data for the new object. `bytes` must point to a memory block allocated with `malloc`.
- `length`: The number of bytes to hold from `bytes`. This value must not exceed the length of `bytes`.

<a id="return-value"></a>

## Return Value

A data object initialized by adding to it `length` bytes of data from the buffer `bytes`. The returned object might be different than the original receiver.

<a id="Discussion"></a>

## Discussion

The returned object takes ownership of the `bytes` pointer and frees it on deallocation. Therefore, `bytes` must point to a memory block allocated with `malloc`.

## See Also

### Related Documentation

- [dataWithBytes:length:](datawithbytes_length_.md): Creates a data object containing a given number of bytes copied from a given buffer.

### Creating Data

- [data](data.md): Creates an empty data object.
- [dataWithBytes:length:](datawithbytes_length_.md): Creates a data object containing a given number of bytes copied from a given buffer.
- [dataWithBytesNoCopy:length:](datawithbytesnocopy_length_.md): Creates a data object that holds a given number of bytes from a given buffer.
- [dataWithBytesNoCopy:length:freeWhenDone:](datawithbytesnocopy_length_freewhendone_.md): Creates a data object that holds a given number of bytes from a given buffer.
- [dataWithData:](datawithdata_.md): Creates a data object containing the contents of another data object.
- [initWithBytes:length:](init%28bytes_length_%29.md): Initializes a data object filled with a given number of bytes copied from a given buffer.
- [initWithBytesNoCopy:length:deallocator:](init%28bytesnocopy_length_deallocator_%29.md): Initializes a data object filled with a given number of bytes of data from a given buffer, with a custom deallocator block.
- [initWithBytesNoCopy:length:freeWhenDone:](init%28bytesnocopy_length_freewhendone_%29.md): Initializes a newly allocated data object by adding the given number of bytes from the given buffer.
- [initWithData:](init%28data_%29.md): Initializes a data object with the contents of another data object.

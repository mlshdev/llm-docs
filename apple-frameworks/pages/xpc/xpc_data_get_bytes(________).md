> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpc_data_get_bytes(_:_:_:_:)](https://developer.apple.com/documentation/xpc/xpc_data_get_bytes(_:_:_:_:))

# xpc_data_get_bytes(\_:\_:\_:\_:) (Swift)

**Framework:** XPC  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Copies the bytes in a data object into the specified buffer.

## Declaration

```swift
func xpc_data_get_bytes(_ xdata: xpc_object_t, _ buffer: UnsafeMutableRawPointer, _ off: Int, _ length: Int) -> Int
```

## Parameters

- `xdata`: The data object which is to be examined.
- `buffer`: The buffer in which to copy the data object’s bytes.
- `off`: The offset at which to begin the copy. If this offset is greater than the length of the data element, nothing is copied. Pass 0 to start the copy at the beginning of the buffer.
- `length`: The length of the destination buffer.

<a id="return-value"></a>

## Return Value

The number of bytes that were copied into the buffer.

## See Also

### Data objects

- [xpc_data_create(\_:\_:)](xpc_data_create%28____%29.md): Creates an XPC object that represents a buffer of bytes.
- [xpc_data_create_with_dispatch_data(\_:)](xpc_data_create_with_dispatch_data%28__%29.md): Creates an XPC object that represents a buffer of bytes that the specified GCD data object describes.
- [xpc_data_get_bytes_ptr(\_:)](xpc_data_get_bytes_ptr%28__%29.md): Returns a pointer to the internal storage of a data object.
- [xpc_data_get_length(\_:)](xpc_data_get_length%28__%29.md): Returns the length of the data that an XPC data object encapsulates.

# xpc_data_get_bytes (Objective-C)

**Framework:** XPC  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Copies the bytes in a data object into the specified buffer.

## Declaration

```objectivec
extern size_t xpc_data_get_bytes(xpc_object_t xdata, void *buffer, size_t off, size_t length);
```

## Parameters

- `xdata`: The data object which is to be examined.
- `buffer`: The buffer in which to copy the data object’s bytes.
- `off`: The offset at which to begin the copy. If this offset is greater than the length of the data element, nothing is copied. Pass 0 to start the copy at the beginning of the buffer.
- `length`: The length of the destination buffer.

<a id="return-value"></a>

## Return Value

The number of bytes that were copied into the buffer.

## See Also

### Data objects

- [xpc_data_create](xpc_data_create%28____%29.md): Creates an XPC object that represents a buffer of bytes.
- [xpc_data_create_with_dispatch_data](xpc_data_create_with_dispatch_data%28__%29.md): Creates an XPC object that represents a buffer of bytes that the specified GCD data object describes.
- [xpc_data_get_bytes_ptr](xpc_data_get_bytes_ptr%28__%29.md): Returns a pointer to the internal storage of a data object.
- [xpc_data_get_length](xpc_data_get_length%28__%29.md): Returns the length of the data that an XPC data object encapsulates.

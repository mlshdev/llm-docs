> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpc_data_create(_:_:)](https://developer.apple.com/documentation/xpc/xpc_data_create(_:_:))

# xpc_data_create(\_:\_:) (Swift)

**Framework:** XPC  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates an XPC object that represents a buffer of bytes.

## Declaration

```swift
func xpc_data_create(_ bytes: UnsafeRawPointer?, _ length: Int) -> xpc_object_t
```

## Parameters

- `bytes`: The buffer of bytes which is to be boxed. You may create an empty data object by passing NULL for this parameter and 0 for the length. Passing NULL with any other length will result in undefined behavior.
- `length`: The number of bytes which are to be boxed.

<a id="return-value"></a>

## Return Value

A new data object.

<a id="Discussion"></a>

## Discussion

This method will copy the buffer given into internal storage. After calling this method, it is safe to dispose of the given buffer.

## See Also

### Data objects

- [xpc_data_create_with_dispatch_data(\_:)](xpc_data_create_with_dispatch_data%28__%29.md): Creates an XPC object that represents a buffer of bytes that the specified GCD data object describes.
- [xpc_data_get_bytes(\_:\_:\_:\_:)](xpc_data_get_bytes%28________%29.md): Copies the bytes in a data object into the specified buffer.
- [xpc_data_get_bytes_ptr(\_:)](xpc_data_get_bytes_ptr%28__%29.md): Returns a pointer to the internal storage of a data object.
- [xpc_data_get_length(\_:)](xpc_data_get_length%28__%29.md): Returns the length of the data that an XPC data object encapsulates.

# xpc_data_create (Objective-C)

**Framework:** XPC  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates an XPC object that represents a buffer of bytes.

## Declaration

```objectivec
extern xpc_object_txpc_data_create(const void *bytes, size_t length);
```

## Parameters

- `bytes`: The buffer of bytes which is to be boxed. You may create an empty data object by passing NULL for this parameter and 0 for the length. Passing NULL with any other length will result in undefined behavior.
- `length`: The number of bytes which are to be boxed.

<a id="return-value"></a>

## Return Value

A new data object.

<a id="Discussion"></a>

## Discussion

This method will copy the buffer given into internal storage. After calling this method, it is safe to dispose of the given buffer.

## See Also

### Data objects

- [xpc_data_create_with_dispatch_data](xpc_data_create_with_dispatch_data%28__%29.md): Creates an XPC object that represents a buffer of bytes that the specified GCD data object describes.
- [xpc_data_get_bytes](xpc_data_get_bytes%28________%29.md): Copies the bytes in a data object into the specified buffer.
- [xpc_data_get_bytes_ptr](xpc_data_get_bytes_ptr%28__%29.md): Returns a pointer to the internal storage of a data object.
- [xpc_data_get_length](xpc_data_get_length%28__%29.md): Returns the length of the data that an XPC data object encapsulates.

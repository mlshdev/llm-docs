> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpc_data_create_with_dispatch_data(_:)](https://developer.apple.com/documentation/xpc/xpc_data_create_with_dispatch_data(_:))

# xpc_data_create_with_dispatch_data(\_:) (Swift)

**Framework:** XPC  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates an XPC object that represents a buffer of bytes that the specified GCD data object describes.

## Declaration

```swift
func xpc_data_create_with_dispatch_data(_ ddata: dispatch_data_t) -> xpc_object_t
```

## Parameters

- `ddata`: The GCD data object containing the bytes which are to be boxed. This object is retained by the data object.

<a id="return-value"></a>

## Return Value

A new data object.

<a id="Discussion"></a>

## Discussion

The object returned by this method will refer to the buffer returned by [dispatch_data_create_map](../dispatch/dispatch_data_create_map.md). The point where XPC will make the call to [dispatch_data_create_map](../dispatch/dispatch_data_create_map.md) is undefined.

## See Also

### Data objects

- [xpc_data_create(\_:\_:)](xpc_data_create%28____%29.md): Creates an XPC object that represents a buffer of bytes.
- [xpc_data_get_bytes(\_:\_:\_:\_:)](xpc_data_get_bytes%28________%29.md): Copies the bytes in a data object into the specified buffer.
- [xpc_data_get_bytes_ptr(\_:)](xpc_data_get_bytes_ptr%28__%29.md): Returns a pointer to the internal storage of a data object.
- [xpc_data_get_length(\_:)](xpc_data_get_length%28__%29.md): Returns the length of the data that an XPC data object encapsulates.

# xpc_data_create_with_dispatch_data (Objective-C)

**Framework:** XPC  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates an XPC object that represents a buffer of bytes that the specified GCD data object describes.

## Declaration

```objectivec
extern xpc_object_txpc_data_create_with_dispatch_data(dispatch_data_t ddata);
```

## Parameters

- `ddata`: The GCD data object containing the bytes which are to be boxed. This object is retained by the data object.

<a id="return-value"></a>

## Return Value

A new data object.

<a id="Discussion"></a>

## Discussion

The object returned by this method will refer to the buffer returned by [dispatch_data_create_map](../dispatch/dispatch_data_create_map.md). The point where XPC will make the call to [dispatch_data_create_map](../dispatch/dispatch_data_create_map.md) is undefined.

## See Also

### Data objects

- [xpc_data_create](xpc_data_create%28____%29.md): Creates an XPC object that represents a buffer of bytes.
- [xpc_data_get_bytes](xpc_data_get_bytes%28________%29.md): Copies the bytes in a data object into the specified buffer.
- [xpc_data_get_bytes_ptr](xpc_data_get_bytes_ptr%28__%29.md): Returns a pointer to the internal storage of a data object.
- [xpc_data_get_length](xpc_data_get_length%28__%29.md): Returns the length of the data that an XPC data object encapsulates.

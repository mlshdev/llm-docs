> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpc_data_get_length(_:)](https://developer.apple.com/documentation/xpc/xpc_data_get_length(_:))

# xpc_data_get_length(\_:) (Swift)

**Framework:** XPC  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the length of the data that an XPC data object encapsulates.

## Declaration

```swift
func xpc_data_get_length(_ xdata: xpc_object_t) -> Int
```

## Parameters

- `xdata`: The data object which is to be examined.

<a id="return-value"></a>

## Return Value

The length of the underlying boxed data.

## See Also

### Data objects

- [xpc_data_create(\_:\_:)](xpc_data_create%28____%29.md): Creates an XPC object that represents a buffer of bytes.
- [xpc_data_create_with_dispatch_data(\_:)](xpc_data_create_with_dispatch_data%28__%29.md): Creates an XPC object that represents a buffer of bytes that the specified GCD data object describes.
- [xpc_data_get_bytes(\_:\_:\_:\_:)](xpc_data_get_bytes%28________%29.md): Copies the bytes in a data object into the specified buffer.
- [xpc_data_get_bytes_ptr(\_:)](xpc_data_get_bytes_ptr%28__%29.md): Returns a pointer to the internal storage of a data object.

# xpc_data_get_length (Objective-C)

**Framework:** XPC  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the length of the data that an XPC data object encapsulates.

## Declaration

```objectivec
extern size_t xpc_data_get_length(xpc_object_t xdata);
```

## Parameters

- `xdata`: The data object which is to be examined.

<a id="return-value"></a>

## Return Value

The length of the underlying boxed data.

## See Also

### Data objects

- [xpc_data_create](xpc_data_create%28____%29.md): Creates an XPC object that represents a buffer of bytes.
- [xpc_data_create_with_dispatch_data](xpc_data_create_with_dispatch_data%28__%29.md): Creates an XPC object that represents a buffer of bytes that the specified GCD data object describes.
- [xpc_data_get_bytes](xpc_data_get_bytes%28________%29.md): Copies the bytes in a data object into the specified buffer.
- [xpc_data_get_bytes_ptr](xpc_data_get_bytes_ptr%28__%29.md): Returns a pointer to the internal storage of a data object.

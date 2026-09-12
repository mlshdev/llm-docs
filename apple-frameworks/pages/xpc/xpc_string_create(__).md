> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpc_string_create(_:)](https://developer.apple.com/documentation/xpc/xpc_string_create(_:))

# xpc_string_create(\_:) (Swift)

**Framework:** XPC  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates an XPC object that represents a null-terminated C-string.

## Declaration

```swift
func xpc_string_create(_ string: UnsafePointer<CChar>) -> xpc_object_t
```

## Parameters

- `string`: The C-string which is to be boxed.

<a id="return-value"></a>

## Return Value

A new string object.

## See Also

### String objects

- [xpc_string_create_with_format_and_arguments(\_:\_:)](xpc_string_create_with_format_and_arguments%28____%29.md): Creates an XPC object that represents a C-string that the specified format string and argument list pointer generate.
- [xpc_string_get_length(\_:)](xpc_string_get_length%28__%29.md): Returns the length of the underlying string.
- [xpc_string_get_string_ptr(\_:)](xpc_string_get_string_ptr%28__%29.md): Returns a pointer to the internal storage of a string object.

# xpc_string_create (Objective-C)

**Framework:** XPC  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates an XPC object that represents a null-terminated C-string.

## Declaration

```objectivec
extern xpc_object_txpc_string_create(const char *string);
```

## Parameters

- `string`: The C-string which is to be boxed.

<a id="return-value"></a>

## Return Value

A new string object.

## See Also

### String objects

- [xpc_string_create_with_format](xpc_string_create_with_format.md): Creates an XPC object that represents a C-string that the specified format string and arguments generate.
- [xpc_string_create_with_format_and_arguments](xpc_string_create_with_format_and_arguments%28____%29.md): Creates an XPC object that represents a C-string that the specified format string and argument list pointer generate.
- [xpc_string_get_length](xpc_string_get_length%28__%29.md): Returns the length of the underlying string.
- [xpc_string_get_string_ptr](xpc_string_get_string_ptr%28__%29.md): Returns a pointer to the internal storage of a string object.

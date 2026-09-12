> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpc_array_append-c.macro](https://developer.apple.com/documentation/xpc/xpc_array_append-c.macro)

# XPC_ARRAY_APPEND

**Interface language:** Objective-C

**Framework:** XPC  
**Kind:** Macro  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A constant to pass as the destination index to the class of primitive XPC array setters indicating that the specified primitive needs to append to the array.

## Declaration

```objectivec
#define XPC_ARRAY_APPEND
```

## See Also

### Array objects

- [xpc_array_create](xpc_array_create%28____%29.md): Creates an XPC object that represents an array of XPC objects.
- [xpc_array_create_empty](xpc_array_create_empty%28%29.md): Creates an XPC object that represents an array of XPC objects.
- [xpc_array_create_connection](xpc_array_create_connection%28____%29.md): Creates a connection object from an array directly.
- [xpc_array_set_value](xpc_array_set_value%28______%29.md): Inserts the specified object into the array at the specified index.
- [xpc_array_get_value](xpc_array_get_value%28____%29.md): Returns the value at the specified index in the array.
- [xpc_array_append_value](xpc_array_append_value%28____%29.md): Appends an object to an XPC array.
- [xpc_array_get_count](xpc_array_get_count%28__%29.md): Returns the count of values in the array.
- [xpc_array_apply](xpc_array_apply%28____%29.md): Invokes the specified block for every value in the array.
- [xpc_array_dup_fd](xpc_array_dup_fd%28____%29.md): Gets a file descriptor from an array directly.
- [xpc_array_get_array](xpc_array_get_array%28____%29.md): Returns the array at the specified index in the array.
- [xpc_array_get_bool](xpc_array_get_bool%28____%29.md): Gets a Boolean primitive value from an array directly.
- [xpc_array_get_data](xpc_array_get_data%28______%29.md): Gets a pointer to the raw bytes of a data object from an array directly.
- [xpc_array_get_date](xpc_array_get_date%28____%29.md): Gets a date interval from an array directly.
- [xpc_array_get_dictionary](xpc_array_get_dictionary%28____%29.md): Returns the dictionary at the specified index in the array.
- [xpc_array_get_double](xpc_array_get_double%28____%29.md): Gets a double-precision floating point primitive value from an array directly.

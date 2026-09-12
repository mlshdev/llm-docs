> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpc_array_append-swift.var](https://developer.apple.com/documentation/xpc/xpc_array_append-swift.var)

# XPC_ARRAY_APPEND

**Framework:** XPC  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS · watchOS 2.0+

A constant to pass as the destination index to the class of primitive XPC array setters indicating that the specified primitive needs to append to the array.

## Declaration

```swift
var XPC_ARRAY_APPEND: size_t { get }
```

## See Also

### Array objects

- [XPCArray](xpcarray.md): An ordered random-access collection of XPC objects.
- [xpc_array_create(\_:\_:)](xpc_array_create%28____%29.md): Creates an XPC object that represents an array of XPC objects.
- [xpc_array_create_empty()](xpc_array_create_empty%28%29.md): Creates an XPC object that represents an array of XPC objects.
- [xpc_array_create_connection(\_:\_:)](xpc_array_create_connection%28____%29.md): Creates a connection object from an array directly.
- [xpc_array_set_value(\_:\_:\_:)](xpc_array_set_value%28______%29.md): Inserts the specified object into the array at the specified index.
- [xpc_array_get_value(\_:\_:)](xpc_array_get_value%28____%29.md): Returns the value at the specified index in the array.
- [xpc_array_append_value(\_:\_:)](xpc_array_append_value%28____%29.md): Appends an object to an XPC array.
- [xpc_array_get_count(\_:)](xpc_array_get_count%28__%29.md): Returns the count of values in the array.
- [xpc_array_apply(\_:\_:)](xpc_array_apply%28____%29.md): Invokes the specified block for every value in the array.
- [xpc_array_dup_fd(\_:\_:)](xpc_array_dup_fd%28____%29.md): Gets a file descriptor from an array directly.
- [xpc_array_get_array(\_:\_:)](xpc_array_get_array%28____%29.md): Returns the array at the specified index in the array.
- [xpc_array_get_bool(\_:\_:)](xpc_array_get_bool%28____%29.md): Gets a Boolean primitive value from an array directly.
- [xpc_array_get_data(\_:\_:\_:)](xpc_array_get_data%28______%29.md): Gets a pointer to the raw bytes of a data object from an array directly.
- [xpc_array_get_date(\_:\_:)](xpc_array_get_date%28____%29.md): Gets a date interval from an array directly.
- [xpc_array_get_dictionary(\_:\_:)](xpc_array_get_dictionary%28____%29.md): Returns the dictionary at the specified index in the array.

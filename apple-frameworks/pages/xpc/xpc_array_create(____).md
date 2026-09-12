> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpc_array_create(_:_:)](https://developer.apple.com/documentation/xpc/xpc_array_create(_:_:))

# xpc_array_create(\_:\_:) (Swift)

**Framework:** XPC  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates an XPC object that represents an array of XPC objects.

## Declaration

```swift
func xpc_array_create(_ objects: UnsafePointer<xpc_object_t>?, _ count: Int) -> xpc_object_t
```

## Parameters

- `objects`: An array of XPC objects which is to be boxed. The order of this array is preserved in the object. If this array contains a NULL value, the behavior is undefined. This parameter may be NULL only if the count is 0.
- `count`: The number of objects in the given array. If the number passed is less than the actual number of values in the array, only the specified number of items are inserted into the resulting array. If the number passed is more than the the actual number of values, the behavior is undefined.

<a id="return-value"></a>

## Return Value

A new array object.

<a id="Discussion"></a>

## Discussion

This array must be contiguous and cannot contain any NULL values. If you wish to insert the equivalent of a NULL value, you may use the result of [xpc_null_create()](xpc_null_create%28%29.md).

## See Also

### Array objects

- [XPCArray](xpcarray.md): An ordered random-access collection of XPC objects.
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
- [xpc_array_get_double(\_:\_:)](xpc_array_get_double%28____%29.md): Gets a double-precision floating point primitive value from an array directly.

# xpc_array_create (Objective-C)

**Framework:** XPC  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates an XPC object that represents an array of XPC objects.

## Declaration

```objectivec
extern xpc_object_txpc_array_create(xpc_object_t const*objects, size_t count);
```

## Parameters

- `objects`: An array of XPC objects which is to be boxed. The order of this array is preserved in the object. If this array contains a NULL value, the behavior is undefined. This parameter may be NULL only if the count is 0.
- `count`: The number of objects in the given array. If the number passed is less than the actual number of values in the array, only the specified number of items are inserted into the resulting array. If the number passed is more than the the actual number of values, the behavior is undefined.

<a id="return-value"></a>

## Return Value

A new array object.

<a id="Discussion"></a>

## Discussion

This array must be contiguous and cannot contain any NULL values. If you wish to insert the equivalent of a NULL value, you may use the result of [xpc_null_create](xpc_null_create%28%29.md).

## See Also

### Array objects

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
- [xpc_array_get_int64](xpc_array_get_int64%28____%29.md): Gets a 64-bit integer primitive value from an array directly.

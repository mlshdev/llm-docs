> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpc_array_apply(_:_:)](https://developer.apple.com/documentation/xpc/xpc_array_apply(_:_:))

# xpc_array_apply(\_:\_:) (Swift)

**Framework:** XPC  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Invokes the specified block for every value in the array.

## Declaration

```swift
func xpc_array_apply(_ xarray: xpc_object_t, _ applier: (Int, xpc_object_t) -> Bool) -> Bool
```

## Parameters

- `xarray`: The array object which is to be examined.
- `applier`: The block which this function applies to every element in the array.

<a id="return-value"></a>

## Return Value

A Boolean indicating whether iteration of the array completed successfully. Iteration will only fail if the applier block returns false.

<a id="Discussion"></a>

## Discussion

You should not modify an array’s contents during iteration. The array indexes are iterated in order.

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
- [xpc_array_dup_fd(\_:\_:)](xpc_array_dup_fd%28____%29.md): Gets a file descriptor from an array directly.
- [xpc_array_get_array(\_:\_:)](xpc_array_get_array%28____%29.md): Returns the array at the specified index in the array.
- [xpc_array_get_bool(\_:\_:)](xpc_array_get_bool%28____%29.md): Gets a Boolean primitive value from an array directly.
- [xpc_array_get_data(\_:\_:\_:)](xpc_array_get_data%28______%29.md): Gets a pointer to the raw bytes of a data object from an array directly.
- [xpc_array_get_date(\_:\_:)](xpc_array_get_date%28____%29.md): Gets a date interval from an array directly.
- [xpc_array_get_dictionary(\_:\_:)](xpc_array_get_dictionary%28____%29.md): Returns the dictionary at the specified index in the array.
- [xpc_array_get_double(\_:\_:)](xpc_array_get_double%28____%29.md): Gets a double-precision floating point primitive value from an array directly.

# xpc_array_apply (Objective-C)

**Framework:** XPC  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Invokes the specified block for every value in the array.

## Declaration

```objectivec
extern bool xpc_array_apply(xpc_object_t xarray, xpc_array_applier_t applier);
```

## Parameters

- `xarray`: The array object which is to be examined.
- `applier`: The block which this function applies to every element in the array.

<a id="return-value"></a>

## Return Value

A Boolean indicating whether iteration of the array completed successfully. Iteration will only fail if the applier block returns false.

<a id="Discussion"></a>

## Discussion

You should not modify an array’s contents during iteration. The array indexes are iterated in order.

## See Also

### Array objects

- [xpc_array_create](xpc_array_create%28____%29.md): Creates an XPC object that represents an array of XPC objects.
- [xpc_array_create_empty](xpc_array_create_empty%28%29.md): Creates an XPC object that represents an array of XPC objects.
- [xpc_array_create_connection](xpc_array_create_connection%28____%29.md): Creates a connection object from an array directly.
- [xpc_array_set_value](xpc_array_set_value%28______%29.md): Inserts the specified object into the array at the specified index.
- [xpc_array_get_value](xpc_array_get_value%28____%29.md): Returns the value at the specified index in the array.
- [xpc_array_append_value](xpc_array_append_value%28____%29.md): Appends an object to an XPC array.
- [xpc_array_get_count](xpc_array_get_count%28__%29.md): Returns the count of values in the array.
- [xpc_array_dup_fd](xpc_array_dup_fd%28____%29.md): Gets a file descriptor from an array directly.
- [xpc_array_get_array](xpc_array_get_array%28____%29.md): Returns the array at the specified index in the array.
- [xpc_array_get_bool](xpc_array_get_bool%28____%29.md): Gets a Boolean primitive value from an array directly.
- [xpc_array_get_data](xpc_array_get_data%28______%29.md): Gets a pointer to the raw bytes of a data object from an array directly.
- [xpc_array_get_date](xpc_array_get_date%28____%29.md): Gets a date interval from an array directly.
- [xpc_array_get_dictionary](xpc_array_get_dictionary%28____%29.md): Returns the dictionary at the specified index in the array.
- [xpc_array_get_double](xpc_array_get_double%28____%29.md): Gets a double-precision floating point primitive value from an array directly.
- [xpc_array_get_int64](xpc_array_get_int64%28____%29.md): Gets a 64-bit integer primitive value from an array directly.

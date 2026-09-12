> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpcarray](https://developer.apple.com/documentation/xpc/xpcarray)

# XPCArray

**Framework:** XPC  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

An ordered random-access collection of XPC objects.

## Declaration

```swift
struct XPCArray
```

## Topics

### Creating an array

- [init()](xpcarray/init%28%29.md): Creates a new, empty array.
- [init(\_:)](xpcarray/init%28__%29.md): Creates a new array that contains the given XPC object.
- [copy(into:)](xpcarray/copy%28into_%29.md): Copies the elements of the array to a different array.

### Inspecting an array

- [isEmpty](xpcarray/isempty.md): A Boolean value that indicates whether the array is empty.
- [count](xpcarray/count.md): The number of elements in the array.

### Accessing elements

- [subscript(\_:)](xpcarray/subscript%28__%29-1s7qq.md): Reads and writes the value at the given index as an XPC dictionary.
- [subscript(\_:)](xpcarray/subscript%28__%29-6c9gh.md): Reads and writes the value at the given index as a string.
- [subscript(\_:)](xpcarray/subscript%28__%29-i6v5.md): Reads and writes the value at the given index as a Boolean value.
- [subscript(\_:)](xpcarray/subscript%28__%29-56wjj.md): Reads and writes the value at the given index as an XPC object.
- [subscript(\_:)](xpcarray/subscript%28__%29-8wubg.md): Reads and writes the value at the given index as a floating point value.
- [subscript(\_:)](xpcarray/subscript%28__%29-9x9ho.md): Reads and writes the value at the given index as an unsigned integer.
- [subscript(\_:)](xpcarray/subscript%28__%29-2f94n.md): Reads and writes the value at the given index as a signed integer.
- [subscript(\_:as:)](xpcarray/subscript%28__as_%29-3ae6x.md): Reads the value associated with the given key as an XPC dictionary.
- [subscript(\_:as:)](xpcarray/subscript%28__as_%29-9ukjj.md): Reads and writes the value at the given index as a string.
- [subscript(\_:as:)](xpcarray/subscript%28__as_%29-1bilh.md): Reads and writes the value at the given index as a Boolean value.
- [subscript(\_:as:)](xpcarray/subscript%28__as_%29-931lh.md): Reads and writes the value at the given index as an XPC object.
- [subscript(\_:as:)](xpcarray/subscript%28__as_%29-3tgp4.md): Reads and writes the value at the given index as an XPC object.
- [subscript(\_:as:)](xpcarray/subscript%28__as_%29-2hql9.md): Reads and writes the value at the given index as a floating point value.
- [subscript(\_:as:)](xpcarray/subscript%28__as_%29-6grs4.md): Reads and writes the value at the given index as an integer value.
- [subscript(\_:as:default:)](xpcarray/subscript%28__as_default_%29-2bn95.md): Reads and writes the value at the given index as a Boolean value, falling back to the given default value.
- [subscript(\_:as:default:)](xpcarray/subscript%28__as_default_%29-3k2qm.md): Reads and writes the value at the given index as a floating point value, falling back to the given default value.
- [withUnsafeUnderlyingArray(\_:)](xpcarray/withunsafeunderlyingarray%28__%29.md): Calls a closure with an unsafe reference to the array.

### Iterating over an array’s elements

- [forEach(\_:)](xpcarray/foreach%28__%29-6obs3.md): Calls the given closure with each element in the array in the same order as a for-in loop.
- [forEach(\_:)](xpcarray/foreach%28__%29-2ib8a.md): Calls the given closure with an index and element of the array in the same order as a for-in loop.

### Transforming an array

- [map(\_:)](xpcarray/map%28__%29.md): Returns an array containing the results of mapping the given closure over the sequence’s elements.

### Supporting types

- [XPCArray.IndexValuePair](xpcarray/indexvaluepair.md): A type that contains an index and the object at that index.

### Subscripts

- [subscript(\_:)](xpcarray/subscript%28__%29-6ud0q.md): Get or set a value in this array as an XPCArray.
- [subscript(\_:)](xpcarray/subscript%28__%29-7io5d.md): Get or set a value in this array as an endpoint.
- [subscript(\_:)](xpcarray/subscript%28__%29-9akd5.md): Get or set a value in this array as a UUID.
- [subscript(\_:)](xpcarray/subscript%28__%29-9c21w.md): Get or set a value in this array as a file descriptor.
- [subscript(\_:)](xpcarray/subscript%28__%29-us15.md): Get or set a value in this array as data.
- [subscript(\_:as:)](xpcarray/subscript%28__as_%29-4xkvt.md): Get a value in this array as a UUID.
- [subscript(\_:as:)](xpcarray/subscript%28__as_%29-54977.md): Get a value in this array as a file descriptor.
- [subscript(\_:as:)](xpcarray/subscript%28__as_%29-5g1u8.md): Get a value in this array as an endpoint.
- [subscript(\_:as:)](xpcarray/subscript%28__as_%29-6vjz.md): Get a value in this array as an XPCArray.
- [subscript(\_:as:)](xpcarray/subscript%28__as_%29-96zf2.md): Get a value in this array as data.
- [subscript(\_:as:default:)](xpcarray/subscript%28__as_default_%29-3h2ng.md): Get a value in this array as a file descriptor.
- [subscript(\_:as:default:)](xpcarray/subscript%28__as_default_%29-46zsb.md): Get a value in this array as an endpoint.
- [subscript(\_:as:default:)](xpcarray/subscript%28__as_default_%29-4ey7n.md): Get a value in this array as a UUID.
- [subscript(\_:as:default:)](xpcarray/subscript%28__as_default_%29-645o4.md): Get a value in this array as an XPCArray.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Array objects

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
- [xpc_array_get_double(\_:\_:)](xpc_array_get_double%28____%29.md): Gets a double-precision floating point primitive value from an array directly.

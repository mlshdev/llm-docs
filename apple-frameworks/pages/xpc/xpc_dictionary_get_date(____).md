> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpc_dictionary_get_date(_:_:)](https://developer.apple.com/documentation/xpc/xpc_dictionary_get_date(_:_:))

# xpc_dictionary_get_date(\_:\_:) (Swift)

**Framework:** XPC  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Gets a date value from a dictionary directly.

## Declaration

```swift
func xpc_dictionary_get_date(_ xdict: xpc_object_t, _ key: UnsafePointer<CChar>) -> Int64
```

## Parameters

- `xdict`: The dictionary object which is to be examined.
- `key`: The key whose value is to be obtained.

<a id="return-value"></a>

## Return Value

The underlying date interval for the specified key. 0 if the value for the specified key is not a date value or if there is no value for the specified key.

## See Also

### Dictionary objects

- [XPCDictionary](xpcdictionary.md): A type that contains key-value pairs, notably used as the container of messages between a client and listener.
- [xpc_dictionary_create(\_:\_:\_:)](xpc_dictionary_create%28______%29.md): Creates an XPC object that represents a dictionary of XPC objects keyed to C-strings.
- [xpc_dictionary_create_empty()](xpc_dictionary_create_empty%28%29.md): Creates an XPC object that represents a dictionary of XPC objects keyed to C-strings.
- [xpc_dictionary_create_connection(\_:\_:)](xpc_dictionary_create_connection%28____%29.md): Creates a connection from a dictionary directly.
- [xpc_dictionary_create_reply(\_:)](xpc_dictionary_create_reply%28__%29.md): Creates a dictionary that is in reply to the specified dictionary.
- [xpc_dictionary_set_value(\_:\_:\_:)](xpc_dictionary_set_value%28______%29.md): Sets the value for the specified key to the specified object.
- [xpc_dictionary_get_count(\_:)](xpc_dictionary_get_count%28__%29.md): Returns the number of values in the dictionary.
- [xpc_dictionary_get_value(\_:\_:)](xpc_dictionary_get_value%28____%29.md): Returns the value for the specified key.
- [xpc_dictionary_apply(\_:\_:)](xpc_dictionary_apply%28____%29.md): Invokes the specified block for every key-value pair in the dictionary.
- [xpc_dictionary_dup_fd(\_:\_:)](xpc_dictionary_dup_fd%28____%29.md): Creates a file descriptor from a dictionary directly.
- [xpc_dictionary_get_array(\_:\_:)](xpc_dictionary_get_array%28____%29.md): Returns the array value for the specified key.
- [xpc_dictionary_get_bool(\_:\_:)](xpc_dictionary_get_bool%28____%29.md): Gets a Boolean primitive value from a dictionary directly.
- [xpc_dictionary_get_data(\_:\_:\_:)](xpc_dictionary_get_data%28______%29.md): Gets a raw data value from a dictionary directly.
- [xpc_dictionary_get_dictionary(\_:\_:)](xpc_dictionary_get_dictionary%28____%29.md): Returns the dictionary value for the specified key.
- [xpc_dictionary_get_double(\_:\_:)](xpc_dictionary_get_double%28____%29.md): Gets a double-precision floating point primitive value from a dictionary directly.

# xpc_dictionary_get_date (Objective-C)

**Framework:** XPC  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Gets a date value from a dictionary directly.

## Declaration

```objectivec
extern int64_t xpc_dictionary_get_date(xpc_object_t xdict, const char *key);
```

## Parameters

- `xdict`: The dictionary object which is to be examined.
- `key`: The key whose value is to be obtained.

<a id="return-value"></a>

## Return Value

The underlying date interval for the specified key. 0 if the value for the specified key is not a date value or if there is no value for the specified key.

## See Also

### Dictionary objects

- [xpc_dictionary_create](xpc_dictionary_create%28______%29.md): Creates an XPC object that represents a dictionary of XPC objects keyed to C-strings.
- [xpc_dictionary_create_empty](xpc_dictionary_create_empty%28%29.md): Creates an XPC object that represents a dictionary of XPC objects keyed to C-strings.
- [xpc_dictionary_create_connection](xpc_dictionary_create_connection%28____%29.md): Creates a connection from a dictionary directly.
- [xpc_dictionary_create_reply](xpc_dictionary_create_reply%28__%29.md): Creates a dictionary that is in reply to the specified dictionary.
- [xpc_dictionary_set_value](xpc_dictionary_set_value%28______%29.md): Sets the value for the specified key to the specified object.
- [xpc_dictionary_get_count](xpc_dictionary_get_count%28__%29.md): Returns the number of values in the dictionary.
- [xpc_dictionary_get_value](xpc_dictionary_get_value%28____%29.md): Returns the value for the specified key.
- [xpc_dictionary_apply](xpc_dictionary_apply%28____%29.md): Invokes the specified block for every key-value pair in the dictionary.
- [xpc_dictionary_dup_fd](xpc_dictionary_dup_fd%28____%29.md): Creates a file descriptor from a dictionary directly.
- [xpc_dictionary_get_array](xpc_dictionary_get_array%28____%29.md): Returns the array value for the specified key.
- [xpc_dictionary_get_bool](xpc_dictionary_get_bool%28____%29.md): Gets a Boolean primitive value from a dictionary directly.
- [xpc_dictionary_get_data](xpc_dictionary_get_data%28______%29.md): Gets a raw data value from a dictionary directly.
- [xpc_dictionary_get_dictionary](xpc_dictionary_get_dictionary%28____%29.md): Returns the dictionary value for the specified key.
- [xpc_dictionary_get_double](xpc_dictionary_get_double%28____%29.md): Gets a double-precision floating point primitive value from a dictionary directly.
- [xpc_dictionary_get_int64](xpc_dictionary_get_int64%28____%29.md): Gets a 64-bit integer primitive value from a dictionary directly.

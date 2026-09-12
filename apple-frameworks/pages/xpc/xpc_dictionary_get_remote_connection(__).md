> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpc_dictionary_get_remote_connection(_:)](https://developer.apple.com/documentation/xpc/xpc_dictionary_get_remote_connection(_:))

# xpc_dictionary_get_remote_connection(\_:) (Swift)

**Framework:** XPC  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the connection that receives the dictionary.

## Declaration

```swift
func xpc_dictionary_get_remote_connection(_ xdict: xpc_object_t) -> xpc_connection_t?
```

## Parameters

- `xdict`: The dictionary object which is to be examined.

<a id="return-value"></a>

## Return Value

If the dictionary was received by a connection event handler or a dictionary created through [xpc_dictionary_create_reply(\_:)](xpc_dictionary_create_reply%28__%29.md), a connection object over which a reply message can be sent is returned. For any other dictionary, NULL is returned.

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
- [xpc_dictionary_get_date(\_:\_:)](xpc_dictionary_get_date%28____%29.md): Gets a date value from a dictionary directly.
- [xpc_dictionary_get_dictionary(\_:\_:)](xpc_dictionary_get_dictionary%28____%29.md): Returns the dictionary value for the specified key.

# xpc_dictionary_get_remote_connection (Objective-C)

**Framework:** XPC  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the connection that receives the dictionary.

## Declaration

```objectivec
extern xpc_connection_txpc_dictionary_get_remote_connection(xpc_object_t xdict);
```

## Parameters

- `xdict`: The dictionary object which is to be examined.

<a id="return-value"></a>

## Return Value

If the dictionary was received by a connection event handler or a dictionary created through [xpc_dictionary_create_reply](xpc_dictionary_create_reply%28__%29.md), a connection object over which a reply message can be sent is returned. For any other dictionary, NULL is returned.

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
- [xpc_dictionary_get_date](xpc_dictionary_get_date%28____%29.md): Gets a date value from a dictionary directly.
- [xpc_dictionary_get_dictionary](xpc_dictionary_get_dictionary%28____%29.md): Returns the dictionary value for the specified key.
- [xpc_dictionary_get_double](xpc_dictionary_get_double%28____%29.md): Gets a double-precision floating point primitive value from a dictionary directly.

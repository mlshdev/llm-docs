> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpcdictionary](https://developer.apple.com/documentation/xpc/xpcdictionary)

# XPCDictionary

**Framework:** XPC  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

A type that contains key-value pairs, notably used as the container of messages between a client and listener.

## Declaration

```swift
struct XPCDictionary
```

## Topics

### Creating a dictionary

- [init()](xpcdictionary/init%28%29.md): Creates an empty dictionary.
- [init(\_:)](xpcdictionary/init%28__%29.md): Creates a dictionary using the keys and values in the specified object parameter.
- [copy(into:)](xpcdictionary/copy%28into_%29.md): Copies the keys and values of the dictionary to a different dictionary.

### Replying to client messages

- [reply(\_:)](xpcdictionary/reply%28__%29.md): Sends a reply to the originator of the dictionary.

### Inspecting a dictionary

- [isEmpty](xpcdictionary/isempty.md): A Boolean value that indicates whether the dictionary is empty.
- [count](xpcdictionary/count.md): The number of key-value pairs in the dictionary.

### Accessing keys and values

- [keys](xpcdictionary/keys.md): A collection containing just the keys of the dictionary.
- [values](xpcdictionary/values.md): A collection containing just the values of the dictionary.
- [subscript(\_:)](xpcdictionary/subscript%28__%29-4hbmg.md): Reads and writes the value associated with the given key as an XPC dictionary.
- [subscript(\_:)](xpcdictionary/subscript%28__%29-80fs2.md): Reads and writes the value associated with the given key as a string.
- [subscript(\_:)](xpcdictionary/subscript%28__%29-gas6.md): Reads and writes the value associated with the given key as a Boolean value.
- [subscript(\_:)](xpcdictionary/subscript%28__%29-4j21u.md): Reads and writes the value associated with the given key as an XPC object.
- [subscript(\_:)](xpcdictionary/subscript%28__%29-8gyze.md): Reads and writes the value associated with the given key as a floating point value.
- [subscript(\_:)](xpcdictionary/subscript%28__%29-4vrsa.md): Reads and writes the value associated with the given key as an unsigned integer value.
- [subscript(\_:)](xpcdictionary/subscript%28__%29-3i01t.md): Reads and writes the value associated with the given key as a signed integer value.
- [subscript(\_:as:)](xpcdictionary/subscript%28__as_%29-1mm7n.md): Reads the value associated with the given key as an XPC dictionary.
- [subscript(\_:as:)](xpcdictionary/subscript%28__as_%29-4zxc8.md): Reads and writes the value associated with the given key as a string.
- [subscript(\_:as:)](xpcdictionary/subscript%28__as_%29-18db5.md): Reads and writes the value associated with the given key as a Boolean value.
- [subscript(\_:as:)](xpcdictionary/subscript%28__as_%29-5y39v.md): Reads and writes the value associated with the given key as an XPC object.
- [subscript(\_:as:)](xpcdictionary/subscript%28__as_%29-qjxa.md): Reads and writes the value associated with the given key as an XPC object.
- [subscript(\_:as:)](xpcdictionary/subscript%28__as_%29-3mzgc.md): Reads and writes the value associated with the given key as a floating point value.
- [subscript(\_:as:)](xpcdictionary/subscript%28__as_%29-119cl.md): Reads and writes the value associated with the given key as an integer value.
- [subscript(\_:as:default:)](xpcdictionary/subscript%28__as_default_%29-5ufgs.md): Reads and writes the value associated with the given key as a Boolean value, falling back to the given default value.
- [subscript(\_:as:default:)](xpcdictionary/subscript%28__as_default_%29-4ssx3.md): Reads and writes the value associated with the given key converted to the specified type, falling back to the given default value.
- [withUnsafeUnderlyingDictionary(\_:)](xpcdictionary/withunsafeunderlyingdictionary%28__%29.md): Calls a closure with an unsafe reference to the dictionary.

### Removing keys and values

- [removeValue(forKey:)](xpcdictionary/removevalue%28forkey_%29.md): Removes the given key and its associated value from the dictionary.

### Supporting types

- [XPCDictionary.KeyValuePair](xpcdictionary/keyvaluepair.md): A type that contains a dictionary’s key-value pair.

### Iterating over keys and values

- [forEach(\_:)](xpcdictionary/foreach%28__%29-9hufx.md): Calls the given closure with each element in the dictionary in the same order as a for-in loop.
- [forEach(\_:)](xpcdictionary/foreach%28__%29-6riqn.md): Calls the given closure with each key and value in the dictionary in the same order as a for-in loop.

### Transforming a dictionary

- [map(\_:)](xpcdictionary/map%28__%29.md): Returns an array containing the results of mapping the given closure over the sequence’s elements.

### Subscripts

- [subscript(\_:)](xpcdictionary/subscript%28__%29-11qvo.md): Get or set a value in this dictionary as a UUID.
- [subscript(\_:)](xpcdictionary/subscript%28__%29-2p7tp.md): Get or set an `XPCEndpoint` value in this dictionary.
- [subscript(\_:)](xpcdictionary/subscript%28__%29-hl1w.md): Get or set a value in this dictionary as a file descriptor.
- [subscript(\_:)](xpcdictionary/subscript%28__%29-n49r.md): Get or set a value in this dictionary as data.
- [subscript(\_:)](xpcdictionary/subscript%28__%29-u6bo.md): Get or set a value in this dictionary as an XPCArray.
- [subscript(\_:as:)](xpcdictionary/subscript%28__as_%29-1nvet.md): Get a value in this dictionary as data.
- [subscript(\_:as:)](xpcdictionary/subscript%28__as_%29-279le.md): Get a value in this dictionary as a file descriptor.
- [subscript(\_:as:)](xpcdictionary/subscript%28__as_%29-58a41.md): Get a value in this dictionary as an XPCArray.
- [subscript(\_:as:)](xpcdictionary/subscript%28__as_%29-7rdzi.md): Get an `XPCEndpoint` value in this dictionary.
- [subscript(\_:as:)](xpcdictionary/subscript%28__as_%29-91g9b.md): Get a value in this dictionary as a UUID.
- [subscript(\_:as:default:)](xpcdictionary/subscript%28__as_default_%29-17z80.md): Get a value in this dictionary as an XPCArray.
- [subscript(\_:as:default:)](xpcdictionary/subscript%28__as_default_%29-51ffh.md): Get a value in this dictionary as a file descriptor.
- [subscript(\_:as:default:)](xpcdictionary/subscript%28__as_default_%29-vwea.md): Get a value in this dictionary as a UUID.

### Default Implementations

- [ExpressibleByDictionaryLiteral Implementations](xpcdictionary/expressiblebydictionaryliteral-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [ExpressibleByDictionaryLiteral](https://developer.apple.com/documentation/swift/expressiblebydictionaryliteral)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Dictionary objects

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
- [xpc_dictionary_get_double(\_:\_:)](xpc_dictionary_get_double%28____%29.md): Gets a double-precision floating point primitive value from a dictionary directly.

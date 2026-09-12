> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpc_hash(_:)](https://developer.apple.com/documentation/xpc/xpc_hash(_:))

# xpc_hash(\_:) (Swift)

**Framework:** XPC  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Calculates a hash value for the specified object.

## Declaration

```swift
func xpc_hash(_ object: xpc_object_t) -> Int
```

## Parameters

- `object`: The object for which to calculate a hash value. This value may be modded with a table size for insertion into a dictionary-like data structure.

<a id="return-value"></a>

## Return Value

The calculated hash value.

<a id="Discussion"></a>

## Discussion

Note that the computed hash values for any particular type and value of an object can change from across releases and platforms and should not be assumed to be constant across all time and space or stored persistently.

## See Also

### Identity

- [xpc_get_type(\_:)](xpc_get_type%28__%29.md): Returns the type of an object.
- [xpc_type_get_name(\_:)](xpc_type_get_name%28__%29.md): Returns a string that describes an XPC object type.

# xpc_hash (Objective-C)

**Framework:** XPC  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Calculates a hash value for the specified object.

## Declaration

```objectivec
extern size_t xpc_hash(xpc_object_t object);
```

## Parameters

- `object`: The object for which to calculate a hash value. This value may be modded with a table size for insertion into a dictionary-like data structure.

<a id="return-value"></a>

## Return Value

The calculated hash value.

<a id="Discussion"></a>

## Discussion

Note that the computed hash values for any particular type and value of an object can change from across releases and platforms and should not be assumed to be constant across all time and space or stored persistently.

## See Also

### Identity

- [xpc_get_type](xpc_get_type%28__%29.md): Returns the type of an object.
- [xpc_type_get_name](xpc_type_get_name%28__%29.md): Returns a string that describes an XPC object type.

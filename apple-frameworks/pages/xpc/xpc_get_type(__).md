> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpc_get_type(_:)](https://developer.apple.com/documentation/xpc/xpc_get_type(_:))

# xpc_get_type(\_:) (Swift)

**Framework:** XPC  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the type of an object.

## Declaration

```swift
func xpc_get_type(_ object: xpc_object_t) -> xpc_type_t
```

## Parameters

- `object`: The object to examine.

<a id="return-value"></a>

## Return Value

An opaque pointer describing the type of the object. This pointer is suitable for direct comparison to exported type constants with the equality operator.

## See Also

### Identity

- [xpc_type_get_name(\_:)](xpc_type_get_name%28__%29.md): Returns a string that describes an XPC object type.
- [xpc_hash(\_:)](xpc_hash%28__%29.md): Calculates a hash value for the specified object.

# xpc_get_type (Objective-C)

**Framework:** XPC  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the type of an object.

## Declaration

```objectivec
extern xpc_type_txpc_get_type(xpc_object_t object);
```

## Parameters

- `object`: The object to examine.

<a id="return-value"></a>

## Return Value

An opaque pointer describing the type of the object. This pointer is suitable for direct comparison to exported type constants with the equality operator.

## See Also

### Identity

- [xpc_type_get_name](xpc_type_get_name%28__%29.md): Returns a string that describes an XPC object type.
- [xpc_hash](xpc_hash%28__%29.md): Calculates a hash value for the specified object.

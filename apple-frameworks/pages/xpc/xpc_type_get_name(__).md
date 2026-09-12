> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpc_type_get_name(_:)](https://developer.apple.com/documentation/xpc/xpc_type_get_name(_:))

# xpc_type_get_name(\_:) (Swift)

**Framework:** XPC  
**Kind:** Function  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a string that describes an XPC object type.

## Declaration

```swift
func xpc_type_get_name(_ type: xpc_type_t) -> UnsafePointer<CChar>
```

## Parameters

- `type`: The type to describe.

<a id="return-value"></a>

## Return Value

A string describing the type of an object, like `"string"` or `"int64"`. This string should not be freed or modified.

## See Also

### Identity

- [xpc_get_type(\_:)](xpc_get_type%28__%29.md): Returns the type of an object.
- [xpc_hash(\_:)](xpc_hash%28__%29.md): Calculates a hash value for the specified object.

# xpc_type_get_name (Objective-C)

**Framework:** XPC  
**Kind:** Function  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a string that describes an XPC object type.

## Declaration

```objectivec
extern const char *xpc_type_get_name(xpc_type_t type);
```

## Parameters

- `type`: The type to describe.

<a id="return-value"></a>

## Return Value

A string describing the type of an object, like `"string"` or `"int64"`. This string should not be freed or modified.

## See Also

### Identity

- [xpc_get_type](xpc_get_type%28__%29.md): Returns the type of an object.
- [xpc_hash](xpc_hash%28__%29.md): Calculates a hash value for the specified object.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpc_uuid_get_bytes(_:)](https://developer.apple.com/documentation/xpc/xpc_uuid_get_bytes(_:))

# xpc_uuid_get_bytes(\_:) (Swift)

**Framework:** XPC  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Copies the UUID that an XPC UUID object boxes into the specified UUID buffer.

## Declaration

```swift
func xpc_uuid_get_bytes(_ xuuid: xpc_object_t) -> UnsafePointer<UInt8>?
```

## Parameters

- `xuuid`: The UUID object which is to be examined.

<a id="return-value"></a>

## Return Value

The underlying `uuid_t` bytes. The returned pointer may be safely passed to the `uuid(3)` APIs.

## See Also

### UUID objects

- [xpc_uuid_create(\_:)](xpc_uuid_create%28__%29.md): Creates an XPC object that represents a universally unique identifier (UUID).

# xpc_uuid_get_bytes (Objective-C)

**Framework:** XPC  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Copies the UUID that an XPC UUID object boxes into the specified UUID buffer.

## Declaration

```objectivec
extern const uint8_t *xpc_uuid_get_bytes(xpc_object_t xuuid);
```

## Parameters

- `xuuid`: The UUID object which is to be examined.

<a id="return-value"></a>

## Return Value

The underlying `uuid_t` bytes. The returned pointer may be safely passed to the `uuid(3)` APIs.

## See Also

### UUID objects

- [xpc_uuid_create](xpc_uuid_create%28__%29.md): Creates an XPC object that represents a universally unique identifier (UUID).

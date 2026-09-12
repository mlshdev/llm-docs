> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpc_uuid_create(_:)](https://developer.apple.com/documentation/xpc/xpc_uuid_create(_:))

# xpc_uuid_create(\_:) (Swift)

**Framework:** XPC  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates an XPC object that represents a universally unique identifier (UUID).

## Declaration

```swift
func xpc_uuid_create(_ uuid: UnsafePointer<UInt8>) -> xpc_object_t
```

## Parameters

- `uuid`: The UUID which is to be boxed.

<a id="return-value"></a>

## Return Value

A new UUID object.

## See Also

### UUID objects

- [xpc_uuid_get_bytes(\_:)](xpc_uuid_get_bytes%28__%29.md): Copies the UUID that an XPC UUID object boxes into the specified UUID buffer.

# xpc_uuid_create (Objective-C)

**Framework:** XPC  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates an XPC object that represents a universally unique identifier (UUID).

## Declaration

```objectivec
extern xpc_object_txpc_uuid_create(const uuid_t uuid);
```

## Parameters

- `uuid`: The UUID which is to be boxed.

<a id="return-value"></a>

## Return Value

A new UUID object.

## See Also

### UUID objects

- [xpc_uuid_get_bytes](xpc_uuid_get_bytes%28__%29.md): Copies the UUID that an XPC UUID object boxes into the specified UUID buffer.

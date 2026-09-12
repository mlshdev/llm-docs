> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpc_endpoint_create(_:)](https://developer.apple.com/documentation/xpc/xpc_endpoint_create(_:))

# xpc_endpoint_create(\_:) (Swift)

**Framework:** XPC  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a new endpoint from a connection that is suitable for embedding into messages.

## Declaration

```swift
func xpc_endpoint_create(_ connection: xpc_connection_t) -> xpc_endpoint_t
```

## Parameters

- `connection`: Only connections obtained through calls to one of the `xpc_connection_create` functions may be given to this API. Passing any other type of connection is not supported and will result in undefined behavior.

<a id="return-value"></a>

## Return Value

A new endpoint object.

## See Also

### Endpoints

- [xpc_endpoint_t](xpc_endpoint_t.md): A type that represents a connection in serialized form.

# xpc_endpoint_create (Objective-C)

**Framework:** XPC  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a new endpoint from a connection that is suitable for embedding into messages.

## Declaration

```objectivec
extern xpc_endpoint_txpc_endpoint_create(xpc_connection_t connection);
```

## Parameters

- `connection`: Only connections obtained through calls to one of the `xpc_connection_create` functions may be given to this API. Passing any other type of connection is not supported and will result in undefined behavior.

<a id="return-value"></a>

## Return Value

A new endpoint object.

## See Also

### Endpoints

- [xpc_endpoint_t](xpc_endpoint_t.md): A type that represents a connection in serialized form.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpc_connection_create_from_endpoint(_:)](https://developer.apple.com/documentation/xpc/xpc_connection_create_from_endpoint(_:))

# xpc_connection_create_from_endpoint(\_:) (Swift)

**Framework:** XPC  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a new connection from the specified endpoint.

## Declaration

```swift
func xpc_connection_create_from_endpoint(_ endpoint: xpc_endpoint_t) -> xpc_connection_t
```

## Parameters

- `endpoint`: The endpoint from which to create the new connection.

<a id="return-value"></a>

## Return Value

A new peer connection to the listener represented by the given endpoint.

<a id="discussion"></a>

## Discussion

The same responsibilities of setting an event handler and resuming the connection after calling [xpc_connection_create(\_:\_:)](xpc_connection_create%28____%29.md) apply to the connection returned by this API. Since the connection yielded by this API is not associated with a name (and therefore is not rediscoverable), this connection will receive [XPC_ERROR_CONNECTION_INVALID](xpc_error_connection_invalid-swift.var.md) if the listening side crashes, exits or cancels the listener connection.

## See Also

### Creation

- [xpc_connection_t](xpc_connection_t.md): A type that represents a connection to a named service.
- [xpc_connection_create(\_:\_:)](xpc_connection_create%28____%29.md): Creates a new connection object.
- [xpc_connection_create_mach_service(\_:\_:\_:)](xpc_connection_create_mach_service%28______%29.md): Creates a new connection object that represents a Mach service.
- [xpc_connection_set_target_queue(\_:\_:)](xpc_connection_set_target_queue%28____%29.md): Sets the target queue of the connection.
- [XPC_CONNECTION_MACH_SERVICE_LISTENER](xpc_connection_mach_service_listener.md): A flag that indicates the caller is the listener for the named service.
- [XPC_CONNECTION_MACH_SERVICE_PRIVILEGED](xpc_connection_mach_service_privileged.md): A flag that indicates the job advertising the service name belongs to a launch daemon rather than a launch agent.

# xpc_connection_create_from_endpoint (Objective-C)

**Framework:** XPC  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a new connection from the specified endpoint.

## Declaration

```objectivec
extern xpc_connection_txpc_connection_create_from_endpoint(xpc_endpoint_t endpoint);
```

## Parameters

- `endpoint`: The endpoint from which to create the new connection.

<a id="return-value"></a>

## Return Value

A new peer connection to the listener represented by the given endpoint.

<a id="discussion"></a>

## Discussion

The same responsibilities of setting an event handler and resuming the connection after calling [xpc_connection_create](xpc_connection_create%28____%29.md) apply to the connection returned by this API. Since the connection yielded by this API is not associated with a name (and therefore is not rediscoverable), this connection will receive [XPC_ERROR_CONNECTION_INVALID](xpc_error_connection_invalid-swift.var.md) if the listening side crashes, exits or cancels the listener connection.

## See Also

### Creation

- [xpc_connection_t](xpc_connection_t.md): A type that represents a connection to a named service.
- [xpc_connection_create](xpc_connection_create%28____%29.md): Creates a new connection object.
- [xpc_connection_create_mach_service](xpc_connection_create_mach_service%28______%29.md): Creates a new connection object that represents a Mach service.
- [xpc_connection_set_target_queue](xpc_connection_set_target_queue%28____%29.md): Sets the target queue of the connection.
- [XPC_CONNECTION_MACH_SERVICE_LISTENER](xpc_connection_mach_service_listener.md): A flag that indicates the caller is the listener for the named service.
- [XPC_CONNECTION_MACH_SERVICE_PRIVILEGED](xpc_connection_mach_service_privileged.md): A flag that indicates the job advertising the service name belongs to a launch daemon rather than a launch agent.

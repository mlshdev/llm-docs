> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpc_connection_create_mach_service(_:_:_:)](https://developer.apple.com/documentation/xpc/xpc_connection_create_mach_service(_:_:_:))

# xpc_connection_create_mach_service(\_:\_:\_:) (Swift)

**Framework:** XPC  
**Kind:** Function  
**Availability:** Mac Catalyst 5.0+ · macOS 10.7+

Creates a new connection object that represents a Mach service.

## Declaration

```swift
func xpc_connection_create_mach_service(_ name: UnsafePointer<CChar>, _ targetq: dispatch_queue_t?, _ flags: UInt64) -> xpc_connection_t
```

## Parameters

- `name`: The name of the remote service with which to connect. The service name must exist in a Mach bootstrap that is accessible to the process and be advertised in a `launchd.plist`.
- `targetq`: The GCD queue to which the event handler block will be submitted. This parameter may be `NULL`, in which case the connection’s target queue will be the default target queue of `libdispatch`, defined as `DISPATCH_TARGET_QUEUE_DEFAULT`. The target queue may be changed later with a call to [xpc_connection_set_target_queue(\_:\_:)](xpc_connection_set_target_queue%28____%29.md).
- `flags`: Additional attributes with which to create the connection.

<a id="return-value"></a>

## Return Value

A new connection object.

<a id="Discussion"></a>

## Discussion

If the [XPC_CONNECTION_MACH_SERVICE_LISTENER](xpc_connection_mach_service_listener.md) flag is given to this method, then the connection returned will be a listener connection. Otherwise, a peer connection will be returned. See the documentation for [xpc_connection_set_event_handler(\_:\_:)](xpc_connection_set_event_handler%28____%29.md) for the semantics of listener connections versus peer connections.

This method will succeed even if the named service does not exist. This is because the Mach namespace is not queried for the service name until the first call to [xpc_connection_resume(\_:)](xpc_connection_resume%28__%29.md).

## See Also

### Creation

- [xpc_connection_t](xpc_connection_t.md): A type that represents a connection to a named service.
- [xpc_connection_create(\_:\_:)](xpc_connection_create%28____%29.md): Creates a new connection object.
- [xpc_connection_create_from_endpoint(\_:)](xpc_connection_create_from_endpoint%28__%29.md): Creates a new connection from the specified endpoint.
- [xpc_connection_set_target_queue(\_:\_:)](xpc_connection_set_target_queue%28____%29.md): Sets the target queue of the connection.
- [XPC_CONNECTION_MACH_SERVICE_LISTENER](xpc_connection_mach_service_listener.md): A flag that indicates the caller is the listener for the named service.
- [XPC_CONNECTION_MACH_SERVICE_PRIVILEGED](xpc_connection_mach_service_privileged.md): A flag that indicates the job advertising the service name belongs to a launch daemon rather than a launch agent.

# xpc_connection_create_mach_service (Objective-C)

**Framework:** XPC  
**Kind:** Function  
**Availability:** Mac Catalyst 5.0+ · macOS 10.7+

Creates a new connection object that represents a Mach service.

## Declaration

```objectivec
extern xpc_connection_txpc_connection_create_mach_service(const char *name, dispatch_queue_t targetq, uint64_t flags);
```

## Parameters

- `name`: The name of the remote service with which to connect. The service name must exist in a Mach bootstrap that is accessible to the process and be advertised in a `launchd.plist`.
- `targetq`: The GCD queue to which the event handler block will be submitted. This parameter may be `NULL`, in which case the connection’s target queue will be the default target queue of `libdispatch`, defined as `DISPATCH_TARGET_QUEUE_DEFAULT`. The target queue may be changed later with a call to [xpc_connection_set_target_queue](xpc_connection_set_target_queue%28____%29.md).
- `flags`: Additional attributes with which to create the connection.

<a id="return-value"></a>

## Return Value

A new connection object.

<a id="Discussion"></a>

## Discussion

If the [XPC_CONNECTION_MACH_SERVICE_LISTENER](xpc_connection_mach_service_listener.md) flag is given to this method, then the connection returned will be a listener connection. Otherwise, a peer connection will be returned. See the documentation for [xpc_connection_set_event_handler](xpc_connection_set_event_handler%28____%29.md) for the semantics of listener connections versus peer connections.

This method will succeed even if the named service does not exist. This is because the Mach namespace is not queried for the service name until the first call to [xpc_connection_resume](xpc_connection_resume%28__%29.md).

## See Also

### Creation

- [xpc_connection_t](xpc_connection_t.md): A type that represents a connection to a named service.
- [xpc_connection_create](xpc_connection_create%28____%29.md): Creates a new connection object.
- [xpc_connection_create_from_endpoint](xpc_connection_create_from_endpoint%28__%29.md): Creates a new connection from the specified endpoint.
- [xpc_connection_set_target_queue](xpc_connection_set_target_queue%28____%29.md): Sets the target queue of the connection.
- [XPC_CONNECTION_MACH_SERVICE_LISTENER](xpc_connection_mach_service_listener.md): A flag that indicates the caller is the listener for the named service.
- [XPC_CONNECTION_MACH_SERVICE_PRIVILEGED](xpc_connection_mach_service_privileged.md): A flag that indicates the job advertising the service name belongs to a launch daemon rather than a launch agent.

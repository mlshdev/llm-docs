> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpc_connection_create(_:_:)](https://developer.apple.com/documentation/xpc/xpc_connection_create(_:_:))

# xpc_connection_create(\_:\_:) (Swift)

**Framework:** XPC  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a new connection object.

## Declaration

```swift
func xpc_connection_create(_ name: UnsafePointer<CChar>?, _ targetq: dispatch_queue_t?) -> xpc_connection_t
```

## Parameters

- `name`: If non-`NULL`, the name of the service with which to connect. The returned connection will be a peer.

  If `NULL`, an anonymous listener connection will be created. You can embed the ability to create new peer connections in an endpoint, which can be inserted into a message and sent to another process .
- `targetq`: The GCD queue to which the event handler block will be submitted. This parameter may be `NULL`, in which case the connection’s target queue will be the default target queue of `libdispatch`, defined as `DISPATCH_TARGET_QUEUE_DEFAULT`. The target queue may be changed later with a call to [xpc_connection_set_target_queue(\_:\_:)](xpc_connection_set_target_queue%28____%29.md).

<a id="return-value"></a>

## Return Value

A new connection object. The caller is responsible for disposing of the returned object with [xpc_release](xpc_release.md) when it is no longer needed.

<a id="Discussion"></a>

## Discussion

This method will succeed even if the named service does not exist. This is because the XPC namespace is not queried for the service name until the first call to [xpc_connection_resume(\_:)](xpc_connection_resume%28__%29.md).

XPC connections, like dispatch sources, are returned in a suspended state, so you must call [xpc_connection_resume(\_:)](xpc_connection_resume%28__%29.md) in order to begin receiving events from the connection. Also like dispatch sources, connections must be resumed in order to be safely released. It is a programming error to release a suspended connection.

## See Also

### Creation

- [xpc_connection_t](xpc_connection_t.md): A type that represents a connection to a named service.
- [xpc_connection_create_from_endpoint(\_:)](xpc_connection_create_from_endpoint%28__%29.md): Creates a new connection from the specified endpoint.
- [xpc_connection_create_mach_service(\_:\_:\_:)](xpc_connection_create_mach_service%28______%29.md): Creates a new connection object that represents a Mach service.
- [xpc_connection_set_target_queue(\_:\_:)](xpc_connection_set_target_queue%28____%29.md): Sets the target queue of the connection.
- [XPC_CONNECTION_MACH_SERVICE_LISTENER](xpc_connection_mach_service_listener.md): A flag that indicates the caller is the listener for the named service.
- [XPC_CONNECTION_MACH_SERVICE_PRIVILEGED](xpc_connection_mach_service_privileged.md): A flag that indicates the job advertising the service name belongs to a launch daemon rather than a launch agent.

# xpc_connection_create (Objective-C)

**Framework:** XPC  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a new connection object.

## Declaration

```objectivec
extern xpc_connection_txpc_connection_create(const char *name, dispatch_queue_t targetq);
```

## Parameters

- `name`: If non-`NULL`, the name of the service with which to connect. The returned connection will be a peer.

  If `NULL`, an anonymous listener connection will be created. You can embed the ability to create new peer connections in an endpoint, which can be inserted into a message and sent to another process .
- `targetq`: The GCD queue to which the event handler block will be submitted. This parameter may be `NULL`, in which case the connection’s target queue will be the default target queue of `libdispatch`, defined as `DISPATCH_TARGET_QUEUE_DEFAULT`. The target queue may be changed later with a call to [xpc_connection_set_target_queue](xpc_connection_set_target_queue%28____%29.md).

<a id="return-value"></a>

## Return Value

A new connection object. The caller is responsible for disposing of the returned object with [xpc_release](xpc_release.md) when it is no longer needed.

<a id="Discussion"></a>

## Discussion

This method will succeed even if the named service does not exist. This is because the XPC namespace is not queried for the service name until the first call to [xpc_connection_resume](xpc_connection_resume%28__%29.md).

XPC connections, like dispatch sources, are returned in a suspended state, so you must call [xpc_connection_resume](xpc_connection_resume%28__%29.md) in order to begin receiving events from the connection. Also like dispatch sources, connections must be resumed in order to be safely released. It is a programming error to release a suspended connection.

## See Also

### Creation

- [xpc_connection_t](xpc_connection_t.md): A type that represents a connection to a named service.
- [xpc_connection_create_from_endpoint](xpc_connection_create_from_endpoint%28__%29.md): Creates a new connection from the specified endpoint.
- [xpc_connection_create_mach_service](xpc_connection_create_mach_service%28______%29.md): Creates a new connection object that represents a Mach service.
- [xpc_connection_set_target_queue](xpc_connection_set_target_queue%28____%29.md): Sets the target queue of the connection.
- [XPC_CONNECTION_MACH_SERVICE_LISTENER](xpc_connection_mach_service_listener.md): A flag that indicates the caller is the listener for the named service.
- [XPC_CONNECTION_MACH_SERVICE_PRIVILEGED](xpc_connection_mach_service_privileged.md): A flag that indicates the job advertising the service name belongs to a launch daemon rather than a launch agent.

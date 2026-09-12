> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpc_connection_t](https://developer.apple.com/documentation/xpc/xpc_connection_t)

# xpc_connection_t (Swift)

**Framework:** XPC  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A type that represents a connection to a named service.

## Declaration

```swift
typealias xpc_connection_t = xpc_object_t
```

## See Also

### Creation

- [xpc_connection_create(\_:\_:)](xpc_connection_create%28____%29.md): Creates a new connection object.
- [xpc_connection_create_from_endpoint(\_:)](xpc_connection_create_from_endpoint%28__%29.md): Creates a new connection from the specified endpoint.
- [xpc_connection_create_mach_service(\_:\_:\_:)](xpc_connection_create_mach_service%28______%29.md): Creates a new connection object that represents a Mach service.
- [xpc_connection_set_target_queue(\_:\_:)](xpc_connection_set_target_queue%28____%29.md): Sets the target queue of the connection.
- [XPC_CONNECTION_MACH_SERVICE_LISTENER](xpc_connection_mach_service_listener.md): A flag that indicates the caller is the listener for the named service.
- [XPC_CONNECTION_MACH_SERVICE_PRIVILEGED](xpc_connection_mach_service_privileged.md): A flag that indicates the job advertising the service name belongs to a launch daemon rather than a launch agent.

# xpc_connection_t (Objective-C)

**Framework:** XPC  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A type that represents a connection to a named service.

## Declaration

```objectivec
typedef xpc_object_t xpc_connection_t;
```

## See Also

### Creation

- [xpc_connection_create](xpc_connection_create%28____%29.md): Creates a new connection object.
- [xpc_connection_create_from_endpoint](xpc_connection_create_from_endpoint%28__%29.md): Creates a new connection from the specified endpoint.
- [xpc_connection_create_mach_service](xpc_connection_create_mach_service%28______%29.md): Creates a new connection object that represents a Mach service.
- [xpc_connection_set_target_queue](xpc_connection_set_target_queue%28____%29.md): Sets the target queue of the connection.
- [XPC_CONNECTION_MACH_SERVICE_LISTENER](xpc_connection_mach_service_listener.md): A flag that indicates the caller is the listener for the named service.
- [XPC_CONNECTION_MACH_SERVICE_PRIVILEGED](xpc_connection_mach_service_privileged.md): A flag that indicates the job advertising the service name belongs to a launch daemon rather than a launch agent.

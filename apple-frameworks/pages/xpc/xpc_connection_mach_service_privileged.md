> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpc_connection_mach_service_privileged](https://developer.apple.com/documentation/xpc/xpc_connection_mach_service_privileged)

# XPC_CONNECTION_MACH_SERVICE_PRIVILEGED (Swift)

**Framework:** XPC  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A flag that indicates the job advertising the service name belongs to a launch daemon rather than a launch agent.

## Declaration

```swift
var XPC_CONNECTION_MACH_SERVICE_PRIVILEGED: Int32 { get }
```

<a id="Discussion"></a>

## Discussion

Pass this to [xpc_connection_create_mach_service(\_:\_:\_:)](xpc_connection_create_mach_service%28______%29.md). This flag indicates that the job advertising the service name in its `launchd.plist` needs to be in the privileged Mach bootstrap. Do this by placing your `launchd.plist` in `/Library/LaunchDaemons`.

If you specify this alongside the [XPC_CONNECTION_MACH_SERVICE_LISTENER](xpc_connection_mach_service_listener.md) flag, this flag is a no-op.

## See Also

### Creation

- [xpc_connection_t](xpc_connection_t.md): A type that represents a connection to a named service.
- [xpc_connection_create(\_:\_:)](xpc_connection_create%28____%29.md): Creates a new connection object.
- [xpc_connection_create_from_endpoint(\_:)](xpc_connection_create_from_endpoint%28__%29.md): Creates a new connection from the specified endpoint.
- [xpc_connection_create_mach_service(\_:\_:\_:)](xpc_connection_create_mach_service%28______%29.md): Creates a new connection object that represents a Mach service.
- [xpc_connection_set_target_queue(\_:\_:)](xpc_connection_set_target_queue%28____%29.md): Sets the target queue of the connection.
- [XPC_CONNECTION_MACH_SERVICE_LISTENER](xpc_connection_mach_service_listener.md): A flag that indicates the caller is the listener for the named service.

# XPC_CONNECTION_MACH_SERVICE_PRIVILEGED (Objective-C)

**Framework:** XPC  
**Kind:** Macro  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A flag that indicates the job advertising the service name belongs to a launch daemon rather than a launch agent.

## Declaration

```objectivec
#define XPC_CONNECTION_MACH_SERVICE_PRIVILEGED
```

<a id="Discussion"></a>

## Discussion

Pass this to [xpc_connection_create_mach_service](xpc_connection_create_mach_service%28______%29.md). This flag indicates that the job advertising the service name in its `launchd.plist` needs to be in the privileged Mach bootstrap. Do this by placing your `launchd.plist` in `/Library/LaunchDaemons`.

If you specify this alongside the [XPC_CONNECTION_MACH_SERVICE_LISTENER](xpc_connection_mach_service_listener.md) flag, this flag is a no-op.

## See Also

### Creation

- [xpc_connection_t](xpc_connection_t.md): A type that represents a connection to a named service.
- [xpc_connection_create](xpc_connection_create%28____%29.md): Creates a new connection object.
- [xpc_connection_create_from_endpoint](xpc_connection_create_from_endpoint%28__%29.md): Creates a new connection from the specified endpoint.
- [xpc_connection_create_mach_service](xpc_connection_create_mach_service%28______%29.md): Creates a new connection object that represents a Mach service.
- [xpc_connection_set_target_queue](xpc_connection_set_target_queue%28____%29.md): Sets the target queue of the connection.
- [XPC_CONNECTION_MACH_SERVICE_LISTENER](xpc_connection_mach_service_listener.md): A flag that indicates the caller is the listener for the named service.

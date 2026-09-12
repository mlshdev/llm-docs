> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpc_connection_set_target_queue(_:_:)](https://developer.apple.com/documentation/xpc/xpc_connection_set_target_queue(_:_:))

# xpc_connection_set_target_queue(\_:\_:) (Swift)

**Framework:** XPC  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Sets the target queue of the connection.

## Declaration

```swift
func xpc_connection_set_target_queue(_ connection: xpc_connection_t, _ targetq: dispatch_queue_t?)
```

## Parameters

- `connection`: The connection object which is to be manipulated.
- `targetq`: The GCD queue to which the event handler block will be submitted. This parameter may be `NULL`, in which case the connection’s target queue will be the default target queue of `libdispatch`, defined as `DISPATCH_TARGET_QUEUE_DEFAULT`.

<a id="Discussion"></a>

## Discussion

Setting the target queue is asynchronous and non-preemptive and therefore this method will not interrupt the execution of an already-running event handler block. Setting the target queue may be likened to issuing a barrier to the connection which does the actual work of changing the target queue.

The XPC runtime guarantees this non-preemptiveness even for concurrent target queues. If the target queue is a concurrent queue, then XPC still guarantees that there will never be more than one invocation of the connection’s event handler block executing concurrently. If you wish to process events concurrently, you can [dispatch_async](../dispatch/dispatch_async.md) to a concurrent queue from within the event handler.

> **Important**

>  When called from within the event handler block, [dispatch_get_current_queue()](../dispatch/dispatch_get_current_queue%28%29.md) is NOT guaranteed to return a pointer to the queue set with this method.

Despite this seeming inconsistency, the XPC runtime guarantees that, when the target queue is a serial queue, the event handler block will execute synchonously with respect to other blocks submitted to that same queue. When the target queue is a concurrent queue, the event handler block may run concurrently with other blocks submitted to that queue, but it will never run concurrently with other invocations of itself for the same connection, as discussed previously.

## See Also

### Creation

- [xpc_connection_t](xpc_connection_t.md): A type that represents a connection to a named service.
- [xpc_connection_create(\_:\_:)](xpc_connection_create%28____%29.md): Creates a new connection object.
- [xpc_connection_create_from_endpoint(\_:)](xpc_connection_create_from_endpoint%28__%29.md): Creates a new connection from the specified endpoint.
- [xpc_connection_create_mach_service(\_:\_:\_:)](xpc_connection_create_mach_service%28______%29.md): Creates a new connection object that represents a Mach service.
- [XPC_CONNECTION_MACH_SERVICE_LISTENER](xpc_connection_mach_service_listener.md): A flag that indicates the caller is the listener for the named service.
- [XPC_CONNECTION_MACH_SERVICE_PRIVILEGED](xpc_connection_mach_service_privileged.md): A flag that indicates the job advertising the service name belongs to a launch daemon rather than a launch agent.

# xpc_connection_set_target_queue (Objective-C)

**Framework:** XPC  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Sets the target queue of the connection.

## Declaration

```objectivec
extern void xpc_connection_set_target_queue(xpc_connection_t connection, dispatch_queue_t targetq);
```

## Parameters

- `connection`: The connection object which is to be manipulated.
- `targetq`: The GCD queue to which the event handler block will be submitted. This parameter may be `NULL`, in which case the connection’s target queue will be the default target queue of `libdispatch`, defined as `DISPATCH_TARGET_QUEUE_DEFAULT`.

<a id="Discussion"></a>

## Discussion

Setting the target queue is asynchronous and non-preemptive and therefore this method will not interrupt the execution of an already-running event handler block. Setting the target queue may be likened to issuing a barrier to the connection which does the actual work of changing the target queue.

The XPC runtime guarantees this non-preemptiveness even for concurrent target queues. If the target queue is a concurrent queue, then XPC still guarantees that there will never be more than one invocation of the connection’s event handler block executing concurrently. If you wish to process events concurrently, you can [dispatch_async](../dispatch/dispatch_async.md) to a concurrent queue from within the event handler.

> **Important**

>  When called from within the event handler block, [dispatch_get_current_queue](../dispatch/dispatch_get_current_queue%28%29.md) is NOT guaranteed to return a pointer to the queue set with this method.

Despite this seeming inconsistency, the XPC runtime guarantees that, when the target queue is a serial queue, the event handler block will execute synchonously with respect to other blocks submitted to that same queue. When the target queue is a concurrent queue, the event handler block may run concurrently with other blocks submitted to that queue, but it will never run concurrently with other invocations of itself for the same connection, as discussed previously.

## See Also

### Creation

- [xpc_connection_t](xpc_connection_t.md): A type that represents a connection to a named service.
- [xpc_connection_create](xpc_connection_create%28____%29.md): Creates a new connection object.
- [xpc_connection_create_from_endpoint](xpc_connection_create_from_endpoint%28__%29.md): Creates a new connection from the specified endpoint.
- [xpc_connection_create_mach_service](xpc_connection_create_mach_service%28______%29.md): Creates a new connection object that represents a Mach service.
- [XPC_CONNECTION_MACH_SERVICE_LISTENER](xpc_connection_mach_service_listener.md): A flag that indicates the caller is the listener for the named service.
- [XPC_CONNECTION_MACH_SERVICE_PRIVILEGED](xpc_connection_mach_service_privileged.md): A flag that indicates the job advertising the service name belongs to a launch daemon rather than a launch agent.

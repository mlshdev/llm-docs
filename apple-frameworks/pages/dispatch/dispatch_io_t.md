> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatch_io_t](https://developer.apple.com/documentation/dispatch/dispatch_io_t)

# dispatch_io_t (Swift)

**Framework:** Dispatch  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A dispatch I/O channel.

## Declaration

```swift
typealias dispatch_io_t = DispatchIO
```

<a id="Discussion"></a>

## Discussion

A dispatch I/O channel represents a file descriptor and the asynchronous I/O policies applied to that file descriptor. A dispatch I/O channel is a standard type of dispatch object and may be retained, released, suspended, and resumed accordingly.

## See Also

### Data Types

- [dispatch_group_t](dispatch_group_t.md): A group of block objects submitted to a queue for asynchronous invocation.
- [dispatch_object_t](dispatch_object_t.md): A dispatch object.
- [dispatch_queue_attr_t](dispatch_queue_attr_t.md): Attributes describing the behaviors of a dispatch queue.
- [dispatch_queue_serial_executor_t](dispatch_queue_serial_executor_t.md)
- [dispatch_queue_t](dispatch_queue_t.md): A lightweight object to which your application submits blocks for subsequent execution.
- [dispatch_semaphore_t](dispatch_semaphore_t.md): A dispatch semaphore object.

# dispatch_io_t (Objective-C)

**Framework:** Dispatch  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A dispatch I/O channel.

## Declaration

```objectivec
typedef NSObject<OS_dispatch_io> * dispatch_io_t;
```

<a id="Discussion"></a>

## Discussion

A dispatch I/O channel represents a file descriptor and the asynchronous I/O policies applied to that file descriptor. A dispatch I/O channel is a standard type of dispatch object and may be retained, released, suspended, and resumed accordingly.

## See Also

### Data Types

- [dispatch_group_t](dispatch_group_t.md): A group of block objects submitted to a queue for asynchronous invocation.
- [dispatch_object_t](dispatch_object_t.md): A dispatch object.
- [dispatch_queue_attr_t](dispatch_queue_attr_t.md): Attributes describing the behaviors of a dispatch queue.
- [dispatch_queue_serial_executor_t](dispatch_queue_serial_executor_t.md)
- [dispatch_queue_t](dispatch_queue_t.md): A lightweight object to which your application submits blocks for subsequent execution.
- [dispatch_semaphore_t](dispatch_semaphore_t.md): A dispatch semaphore object.

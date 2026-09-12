> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatch_group_t](https://developer.apple.com/documentation/dispatch/dispatch_group_t)

# dispatch_group_t (Swift)

**Framework:** Dispatch  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A group of block objects submitted to a queue for asynchronous invocation.

## Declaration

```swift
typealias dispatch_group_t = DispatchGroup
```

<a id="Discussion"></a>

## Discussion

A dispatch group is a mechanism for monitoring a set of blocks. Your application can monitor the blocks in the group synchronously or asynchronously depending on your needs. By extension, a group can be useful for synchronizing for code that depends on the completion of other tasks.

Note that the blocks in a group may be run on different queues, and each individual block can add more blocks to the group.

The dispatch group keeps track of how many blocks are outstanding, and GCD retains the group until all its associated blocks complete execution.

## See Also

### Data Types

- [dispatch_io_t](dispatch_io_t.md): A dispatch I/O channel.
- [dispatch_object_t](dispatch_object_t.md): A dispatch object.
- [dispatch_queue_attr_t](dispatch_queue_attr_t.md): Attributes describing the behaviors of a dispatch queue.
- [dispatch_queue_serial_executor_t](dispatch_queue_serial_executor_t.md)
- [dispatch_queue_t](dispatch_queue_t.md): A lightweight object to which your application submits blocks for subsequent execution.
- [dispatch_semaphore_t](dispatch_semaphore_t.md): A dispatch semaphore object.

# dispatch_group_t (Objective-C)

**Framework:** Dispatch  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A group of block objects submitted to a queue for asynchronous invocation.

## Declaration

```objectivec
typedef NSObject<OS_dispatch_group> * dispatch_group_t;
```

<a id="Discussion"></a>

## Discussion

A dispatch group is a mechanism for monitoring a set of blocks. Your application can monitor the blocks in the group synchronously or asynchronously depending on your needs. By extension, a group can be useful for synchronizing for code that depends on the completion of other tasks.

Note that the blocks in a group may be run on different queues, and each individual block can add more blocks to the group.

The dispatch group keeps track of how many blocks are outstanding, and GCD retains the group until all its associated blocks complete execution.

## See Also

### Data Types

- [dispatch_io_t](dispatch_io_t.md): A dispatch I/O channel.
- [dispatch_object_t](dispatch_object_t.md): A dispatch object.
- [dispatch_queue_attr_t](dispatch_queue_attr_t.md): Attributes describing the behaviors of a dispatch queue.
- [dispatch_queue_serial_executor_t](dispatch_queue_serial_executor_t.md)
- [dispatch_queue_t](dispatch_queue_t.md): A lightweight object to which your application submits blocks for subsequent execution.
- [dispatch_semaphore_t](dispatch_semaphore_t.md): A dispatch semaphore object.

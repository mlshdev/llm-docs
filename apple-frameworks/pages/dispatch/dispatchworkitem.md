> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchworkitem](https://developer.apple.com/documentation/dispatch/dispatchworkitem)

# DispatchWorkItem

**Framework:** Dispatch  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS · visionOS · watchOS

The work you want to perform, encapsulated in a way that lets you attach a completion handle or execution dependencies.

## Declaration

```swift
class DispatchWorkItem
```

<a id="overview"></a>

## Overview

A [DispatchWorkItem](dispatchworkitem.md) encapsulates work to be performed on a dispatch queue or within a dispatch group. You can also use a work item as a [DispatchSource](dispatchsource.md) event, registration, or cancellation handler.

## Topics

### Creating a Work Item

- [init(qos:flags:block:)](dispatchworkitem/init%28qos_flags_block_%29.md): Creates a new dispatch work item from an existing block and assigns it the specified quality-of-service class.
- [DispatchWorkItemFlags](dispatchworkitemflags.md): A set of behaviors for a work item, such as its quality-of-service class and whether to create a barrier or spawn a new detached thread.

### Executing the Work Item

- [perform()](dispatchworkitem/perform%28%29.md): Executes the work item’s block synchronously on the current thread.

### Adding a Completion Handler

- [notify(queue:execute:)](dispatchworkitem/notify%28queue_execute_%29.md): Schedules the execution of the specified work item after the completion of the current work item.
- [notify(qos:flags:queue:execute:)](dispatchworkitem/notify%28qos_flags_queue_execute_%29.md): Schedules the execution of the specified work item, with the specified quality-of-service, after the completion of the current work item.

### Waiting for the Completion of a Work Item

- [wait()](dispatchworkitem/wait%28%29.md): Causes the caller to wait synchronously until the dispatch work item finishes executing.
- [wait(timeout:)](dispatchworkitem/wait%28timeout_%29.md): Causes the caller to wait synchronously until the dispatch work item finishes executing, or until the specified time elapses.
- [wait(wallTimeout:)](dispatchworkitem/wait%28walltimeout_%29.md): Causes the caller to wait synchronously until the dispatch work item finishes executing, or until the specified time elapses.
- [DispatchTime](dispatchtime.md): A point in time relative to the default clock, with nanosecond precision.
- [DispatchWallTime](dispatchwalltime.md): An absolute point in time according to the wall clock, with microsecond precision.

### Canceling a Work Item

- [cancel()](dispatchworkitem/cancel%28%29.md): Cancels the current work item asynchronously.
- [isCancelled](dispatchworkitem/iscancelled.md): A Boolean value indicating whether the work item has been canceled.

### Initializers

- [init(flags:block:)](dispatchworkitem/init%28flags_block_%29.md)

## See Also

### Queues and Tasks

- [DispatchQueue](dispatchqueue.md): An object that manages the execution of tasks serially or concurrently on your app’s main thread or on a background thread.
- [DispatchGroup](dispatchgroup.md): A group of tasks that you monitor as a single unit.
- [Dispatch Queue](dispatch-queue.md): An object that manages the execution of tasks serially or concurrently on your app’s main thread or on a background thread.
- [Dispatch Work Item](dispatch-work-item.md): The work you want to perform, encapsulated in a way that lets you attach a completion handle or execution dependencies.
- [Dispatch Group](dispatch-group.md): A group of tasks that you monitor as a single unit.
- [Workloop](workloop.md): A dispatch object that prioritizes the execution of tasks based on their quality-of-service (QoS) level.

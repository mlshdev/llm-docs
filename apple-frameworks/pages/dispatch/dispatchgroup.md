> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchgroup](https://developer.apple.com/documentation/dispatch/dispatchgroup)

# DispatchGroup

**Framework:** Dispatch  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A group of tasks that you monitor as a single unit.

## Declaration

```swift
class DispatchGroup
```

<a id="overview"></a>

## Overview

Groups allow you to aggregate a set of tasks and synchronize behaviors on the group. You attach multiple work items to a group and schedule them for asynchronous execution on the same queue or different queues. When all work items finish executing, the group executes its completion handler. You can also wait synchronously for all tasks in the group to finish executing.

## Topics

### Creating a Dispatch Group

- [init()](dispatchgroup/init%28%29.md): Creates a new group to which you can assign block objects.

### Adding a Completion Handler

- [notify(qos:flags:queue:execute:)](dispatchgroup/notify%28qos_flags_queue_execute_%29.md): Schedules the submission of a block with the specified attributes to a queue when all tasks in the current group have finished executing.
- [notify(queue:work:)](dispatchgroup/notify%28queue_work_%29.md): Schedules the submission of a block to a queue when all tasks in the current group have finished executing.

### Waiting for Tasks to Finish Executing

- [wait()](dispatchgroup/wait%28%29.md): Waits synchronously for the previously submitted work to finish.
- [wait(timeout:)](dispatchgroup/wait%28timeout_%29.md): Waits synchronously for the previously submitted work to complete, and returns if the work is not completed before the specified timeout period has elapsed.
- [wait(wallTimeout:)](dispatchgroup/wait%28walltimeout_%29.md): Waits synchronously for the previously submitted work to complete, and returns if the work is not completed before the specified timeout period has elapsed.

### Updating the Group Manually

- [enter()](dispatchgroup/enter%28%29.md): Explicitly indicates that a block has entered the group.
- [leave()](dispatchgroup/leave%28%29.md): Explicitly indicates that a block in the group finished executing.

## Relationships

### Inherits From

- [DispatchObject](dispatchobject.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Queues and Tasks

- [DispatchQueue](dispatchqueue.md): An object that manages the execution of tasks serially or concurrently on your app’s main thread or on a background thread.
- [DispatchWorkItem](dispatchworkitem.md): The work you want to perform, encapsulated in a way that lets you attach a completion handle or execution dependencies.
- [Dispatch Queue](dispatch-queue.md): An object that manages the execution of tasks serially or concurrently on your app’s main thread or on a background thread.
- [Dispatch Work Item](dispatch-work-item.md): The work you want to perform, encapsulated in a way that lets you attach a completion handle or execution dependencies.
- [Dispatch Group](dispatch-group.md): A group of tasks that you monitor as a single unit.
- [Workloop](workloop.md): A dispatch object that prioritizes the execution of tasks based on their quality-of-service (QoS) level.

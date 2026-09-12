> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatch-group](https://developer.apple.com/documentation/dispatch/dispatch-group)

# Dispatch Group (Swift)

**Framework:** Dispatch  
**Kind:** API Collection

A group of tasks that you monitor as a single unit.

<a id="overview"></a>

## Overview

Groups allow you to aggregate a set of tasks and synchronize behaviors on the group. You attach multiple blocks to a group and schedule them for asynchronous execution on the same queue or different queues. When all blocks finish executing, the group executes its completion handler. You can also wait synchronously for all blocks in the group to finish executing.

## Topics

### Creating a Dispatch Group

- [init()](dispatchgroup/init%28%29.md): Creates a new group to which you can assign block objects.
- [dispatch_group_t](dispatch_group_t.md): A group of block objects submitted to a queue for asynchronous invocation.

### Updating the Group Manually

- [enter()](dispatchgroup/enter%28%29.md): Explicitly indicates that a block has entered the group.
- [leave()](dispatchgroup/leave%28%29.md): Explicitly indicates that a block in the group finished executing.

## See Also

### Queues and Tasks

- [DispatchQueue](dispatchqueue.md): An object that manages the execution of tasks serially or concurrently on your app’s main thread or on a background thread.
- [DispatchWorkItem](dispatchworkitem.md): The work you want to perform, encapsulated in a way that lets you attach a completion handle or execution dependencies.
- [DispatchGroup](dispatchgroup.md): A group of tasks that you monitor as a single unit.
- [Dispatch Queue](dispatch-queue.md): An object that manages the execution of tasks serially or concurrently on your app’s main thread or on a background thread.
- [Dispatch Work Item](dispatch-work-item.md): The work you want to perform, encapsulated in a way that lets you attach a completion handle or execution dependencies.
- [Workloop](workloop.md): A dispatch object that prioritizes the execution of tasks based on their quality-of-service (QoS) level.

# Dispatch Group (Objective-C)

**Framework:** Dispatch  
**Kind:** API Collection

A group of tasks that you monitor as a single unit.

<a id="overview"></a>

## Overview

Groups allow you to aggregate a set of tasks and synchronize behaviors on the group. You attach multiple blocks to a group and schedule them for asynchronous execution on the same queue or different queues. When all blocks finish executing, the group executes its completion handler. You can also wait synchronously for all blocks in the group to finish executing.

## Topics

### Creating a Dispatch Group

- [dispatch_group_create](dispatchgroup/init%28%29.md): Creates a new group to which you can assign block objects.
- [dispatch_group_t](dispatch_group_t.md): A group of block objects submitted to a queue for asynchronous invocation.
- [OS_dispatch_group](os_dispatch_group.md)

### Adding Work to the Group

- [dispatch_group_async](dispatch_group_async.md): Schedules a block asynchronously for execution and simultaneously associates it with the specified dispatch group.
- [dispatch_group_async_f](dispatch_group_async_f.md): Submits an application-defined function to a dispatch queue and associates it with the specified dispatch group.

### Adding a Completion Handler

- [dispatch_group_notify](dispatch_group_notify.md): Schedules a block object to be submitted to a queue when a group of previously submitted block objects have completed.
- [dispatch_group_notify_f](dispatch_group_notify_f.md): Schedules an application-defined function to be submitted to a queue when a group of previously submitted block objects have completed.

### Waiting for Tasks to Finish Executing

- [dispatch_group_wait](dispatch_group_wait.md): Waits synchronously for the previously submitted block objects to finish; returns if the blocks do not complete before the specified timeout period has elapsed.

### Updating the Group Manually

- [dispatch_group_enter](dispatchgroup/enter%28%29.md): Explicitly indicates that a block has entered the group.
- [dispatch_group_leave](dispatchgroup/leave%28%29.md): Explicitly indicates that a block in the group finished executing.

## See Also

### Queues and Tasks

- [dispatch_get_main_queue](dispatch_get_main_queue.md): Returns the serial dispatch queue associated with the application’s main thread.
- [dispatch_get_global_queue](dispatch_get_global_queue.md): Returns a system-defined global concurrent queue with the specified quality-of-service class.
- [Dispatch Queue](dispatch-queue.md): An object that manages the execution of tasks serially or concurrently on your app’s main thread or on a background thread.
- [Dispatch Work Item](dispatch-work-item.md): The work you want to perform, encapsulated in a way that lets you attach a completion handle or execution dependencies.
- [Workloop](workloop.md): A dispatch object that prioritizes the execution of tasks based on their quality-of-service (QoS) level.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/workloop](https://developer.apple.com/documentation/dispatch/workloop)

# Workloop (Swift)

**Framework:** Dispatch  
**Kind:** API Collection

A dispatch object that prioritizes the execution of tasks based on their quality-of-service (QoS) level.

<a id="overview"></a>

## Overview

A workloop is a priority-ordered dispatch queue that uses QoS levels to determine the execution order of tasks. Before it starts executing each new task, the queue evaluates the QoS levels of currently enqueued tasks and selects the one with the highest priority. Tasks with the QoS level `QOS_CLASS_USER_INTERACTIVE` have the highest priority, followed by tasks with the `QOS_CLASS_USER_INITIATED` priority, and so on.

A workloop is a type of [dispatch_queue_t](dispatch_queue_t.md) object, and you use the same functions to enqueue new tasks. For example, use the [dispatch_async](dispatch_async.md) function to enqueue a task asynchronously.

## Topics

### Creating a Dispatch Workloop

- [dispatch_workloop_t](dispatch_workloop_t.md): A dispatch queue that prioritizes the execution of tasks based on their quality-of-service level.

### Executing Tasks Synchronously

- [sync(execute:)](dispatchqueue/sync%28execute_%29-3segw.md): Submits a block object for execution and returns after that block finishes executing.
- [asyncAndWait(execute:)](dispatchqueue/asyncandwait%28execute_%29-1udeu.md): Submits a work item for execution and returns only after it finishes executing.

### Managing Queue Attributes

- [setTarget(queue:)](dispatchobject/settarget%28queue_%29.md): Specifies the dispatch queue on which to perform work associated with the current object.

## See Also

### Queues and Tasks

- [DispatchQueue](dispatchqueue.md): An object that manages the execution of tasks serially or concurrently on your app’s main thread or on a background thread.
- [DispatchWorkItem](dispatchworkitem.md): The work you want to perform, encapsulated in a way that lets you attach a completion handle or execution dependencies.
- [DispatchGroup](dispatchgroup.md): A group of tasks that you monitor as a single unit.
- [Dispatch Queue](dispatch-queue.md): An object that manages the execution of tasks serially or concurrently on your app’s main thread or on a background thread.
- [Dispatch Work Item](dispatch-work-item.md): The work you want to perform, encapsulated in a way that lets you attach a completion handle or execution dependencies.
- [Dispatch Group](dispatch-group.md): A group of tasks that you monitor as a single unit.

# Workloop (Objective-C)

**Framework:** Dispatch  
**Kind:** API Collection

A dispatch object that prioritizes the execution of tasks based on their quality-of-service (QoS) level.

<a id="overview"></a>

## Overview

A workloop is a priority-ordered dispatch queue that uses QoS levels to determine the execution order of tasks. Before it starts executing each new task, the queue evaluates the QoS levels of currently enqueued tasks and selects the one with the highest priority. Tasks with the QoS level `QOS_CLASS_USER_INTERACTIVE` have the highest priority, followed by tasks with the `QOS_CLASS_USER_INITIATED` priority, and so on.

A workloop is a type of [dispatch_queue_t](dispatch_queue_t.md) object, and you use the same functions to enqueue new tasks. For example, use the [dispatch_async](dispatch_async.md) function to enqueue a task asynchronously.

## Topics

### Creating a Dispatch Workloop

- [dispatch_workloop_create](dispatch_workloop_create.md): Creates a new workloop with the specified label.
- [dispatch_workloop_create_inactive](dispatch_workloop_create_inactive.md): Creates a new inactive workloop with the specified label.
- [dispatch_workloop_t](dispatch_workloop_t.md): A dispatch queue that prioritizes the execution of tasks based on their quality-of-service level.
- [OS_dispatch_workloop](os_dispatch_workloop.md): A dispatch queue that prioritizes the execution of tasks based on their quality-of-service level.

### Configuring the Workloop Behavior

- [dispatch_workloop_set_autorelease_frequency](dispatch_workloop_set_autorelease_frequency.md): Configures how the workloop manages the autorelease pools for the blocks it executes.
- [dispatch_set_qos_class_floor](dispatch_set_qos_class_floor.md): Specifies the minimum quality-of-service level for a dispatch queue, source, or workloop.
- [dispatch_queue_get_qos_class](dispatch_queue_get_qos_class.md): Returns the quality-of-service class for the specified queue.

### Executing Tasks Asynchronously

- [dispatch_async](dispatch_async.md): Submits a block for asynchronous execution on a dispatch queue and returns immediately.
- [dispatch_async_f](dispatch_async_f.md): Submits an app-defined function for asynchronous execution on a dispatch queue and returns immediately.
- [dispatch_after](dispatch_after.md): Enqueues a block for execution at the specified time.
- [dispatch_after_f](dispatch_after_f.md): Enqueues an app-defined function for execution at the specified time.
- [dispatch_barrier_async](dispatch_barrier_async.md): Submits a barrier block for asynchronous execution and returns immediately.
- [dispatch_barrier_async_f](dispatch_barrier_async_f.md): Submits a barrier function for asynchronous execution and returns immediately.

### Executing Tasks Synchronously

- [dispatch_sync](dispatchqueue/sync%28execute_%29-3segw.md): Submits a block object for execution and returns after that block finishes executing.
- [dispatch_sync_f](dispatch_sync_f.md): Submits an app-defined function for synchronous execution on a dispatch queue.
- [dispatch_barrier_sync](dispatch_barrier_sync.md): Submits a barrier block object for execution and waits until that block completes.
- [dispatch_barrier_sync_f](dispatch_barrier_sync_f.md): Submits a barrier function for execution and waits until that function completes.
- [dispatch_async_and_wait](dispatchqueue/asyncandwait%28execute_%29-1udeu.md): Submits a work item for execution and returns only after it finishes executing.
- [dispatch_async_and_wait_f](dispatch_async_and_wait_f.md): Submits a function-based work item for execution and returns only after it finishes executing.
- [dispatch_barrier_async_and_wait](dispatch_barrier_async_and_wait.md): Submits a work item for synchronous execution and marks the work as a barrier for subsequent concurrent tasks.
- [dispatch_barrier_async_and_wait_f](dispatch_barrier_async_and_wait_f.md): Submits a function-based work item for synchronous execution and marks the work as a barrier for subsequent concurrent tasks.

### Managing Queue Attributes

- [dispatch_queue_get_label](dispatch_queue_get_label.md): Returns the label you assigned to the dispatch queue at creation time.
- [dispatch_set_target_queue](dispatchobject/settarget%28queue_%29.md): Specifies the dispatch queue on which to perform work associated with the current object.

## See Also

### Queues and Tasks

- [dispatch_get_main_queue](dispatch_get_main_queue.md): Returns the serial dispatch queue associated with the application’s main thread.
- [dispatch_get_global_queue](dispatch_get_global_queue.md): Returns a system-defined global concurrent queue with the specified quality-of-service class.
- [Dispatch Queue](dispatch-queue.md): An object that manages the execution of tasks serially or concurrently on your app’s main thread or on a background thread.
- [Dispatch Work Item](dispatch-work-item.md): The work you want to perform, encapsulated in a way that lets you attach a completion handle or execution dependencies.
- [Dispatch Group](dispatch-group.md): A group of tasks that you monitor as a single unit.

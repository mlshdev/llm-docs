> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchqueue](https://developer.apple.com/documentation/dispatch/dispatchqueue)

# DispatchQueue

**Framework:** Dispatch  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An object that manages the execution of tasks serially or concurrently on your app’s main thread or on a background thread.

## Declaration

```swift
class DispatchQueue
```

<a id="overview"></a>

## Overview

Dispatch queues are FIFO queues to which your application can submit tasks in the form of block objects. Dispatch queues execute tasks either serially or concurrently. Work submitted to dispatch queues executes on a pool of threads managed by the system. Except for the dispatch queue representing your app’s main thread, the system makes no guarantees about which thread it uses to execute a task.

You schedule work items synchronously or asynchronously. When you schedule a work item synchronously, your code waits until that item finishes execution. When you schedule a work item asynchronously, your code continues executing while the work item runs elsewhere.

> **Important**

>  Attempting to synchronously execute a work item on the main queue results in deadlock.

<a id="Avoiding-Excessive-Thread-Creation"></a>

### Avoiding Excessive Thread Creation

When designing tasks for concurrent execution, do not call methods that block the current thread of execution. When a task scheduled by a concurrent dispatch queue blocks a thread, the system creates additional threads to run other queued concurrent tasks. If too many tasks block, the system may run out of threads for your app.

Another way that apps consume too many threads is by creating too many private concurrent dispatch queues. Because each dispatch queue consumes thread resources, creating additional concurrent dispatch queues exacerbates the thread consumption problem. Instead of creating private concurrent queues, submit tasks to one of the global concurrent dispatch queues. For serial tasks, set the target of your serial queue to one of the global concurrent queues. That way, you can maintain the serialized behavior of the queue while minimizing the number of separate queues creating threads.

## Topics

### Creating a Dispatch Queue

- [main](dispatchqueue/main.md): The dispatch queue associated with the main thread of the current process.
- [global(qos:)](dispatchqueue/global%28qos_%29.md): Returns the global system queue with the specified quality-of-service class.
- [init(label:qos:attributes:autoreleaseFrequency:target:)](dispatchqueue/init%28label_qos_attributes_autoreleasefrequency_target_%29.md): Creates a new dispatch queue to which you can submit blocks.
- [DispatchQoS.QoSClass](dispatchqos/qosclass-swift.enum.md): Quality-of-service classes that specify the priorities for executing tasks.
- [DispatchQueue.Attributes](dispatchqueue/attributes.md): Attributes that define the behavior of a dispatch queue.
- [DispatchQueue.AutoreleaseFrequency](dispatchqueue/autoreleasefrequency.md): Constants indicating the frequency with which a dispatch queue autoreleases objects.
- [OS_dispatch_queue_main](os_dispatch_queue_main-swift.class.md): A system-provided dispatch queue that schedules tasks for serial execution on the app’s main thread.
- [OS_dispatch_queue_global](os_dispatch_queue_global-swift.class.md): A system-provided dispatch queue that schedules tasks for concurrent execution.
- [DispatchSerialQueue](dispatchserialqueue.md): A custom dispatch queue that schedules tasks for serial execution on an arbitrary thread.
- [DispatchConcurrentQueue](dispatchconcurrentqueue.md): A custom dispatch queue that schedules tasks for concurrent execution.
- [dispatch_queue_main_t](dispatch_queue_main_t.md): A dispatch queue that is bound to the app’s main thread and executes tasks serially on that thread.
- [dispatch_queue_global_t](dispatch_queue_global_t.md): A dispatch queue that executes tasks concurrently using threads from the global thread pool.
- [dispatch_queue_serial_t](dispatch_queue_serial_t.md): A dispatch queue that executes tasks serially in first-in, first-out (FIFO) order.
- [dispatch_queue_concurrent_t](dispatch_queue_concurrent_t.md): A dispatch queue that executes tasks concurrently and in any order, respecting any barriers that may be in place.

### Executing Tasks Asynchronously

- [async(execute:)](dispatchqueue/async%28execute_%29.md): Schedules a work item for immediate execution, and returns immediately.
- [asyncAfter(deadline:execute:)](dispatchqueue/asyncafter%28deadline_execute_%29.md): Schedules a work item for execution at the specified time, and returns immediately.
- [asyncAfter(deadline:qos:flags:execute:)](dispatchqueue/asyncafter%28deadline_qos_flags_execute_%29.md): Schedules a block for execution using the specified attributes, and returns immediately.
- [asyncAfter(wallDeadline:execute:)](dispatchqueue/asyncafter%28walldeadline_execute_%29.md): Schedules a work item for execution after the specified time, and returns immediately.
- [asyncAfter(wallDeadline:qos:flags:execute:)](dispatchqueue/asyncafter%28walldeadline_qos_flags_execute_%29.md): Schedules a block for execution using the specified attributes, and returns immediately.

### Executing Tasks Synchronously

- [sync(execute:)](dispatchqueue/sync%28execute_%29-2fzvo.md): Submits a work item for execution on the current queue and returns after that block finishes executing.
- [sync(execute:)](dispatchqueue/sync%28execute_%29-3segw.md): Submits a block object for execution and returns after that block finishes executing.
- [sync(execute:)](dispatchqueue/sync%28execute_%29-20xby.md): Submits a work item for execution and returns the results from that item after it finishes executing.
- [sync(flags:execute:)](dispatchqueue/sync%28flags_execute_%29.md): Submits a work item for execution using the specified attributes and returns the results from that item after it finishes executing.
- [asyncAndWait(execute:)](dispatchqueue/asyncandwait%28execute_%29-1udeu.md): Submits a work item for execution and returns only after it finishes executing.

### Executing a Task in Parallel

- [concurrentPerform(iterations:execute:)](dispatchqueue/concurrentperform%28iterations_execute_%29.md): Submits a single block to the dispatch queue and causes the block to be executed the specified number of times.

### Dispatching Work to Groups

- [async(group:execute:)](dispatchqueue/async%28group_execute_%29.md): Schedules a work item asynchronously for execution and associates it with the specified dispatch group.
- [async(group:qos:flags:execute:)](dispatchqueue/async%28group_qos_flags_execute_%29.md): Schedules a block asynchronously for execution and optionally associates it with a dispatch group.

### Managing Queue Attributes

- [label](dispatchqueue/label.md): The label you assigned to the dispatch queue at creation time.
- [qos](dispatchqueue/qos.md): The quality-of-service level assgined to the queue.
- [setTarget(queue:)](dispatchobject/settarget%28queue_%29.md): Specifies the dispatch queue on which to perform work associated with the current object.

### Getting and Setting Contextual Data

- [setSpecific(key:value:)](dispatchqueue/setspecific%28key_value_%29.md): Sets the key/value data for the specified dispatch queue.
- [getSpecific(key:)](dispatchqueue/getspecific%28key_%29-swift.method.md): Returns the value for the key associated with this dispatch queue.
- [getSpecific(key:)](dispatchqueue/getspecific%28key_%29-swift.type.method.md): Returns the value for the key associated with the current execution context.
- [DispatchSpecificKey](dispatchspecifickey.md): A key associated with a specific contextual value on a dispatch queue.

### Managing the Main Dispatch Queue

- [dispatchMain()](dispatchmain%28%29.md): Executes blocks submitted to the main queue.

### Scheduling Combine Publishers

- [DispatchQueue.SchedulerTimeType](dispatchqueue/schedulertimetype.md): The scheduler time type used by the dispatch queue.
- [DispatchQueue.SchedulerOptions](dispatchqueue/scheduleroptions.md): A set of options that affect the operation of the dispatch queue scheduler.

### Deprecated

- [global(priority:)](dispatchqueue/global%28priority_%29.md): Deprecated.
- [DispatchQueue.GlobalQueuePriority](dispatchqueue/globalqueuepriority.md): Legacy constants for queue priorities.

### Instance Methods

- [asyncAfterUnsafe(deadline:qos:flags:execute:)](dispatchqueue/asyncafterunsafe%28deadline_qos_flags_execute_%29.md)
- [asyncAfterUnsafe(wallDeadline:qos:flags:execute:)](dispatchqueue/asyncafterunsafe%28walldeadline_qos_flags_execute_%29.md)
- [asyncAndWait(execute:)](dispatchqueue/asyncandwait%28execute_%29-52p9n.md)
- [asyncAndWait(execute:)](dispatchqueue/asyncandwait%28execute_%29-pfxy.md)
- [asyncAndWait(flags:execute:)](dispatchqueue/asyncandwait%28flags_execute_%29.md)
- [asyncUnsafe(group:qos:flags:execute:)](dispatchqueue/asyncunsafe%28group_qos_flags_execute_%29.md)

### Default Implementations

- [Scheduler Implementations](dispatchqueue/scheduler-implementations.md)

## Relationships

### Inherits From

- [DispatchObject](dispatchobject.md)

### Inherited By

- [DispatchConcurrentQueue](dispatchconcurrentqueue.md)
- [OS_dispatch_queue_global](os_dispatch_queue_global-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Executor](https://developer.apple.com/documentation/swift/executor)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Scheduler](../combine/scheduler.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [TaskExecutor](https://developer.apple.com/documentation/swift/taskexecutor)

## See Also

### Queues and Tasks

- [DispatchWorkItem](dispatchworkitem.md): The work you want to perform, encapsulated in a way that lets you attach a completion handle or execution dependencies.
- [DispatchGroup](dispatchgroup.md): A group of tasks that you monitor as a single unit.
- [Dispatch Queue](dispatch-queue.md): An object that manages the execution of tasks serially or concurrently on your app’s main thread or on a background thread.
- [Dispatch Work Item](dispatch-work-item.md): The work you want to perform, encapsulated in a way that lets you attach a completion handle or execution dependencies.
- [Dispatch Group](dispatch-group.md): A group of tasks that you monitor as a single unit.
- [Workloop](workloop.md): A dispatch object that prioritizes the execution of tasks based on their quality-of-service (QoS) level.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/operationqueue](https://developer.apple.com/documentation/foundation/operationqueue)

# OperationQueue (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A queue that regulates the execution of operations.

## Declaration

```swift
class OperationQueue
```

<a id="overview"></a>

## Overview

An operation queue invokes its queued [Operation](operation.md) objects based on their priority and readiness. After you add an operation to a queue, it remains in the queue until the operation finishes its task. You can’t directly remove an operation from a queue after you add it.

> **Note**

>  Operation queues retain operations until the operations finish, and queues themselves are retained until all operations are finished. Suspending an operation queue with operations that aren’t finished can result in a memory leak.

For more information about using operation queues, see the [Concurrency Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/ConcurrencyProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40008091).

<a id="Determine-the-Execution-Order"></a>

### Determine the Execution Order

An operation queue organizes and invokes its operations according to their readiness, priority level, and interoperation dependencies. If all of the queued operations have the same [queuePriority](operation/queuepriority-swift.property.md) and the [isReady](operation/isready.md) property returns [true](https://developer.apple.com/documentation/swift/true), the queue invokes them in the order you added them. Otherwise, the operation queue always invokes the operation with the highest priority relative to the other ready operations.

However, don’t rely on queue semantics to ensure a specific execution order of operations  because changes in the readiness of an operation can change the resulting execution order. Interoperation dependencies provide an absolute execution order for operations, even if those operations are located in different operation queues. An operation object isn’t ready to run until all of its dependent operations have finished running.

For details on how to set priority levels and dependencies, see Managing Dependencies in [Operation](operation.md).

<a id="Respond-to-Operation-Cancelation"></a>

### Respond to Operation Cancelation

Finishing its task doesn’t necessarily mean that the operation performed that task to completion; an operation can also be canceled. Canceling an operation object leaves the object in the queue but notifies the object that it should stop its task as quickly as possible. For currently executing operations, this means that the operation object’s work code must check the cancellation state, stop what it is doing, and mark itself as finished. For operations that are queued but not yet executing, the queue must still call the operation object’s [start()](operation/start%28%29.md) method so that it can processes the cancellation event and mark itself as finished.

> **Note**

>  Canceling an operation causes the operation to ignore any dependencies it may have. This behavior makes it possible for the queue to invoke the operation’s [start()](operation/start%28%29.md) method as soon as possible. The [start()](operation/start%28%29.md) method, in turn, moves the operation to the finished state so that it can be removed from the queue.

For more information about operation cancellation, see [Responding to the Cancel Command](operation.md#Responding-to-the-Cancel-Command) in [Operation](operation.md).

<a id="Observe-Operations-Using-Key-Value-Observing"></a>

### Observe Operations Using Key-Value Observing

The [OperationQueue](operationqueue.md) class is key-value coding (KVC) and key-value observing (KVO) compliant. You can observe these properties to control other parts of your application. To observe the properties, use the following key paths:

- [operations](operationqueue/operations.md) — Read-only
- [operationCount](operationqueue/operationcount.md) — Read-only
- [maxConcurrentOperationCount](operationqueue/maxconcurrentoperationcount.md) — Readable and writable
- [isSuspended](operationqueue/issuspended.md) — Readable and writable
- [name](operationqueue/name.md) — Readable and writable

Although you can attach observers to these properties, don’t use Cocoa bindings to bind these properties to elements of your application’s user interface. Code associated with your user interface typically must run only in your app’s main thread. However, KVO notifications associated with an operation queue may occur in any thread.

For more information about KVO and how to attach observers to an object, see the [Key-Value Observing Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/KeyValueObserving/KeyValueObserving.html#//apple_ref/doc/uid/10000177i).

<a id="Plan-for-Thread-Safety"></a>

### Plan for Thread Safety

You can safely use a single [OperationQueue](operationqueue.md) object from multiple threads without creating additional locks to synchronize access to that object.

Operation queues use the [Dispatch](../dispatch.md) framework to initiate the execution of their operations. As a result, queues always invoke operations on a separate thread, regardless of whether the operation is synchronous or asynchronous.

## Topics

### Accessing Specific Operation Queues

- [main](operationqueue/main.md): Returns the operation queue associated with the main thread.
- [current](operationqueue/current.md): Returns the operation queue that launched the current operation.

### Managing Operations in the Queue

- [addOperation(\_:)](operationqueue/addoperation%28__%29-64o8a.md): Adds the specified operation to the receiver.
- [addOperations(\_:waitUntilFinished:)](operationqueue/addoperations%28__waituntilfinished_%29.md): Adds the specified operations to the queue.
- [addOperation(\_:)](operationqueue/addoperation%28__%29-5s294.md): Wraps the specified block in an operation and adds it to the receiver.
- [addBarrierBlock(\_:)](operationqueue/addbarrierblock%28__%29.md): Invokes a block when the queue finishes all enqueued operations, and prevents subsequent operations from starting until the block has completed.
- [cancelAllOperations()](operationqueue/cancelalloperations%28%29.md): Cancels all queued and executing operations.
- [waitUntilAllOperationsAreFinished()](operationqueue/waituntilalloperationsarefinished%28%29.md): Blocks the current thread until all the receiver’s queued and executing operations finish executing.
- [operations](operationqueue/operations.md): Deprecated. The operations currently in the queue.
- [operationCount](operationqueue/operationcount.md): Deprecated. The number of operations currently in the queue.

### Managing the Execution of Operations

- [qualityOfService](operationqueue/qualityofservice.md): The default service level to apply to operations that the queue invokes.
- [maxConcurrentOperationCount](operationqueue/maxconcurrentoperationcount.md): The maximum number of queued operations that can run at the same time.
- [defaultMaxConcurrentOperationCount](operationqueue/defaultmaxconcurrentoperationcount.md): The default maximum number of operations to invoke concurrently in a queue.

### Monitoring Progress of Operations

- [progress](operationqueue/progress.md): An object that represents the total progress of the operations executing in the queue.

### Suspending Execution

- [isSuspended](operationqueue/issuspended.md): A Boolean value indicating whether the queue is actively scheduling operations for execution.

### Configuring the Queue

- [name](operationqueue/name.md): The name of the operation queue.
- [underlyingQueue](operationqueue/underlyingqueue.md): The dispatch queue that the operation queue uses to invoke operations.

### Scheduling Operations

- [schedule(after:tolerance:options:\_:)](operationqueue/schedule%28after_tolerance_options___%29.md): Performs the action at some time after the specified date, optionally taking into account tolerance if possible.
- [schedule(after:interval:tolerance:options:\_:)](operationqueue/schedule%28after_interval_tolerance_options___%29.md): Performs the action at some time after the specified date, at the specified frequency, optionally taking into account tolerance if possible.
- [schedule(options:\_:)](operationqueue/schedule%28options___%29.md): Performs the action at the next possible opportunity.
- [now](operationqueue/now.md): The operation queue’s definition of the current moment in time.
- [minimumTolerance](operationqueue/minimumtolerance.md): The minimum tolerance the dispatch queue scheduler allows.
- [OperationQueue.SchedulerTimeType](operationqueue/schedulertimetype.md): The scheduler time type the operation queue uses.
- [OperationQueue.SchedulerOptions](operationqueue/scheduleroptions.md): A type that defines options the operation queue accepts.

### Default Implementations

- [Scheduler Implementations](operationqueue/scheduler-implementations.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [ProgressReporting](progressreporting.md)
- [Scheduler](../combine/scheduler.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Operations

- [Operation](operation.md): An abstract class that represents the code and data associated with a single task.
- [BlockOperation](blockoperation.md): An operation that manages the concurrent execution of one or more blocks.

# NSOperationQueue (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A queue that regulates the execution of operations.

## Declaration

```objectivec
@interface NSOperationQueue : NSObject
```

<a id="overview"></a>

## Overview

An operation queue invokes its queued [NSOperation](operation.md) objects based on their priority and readiness. After you add an operation to a queue, it remains in the queue until the operation finishes its task. You can’t directly remove an operation from a queue after you add it.

> **Note**

>  Operation queues retain operations until the operations finish, and queues themselves are retained until all operations are finished. Suspending an operation queue with operations that aren’t finished can result in a memory leak.

For more information about using operation queues, see the [Concurrency Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/ConcurrencyProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40008091).

<a id="Determine-the-Execution-Order"></a>

### Determine the Execution Order

An operation queue organizes and invokes its operations according to their readiness, priority level, and interoperation dependencies. If all of the queued operations have the same [queuePriority](operation/queuepriority-swift.property.md) and the [ready](operation/isready.md) property returns [true](https://developer.apple.com/documentation/swift/true), the queue invokes them in the order you added them. Otherwise, the operation queue always invokes the operation with the highest priority relative to the other ready operations.

However, don’t rely on queue semantics to ensure a specific execution order of operations  because changes in the readiness of an operation can change the resulting execution order. Interoperation dependencies provide an absolute execution order for operations, even if those operations are located in different operation queues. An operation object isn’t ready to run until all of its dependent operations have finished running.

For details on how to set priority levels and dependencies, see Managing Dependencies in [NSOperation](operation.md).

<a id="Respond-to-Operation-Cancelation"></a>

### Respond to Operation Cancelation

Finishing its task doesn’t necessarily mean that the operation performed that task to completion; an operation can also be canceled. Canceling an operation object leaves the object in the queue but notifies the object that it should stop its task as quickly as possible. For currently executing operations, this means that the operation object’s work code must check the cancellation state, stop what it is doing, and mark itself as finished. For operations that are queued but not yet executing, the queue must still call the operation object’s [start](operation/start%28%29.md) method so that it can processes the cancellation event and mark itself as finished.

> **Note**

>  Canceling an operation causes the operation to ignore any dependencies it may have. This behavior makes it possible for the queue to invoke the operation’s [start](operation/start%28%29.md) method as soon as possible. The [start](operation/start%28%29.md) method, in turn, moves the operation to the finished state so that it can be removed from the queue.

For more information about operation cancellation, see [Responding to the Cancel Command](operation.md#Responding-to-the-Cancel-Command) in [NSOperation](operation.md).

<a id="Observe-Operations-Using-Key-Value-Observing"></a>

### Observe Operations Using Key-Value Observing

The [NSOperationQueue](operationqueue.md) class is key-value coding (KVC) and key-value observing (KVO) compliant. You can observe these properties to control other parts of your application. To observe the properties, use the following key paths:

- [operations](operationqueue/operations.md) — Read-only
- [operationCount](operationqueue/operationcount.md) — Read-only
- [maxConcurrentOperationCount](operationqueue/maxconcurrentoperationcount.md) — Readable and writable
- [suspended](operationqueue/issuspended.md) — Readable and writable
- [name](operationqueue/name.md) — Readable and writable

Although you can attach observers to these properties, don’t use Cocoa bindings to bind these properties to elements of your application’s user interface. Code associated with your user interface typically must run only in your app’s main thread. However, KVO notifications associated with an operation queue may occur in any thread.

For more information about KVO and how to attach observers to an object, see the [Key-Value Observing Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/KeyValueObserving/KeyValueObserving.html#//apple_ref/doc/uid/10000177i).

<a id="Plan-for-Thread-Safety"></a>

### Plan for Thread Safety

You can safely use a single [NSOperationQueue](operationqueue.md) object from multiple threads without creating additional locks to synchronize access to that object.

Operation queues use the [Dispatch](../dispatch.md) framework to initiate the execution of their operations. As a result, queues always invoke operations on a separate thread, regardless of whether the operation is synchronous or asynchronous.

## Topics

### Accessing Specific Operation Queues

- [mainQueue](operationqueue/main.md): Returns the operation queue associated with the main thread.
- [currentQueue](operationqueue/current.md): Returns the operation queue that launched the current operation.

### Managing Operations in the Queue

- [addOperation:](operationqueue/addoperation%28__%29-64o8a.md): Adds the specified operation to the receiver.
- [addOperations:waitUntilFinished:](operationqueue/addoperations%28__waituntilfinished_%29.md): Adds the specified operations to the queue.
- [addOperationWithBlock:](operationqueue/addoperation%28__%29-5s294.md): Wraps the specified block in an operation and adds it to the receiver.
- [addBarrierBlock:](operationqueue/addbarrierblock%28__%29.md): Invokes a block when the queue finishes all enqueued operations, and prevents subsequent operations from starting until the block has completed.
- [cancelAllOperations](operationqueue/cancelalloperations%28%29.md): Cancels all queued and executing operations.
- [waitUntilAllOperationsAreFinished](operationqueue/waituntilalloperationsarefinished%28%29.md): Blocks the current thread until all the receiver’s queued and executing operations finish executing.
- [operations](operationqueue/operations.md): Deprecated. The operations currently in the queue.
- [operationCount](operationqueue/operationcount.md): Deprecated. The number of operations currently in the queue.

### Managing the Execution of Operations

- [qualityOfService](operationqueue/qualityofservice.md): The default service level to apply to operations that the queue invokes.
- [maxConcurrentOperationCount](operationqueue/maxconcurrentoperationcount.md): The maximum number of queued operations that can run at the same time.
- [NSOperationQueueDefaultMaxConcurrentOperationCount](operationqueue/defaultmaxconcurrentoperationcount.md): The default maximum number of operations to invoke concurrently in a queue.

### Monitoring Progress of Operations

- [progress](operationqueue/progress.md): An object that represents the total progress of the operations executing in the queue.

### Suspending Execution

- [suspended](operationqueue/issuspended.md): A Boolean value indicating whether the queue is actively scheduling operations for execution.

### Configuring the Queue

- [name](operationqueue/name.md): The name of the operation queue.
- [underlyingQueue](operationqueue/underlyingqueue.md): The dispatch queue that the operation queue uses to invoke operations.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSProgressReporting](progressreporting.md)

## See Also

### Operations

- [NSOperation](operation.md): An abstract class that represents the code and data associated with a single task.
- [NSBlockOperation](blockoperation.md): An operation that manages the concurrent execution of one or more blocks.
- [NSInvocationOperation](nsinvocationoperation.md): An operation that manages the execution of a single encapsulated task specified as an invocation.

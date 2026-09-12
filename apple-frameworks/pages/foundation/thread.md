> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/thread](https://developer.apple.com/documentation/foundation/thread)

# Thread (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A thread of execution.

## Declaration

```swift
class Thread
```

<a id="overview"></a>

## Overview

Use this class when you want to have an Objective-C method run in its own thread of execution. Threads are especially useful when you need to perform a lengthy task, but don’t want it to block the execution of the rest of the application. In particular, you can use threads to avoid blocking the main thread of the application, which handles user interface and event-related actions. Threads can also be used to divide a large job into several smaller jobs, which can lead to performance increases on multi-core computers.

The [Thread](thread.md) class supports semantics similar to those of [Operation](operation.md) for monitoring the runtime condition of a thread. You can use these semantics to cancel the execution of a thread or determine if the thread is still executing or has finished its task. Canceling a thread requires support from your thread code; see the description for [cancel()](thread/cancel%28%29.md) for more information.

<a id="Subclassing-Notes"></a>

### Subclassing Notes

You can subclass [Thread](thread.md) and override the [main()](thread/main%28%29.md) method to implement your thread’s main entry point. If you override [main()](thread/main%28%29.md), you do not need to invoke the inherited behavior by calling `super`.

## Topics

### Initializing an NSThread Object

- [init()](thread/init%28%29.md): Returns an initialized `NSThread` object.
- [init(target:selector:object:)](thread/init%28target_selector_object_%29.md): Returns an `NSThread` object initialized with the given arguments.

### Starting a Thread

- [detachNewThreadSelector(\_:toTarget:with:)](thread/detachnewthreadselector%28__totarget_with_%29.md): Detaches a new thread and uses the specified selector as the thread entry point.
- [start()](thread/start%28%29.md): Starts the receiver.
- [main()](thread/main%28%29.md): The main entry point routine for the thread.

### Stopping a Thread

- [sleep(until:)](thread/sleep%28until_%29.md): Blocks the current thread until the time specified.
- [sleep(forTimeInterval:)](thread/sleep%28fortimeinterval_%29.md): Sleeps the thread for a given time interval.
- [exit()](thread/exit%28%29.md): Terminates the current thread.
- [cancel()](thread/cancel%28%29.md): Changes the cancelled state of the receiver to indicate that it should exit.

### Determining the Thread’s Execution State

- [isExecuting](thread/isexecuting.md): A Boolean value that indicates whether the receiver is executing.
- [isFinished](thread/isfinished.md): A Boolean value that indicates whether the receiver has finished execution.
- [isCancelled](thread/iscancelled.md): A Boolean value that indicates whether the receiver is cancelled.

### Working with the Main Thread

- [isMainThread](thread/ismainthread-swift.type.property.md): Returns a Boolean value that indicates whether the current thread is the main thread.
- [isMainThread](thread/ismainthread-swift.property.md): A Boolean value that indicates whether the receiver is the main thread.
- [main](thread/main.md): Returns the `NSThread` object representing the main thread.

### Querying the Environment

- [isMultiThreaded()](thread/ismultithreaded%28%29.md): Returns whether the application is multithreaded.
- [current](thread/current.md): Returns the thread object representing the current thread of execution.
- [callStackReturnAddresses](thread/callstackreturnaddresses.md): Returns an array containing the call stack return addresses.
- [callStackSymbols](thread/callstacksymbols.md): Returns an array containing the call stack symbols.

### Working with Thread Properties

- [threadDictionary](thread/threaddictionary.md): The thread object’s dictionary.
- [NSAssertionHandlerKey](nsassertionhandlerkey.md): A key with a corresponding value in the thread dictionary.
- [name](thread/name.md): The name of the receiver.
- [stackSize](thread/stacksize.md): The stack size of the receiver, in bytes.

### Prioritizing Thread Work

- [qualityOfService](thread/qualityofservice.md)
- [QualityOfService](qualityofservice.md): Constants that indicate the nature and importance of work to the system.
- [threadPriority()](thread/threadpriority%28%29.md): Returns the current thread’s priority.
- [threadPriority](thread/threadpriority.md): The receiver’s priority
- [setThreadPriority(\_:)](thread/setthreadpriority%28__%29.md): Sets the current thread’s priority.

### Notifications

- [NSDidBecomeSingleThreaded](nsnotification/name-swift.struct/nsdidbecomesinglethreaded.md): Deprecated. Not implemented.
- [NSThreadWillExit](nsnotification/name-swift.struct/nsthreadwillexit.md): Deprecated. An `NSThread` object posts this notification when it receives the [exit()](thread/exit%28%29.md) message, before the thread exits. Observer methods invoked to receive this notification execute in the exiting thread, before it exits.
- [NSWillBecomeMultiThreaded](nsnotification/name-swift.struct/nswillbecomemultithreaded.md): Deprecated. Posted when the first thread is detached from the current thread. The `NSThread` class posts this notification at most once—the first time a thread is detached using [detachNewThreadSelector(\_:toTarget:with:)](thread/detachnewthreadselector%28__totarget_with_%29.md) or the [start()](thread/start%28%29.md) method. Subsequent invocations of those methods do not post this notification. Observers of this notification have their notification method invoked in the main thread, not the new thread. The observer notification methods always execute before the new thread begins executing.

### Initializers

- [init(block:)](thread/init%28block_%29.md)

### Type Methods

- [detachNewThread(\_:)](thread/detachnewthread%28__%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Threads and Locking

- [NSLocking](nslocking.md): The elementary methods adopted by classes that define lock objects.
- [NSLock](nslock.md): An object that coordinates the operation of multiple threads of execution within the same application.
- [NSRecursiveLock](nsrecursivelock.md): A lock that may be acquired multiple times by the same thread without causing a deadlock.
- [NSDistributedLock](nsdistributedlock.md): A lock that multiple applications on multiple hosts can use to restrict access to some shared resource, such as a file.
- [NSConditionLock](nsconditionlock.md): A lock that can be associated with specific, user-defined conditions.
- [NSCondition](nscondition.md): A condition variable whose semantics follow those used for POSIX-style conditions.

# NSThread (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A thread of execution.

## Declaration

```objectivec
@interface NSThread : NSObject
```

<a id="overview"></a>

## Overview

Use this class when you want to have an Objective-C method run in its own thread of execution. Threads are especially useful when you need to perform a lengthy task, but don’t want it to block the execution of the rest of the application. In particular, you can use threads to avoid blocking the main thread of the application, which handles user interface and event-related actions. Threads can also be used to divide a large job into several smaller jobs, which can lead to performance increases on multi-core computers.

The [NSThread](thread.md) class supports semantics similar to those of [NSOperation](operation.md) for monitoring the runtime condition of a thread. You can use these semantics to cancel the execution of a thread or determine if the thread is still executing or has finished its task. Canceling a thread requires support from your thread code; see the description for [cancel](thread/cancel%28%29.md) for more information.

<a id="Subclassing-Notes"></a>

### Subclassing Notes

You can subclass [NSThread](thread.md) and override the [main](thread/main%28%29.md) method to implement your thread’s main entry point. If you override [main](thread/main%28%29.md), you do not need to invoke the inherited behavior by calling `super`.

## Topics

### Initializing an NSThread Object

- [init](thread/init%28%29.md): Returns an initialized `NSThread` object.
- [initWithTarget:selector:object:](thread/init%28target_selector_object_%29.md): Returns an `NSThread` object initialized with the given arguments.

### Starting a Thread

- [detachNewThreadSelector:toTarget:withObject:](thread/detachnewthreadselector%28__totarget_with_%29.md): Detaches a new thread and uses the specified selector as the thread entry point.
- [start](thread/start%28%29.md): Starts the receiver.
- [main](thread/main%28%29.md): The main entry point routine for the thread.

### Stopping a Thread

- [sleepUntilDate:](thread/sleep%28until_%29.md): Blocks the current thread until the time specified.
- [sleepForTimeInterval:](thread/sleep%28fortimeinterval_%29.md): Sleeps the thread for a given time interval.
- [exit](thread/exit%28%29.md): Terminates the current thread.
- [cancel](thread/cancel%28%29.md): Changes the cancelled state of the receiver to indicate that it should exit.

### Determining the Thread’s Execution State

- [executing](thread/isexecuting.md): A Boolean value that indicates whether the receiver is executing.
- [finished](thread/isfinished.md): A Boolean value that indicates whether the receiver has finished execution.
- [cancelled](thread/iscancelled.md): A Boolean value that indicates whether the receiver is cancelled.

### Working with the Main Thread

- [isMainThread](thread/ismainthread-swift.type.property.md): Returns a Boolean value that indicates whether the current thread is the main thread.
- [isMainThread](thread/ismainthread-swift.property.md): A Boolean value that indicates whether the receiver is the main thread.
- [mainThread](thread/main.md): Returns the `NSThread` object representing the main thread.

### Querying the Environment

- [isMultiThreaded](thread/ismultithreaded%28%29.md): Returns whether the application is multithreaded.
- [currentThread](thread/current.md): Returns the thread object representing the current thread of execution.
- [callStackReturnAddresses](thread/callstackreturnaddresses.md): Returns an array containing the call stack return addresses.
- [callStackSymbols](thread/callstacksymbols.md): Returns an array containing the call stack symbols.

### Working with Thread Properties

- [threadDictionary](thread/threaddictionary.md): The thread object’s dictionary.
- [NSAssertionHandlerKey](nsassertionhandlerkey.md): A key with a corresponding value in the thread dictionary.
- [name](thread/name.md): The name of the receiver.
- [stackSize](thread/stacksize.md): The stack size of the receiver, in bytes.

### Prioritizing Thread Work

- [qualityOfService](thread/qualityofservice.md)
- [NSQualityOfService](qualityofservice.md): Constants that indicate the nature and importance of work to the system.
- [threadPriority](thread/threadpriority%28%29.md): Returns the current thread’s priority.
- [threadPriority](thread/threadpriority.md): The receiver’s priority
- [setThreadPriority:](thread/setthreadpriority%28__%29.md): Sets the current thread’s priority.

### Notifications

- [NSDidBecomeSingleThreadedNotification](nsnotification/name-swift.struct/nsdidbecomesinglethreaded.md): Deprecated. Not implemented.
- [NSThreadWillExitNotification](nsnotification/name-swift.struct/nsthreadwillexit.md): Deprecated. An `NSThread` object posts this notification when it receives the [exit](thread/exit%28%29.md) message, before the thread exits. Observer methods invoked to receive this notification execute in the exiting thread, before it exits.
- [NSWillBecomeMultiThreadedNotification](nsnotification/name-swift.struct/nswillbecomemultithreaded.md): Deprecated. Posted when the first thread is detached from the current thread. The `NSThread` class posts this notification at most once—the first time a thread is detached using [detachNewThreadSelector:toTarget:withObject:](thread/detachnewthreadselector%28__totarget_with_%29.md) or the [start](thread/start%28%29.md) method. Subsequent invocations of those methods do not post this notification. Observers of this notification have their notification method invoked in the main thread, not the new thread. The observer notification methods always execute before the new thread begins executing.

### Instance Methods

- [initWithBlock:](thread/init%28block_%29.md)

### Type Methods

- [detachNewThreadWithBlock:](thread/detachnewthread%28__%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Threads and Locking

- [NSLocking](nslocking.md): The elementary methods adopted by classes that define lock objects.
- [NSLock](nslock.md): An object that coordinates the operation of multiple threads of execution within the same application.
- [NSRecursiveLock](nsrecursivelock.md): A lock that may be acquired multiple times by the same thread without causing a deadlock.
- [NSDistributedLock](nsdistributedlock.md): A lock that multiple applications on multiple hosts can use to restrict access to some shared resource, such as a file.
- [NSConditionLock](nsconditionlock.md): A lock that can be associated with specific, user-defined conditions.
- [NSCondition](nscondition.md): A condition variable whose semantics follow those used for POSIX-style conditions.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch](https://developer.apple.com/documentation/dispatch)

# Dispatch (Swift)

**Framework:** Dispatch  
**Kind:** Framework  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Execute code concurrently on multicore hardware by submitting work to dispatch queues managed by the system.

<a id="overview"></a>

## Overview

Dispatch, also known as Grand Central Dispatch (GCD), contains language features, runtime libraries, and system enhancements that provide systemic, comprehensive improvements to the support for concurrent code execution on multicore hardware in macOS, iOS, watchOS, and tvOS.

The BSD subsystem, Core Foundation, and Cocoa APIs have all been extended to use these enhancements to help both the system and your application to run faster, more efficiently, and with improved responsiveness. Consider how difficult it is for a single application to use multiple cores effectively, let alone to do it on different computers with different numbers of computing cores or in an environment with multiple applications competing for those cores. GCD, operating at the system level, can better accommodate the needs of all running applications, matching them to the available system resources in a balanced fashion.

<a id="Dispatch-Objects-and-ARC"></a>

### Dispatch Objects and ARC

When you build your app using the Objective-C compiler, all dispatch objects are Objective-C objects. As such, when automatic reference counting (ARC) is enabled, dispatch objects are retained and released automatically, just like any other Objective-C object. When ARC is not enabled, use the [dispatch_retain](dispatch/dispatch_retain.md) and [dispatch_release](dispatch/dispatch_release.md) functions (or Objective-C semantics) to retain and release your dispatch objects. You cannot use the Core Foundation retain and release functions.

If you need to use retain and release semantics in an ARC-enabled app with a later deployment target (for maintaining compatibility with existing code), you can disable Objective-C-based dispatch objects by adding `-DOS_OBJECT_USE_OBJC=0` to your compiler flags.

## Topics

### Queues and Tasks

- [DispatchQueue](dispatch/dispatchqueue.md): An object that manages the execution of tasks serially or concurrently on your app’s main thread or on a background thread.
- [DispatchWorkItem](dispatch/dispatchworkitem.md): The work you want to perform, encapsulated in a way that lets you attach a completion handle or execution dependencies.
- [DispatchGroup](dispatch/dispatchgroup.md): A group of tasks that you monitor as a single unit.
- [Dispatch Queue](dispatch/dispatch-queue.md): An object that manages the execution of tasks serially or concurrently on your app’s main thread or on a background thread.
- [Dispatch Work Item](dispatch/dispatch-work-item.md): The work you want to perform, encapsulated in a way that lets you attach a completion handle or execution dependencies.
- [Dispatch Group](dispatch/dispatch-group.md): A group of tasks that you monitor as a single unit.
- [Workloop](dispatch/workloop.md): A dispatch object that prioritizes the execution of tasks based on their quality-of-service (QoS) level.

### Thread Scheduling

- [DispatchQoS](dispatch/dispatchqos.md): The quality of service, or the execution priority, to apply to tasks.

### System Event Monitoring

- [DispatchSource](dispatch/dispatchsource.md): An object that coordinates the processing of specific low-level system events, such as file-system events, timers, and UNIX signals.
- [Dispatch Source](dispatch/dispatch-source.md): An object that coordinates the processing of specific low-level system events, such as file-system events, timers, and UNIX signals.
- [DispatchIO](dispatch/dispatchio.md): An object that manages operations on a file descriptor using either stream-based or random-access semantics.
- [DispatchData](dispatch/dispatchdata.md): An object that manages a memory-based data buffer and exposes it as a contiguous block of memory.
- [DispatchDataIterator](dispatch/dispatchdataiterator.md): A byte-by-byte iterator over the contents of a dispatch data object.
- [Dispatch I/O](dispatch/dispatch-i-o.md): An object that manages operations on a file descriptor using either stream-based or random-access semantics.
- [Dispatch Data](dispatch/dispatch-data.md): An object that manages a memory-based data buffer and exposes it as a contiguous block of memory.
- [DispatchSourceProtocol](dispatch/dispatchsourceprotocol.md): Defines a common set of properties and methods that are shared with all dispatch source types.

### Task Synchronization

- [DispatchSemaphore](dispatch/dispatchsemaphore.md): An object that controls access to a resource across multiple execution contexts through use of a traditional counting semaphore.
- [Dispatch Semaphore](dispatch/dispatch-semaphore.md): An object that controls access to a resource across multiple execution contexts through use of a traditional counting semaphore.
- [Dispatch Barrier](dispatch/dispatch-barrier.md): A synchronization point for tasks executing in a concurrent dispatch queue.

### Time Constructs

- [DispatchTime](dispatch/dispatchtime.md): A point in time relative to the default clock, with nanosecond precision.
- [DispatchWallTime](dispatch/dispatchwalltime.md): An absolute point in time according to the wall clock, with microsecond precision.
- [DispatchTimeInterval](dispatch/dispatchtimeinterval.md): A number of seconds, millisconds, microseconds, or nanoseconds.
- [DispatchTimeoutResult](dispatch/dispatchtimeoutresult.md): A result value indicating whether a dispatch operation finished before a specified time.
- [dispatch_time_t](dispatch/dispatch_time_t.md): An abstract representation of time.
- [DISPATCH_WALLTIME_NOW](dispatch/dispatch_walltime_now.md): The current time.
- [Wall Time Constants](dispatch/2963138-wall-time-constants.md): Constants for wall time values.

### Dispatch Objects

- [DispatchObject](dispatch/dispatchobject.md): The base class for most dispatch types.
- [DispatchPredicate](dispatch/dispatchpredicate.md): Logical conditions to evaluate within a given execution context.
- [dispatchPrecondition(condition:)](dispatch/dispatchprecondition%28condition_%29.md): Checks a dispatch condition necessary for further execution.
- [Dispatch Objects](dispatch/dispatch-objects.md): The basic behaviors supported by all dispatch types.

### Deprecated

- [Deprecated Symbols](dispatch/deprecated-symbols.md)

### Classes

- [DispatchWorkloop](dispatch/dispatchworkloop.md)

### Reference

- [Dispatch Constants](dispatch/dispatch-constants.md)
- [Dispatch Data Types](dispatch/dispatch-data-types.md)
- [Dispatch Functions](dispatch/dispatch-functions.md)

# Dispatch (Objective-C)

**Framework:** Dispatch  
**Kind:** Framework  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Execute code concurrently on multicore hardware by submitting work to dispatch queues managed by the system.

<a id="overview"></a>

## Overview

Dispatch, also known as Grand Central Dispatch (GCD), contains language features, runtime libraries, and system enhancements that provide systemic, comprehensive improvements to the support for concurrent code execution on multicore hardware in macOS, iOS, watchOS, and tvOS.

The BSD subsystem, Core Foundation, and Cocoa APIs have all been extended to use these enhancements to help both the system and your application to run faster, more efficiently, and with improved responsiveness. Consider how difficult it is for a single application to use multiple cores effectively, let alone to do it on different computers with different numbers of computing cores or in an environment with multiple applications competing for those cores. GCD, operating at the system level, can better accommodate the needs of all running applications, matching them to the available system resources in a balanced fashion.

<a id="Dispatch-Objects-and-ARC"></a>

### Dispatch Objects and ARC

When you build your app using the Objective-C compiler, all dispatch objects are Objective-C objects. As such, when automatic reference counting (ARC) is enabled, dispatch objects are retained and released automatically, just like any other Objective-C object. When ARC is not enabled, use the [dispatch_retain](dispatch/dispatch_retain.md) and [dispatch_release](dispatch/dispatch_release.md) functions (or Objective-C semantics) to retain and release your dispatch objects. You cannot use the Core Foundation retain and release functions.

If you need to use retain and release semantics in an ARC-enabled app with a later deployment target (for maintaining compatibility with existing code), you can disable Objective-C-based dispatch objects by adding `-DOS_OBJECT_USE_OBJC=0` to your compiler flags.

## Topics

### Queues and Tasks

- [dispatch_get_main_queue](dispatch/dispatch_get_main_queue.md): Returns the serial dispatch queue associated with the application’s main thread.
- [dispatch_get_global_queue](dispatch/dispatch_get_global_queue.md): Returns a system-defined global concurrent queue with the specified quality-of-service class.
- [Dispatch Queue](dispatch/dispatch-queue.md): An object that manages the execution of tasks serially or concurrently on your app’s main thread or on a background thread.
- [Dispatch Work Item](dispatch/dispatch-work-item.md): The work you want to perform, encapsulated in a way that lets you attach a completion handle or execution dependencies.
- [Dispatch Group](dispatch/dispatch-group.md): A group of tasks that you monitor as a single unit.
- [Workloop](dispatch/workloop.md): A dispatch object that prioritizes the execution of tasks based on their quality-of-service (QoS) level.

### Thread Scheduling

- [dispatch_qos_class_t](dispatch/dispatch_qos_class_t.md): Quality-of-service classes that specify the priorities for executing tasks.
- [dispatch_queue_priority_t](dispatch/dispatch_queue_priority_t.md): The execution priority for tasks in a global concurrent queue.
- [dispatch_set_qos_class_floor](dispatch/dispatch_set_qos_class_floor.md): Specifies the minimum quality-of-service level for a dispatch queue, source, or workloop.

### System Event Monitoring

- [Dispatch Source](dispatch/dispatch-source.md): An object that coordinates the processing of specific low-level system events, such as file-system events, timers, and UNIX signals.
- [Dispatch I/O](dispatch/dispatch-i-o.md): An object that manages operations on a file descriptor using either stream-based or random-access semantics.
- [Dispatch Data](dispatch/dispatch-data.md): An object that manages a memory-based data buffer and exposes it as a contiguous block of memory.
- [OS_dispatch_source](dispatch/dispatchsourceprotocol.md): Defines a common set of properties and methods that are shared with all dispatch source types.

### Task Synchronization

- [Dispatch Semaphore](dispatch/dispatch-semaphore.md): An object that controls access to a resource across multiple execution contexts through use of a traditional counting semaphore.
- [Dispatch Barrier](dispatch/dispatch-barrier.md): A synchronization point for tasks executing in a concurrent dispatch queue.

### Time Constructs

- [dispatch_time](dispatch/dispatch_time.md): Creates a `dispatch_time_t` relative to the default clock or modifies an existing `dispatch_time_t`.
- [dispatch_walltime](dispatch/dispatch_walltime.md): Creates a `dispatch_time_t` using an absolute time according to the wall clock.
- [dispatch_time_t](dispatch/dispatch_time_t.md): An abstract representation of time.
- [DISPATCH_WALLTIME_NOW](dispatch/dispatch_walltime_now.md): The current time.
- [Wall Time Constants](dispatch/2963138-wall-time-constants.md): Constants for wall time values.

### Dispatch Objects

- [Dispatch Objects](dispatch/dispatch-objects.md): The basic behaviors supported by all dispatch types.

### Deprecated

- [Deprecated Symbols](dispatch/deprecated-symbols.md)

### Protocols

- [OS_dispatch_queue_serial_executor](dispatch/os_dispatch_queue_serial_executor.md)

### Reference

- [Dispatch Constants](dispatch/dispatch-constants.md)
- [Dispatch Data Types](dispatch/dispatch-data-types.md)
- [Dispatch Functions](dispatch/dispatch-functions.md)

### Macros

- [DISPATCH_ENUM_SPI_AVAILABLE](dispatch/dispatch_enum_spi_available.md)
- [DISPATCH_NO_UBSAN](dispatch/dispatch_no_ubsan.md)

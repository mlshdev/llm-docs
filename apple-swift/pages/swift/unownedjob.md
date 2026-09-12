> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unownedjob](https://developer.apple.com/documentation/swift/unownedjob)

# UnownedJob

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A unit of schedulable work.

## Declaration

```swift
@frozen struct UnownedJob
```

<a id="overview"></a>

## Overview

Unless you’re implementing a scheduler, you don’t generally interact with jobs directly.

An `UnownedJob` must be eventually run *exactly once* using `runSynchronously(on:)`. Not doing so is effectively going to leak and “hang” the work that the job represents (e.g. a [Task](task.md)).

## Topics

### Initializers

- [init(\_:)](unownedjob/init%28__%29-8ra8c.md): Create an `UnownedJob` whose lifetime must be managed carefully until it is run exactly once.
- [init(\_:)](unownedjob/init%28__%29-9f1zn.md): Create an `UnownedJob` whose lifetime must be managed carefully until it is run exactly once.

### Instance Properties

- [priority](unownedjob/priority.md): The priority of this job.

### Instance Methods

- [runSynchronously(isolatedTo:taskExecutor:)](unownedjob/runsynchronously%28isolatedto_taskexecutor_%29.md): Run this job isolated to the passed in serial executor, while executing it on the specified task executor.
- [runSynchronously(on:)](unownedjob/runsynchronously%28on_%29-4eaxu.md): Run this job isolated to the passed task executor.
- [runSynchronously(on:)](unownedjob/runsynchronously%28on_%29-o1nb.md): Run this job on the passed in executor.

### Default Implementations

- [CustomStringConvertible Implementations](unownedjob/customstringconvertible-implementations.md)

## Relationships

### Conforms To

- [BitwiseCopyable](bitwisecopyable.md)
- [Copyable](copyable.md)
- [CustomStringConvertible](customstringconvertible.md)
- [Escapable](escapable.md)
- [Sendable](sendable.md)
- [SendableMetatype](sendablemetatype.md)

## See Also

### Executors

- [Executor](executor.md): A service that can execute jobs.
- [ExecutorJob](executorjob.md): A unit of schedulable work.
- [SerialExecutor](serialexecutor.md): A service that executes jobs.
- [TaskExecutor](taskexecutor.md): An executor that may be used as preferred executor by a task.
- [JobPriority](jobpriority.md): The priority of this job.
- [UnownedSerialExecutor](unownedserialexecutor.md): An unowned reference to a serial executor (a `SerialExecutor` value).
- [UnownedTaskExecutor](unownedtaskexecutor.md)
- [globalConcurrentExecutor](globalconcurrentexecutor.md): The global concurrent executor that is used by default for Swift Concurrency tasks.
- [withTaskExecutorPreference(\_:isolation:operation:)](withtaskexecutorpreference%28__isolation_operation_%29.md): Configure the current task hierarchy’s task executor preference to the passed [TaskExecutor](taskexecutor.md), and execute the passed in closure by immediately hopping to that executor.

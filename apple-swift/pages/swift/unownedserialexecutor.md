> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unownedserialexecutor](https://developer.apple.com/documentation/swift/unownedserialexecutor)

# UnownedSerialExecutor

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An unowned reference to a serial executor (a `SerialExecutor` value).

## Declaration

```swift
@frozen struct UnownedSerialExecutor
```

<a id="overview"></a>

## Overview

This is an optimized type used internally by the core scheduling operations.  It is an unowned reference to avoid unnecessary reference-counting work even when working with actors abstractly. Generally there are extra constraints imposed on core operations in order to allow this.  For example, keeping an actor alive must also keep the actor’s associated executor alive; if they are different objects, the executor must be referenced strongly by the actor.

## Topics

### Initializers

- [init(\_:)](unownedserialexecutor/init%28__%29-8mpaa.md)
- [init(\_:)](unownedserialexecutor/init%28__%29-9jcxo.md): Automatically opt-in to complex equality semantics if the Executor implements `Equatable`.
- [init(complexEquality:)](unownedserialexecutor/init%28complexequality_%29.md): Opts the executor into complex “same exclusive execution context” equality checks.
- [init(ordinary:)](unownedserialexecutor/init%28ordinary_%29.md)

### Instance Methods

- [asSerialExecutor()](unownedserialexecutor/asserialexecutor%28%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](bitwisecopyable.md)
- [Copyable](copyable.md)
- [Sendable](sendable.md)
- [SendableMetatype](sendablemetatype.md)

## See Also

### Executors

- [Executor](executor.md): A service that can execute jobs.
- [ExecutorJob](executorjob.md): A unit of schedulable work.
- [SerialExecutor](serialexecutor.md): A service that executes jobs.
- [TaskExecutor](taskexecutor.md): An executor that may be used as preferred executor by a task.
- [UnownedJob](unownedjob.md): A unit of schedulable work.
- [JobPriority](jobpriority.md): The priority of this job.
- [UnownedTaskExecutor](unownedtaskexecutor.md)
- [globalConcurrentExecutor](globalconcurrentexecutor.md): The global concurrent executor that is used by default for Swift Concurrency tasks.
- [withTaskExecutorPreference(\_:isolation:operation:)](withtaskexecutorpreference%28__isolation_operation_%29.md): Configure the current task hierarchy’s task executor preference to the passed [TaskExecutor](taskexecutor.md), and execute the passed in closure by immediately hopping to that executor.

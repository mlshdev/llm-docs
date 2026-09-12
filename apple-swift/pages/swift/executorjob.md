> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/executorjob](https://developer.apple.com/documentation/swift/executorjob)

# ExecutorJob

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A unit of schedulable work.

## Declaration

```swift
@frozen struct ExecutorJob
```

<a id="overview"></a>

## Overview

Unless you’re implementing a scheduler, you don’t generally interact with jobs directly.

## Topics

### Initializers

- [init(\_:)](executorjob/init%28__%29-2yixs.md)
- [init(\_:)](executorjob/init%28__%29-36632.md)

### Instance Properties

- [description](executorjob/description.md)
- [priority](executorjob/priority.md)

### Instance Methods

- [runSynchronously(isolatedTo:taskExecutor:)](executorjob/runsynchronously%28isolatedto_taskexecutor_%29.md): Run this job isolated to the passed in serial executor, while executing it on the specified task executor.
- [runSynchronously(on:)](executorjob/runsynchronously%28on_%29-6e565.md): Run this job on the passed in task executor.
- [runSynchronously(on:)](executorjob/runsynchronously%28on_%29-9dhs1.md): Run this job on the passed in executor.

## Relationships

### Conforms To

- [Sendable](sendable.md)
- [SendableMetatype](sendablemetatype.md)

## See Also

### Executors

- [Executor](executor.md): A service that can execute jobs.
- [SerialExecutor](serialexecutor.md): A service that executes jobs.
- [TaskExecutor](taskexecutor.md): An executor that may be used as preferred executor by a task.
- [UnownedJob](unownedjob.md): A unit of schedulable work.
- [JobPriority](jobpriority.md): The priority of this job.
- [UnownedSerialExecutor](unownedserialexecutor.md): An unowned reference to a serial executor (a `SerialExecutor` value).
- [UnownedTaskExecutor](unownedtaskexecutor.md)
- [globalConcurrentExecutor](globalconcurrentexecutor.md): The global concurrent executor that is used by default for Swift Concurrency tasks.
- [withTaskExecutorPreference(\_:isolation:operation:)](withtaskexecutorpreference%28__isolation_operation_%29.md): Configure the current task hierarchy’s task executor preference to the passed [TaskExecutor](taskexecutor.md), and execute the passed in closure by immediately hopping to that executor.

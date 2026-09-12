> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/jobpriority](https://developer.apple.com/documentation/swift/jobpriority)

# JobPriority

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The priority of this job.

## Declaration

```swift
@frozen struct JobPriority
```

<a id="overview"></a>

## Overview

The executor determines how priority information affects the way tasks are scheduled. The behavior varies depending on the executor currently being used. Typically, executors attempt to run tasks with a higher priority before tasks with a lower priority. However, the semantics of how priority is treated are left up to each platform and `Executor` implementation.

A ExecutorJob’s priority is roughly equivalent to a `TaskPriority`, however, since not all jobs are tasks, represented as separate type.

Conversions between the two priorities are available as initializers on the respective types.

## Topics

### Operators

- [!=(\_:\_:)](jobpriority/!=%28____%29.md)

### Initializers

- [init(\_:)](jobpriority/init%28__%29.md): Construct from a TaskPriority
- [init(rawValue:)](jobpriority/init%28rawvalue_%29.md): Construct from a raw value

### Instance Properties

- [rawValue](jobpriority/rawvalue-swift.property.md): The raw priority value.

### Type Aliases

- [JobPriority.RawValue](jobpriority/rawvalue-swift.typealias.md)

### Default Implementations

- [Comparable Implementations](jobpriority/comparable-implementations.md)
- [Equatable Implementations](jobpriority/equatable-implementations.md)

## Relationships

### Conforms To

- [BitwiseCopyable](bitwisecopyable.md)
- [Comparable](comparable.md)
- [Copyable](copyable.md)
- [Equatable](equatable.md)
- [Sendable](sendable.md)
- [SendableMetatype](sendablemetatype.md)

## See Also

### Executors

- [Executor](executor.md): A service that can execute jobs.
- [ExecutorJob](executorjob.md): A unit of schedulable work.
- [SerialExecutor](serialexecutor.md): A service that executes jobs.
- [TaskExecutor](taskexecutor.md): An executor that may be used as preferred executor by a task.
- [UnownedJob](unownedjob.md): A unit of schedulable work.
- [UnownedSerialExecutor](unownedserialexecutor.md): An unowned reference to a serial executor (a `SerialExecutor` value).
- [UnownedTaskExecutor](unownedtaskexecutor.md)
- [globalConcurrentExecutor](globalconcurrentexecutor.md): The global concurrent executor that is used by default for Swift Concurrency tasks.
- [withTaskExecutorPreference(\_:isolation:operation:)](withtaskexecutorpreference%28__isolation_operation_%29.md): Configure the current task hierarchy’s task executor preference to the passed [TaskExecutor](taskexecutor.md), and execute the passed in closure by immediately hopping to that executor.

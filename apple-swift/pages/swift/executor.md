> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/executor](https://developer.apple.com/documentation/swift/executor)

# Executor

**Framework:** Swift  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A service that can execute jobs.

## Declaration

```swift
protocol Executor : AnyObject, Sendable
```

## Topics

### Instance Methods

- [enqueue(\_:)](executor/enqueue%28__%29-2sc5t.md): Deprecated.
- [enqueue(\_:)](executor/enqueue%28__%29-55qpq.md)
- [enqueue(\_:)](executor/enqueue%28__%29-b90u.md)

## Relationships

### Inherits From

- [Sendable](sendable.md)
- [SendableMetatype](sendablemetatype.md)

### Inherited By

- [SerialExecutor](serialexecutor.md)
- [TaskExecutor](taskexecutor.md)

## See Also

### Executors

- [ExecutorJob](executorjob.md): A unit of schedulable work.
- [SerialExecutor](serialexecutor.md): A service that executes jobs.
- [TaskExecutor](taskexecutor.md): An executor that may be used as preferred executor by a task.
- [UnownedJob](unownedjob.md): A unit of schedulable work.
- [JobPriority](jobpriority.md): The priority of this job.
- [UnownedSerialExecutor](unownedserialexecutor.md): An unowned reference to a serial executor (a `SerialExecutor` value).
- [UnownedTaskExecutor](unownedtaskexecutor.md)
- [globalConcurrentExecutor](globalconcurrentexecutor.md): The global concurrent executor that is used by default for Swift Concurrency tasks.
- [withTaskExecutorPreference(\_:isolation:operation:)](withtaskexecutorpreference%28__isolation_operation_%29.md): Configure the current task hierarchy’s task executor preference to the passed [TaskExecutor](taskexecutor.md), and execute the passed in closure by immediately hopping to that executor.

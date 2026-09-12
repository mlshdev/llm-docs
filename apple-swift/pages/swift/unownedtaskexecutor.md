> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unownedtaskexecutor](https://developer.apple.com/documentation/swift/unownedtaskexecutor)

# UnownedTaskExecutor

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

## Declaration

```swift
@frozen struct UnownedTaskExecutor
```

## Topics

### Initializers

- [init(\_:)](unownedtaskexecutor/init%28__%29-55b8h.md)
- [init(\_:)](unownedtaskexecutor/init%28__%29-5pjm5.md)
- [init(ordinary:)](unownedtaskexecutor/init%28ordinary_%29.md)

### Instance Methods

- [asTaskExecutor()](unownedtaskexecutor/astaskexecutor%28%29.md)

### Default Implementations

- [Equatable Implementations](unownedtaskexecutor/equatable-implementations.md)
- [Hashable Implementations](unownedtaskexecutor/hashable-implementations.md)

## Relationships

### Conforms To

- [BitwiseCopyable](bitwisecopyable.md)
- [Copyable](copyable.md)
- [Equatable](equatable.md)
- [Hashable](hashable.md)
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
- [UnownedSerialExecutor](unownedserialexecutor.md): An unowned reference to a serial executor (a `SerialExecutor` value).
- [globalConcurrentExecutor](globalconcurrentexecutor.md): The global concurrent executor that is used by default for Swift Concurrency tasks.
- [withTaskExecutorPreference(\_:isolation:operation:)](withtaskexecutorpreference%28__isolation_operation_%29.md): Configure the current task hierarchy’s task executor preference to the passed [TaskExecutor](taskexecutor.md), and execute the passed in closure by immediately hopping to that executor.

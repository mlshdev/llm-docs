> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/globalconcurrentexecutor](https://developer.apple.com/documentation/swift/globalconcurrentexecutor)

# globalConcurrentExecutor

**Framework:** Swift  
**Kind:** Global Variable  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The global concurrent executor that is used by default for Swift Concurrency tasks.

## Declaration

```swift
var globalConcurrentExecutor: any TaskExecutor { get }
```

<a id="discussion"></a>

## Discussion

The executor’s implementation is platform dependent. By default it uses a fixed size pool of threads and should not be used for blocking operations which do not guarantee forward progress as doing so may prevent other tasks from being executed and render the system unresponsive.

You may pass this executor explicitly to a [Task](task.md) initializer as a task executor preference, in order to ensure and document that task be executed on the global executor, instead e.g. inheriting the enclosing actor’s executor. Refer to [withTaskExecutorPreference(\_:isolation:operation:)](withtaskexecutorpreference%28__isolation_operation_%29.md) for a detailed discussion of task executor preferences.

Customizing the global concurrent executor is currently not supported.

## See Also

### Executors

- [Executor](executor.md): A service that can execute jobs.
- [ExecutorJob](executorjob.md): A unit of schedulable work.
- [SerialExecutor](serialexecutor.md): A service that executes jobs.
- [TaskExecutor](taskexecutor.md): An executor that may be used as preferred executor by a task.
- [UnownedJob](unownedjob.md): A unit of schedulable work.
- [JobPriority](jobpriority.md): The priority of this job.
- [UnownedSerialExecutor](unownedserialexecutor.md): An unowned reference to a serial executor (a `SerialExecutor` value).
- [UnownedTaskExecutor](unownedtaskexecutor.md)
- [withTaskExecutorPreference(\_:isolation:operation:)](withtaskexecutorpreference%28__isolation_operation_%29.md): Configure the current task hierarchy’s task executor preference to the passed [TaskExecutor](taskexecutor.md), and execute the passed in closure by immediately hopping to that executor.

> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/concurrency](https://developer.apple.com/documentation/swift/concurrency)

# Concurrency

**Framework:** Swift  
**Kind:** API Collection

Perform asynchronous and parallel operations.

## Topics

### Essentials

- [Code-along: Elevating an app with Swift concurrency](code-along-elevating-an-app-with-swift-concurrency.md): Code along with the WWDC presenter to elevate a SwiftUI app with Swift concurrency.
- [Updating an app to use strict concurrency](updating-an-app-to-use-strict-concurrency.md): Use this code to follow along with a guide to migrating your code to take advantage of the full concurrency protection that the Swift 6 language mode provides.
- [Updating an app to use Swift concurrency](updating-an-app-to-use-swift-concurrency.md): Improve your app’s performance by refactoring your code to take advantage of asynchronous functions in Swift.

### Tasks

- [Task](task.md): A unit of asynchronous work.
- [TaskGroup](taskgroup.md): A group that contains dynamically created child tasks.
- [withTaskGroup(of:returning:isolation:body:)](withtaskgroup%28of_returning_isolation_body_%29.md): Starts a new scope that can contain a dynamic number of child tasks.
- [ThrowingTaskGroup](throwingtaskgroup.md): A group that contains throwing, dynamically created child tasks.
- [withThrowingTaskGroup(of:returning:isolation:body:)](withthrowingtaskgroup%28of_returning_isolation_body_%29.md): Starts a new scope that can contain a dynamic number of throwing child tasks.
- [TaskPriority](taskpriority.md): The priority of a task.
- [DiscardingTaskGroup](discardingtaskgroup.md): A discarding group that contains dynamically created child tasks.
- [withDiscardingTaskGroup(returning:isolation:body:)](withdiscardingtaskgroup%28returning_isolation_body_%29.md): Starts a new scope that can contain a dynamic number of child tasks.
- [ThrowingDiscardingTaskGroup](throwingdiscardingtaskgroup.md): A throwing discarding group that contains dynamically created child tasks.
- [withThrowingDiscardingTaskGroup(returning:isolation:body:)](withthrowingdiscardingtaskgroup%28returning_isolation_body_%29.md): Starts a new scope that can contain a dynamic number of child tasks.
- [UnsafeCurrentTask](unsafecurrenttask.md): An unsafe reference to the current task.

### Asynchronous Sequences

- [AsyncSequence](asyncsequence.md): A type that provides asynchronous, sequential, iterated access to its elements.
- [AsyncStream](asyncstream.md): An asynchronous sequence generated from a closure that calls a continuation to produce new elements.
- [AsyncThrowingStream](asyncthrowingstream.md): An asynchronous sequence generated from an error-throwing closure that calls a continuation to produce new elements.

### Continuations

- [Continuation](continuation.md): A mechanism to interface between synchronous and asynchronous code, which enforces that the continuation is resumed exactly once.
- [withContinuation(of:\_:)](withcontinuation%28of___%29.md): Invokes the passed in closure with a non-copyable continuation for the current task.
- [withContinuation(of:throwing:\_:)](withcontinuation%28of_throwing___%29.md): Invokes the passed in closure with a non-copyable continuation for the current task.
- [CheckedContinuation](checkedcontinuation.md): A mechanism to interface between synchronous and asynchronous code, logging correctness violations.
- [withCheckedContinuation(function:\_:)](withcheckedcontinuation%28function___%29.md): Invokes the passed in closure with a checked continuation for the current task.
- [withCheckedThrowingContinuation(function:\_:)](withcheckedthrowingcontinuation%28function___%29-13yf6.md)
- [withCheckedThrowingContinuation(function:\_:)](withcheckedthrowingcontinuation%28function___%29-2k46m.md): Invokes the passed in closure with a checked continuation for the current task.
- [UnsafeContinuation](unsafecontinuation.md): A mechanism to interface between synchronous and asynchronous code, without correctness checking.
- [withUnsafeContinuation(\_:)](withunsafecontinuation%28__%29.md): Invokes the passed in closure with a unsafe continuation for the current task.

### Actors

- [Sendable](sendable.md): A thread-safe type whose values can be shared across arbitrary concurrent contexts without introducing a risk of data races.
- [Actor](actor.md): Common protocol to which all actors conform.
- [MainActor](mainactor.md): A singleton actor whose executor is equivalent to the main dispatch queue.
- [GlobalActor](globalactor.md): A type that represents a globally-unique actor that can be used to isolate various declarations anywhere in the program.
- [SendableMetatype](sendablemetatype.md): A type whose metatype can be shared across arbitrary isolation domains without introducing a risk of data races.
- [isolation()](isolation%28%29.md): Produce a reference to the actor to which the enclosing code is isolated, or `nil` if the code is nonisolated.

### Task-Local Storage

- [TaskLocal](tasklocal.md): Wrapper type that defines a task-local value key.
- [TaskLocal()](tasklocal%28%29.md): Macro that introduces a [TaskLocal](tasklocal.md) binding.

### Executors

- [Executor](executor.md): A service that can execute jobs.
- [ExecutorJob](executorjob.md): A unit of schedulable work.
- [SerialExecutor](serialexecutor.md): A service that executes jobs.
- [TaskExecutor](taskexecutor.md): An executor that may be used as preferred executor by a task.
- [UnownedJob](unownedjob.md): A unit of schedulable work.
- [JobPriority](jobpriority.md): The priority of this job.
- [UnownedSerialExecutor](unownedserialexecutor.md): An unowned reference to a serial executor (a `SerialExecutor` value).
- [UnownedTaskExecutor](unownedtaskexecutor.md)
- [globalConcurrentExecutor](globalconcurrentexecutor.md): The global concurrent executor that is used by default for Swift Concurrency tasks.
- [withTaskExecutorPreference(\_:isolation:operation:)](withtaskexecutorpreference%28__isolation_operation_%29.md): Configure the current task hierarchy’s task executor preference to the passed [TaskExecutor](taskexecutor.md), and execute the passed in closure by immediately hopping to that executor.

### Deprecated

- [extractIsolation(\_:)](extractisolation%28__%29.md): Deprecated.
- [withCheckedContinuation(isolation:function:\_:)](withcheckedcontinuation%28isolation_function___%29.md): Deprecated. Source-compatibility overload; replaced by [withCheckedContinuation(function:\_:)](withcheckedcontinuation%28function___%29.md).
- [withCheckedThrowingContinuation(isolation:function:\_:)](withcheckedthrowingcontinuation%28isolation_function___%29.md): Deprecated. Source-compatibility overload; replaced by [withCheckedThrowingContinuation(function:\_:)](withcheckedthrowingcontinuation%28function___%29-2k46m.md).
- [withUnsafeContinuation(isolation:\_:)](withunsafecontinuation%28isolation___%29.md): Deprecated. Source-compatibility overload; replaced by [withUnsafeContinuation(\_:)](withunsafecontinuation%28__%29.md).
- [AnyActor](anyactor.md): Deprecated. Common marker protocol providing a shared “base” for both (local) `Actor` and (potentially remote) `DistributedActor` types.
- [ConcurrentValue](concurrentvalue.md): Deprecated.
- [Job](job.md): Deprecated. Deprecated equivalent of [ExecutorJob](executorjob.md).
- [PartialAsyncTask](partialasynctask.md): Deprecated.
- [UnsafeConcurrentValue](unsafeconcurrentvalue.md): Deprecated.
- [UnsafeSendable](unsafesendable.md): Deprecated. A type whose values can safely be passed across concurrency domains by copying, but which disables some safety checking at the conformance site.
- [UnsafeThrowingContinuation](unsafethrowingcontinuation.md): Deprecated.
- [withUnsafeThrowingContinuation(\_:)](withunsafethrowingcontinuation%28__%29-32nwt.md): Invokes the passed in closure with a unsafe continuation for the current task.
- [withUnsafeThrowingContinuation(\_:)](withunsafethrowingcontinuation%28__%29-7zhvy.md)
- [withUnsafeThrowingContinuation(isolation:\_:)](withunsafethrowingcontinuation%28isolation___%29.md): Deprecated. Source-compatibility overload; replaced by [withUnsafeThrowingContinuation(\_:)](withunsafethrowingcontinuation%28__%29-32nwt.md).

## See Also

### Programming Tasks

- [Input and Output](input-and-output.md): Print values to the console, read from and write to text streams, and use command line arguments.
- [Debugging and Reflection](debugging-and-reflection.md): Fortify your code with runtime checks, and examine your values’ runtime representation.
- [Macros](macros.md): Generate boilerplate code and perform other compile-time operations.
- [Key-Path Expressions](key-path-expressions.md): Use key-path expressions to access properties dynamically.
- [Manual Memory Management](manual-memory-management.md): Allocate and manage memory manually.
- [Type Casting and Existential Types](type-casting-and-existential-types.md): Perform casts between types or represent values of any type.
- [C Interoperability](c-interoperability.md): Use imported C types or call C variadic functions.
- [Operator Declarations](operator-declarations.md): Work with prefix, postfix, and infix operators.

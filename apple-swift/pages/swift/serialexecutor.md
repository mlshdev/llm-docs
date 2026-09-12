> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/serialexecutor](https://developer.apple.com/documentation/swift/serialexecutor)

# SerialExecutor

**Framework:** Swift  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A service that executes jobs.

## Declaration

```swift
protocol SerialExecutor : Executor
```

<a id="Custom-Actor-Executors"></a>

### Custom Actor Executors

By default, all actor types execute tasks on a shared global concurrent pool. The global pool does not guarantee any thread (or dispatch queue) affinity, so actors are free to use different threads as they execute tasks.

> **Note**

> The runtime may perform various optimizations to minimize un-necessary thread switching.

Sometimes it is important to be able to customize the execution behavior of an actor. For example, when an actor is known to perform heavy blocking operations (such as IO), and we would like to keep this work *off* the global shared pool, as blocking it may prevent other actors from being responsive.

You can implement a custom executor, by conforming a type to the [SerialExecutor](serialexecutor.md) protocol, and implementing the [enqueue(\_:)](serialexecutor/enqueue%28__%29-7sypu.md) method.

Once implemented, you can configure an actor to use such executor by implementing the actor’s [unownedExecutor](actor/unownedexecutor.md) computed property. For example, you could accept an executor in the actor’s initializer, store it as a variable (in order to retain it for the duration of the actor’s lifetime), and return it from the `unownedExecutor` computed property like this:

```swift
actor MyActor {
  let myExecutor: MyExecutor

  // accepts an executor to run this actor on.
  init(executor: MyExecutor) {
    self.myExecutor = executor
  }

  nonisolated var unownedExecutor: UnownedSerialExecutor {
    self.myExecutor.asUnownedSerialExecutor()
  }
}
```

It is also possible to use a form of shared executor, either created as a global or static property, which you can then re-use for every MyActor instance:

```swift
actor MyActor {
  // Serial executor reused by *all* instances of MyActor!
  static let sharedMyActorsExecutor = MyExecutor() // implements SerialExecutor

  nonisolated var unownedExecutor: UnownedSerialExecutor {
    Self.sharedMyActorsExecutor.asUnownedSerialExecutor()
  }
}
```

In the example above, *all* “MyActor” instances would be using the same serial executor, which would result in only one of such actors ever being run at the same time. This may be useful if some of your code has some “specific thread” requirement when interoperating with non-Swift runtimes for example.

Since the [UnownedSerialExecutor](unownedserialexecutor.md) returned by the `unownedExecutor` property *does not* retain the executor, you must make sure the lifetime of it extends beyond the lifetime of any actor or task using it, as otherwise it may attempt to enqueue work on a released executor object, causing a crash. The executor returned by unownedExecutor *must* always be the same object, and returning different executors can lead to unexpected behavior.

Alternatively, you can also use existing serial executor implementations, such as Dispatch’s `DispatchSerialQueue` or others.

## Topics

### Instance Properties

- [isMainExecutor](serialexecutor/ismainexecutor.md)

### Instance Methods

- [asUnownedSerialExecutor()](serialexecutor/asunownedserialexecutor%28%29.md): Convert this executor value to the optimized form of borrowed executor references.
- [assertIsolated(\_:file:line:)](serialexecutor/assertisolated%28__file_line_%29.md): Stops program execution if the current task is not executing on this serial executor.
- [checkIsolated()](serialexecutor/checkisolated%28%29.md): Last resort “fallback” isolation check, called when the concurrency runtime is comparing executors e.g. during [assumeIsolated(\_:file:line:)](actor/assumeisolated%28__file_line_%29.md) and is unable to prove serial equivalence between the expected (this object), and the current executor.
- [enqueue(\_:)](serialexecutor/enqueue%28__%29-229km.md): Deprecated.
- [enqueue(\_:)](serialexecutor/enqueue%28__%29-2xi5n.md): Deprecated.
- [enqueue(\_:)](serialexecutor/enqueue%28__%29-7sypu.md)
- [isIsolatingCurrentContext()](serialexecutor/isisolatingcurrentcontext%28%29.md): Checks if the current execution context is isolated by this executor.
- [isSameExclusiveExecutionContext(other:)](serialexecutor/issameexclusiveexecutioncontext%28other_%29.md): If this executor has complex equality semantics, and the runtime needs to compare two executors, it will first attempt the usual pointer-based equality / check, / and if it fails it will compare the types of both executors, if they are the same, / it will finally invoke this method, in an attempt to let the executor itself decide / if this and the `other` executor represent the same serial, exclusive, isolation context.
- [preconditionIsolated(\_:file:line:)](serialexecutor/preconditionisolated%28__file_line_%29.md): Stops program execution if the current task is not executing on this serial executor.

## Relationships

### Inherits From

- [Executor](executor.md)
- [Sendable](sendable.md)
- [SendableMetatype](sendablemetatype.md)

## See Also

### Executors

- [Executor](executor.md): A service that can execute jobs.
- [ExecutorJob](executorjob.md): A unit of schedulable work.
- [TaskExecutor](taskexecutor.md): An executor that may be used as preferred executor by a task.
- [UnownedJob](unownedjob.md): A unit of schedulable work.
- [JobPriority](jobpriority.md): The priority of this job.
- [UnownedSerialExecutor](unownedserialexecutor.md): An unowned reference to a serial executor (a `SerialExecutor` value).
- [UnownedTaskExecutor](unownedtaskexecutor.md)
- [globalConcurrentExecutor](globalconcurrentexecutor.md): The global concurrent executor that is used by default for Swift Concurrency tasks.
- [withTaskExecutorPreference(\_:isolation:operation:)](withtaskexecutorpreference%28__isolation_operation_%29.md): Configure the current task hierarchy’s task executor preference to the passed [TaskExecutor](taskexecutor.md), and execute the passed in closure by immediately hopping to that executor.

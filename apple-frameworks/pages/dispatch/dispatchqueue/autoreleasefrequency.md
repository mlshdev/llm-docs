> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchqueue/autoreleasefrequency](https://developer.apple.com/documentation/dispatch/dispatchqueue/autoreleasefrequency)

# DispatchQueue.AutoreleaseFrequency

**Framework:** Dispatch  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants indicating the frequency with which a dispatch queue autoreleases objects.

## Declaration

```swift
enum AutoreleaseFrequency
```

## Topics

### Autorelease Frequencies

- [DispatchQueue.AutoreleaseFrequency.inherit](autoreleasefrequency/inherit.md): The queue inherits its autorelease frequency from its target queue.
- [DispatchQueue.AutoreleaseFrequency.workItem](autoreleasefrequency/workitem.md): The queue configures an autorelease pool before the execution of a block, and releases the objects in that pool after the block finishes executing.
- [DispatchQueue.AutoreleaseFrequency.never](autoreleasefrequency/never.md): The queue does not set up an autorelease pool around executed blocks.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating a Dispatch Queue

- [main](main.md): The dispatch queue associated with the main thread of the current process.
- [global(qos:)](global%28qos_%29.md): Returns the global system queue with the specified quality-of-service class.
- [init(label:qos:attributes:autoreleaseFrequency:target:)](init%28label_qos_attributes_autoreleasefrequency_target_%29.md): Creates a new dispatch queue to which you can submit blocks.
- [DispatchQoS.QoSClass](../dispatchqos/qosclass-swift.enum.md): Quality-of-service classes that specify the priorities for executing tasks.
- [DispatchQueue.Attributes](attributes.md): Attributes that define the behavior of a dispatch queue.
- [OS_dispatch_queue_main](../os_dispatch_queue_main-swift.class.md): A system-provided dispatch queue that schedules tasks for serial execution on the app’s main thread.
- [OS_dispatch_queue_global](../os_dispatch_queue_global-swift.class.md): A system-provided dispatch queue that schedules tasks for concurrent execution.
- [DispatchSerialQueue](../dispatchserialqueue.md): A custom dispatch queue that schedules tasks for serial execution on an arbitrary thread.
- [DispatchConcurrentQueue](../dispatchconcurrentqueue.md): A custom dispatch queue that schedules tasks for concurrent execution.
- [dispatch_queue_main_t](../dispatch_queue_main_t.md): A dispatch queue that is bound to the app’s main thread and executes tasks serially on that thread.
- [dispatch_queue_global_t](../dispatch_queue_global_t.md): A dispatch queue that executes tasks concurrently using threads from the global thread pool.
- [dispatch_queue_serial_t](../dispatch_queue_serial_t.md): A dispatch queue that executes tasks serially in first-in, first-out (FIFO) order.
- [dispatch_queue_concurrent_t](../dispatch_queue_concurrent_t.md): A dispatch queue that executes tasks concurrently and in any order, respecting any barriers that may be in place.

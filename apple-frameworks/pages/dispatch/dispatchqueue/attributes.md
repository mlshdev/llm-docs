> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchqueue/attributes](https://developer.apple.com/documentation/dispatch/dispatchqueue/attributes)

# DispatchQueue.Attributes

**Framework:** Dispatch  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Attributes that define the behavior of a dispatch queue.

## Declaration

```swift
struct Attributes
```

## Topics

### Attributes

- [concurrent](attributes/concurrent.md): The queue schedules tasks concurrently.
- [initiallyInactive](attributes/initiallyinactive.md): The newly created queue is inactive.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Creating a Dispatch Queue

- [main](main.md): The dispatch queue associated with the main thread of the current process.
- [global(qos:)](global%28qos_%29.md): Returns the global system queue with the specified quality-of-service class.
- [init(label:qos:attributes:autoreleaseFrequency:target:)](init%28label_qos_attributes_autoreleasefrequency_target_%29.md): Creates a new dispatch queue to which you can submit blocks.
- [DispatchQoS.QoSClass](../dispatchqos/qosclass-swift.enum.md): Quality-of-service classes that specify the priorities for executing tasks.
- [DispatchQueue.AutoreleaseFrequency](autoreleasefrequency.md): Constants indicating the frequency with which a dispatch queue autoreleases objects.
- [OS_dispatch_queue_main](../os_dispatch_queue_main-swift.class.md): A system-provided dispatch queue that schedules tasks for serial execution on the app’s main thread.
- [OS_dispatch_queue_global](../os_dispatch_queue_global-swift.class.md): A system-provided dispatch queue that schedules tasks for concurrent execution.
- [DispatchSerialQueue](../dispatchserialqueue.md): A custom dispatch queue that schedules tasks for serial execution on an arbitrary thread.
- [DispatchConcurrentQueue](../dispatchconcurrentqueue.md): A custom dispatch queue that schedules tasks for concurrent execution.
- [dispatch_queue_main_t](../dispatch_queue_main_t.md): A dispatch queue that is bound to the app’s main thread and executes tasks serially on that thread.
- [dispatch_queue_global_t](../dispatch_queue_global_t.md): A dispatch queue that executes tasks concurrently using threads from the global thread pool.
- [dispatch_queue_serial_t](../dispatch_queue_serial_t.md): A dispatch queue that executes tasks serially in first-in, first-out (FIFO) order.
- [dispatch_queue_concurrent_t](../dispatch_queue_concurrent_t.md): A dispatch queue that executes tasks concurrently and in any order, respecting any barriers that may be in place.

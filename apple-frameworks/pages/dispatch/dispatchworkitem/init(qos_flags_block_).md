> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchworkitem/init(qos:flags:block:)](https://developer.apple.com/documentation/dispatch/dispatchworkitem/init(qos:flags:block:))

# init(qos:flags:block:)

**Framework:** Dispatch  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS · visionOS · watchOS

Creates a new dispatch work item from an existing block and assigns it the specified quality-of-service class.

## Declaration

```swift
init(qos: DispatchQoS = .unspecified, flags: DispatchWorkItemFlags = [], block: @escaping () -> Void)
```

## Parameters

- `qos`: The quality-of-service class to use when prioritizing the work item’s execution. For a list of possible values, see [DispatchQoS](../dispatchqos.md).
- `flags`: Configuration flags for the work item. For a list of possible values, see [DispatchWorkItemFlags](../dispatchworkitemflags.md).
- `block`: The block that performs the work.

<a id="Discussion"></a>

## Discussion

Submit the returned dispatch work item to a queue to schedule it for execution in that queue. Dispatch queues may alter the specified quality-of-service level based on the specified `flags` and the quality-of-service level of the queue’s underlying threads. However, the queue never executes the block with a quality-of-service level lower than the one in the `qos` parameter.

You can also execute the dispatch work item directly in the current context by calling its [perform()](perform%28%29.md) method. When performing a work item directly, the system never executes the block with a quality-of-service level lower than the one in the `qos` parameter.

## See Also

### Creating a Work Item

- [DispatchWorkItemFlags](../dispatchworkitemflags.md): A set of behaviors for a work item, such as its quality-of-service class and whether to create a barrier or spawn a new detached thread.

> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/actor/withserialexecutor(_:)-4ucv5](https://developer.apple.com/documentation/swift/actor/withserialexecutor(_:)-4ucv5)

# withSerialExecutor(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Perform an operation with the actor’s [SerialExecutor](../serialexecutor.md).

## Declaration

```swift
nonisolated func withSerialExecutor<T, E>(_ operation: (any SerialExecutor) throws(E) -> T) throws(E) -> T where E : Error, T : ~Copyable
```

<a id="discussion"></a>

## Discussion

This converts the actor’s [unownedExecutor](unownedexecutor.md) to a [SerialExecutor](../serialexecutor.md) while retaining the actor for the duration of the operation. This is to ensure the lifetime of the executor while performing the operation.

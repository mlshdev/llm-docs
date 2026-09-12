> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/operationqueue/cancelalloperations()](https://developer.apple.com/documentation/foundation/operationqueue/cancelalloperations())

# cancelAllOperations() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Cancels all queued and executing operations.

## Declaration

```swift
func cancelAllOperations()
```

<a id="Discussion"></a>

## Discussion

This method calls the [cancel()](../operation/cancel%28%29.md) method on all operations currently in the queue.

Canceling the operations does not automatically remove them from the queue or stop those that are currently executing. For operations that are queued and waiting execution, the queue must still attempt to execute the operation before recognizing that it is canceled and moving it to the finished state. For operations that are already executing, the operation object itself must check for cancellation and stop what it is doing so that it can move to the finished state. In both cases, a finished (or canceled) operation is still given a chance to execute its completion block before it is removed from the queue.

## See Also

### Related Documentation

- [cancel()](../operation/cancel%28%29.md): Advises the operation object that it should stop executing its task.

### Managing Operations in the Queue

- [addOperation(\_:)](addoperation%28__%29-64o8a.md): Adds the specified operation to the receiver.
- [addOperations(\_:waitUntilFinished:)](addoperations%28__waituntilfinished_%29.md): Adds the specified operations to the queue.
- [addOperation(\_:)](addoperation%28__%29-5s294.md): Wraps the specified block in an operation and adds it to the receiver.
- [addBarrierBlock(\_:)](addbarrierblock%28__%29.md): Invokes a block when the queue finishes all enqueued operations, and prevents subsequent operations from starting until the block has completed.
- [waitUntilAllOperationsAreFinished()](waituntilalloperationsarefinished%28%29.md): Blocks the current thread until all the receiver’s queued and executing operations finish executing.
- [operations](operations.md): Deprecated. The operations currently in the queue.
- [operationCount](operationcount.md): Deprecated. The number of operations currently in the queue.

# cancelAllOperations (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Cancels all queued and executing operations.

## Declaration

```objectivec
- (void) cancelAllOperations;
```

<a id="Discussion"></a>

## Discussion

This method calls the [cancel](../operation/cancel%28%29.md) method on all operations currently in the queue.

Canceling the operations does not automatically remove them from the queue or stop those that are currently executing. For operations that are queued and waiting execution, the queue must still attempt to execute the operation before recognizing that it is canceled and moving it to the finished state. For operations that are already executing, the operation object itself must check for cancellation and stop what it is doing so that it can move to the finished state. In both cases, a finished (or canceled) operation is still given a chance to execute its completion block before it is removed from the queue.

## See Also

### Related Documentation

- [cancel](../operation/cancel%28%29.md): Advises the operation object that it should stop executing its task.

### Managing Operations in the Queue

- [addOperation:](addoperation%28__%29-64o8a.md): Adds the specified operation to the receiver.
- [addOperations:waitUntilFinished:](addoperations%28__waituntilfinished_%29.md): Adds the specified operations to the queue.
- [addOperationWithBlock:](addoperation%28__%29-5s294.md): Wraps the specified block in an operation and adds it to the receiver.
- [addBarrierBlock:](addbarrierblock%28__%29.md): Invokes a block when the queue finishes all enqueued operations, and prevents subsequent operations from starting until the block has completed.
- [waitUntilAllOperationsAreFinished](waituntilalloperationsarefinished%28%29.md): Blocks the current thread until all the receiver’s queued and executing operations finish executing.
- [operations](operations.md): Deprecated. The operations currently in the queue.
- [operationCount](operationcount.md): Deprecated. The number of operations currently in the queue.

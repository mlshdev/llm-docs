> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/operationqueue/waituntilalloperationsarefinished()](https://developer.apple.com/documentation/foundation/operationqueue/waituntilalloperationsarefinished())

# waitUntilAllOperationsAreFinished() (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Blocks the current thread until all the receiver’s queued and executing operations finish executing.

## Declaration

```swift
func waitUntilAllOperationsAreFinished()
```

<a id="Discussion"></a>

## Discussion

When called, this method blocks the current thread and waits for the receiver’s current and queued operations to finish executing. While the current thread is blocked, the receiver continues to launch already queued operations and monitor those that are executing. During this time, the current thread cannot add operations to the queue, but other threads may. Once all of the pending operations are finished, this method returns.

If there are no operations in the queue, this method returns immediately.

## See Also

### Managing Operations in the Queue

- [addOperation(\_:)](addoperation%28__%29-64o8a.md): Adds the specified operation to the receiver.
- [addOperations(\_:waitUntilFinished:)](addoperations%28__waituntilfinished_%29.md): Adds the specified operations to the queue.
- [addOperation(\_:)](addoperation%28__%29-5s294.md): Wraps the specified block in an operation and adds it to the receiver.
- [addBarrierBlock(\_:)](addbarrierblock%28__%29.md): Invokes a block when the queue finishes all enqueued operations, and prevents subsequent operations from starting until the block has completed.
- [cancelAllOperations()](cancelalloperations%28%29.md): Cancels all queued and executing operations.
- [operations](operations.md): Deprecated. The operations currently in the queue.
- [operationCount](operationcount.md): Deprecated. The number of operations currently in the queue.

# waitUntilAllOperationsAreFinished (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Blocks the current thread until all the receiver’s queued and executing operations finish executing.

## Declaration

```objectivec
- (void) waitUntilAllOperationsAreFinished;
```

<a id="Discussion"></a>

## Discussion

When called, this method blocks the current thread and waits for the receiver’s current and queued operations to finish executing. While the current thread is blocked, the receiver continues to launch already queued operations and monitor those that are executing. During this time, the current thread cannot add operations to the queue, but other threads may. Once all of the pending operations are finished, this method returns.

If there are no operations in the queue, this method returns immediately.

## See Also

### Managing Operations in the Queue

- [addOperation:](addoperation%28__%29-64o8a.md): Adds the specified operation to the receiver.
- [addOperations:waitUntilFinished:](addoperations%28__waituntilfinished_%29.md): Adds the specified operations to the queue.
- [addOperationWithBlock:](addoperation%28__%29-5s294.md): Wraps the specified block in an operation and adds it to the receiver.
- [addBarrierBlock:](addbarrierblock%28__%29.md): Invokes a block when the queue finishes all enqueued operations, and prevents subsequent operations from starting until the block has completed.
- [cancelAllOperations](cancelalloperations%28%29.md): Cancels all queued and executing operations.
- [operations](operations.md): Deprecated. The operations currently in the queue.
- [operationCount](operationcount.md): Deprecated. The number of operations currently in the queue.

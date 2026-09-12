> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/operationqueue/addbarrierblock(_:)](https://developer.apple.com/documentation/foundation/operationqueue/addbarrierblock(_:))

# addBarrierBlock(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Invokes a block when the queue finishes all enqueued operations, and prevents subsequent operations from starting until the block has completed.

## Declaration

```swift
func addBarrierBlock(_ barrier: @escaping @Sendable () -> Void)
```

## Parameters

- `barrier`: The block to invoke after all currently enqueued operations have finished. Operations you add after the barrier block don’t start until the block has completed.

<a id="Discussion"></a>

## Discussion

This method is similar to [dispatch_barrier_async](../../dispatch/dispatch_barrier_async.md).

## See Also

### Managing Operations in the Queue

- [addOperation(\_:)](addoperation%28__%29-64o8a.md): Adds the specified operation to the receiver.
- [addOperations(\_:waitUntilFinished:)](addoperations%28__waituntilfinished_%29.md): Adds the specified operations to the queue.
- [addOperation(\_:)](addoperation%28__%29-5s294.md): Wraps the specified block in an operation and adds it to the receiver.
- [cancelAllOperations()](cancelalloperations%28%29.md): Cancels all queued and executing operations.
- [waitUntilAllOperationsAreFinished()](waituntilalloperationsarefinished%28%29.md): Blocks the current thread until all the receiver’s queued and executing operations finish executing.
- [operations](operations.md): Deprecated. The operations currently in the queue.
- [operationCount](operationcount.md): Deprecated. The number of operations currently in the queue.

# addBarrierBlock: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Invokes a block when the queue finishes all enqueued operations, and prevents subsequent operations from starting until the block has completed.

## Declaration

```objectivec
- (void) addBarrierBlock:(void (^)()) barrier;
```

## Parameters

- `barrier`: The block to invoke after all currently enqueued operations have finished. Operations you add after the barrier block don’t start until the block has completed.

<a id="Discussion"></a>

## Discussion

This method is similar to [dispatch_barrier_async](../../dispatch/dispatch_barrier_async.md).

## See Also

### Managing Operations in the Queue

- [addOperation:](addoperation%28__%29-64o8a.md): Adds the specified operation to the receiver.
- [addOperations:waitUntilFinished:](addoperations%28__waituntilfinished_%29.md): Adds the specified operations to the queue.
- [addOperationWithBlock:](addoperation%28__%29-5s294.md): Wraps the specified block in an operation and adds it to the receiver.
- [cancelAllOperations](cancelalloperations%28%29.md): Cancels all queued and executing operations.
- [waitUntilAllOperationsAreFinished](waituntilalloperationsarefinished%28%29.md): Blocks the current thread until all the receiver’s queued and executing operations finish executing.
- [operations](operations.md): Deprecated. The operations currently in the queue.
- [operationCount](operationcount.md): Deprecated. The number of operations currently in the queue.

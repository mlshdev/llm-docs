> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/operationqueue/addoperation(_:)-64o8a](https://developer.apple.com/documentation/foundation/operationqueue/addoperation(_:)-64o8a)

# addOperation(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Adds the specified operation to the receiver.

## Declaration

```swift
func addOperation(_ op: Operation)
```

## Parameters

- `op`: The operation to be added to the queue.

<a id="Discussion"></a>

## Discussion

Once added, the specified operation remains in the queue until it finishes executing.

> **Important**

>  An operation object can be in at most one operation queue at a time and this method throws an [invalidArgumentException](../nsexceptionname/invalidargumentexception.md) exception if the operation is already in another queue. Similarly, this method throws an [invalidArgumentException](../nsexceptionname/invalidargumentexception.md) exception if the operation is currently executing or has already finished executing.

## See Also

### Related Documentation

- [cancel()](../operation/cancel%28%29.md): Advises the operation object that it should stop executing its task.
- [isExecuting](../operation/isexecuting.md): A Boolean value indicating whether the operation is currently executing.

### Managing Operations in the Queue

- [addOperations(\_:waitUntilFinished:)](addoperations%28__waituntilfinished_%29.md): Adds the specified operations to the queue.
- [addOperation(\_:)](addoperation%28__%29-5s294.md): Wraps the specified block in an operation and adds it to the receiver.
- [addBarrierBlock(\_:)](addbarrierblock%28__%29.md): Invokes a block when the queue finishes all enqueued operations, and prevents subsequent operations from starting until the block has completed.
- [cancelAllOperations()](cancelalloperations%28%29.md): Cancels all queued and executing operations.
- [waitUntilAllOperationsAreFinished()](waituntilalloperationsarefinished%28%29.md): Blocks the current thread until all the receiver’s queued and executing operations finish executing.
- [operations](operations.md): Deprecated. The operations currently in the queue.
- [operationCount](operationcount.md): Deprecated. The number of operations currently in the queue.

# addOperation: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Adds the specified operation to the receiver.

## Declaration

```objectivec
- (void) addOperation:(NSOperation *) op;
```

## Parameters

- `op`: The operation to be added to the queue.

<a id="Discussion"></a>

## Discussion

Once added, the specified operation remains in the queue until it finishes executing.

> **Important**

>  An operation object can be in at most one operation queue at a time and this method throws an [NSInvalidArgumentException](../nsexceptionname/invalidargumentexception.md) exception if the operation is already in another queue. Similarly, this method throws an [NSInvalidArgumentException](../nsexceptionname/invalidargumentexception.md) exception if the operation is currently executing or has already finished executing.

## See Also

### Related Documentation

- [cancel](../operation/cancel%28%29.md): Advises the operation object that it should stop executing its task.
- [executing](../operation/isexecuting.md): A Boolean value indicating whether the operation is currently executing.

### Managing Operations in the Queue

- [addOperations:waitUntilFinished:](addoperations%28__waituntilfinished_%29.md): Adds the specified operations to the queue.
- [addOperationWithBlock:](addoperation%28__%29-5s294.md): Wraps the specified block in an operation and adds it to the receiver.
- [addBarrierBlock:](addbarrierblock%28__%29.md): Invokes a block when the queue finishes all enqueued operations, and prevents subsequent operations from starting until the block has completed.
- [cancelAllOperations](cancelalloperations%28%29.md): Cancels all queued and executing operations.
- [waitUntilAllOperationsAreFinished](waituntilalloperationsarefinished%28%29.md): Blocks the current thread until all the receiver’s queued and executing operations finish executing.
- [operations](operations.md): Deprecated. The operations currently in the queue.
- [operationCount](operationcount.md): Deprecated. The number of operations currently in the queue.

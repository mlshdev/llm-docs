> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/operationqueue/addoperation(_:)-5s294](https://developer.apple.com/documentation/foundation/operationqueue/addoperation(_:)-5s294)

# addOperation(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Wraps the specified block in an operation and adds it to the receiver.

## Declaration

```swift
func addOperation(_ block: @escaping @Sendable () -> Void)
```

## Parameters

- `block`: The block to execute from the operation. The block takes no parameters and has no return value.

<a id="Discussion"></a>

## Discussion

This method adds a single block to the receiver by first wrapping it in an operation object. You should not attempt to get a reference to the newly created operation object or determine its type information.

## See Also

### Related Documentation

- [cancel()](../operation/cancel%28%29.md): Advises the operation object that it should stop executing its task.
- [isExecuting](../operation/isexecuting.md): A Boolean value indicating whether the operation is currently executing.

### Managing Operations in the Queue

- [addOperation(\_:)](addoperation%28__%29-64o8a.md): Adds the specified operation to the receiver.
- [addOperations(\_:waitUntilFinished:)](addoperations%28__waituntilfinished_%29.md): Adds the specified operations to the queue.
- [addBarrierBlock(\_:)](addbarrierblock%28__%29.md): Invokes a block when the queue finishes all enqueued operations, and prevents subsequent operations from starting until the block has completed.
- [cancelAllOperations()](cancelalloperations%28%29.md): Cancels all queued and executing operations.
- [waitUntilAllOperationsAreFinished()](waituntilalloperationsarefinished%28%29.md): Blocks the current thread until all the receiver’s queued and executing operations finish executing.
- [operations](operations.md): Deprecated. The operations currently in the queue.
- [operationCount](operationcount.md): Deprecated. The number of operations currently in the queue.

# addOperationWithBlock: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Wraps the specified block in an operation and adds it to the receiver.

## Declaration

```objectivec
- (void) addOperationWithBlock:(void (^)()) block;
```

## Parameters

- `block`: The block to execute from the operation. The block takes no parameters and has no return value.

<a id="Discussion"></a>

## Discussion

This method adds a single block to the receiver by first wrapping it in an operation object. You should not attempt to get a reference to the newly created operation object or determine its type information.

## See Also

### Related Documentation

- [cancel](../operation/cancel%28%29.md): Advises the operation object that it should stop executing its task.
- [executing](../operation/isexecuting.md): A Boolean value indicating whether the operation is currently executing.

### Managing Operations in the Queue

- [addOperation:](addoperation%28__%29-64o8a.md): Adds the specified operation to the receiver.
- [addOperations:waitUntilFinished:](addoperations%28__waituntilfinished_%29.md): Adds the specified operations to the queue.
- [addBarrierBlock:](addbarrierblock%28__%29.md): Invokes a block when the queue finishes all enqueued operations, and prevents subsequent operations from starting until the block has completed.
- [cancelAllOperations](cancelalloperations%28%29.md): Cancels all queued and executing operations.
- [waitUntilAllOperationsAreFinished](waituntilalloperationsarefinished%28%29.md): Blocks the current thread until all the receiver’s queued and executing operations finish executing.
- [operations](operations.md): Deprecated. The operations currently in the queue.
- [operationCount](operationcount.md): Deprecated. The number of operations currently in the queue.

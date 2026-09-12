> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/operationqueue/addoperations(_:waituntilfinished:)](https://developer.apple.com/documentation/foundation/operationqueue/addoperations(_:waituntilfinished:))

# addOperations(\_:waitUntilFinished:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Adds the specified operations to the queue.

## Declaration

```swift
func addOperations(_ ops: [Operation], waitUntilFinished wait: Bool)
```

## Parameters

- `ops`: The operations to be added to the queue.
- `wait`: If [true](https://developer.apple.com/documentation/swift/true), the current thread is blocked until all of the specified operations finish executing. If [false](https://developer.apple.com/documentation/swift/false), the operations are added to the queue and control returns immediately to the caller.

<a id="Discussion"></a>

## Discussion

An operation object can be in at most one operation queue at a time and cannot be added if it is currently executing or finished. This method throws an `NSInvalidArgumentException` exception if any of those error conditions are true for any of the operations in the `ops` parameter.

Once added, the specified `operation` remains in the queue until its [isFinished](../operation/isfinished.md) method returns [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Managing Operations in the Queue

- [addOperation(\_:)](addoperation%28__%29-64o8a.md): Adds the specified operation to the receiver.
- [addOperation(\_:)](addoperation%28__%29-5s294.md): Wraps the specified block in an operation and adds it to the receiver.
- [addBarrierBlock(\_:)](addbarrierblock%28__%29.md): Invokes a block when the queue finishes all enqueued operations, and prevents subsequent operations from starting until the block has completed.
- [cancelAllOperations()](cancelalloperations%28%29.md): Cancels all queued and executing operations.
- [waitUntilAllOperationsAreFinished()](waituntilalloperationsarefinished%28%29.md): Blocks the current thread until all the receiver’s queued and executing operations finish executing.
- [operations](operations.md): Deprecated. The operations currently in the queue.
- [operationCount](operationcount.md): Deprecated. The number of operations currently in the queue.

# addOperations:waitUntilFinished: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Adds the specified operations to the queue.

## Declaration

```objectivec
- (void) addOperations:(NSArray<NSOperation *> *) ops waitUntilFinished:(BOOL) wait;
```

## Parameters

- `ops`: The operations to be added to the queue.
- `wait`: If [true](https://developer.apple.com/documentation/swift/true), the current thread is blocked until all of the specified operations finish executing. If [false](https://developer.apple.com/documentation/swift/false), the operations are added to the queue and control returns immediately to the caller.

<a id="Discussion"></a>

## Discussion

An operation object can be in at most one operation queue at a time and cannot be added if it is currently executing or finished. This method throws an `NSInvalidArgumentException` exception if any of those error conditions are true for any of the operations in the `ops` parameter.

Once added, the specified `operation` remains in the queue until its [finished](../operation/isfinished.md) method returns [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Managing Operations in the Queue

- [addOperation:](addoperation%28__%29-64o8a.md): Adds the specified operation to the receiver.
- [addOperationWithBlock:](addoperation%28__%29-5s294.md): Wraps the specified block in an operation and adds it to the receiver.
- [addBarrierBlock:](addbarrierblock%28__%29.md): Invokes a block when the queue finishes all enqueued operations, and prevents subsequent operations from starting until the block has completed.
- [cancelAllOperations](cancelalloperations%28%29.md): Cancels all queued and executing operations.
- [waitUntilAllOperationsAreFinished](waituntilalloperationsarefinished%28%29.md): Blocks the current thread until all the receiver’s queued and executing operations finish executing.
- [operations](operations.md): Deprecated. The operations currently in the queue.
- [operationCount](operationcount.md): Deprecated. The number of operations currently in the queue.

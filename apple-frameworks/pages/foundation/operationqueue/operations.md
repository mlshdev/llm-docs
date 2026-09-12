> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/operationqueue/operations](https://developer.apple.com/documentation/foundation/operationqueue/operations)

# operations (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.5+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

The operations currently in the queue.

> To avoid race conditions while accessing operations, use [addBarrierBlock(\_:)](addbarrierblock%28__%29.md) instead.

## Declaration

```swift
var operations: [Operation] { get }
```

<a id="Discussion"></a>

## Discussion

The array in this property contains zero or more [Operation](../operation.md) objects in the order you added them to the queue. This order doesn’t necessarily reflect the order in which the queue invokes those operations.

You can use this property to access the operations queued at any given moment. Operations remain queued until they finish their task. Therefore, the array may contain operations that are currently running or waiting to run. The list may also contain operations that were running when you retrieved the array but have subsequently finished.

You can monitor changes to the value of this property using [Key-value observing](https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/KVO.html#//apple_ref/doc/uid/TP40008195-CH16) (KVO). Configure an observer to monitor the [operations](operations.md) key path of the operation queue.

## See Also

### Managing Operations in the Queue

- [addOperation(\_:)](addoperation%28__%29-64o8a.md): Adds the specified operation to the receiver.
- [addOperations(\_:waitUntilFinished:)](addoperations%28__waituntilfinished_%29.md): Adds the specified operations to the queue.
- [addOperation(\_:)](addoperation%28__%29-5s294.md): Wraps the specified block in an operation and adds it to the receiver.
- [addBarrierBlock(\_:)](addbarrierblock%28__%29.md): Invokes a block when the queue finishes all enqueued operations, and prevents subsequent operations from starting until the block has completed.
- [cancelAllOperations()](cancelalloperations%28%29.md): Cancels all queued and executing operations.
- [waitUntilAllOperationsAreFinished()](waituntilalloperationsarefinished%28%29.md): Blocks the current thread until all the receiver’s queued and executing operations finish executing.
- [operationCount](operationcount.md): Deprecated. The number of operations currently in the queue.

# operations (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.5+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

The operations currently in the queue.

> To avoid race conditions while accessing operations, use [addBarrierBlock:](addbarrierblock%28__%29.md) instead.

## Declaration

```objectivec
@property (copy, readonly) NSArray<__kindof NSOperation *> * operations;
```

<a id="Discussion"></a>

## Discussion

The array in this property contains zero or more [NSOperation](../operation.md) objects in the order you added them to the queue. This order doesn’t necessarily reflect the order in which the queue invokes those operations.

You can use this property to access the operations queued at any given moment. Operations remain queued until they finish their task. Therefore, the array may contain operations that are currently running or waiting to run. The list may also contain operations that were running when you retrieved the array but have subsequently finished.

You can monitor changes to the value of this property using [Key-value observing](https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/KVO.html#//apple_ref/doc/uid/TP40008195-CH16) (KVO). Configure an observer to monitor the [operations](operations.md) key path of the operation queue.

## See Also

### Managing Operations in the Queue

- [addOperation:](addoperation%28__%29-64o8a.md): Adds the specified operation to the receiver.
- [addOperations:waitUntilFinished:](addoperations%28__waituntilfinished_%29.md): Adds the specified operations to the queue.
- [addOperationWithBlock:](addoperation%28__%29-5s294.md): Wraps the specified block in an operation and adds it to the receiver.
- [addBarrierBlock:](addbarrierblock%28__%29.md): Invokes a block when the queue finishes all enqueued operations, and prevents subsequent operations from starting until the block has completed.
- [cancelAllOperations](cancelalloperations%28%29.md): Cancels all queued and executing operations.
- [waitUntilAllOperationsAreFinished](waituntilalloperationsarefinished%28%29.md): Blocks the current thread until all the receiver’s queued and executing operations finish executing.
- [operationCount](operationcount.md): Deprecated. The number of operations currently in the queue.

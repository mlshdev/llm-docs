> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/operationqueue/operationcount](https://developer.apple.com/documentation/foundation/operationqueue/operationcount)

# operationCount (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 27.0) · iPadOS 4.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.6+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

The number of operations currently in the queue.

> To avoid race conditions while accessing operations, use [addBarrierBlock(\_:)](addbarrierblock%28__%29.md) instead.

## Declaration

```swift
var operationCount: Int { get }
```

<a id="Discussion"></a>

## Discussion

Because the number of operations in the queue changes as those operations finish executing, the value returned by this property reflects the instantaneous number of operations at the time the property was accessed. By the time you use the value, the actual number of operations may be different. As a result, do not use this value for object enumerations or other precise calculations.

You may monitor changes to the value of this property using [Key-value observing](https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/KVO.html#//apple_ref/doc/uid/TP40008195-CH16). Configure an observer to monitor the [operationCount](operationcount.md) key path of the operation queue.

## See Also

### Managing Operations in the Queue

- [addOperation(\_:)](addoperation%28__%29-64o8a.md): Adds the specified operation to the receiver.
- [addOperations(\_:waitUntilFinished:)](addoperations%28__waituntilfinished_%29.md): Adds the specified operations to the queue.
- [addOperation(\_:)](addoperation%28__%29-5s294.md): Wraps the specified block in an operation and adds it to the receiver.
- [addBarrierBlock(\_:)](addbarrierblock%28__%29.md): Invokes a block when the queue finishes all enqueued operations, and prevents subsequent operations from starting until the block has completed.
- [cancelAllOperations()](cancelalloperations%28%29.md): Cancels all queued and executing operations.
- [waitUntilAllOperationsAreFinished()](waituntilalloperationsarefinished%28%29.md): Blocks the current thread until all the receiver’s queued and executing operations finish executing.
- [operations](operations.md): Deprecated. The operations currently in the queue.

# operationCount (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 27.0) · iPadOS 4.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.6+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

The number of operations currently in the queue.

> To avoid race conditions while accessing operations, use [addBarrierBlock:](addbarrierblock%28__%29.md) instead.

## Declaration

```objectivec
@property (readonly) NSUInteger operationCount;
```

<a id="Discussion"></a>

## Discussion

Because the number of operations in the queue changes as those operations finish executing, the value returned by this property reflects the instantaneous number of operations at the time the property was accessed. By the time you use the value, the actual number of operations may be different. As a result, do not use this value for object enumerations or other precise calculations.

You may monitor changes to the value of this property using [Key-value observing](https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/KVO.html#//apple_ref/doc/uid/TP40008195-CH16). Configure an observer to monitor the [operationCount](operationcount.md) key path of the operation queue.

## See Also

### Managing Operations in the Queue

- [addOperation:](addoperation%28__%29-64o8a.md): Adds the specified operation to the receiver.
- [addOperations:waitUntilFinished:](addoperations%28__waituntilfinished_%29.md): Adds the specified operations to the queue.
- [addOperationWithBlock:](addoperation%28__%29-5s294.md): Wraps the specified block in an operation and adds it to the receiver.
- [addBarrierBlock:](addbarrierblock%28__%29.md): Invokes a block when the queue finishes all enqueued operations, and prevents subsequent operations from starting until the block has completed.
- [cancelAllOperations](cancelalloperations%28%29.md): Cancels all queued and executing operations.
- [waitUntilAllOperationsAreFinished](waituntilalloperationsarefinished%28%29.md): Blocks the current thread until all the receiver’s queued and executing operations finish executing.
- [operations](operations.md): Deprecated. The operations currently in the queue.

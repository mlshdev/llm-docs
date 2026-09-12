> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchqueue/asyncandwait(execute:)-1udeu](https://developer.apple.com/documentation/dispatch/dispatchqueue/asyncandwait(execute:)-1udeu)

# asyncAndWait(execute:) (Swift)

**Framework:** Dispatch  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Submits a work item for execution and returns only after it finishes executing.

## Declaration

```swift
func asyncAndWait(execute block: () -> Void)
```

## Parameters

- `block`: The block that contains the work to perform. This block has no return value and no parameters. This parameter cannot be `NULL`.

<a id="Discussion"></a>

## Discussion

This function submits work to the specified queue for execution. Unlike [dispatch_async](../dispatch_async.md), this function does not return until after the block finishes. Calling this function and targeting the current queue results in deadlock.

Unlike [sync(execute:)](sync%28execute_%29-3segw.md), this function respects all attributes of the queue when it executes the block. For example, it respects the quality-of-service level and autorelease frequency of the target queue.

If the runtime has already brought up a thread to service asynchronous work items, the system uses that same thread to execute any synchronous blocks you submitted using this function. If the runtime hasn’t brought up a thread to service asynchronous work items, the sytem executes these synchronous blocks on the current thread as an optimization. However, these optimizations apply only when `queue` targets a global concurrent queue. If it targets any other queue, the system executes the work on that queue’s thread. For example, if `queue` targets the main queue, the block always runs on the main thread.

Unlike with [dispatch_async](../dispatch_async.md), no retain is performed on the target queue. Because calls to this function are synchronous, it “borrows” the reference of the caller. Moreover, no `Block_copy` is performed on the block.

## See Also

### Executing Tasks Synchronously

- [sync(execute:)](sync%28execute_%29-2fzvo.md): Submits a work item for execution on the current queue and returns after that block finishes executing.
- [sync(execute:)](sync%28execute_%29-3segw.md): Submits a block object for execution and returns after that block finishes executing.
- [sync(execute:)](sync%28execute_%29-20xby.md): Submits a work item for execution and returns the results from that item after it finishes executing.
- [sync(flags:execute:)](sync%28flags_execute_%29.md): Submits a work item for execution using the specified attributes and returns the results from that item after it finishes executing.

# dispatch_async_and_wait (Objective-C)

**Framework:** Dispatch  
**Kind:** Function  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Submits a work item for execution and returns only after it finishes executing.

## Declaration

```objectivec
extern void dispatch_async_and_wait(dispatch_queue_t queue, dispatch_block_t block);
```

## Parameters

- `queue`: The queue on which to submit the block. This parameter cannot be `NULL`.
- `block`: The block that contains the work to perform. This block has no return value and no parameters. This parameter cannot be `NULL`.

<a id="Discussion"></a>

## Discussion

This function submits work to the specified queue for execution. Unlike [dispatch_async](../dispatch_async.md), this function does not return until after the block finishes. Calling this function and targeting the current queue results in deadlock.

Unlike [dispatch_sync](sync%28execute_%29-3segw.md), this function respects all attributes of the queue when it executes the block. For example, it respects the quality-of-service level and autorelease frequency of the target queue.

If the runtime has already brought up a thread to service asynchronous work items, the system uses that same thread to execute any synchronous blocks you submitted using this function. If the runtime hasn’t brought up a thread to service asynchronous work items, the sytem executes these synchronous blocks on the current thread as an optimization. However, these optimizations apply only when `queue` targets a global concurrent queue. If it targets any other queue, the system executes the work on that queue’s thread. For example, if `queue` targets the main queue, the block always runs on the main thread.

Unlike with [dispatch_async](../dispatch_async.md), no retain is performed on the target queue. Because calls to this function are synchronous, it “borrows” the reference of the caller. Moreover, no `Block_copy` is performed on the block.

## See Also

### Executing Tasks Synchronously

- [dispatch_sync](sync%28execute_%29-3segw.md): Submits a block object for execution and returns after that block finishes executing.

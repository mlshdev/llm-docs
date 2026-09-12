> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchqueue/sync(execute:)-3segw](https://developer.apple.com/documentation/dispatch/dispatchqueue/sync(execute:)-3segw)

# sync(execute:) (Swift)

**Framework:** Dispatch  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Submits a block object for execution and returns after that block finishes executing.

## Declaration

```swift
func sync(execute block: () -> Void)
```

## Parameters

- `block`: The block that contains the work to perform. This block has no return value and no parameters. This parameter cannot be `NULL`.

<a id="Discussion"></a>

## Discussion

This function submits a block to the specified dispatch queue for synchronous execution. Unlike [dispatch_async](../dispatch_async.md), this function does not return until the block has finished. Calling this function and targeting the current queue results in deadlock.

Unlike with [dispatch_async](../dispatch_async.md), no retain is performed on the target queue. Because calls to this function are synchronous, it “borrows” the reference of the caller. Moreover, no `Block_copy` is performed on the block.

As a performance optimization, this function executes blocks on the current thread whenever possible, with one exception: Blocks submitted to the main dispatch queue always run on the main thread.

## See Also

### Executing Tasks Synchronously

- [sync(execute:)](sync%28execute_%29-2fzvo.md): Submits a work item for execution on the current queue and returns after that block finishes executing.
- [sync(execute:)](sync%28execute_%29-20xby.md): Submits a work item for execution and returns the results from that item after it finishes executing.
- [sync(flags:execute:)](sync%28flags_execute_%29.md): Submits a work item for execution using the specified attributes and returns the results from that item after it finishes executing.
- [asyncAndWait(execute:)](asyncandwait%28execute_%29-1udeu.md): Submits a work item for execution and returns only after it finishes executing.

# dispatch_sync (Objective-C)

**Framework:** Dispatch  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Submits a block object for execution and returns after that block finishes executing.

## Declaration

```objectivec
extern void dispatch_sync(dispatch_queue_t queue, dispatch_block_t block);
```

## Parameters

- `queue`: The queue on which to submit the block. This parameter cannot be `NULL`.
- `block`: The block that contains the work to perform. This block has no return value and no parameters. This parameter cannot be `NULL`.

<a id="Discussion"></a>

## Discussion

This function submits a block to the specified dispatch queue for synchronous execution. Unlike [dispatch_async](../dispatch_async.md), this function does not return until the block has finished. Calling this function and targeting the current queue results in deadlock.

Unlike with [dispatch_async](../dispatch_async.md), no retain is performed on the target queue. Because calls to this function are synchronous, it “borrows” the reference of the caller. Moreover, no `Block_copy` is performed on the block.

As a performance optimization, this function executes blocks on the current thread whenever possible, with one exception: Blocks submitted to the main dispatch queue always run on the main thread.

## See Also

### Executing Tasks Synchronously

- [dispatch_async_and_wait](asyncandwait%28execute_%29-1udeu.md): Submits a work item for execution and returns only after it finishes executing.

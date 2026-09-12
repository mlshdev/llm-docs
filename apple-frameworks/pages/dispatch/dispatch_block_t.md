> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatch_block_t](https://developer.apple.com/documentation/dispatch/dispatch_block_t)

# dispatch_block_t

**Interface language:** Objective-C

**Framework:** Dispatch  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The prototype of blocks submitted to dispatch queues, which take no arguments and have no return value.

## Declaration

```objectivec
typedef void (^)(void) dispatch_block_t;
```

<a id="Discussion"></a>

## Discussion

Blocks behave like other Objective-C objects. Under ARC, the system releases and retains them automatically, and it converts them to malloc blocks as needed to facilitate their escape from the current scope of execution. When ARC is disabled, you are responsible for retaining and releasing blocks at appropriate times, and for copying blocks before allowing them to escape from the current scope of execution.

## See Also

### Executing Tasks Asynchronously

- [dispatch_async](dispatch_async.md): Submits a block for asynchronous execution on a dispatch queue and returns immediately.
- [dispatch_async_f](dispatch_async_f.md): Submits an app-defined function for asynchronous execution on a dispatch queue and returns immediately.
- [dispatch_after](dispatch_after.md): Enqueues a block for execution at the specified time.
- [dispatch_after_f](dispatch_after_f.md): Enqueues an app-defined function for execution at the specified time.
- [dispatch_function_t](dispatch_function_t.md): The prototype of functions submitted to dispatch queues.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatch_function_t](https://developer.apple.com/documentation/dispatch/dispatch_function_t)

# dispatch_function_t

**Interface language:** Objective-C

**Framework:** Dispatch  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The prototype of functions submitted to dispatch queues.

## Declaration

```objectivec
typedef void (*)(void *) dispatch_function_t;
```

<a id="Discussion"></a>

## Discussion

Functions that take a `dispatch_function_t` type as a parameter also take a pointer to contextual data that you provide. When your dispatch function is called, the pointer to that contextual data is passed as the parameter to the function. The pointer to the contextual data is passed unmodified to your function and it is your responsibility to ensure that the pointer is valid.

## See Also

### Executing Tasks Asynchronously

- [dispatch_async](dispatch_async.md): Submits a block for asynchronous execution on a dispatch queue and returns immediately.
- [dispatch_async_f](dispatch_async_f.md): Submits an app-defined function for asynchronous execution on a dispatch queue and returns immediately.
- [dispatch_after](dispatch_after.md): Enqueues a block for execution at the specified time.
- [dispatch_after_f](dispatch_after_f.md): Enqueues an app-defined function for execution at the specified time.
- [dispatch_block_t](dispatch_block_t.md): The prototype of blocks submitted to dispatch queues, which take no arguments and have no return value.

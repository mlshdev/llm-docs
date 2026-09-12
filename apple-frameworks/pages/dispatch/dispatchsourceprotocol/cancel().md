> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchsourceprotocol/cancel()](https://developer.apple.com/documentation/dispatch/dispatchsourceprotocol/cancel())

# cancel()

**Framework:** Dispatch  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Asynchronously cancels the dispatch source, preventing any further invocation of its event handler block.

## Declaration

```swift
func cancel()
```

<a id="Discussion"></a>

## Discussion

Cancellation prevents any further invocation of the event handler block for the dispatch source, but does not interrupt any work that is already in progress. If a cancellation handler was set before cancellation, it is sub mitted to the target queue once any in-progress event handler work is finished. Once the cancellation handler is submitted, it is safe to close the source’s handle (file descriptor or mach port). It is invalid to close a file descriptor or deallocate a mach port that is currently being tracked by a dispatch source object before the cancellation handler is invoked.

## See Also

### Canceling a Dispatch Source

- [isCancelled](iscancelled.md): Returns a Boolean indicating whether the given dispatch source has been canceled.
- [setCancelHandler(handler:)](setcancelhandler%28handler_%29.md): Sets the cancellation handler block for the dispatch source.
- [setCancelHandler(qos:flags:handler:)](setcancelhandler%28qos_flags_handler_%29.md): Sets the cancellation handler block for the dispatch source with the specified quality-of-service class and work item options.

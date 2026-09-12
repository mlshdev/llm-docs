> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchsourceprotocol/iscancelled](https://developer.apple.com/documentation/dispatch/dispatchsourceprotocol/iscancelled)

# isCancelled

**Framework:** Dispatch  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a Boolean indicating whether the given dispatch source has been canceled.

## Declaration

```swift
var isCancelled: Bool { get }
```

## See Also

### Canceling a Dispatch Source

- [cancel()](cancel%28%29.md): Asynchronously cancels the dispatch source, preventing any further invocation of its event handler block.
- [setCancelHandler(handler:)](setcancelhandler%28handler_%29.md): Sets the cancellation handler block for the dispatch source.
- [setCancelHandler(qos:flags:handler:)](setcancelhandler%28qos_flags_handler_%29.md): Sets the cancellation handler block for the dispatch source with the specified quality-of-service class and work item options.

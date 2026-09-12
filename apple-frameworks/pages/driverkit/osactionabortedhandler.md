> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/osactionabortedhandler](https://developer.apple.com/documentation/driverkit/osactionabortedhandler)

# OSActionAbortedHandler

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Type Alias  
**Availability:** DriverKit · iOS · iPadOS · macOS

The block to call before aborting an action object.

## Declaration

```objectivec
typedef void (^)(void) OSActionAbortedHandler;
```

## See Also

### Ending the Action Early

- [Cancel](osaction/cancel.md): Cancels the execution of the action’s callbacks.
- [Aborted](osaction/aborted.md): Calls the abort handler of the action object.
- [OSActionCancelHandler](osactioncancelhandler.md): The block to call after the successful cancellation of the action.

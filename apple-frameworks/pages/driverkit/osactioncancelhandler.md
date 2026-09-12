> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/osactioncancelhandler](https://developer.apple.com/documentation/driverkit/osactioncancelhandler)

# OSActionCancelHandler

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Type Alias  
**Availability:** DriverKit · iOS · iPadOS · macOS

The block to call after the successful cancellation of the action.

## Declaration

```objectivec
typedef void (^)(void) OSActionCancelHandler;
```

## See Also

### Ending the Action Early

- [Cancel](osaction/cancel.md): Cancels the execution of the action’s callbacks.
- [Aborted](osaction/aborted.md): Calls the abort handler of the action object.
- [OSActionAbortedHandler](osactionabortedhandler.md): The block to call before aborting an action object.

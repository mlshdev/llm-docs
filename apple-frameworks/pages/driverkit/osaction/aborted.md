> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/osaction/aborted](https://developer.apple.com/documentation/driverkit/osaction/aborted)

# Aborted

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

Calls the abort handler of the action object.

## Declaration

```objectivec
virtual void Aborted();
```

<a id="Discussion"></a>

## Discussion

Don’t call this method directly. The system calls it when no other objects reference the action object.

## See Also

### Ending the Action Early

- [Cancel](cancel.md): Cancels the execution of the action’s callbacks.
- [OSActionAbortedHandler](../osactionabortedhandler.md): The block to call before aborting an action object.
- [OSActionCancelHandler](../osactioncancelhandler.md): The block to call after the successful cancellation of the action.

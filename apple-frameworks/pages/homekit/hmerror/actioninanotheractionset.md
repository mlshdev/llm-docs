> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmerror/actioninanotheractionset](https://developer.apple.com/documentation/homekit/hmerror/actioninanotheractionset)

# actionInAnotherActionSet

**Framework:** HomeKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

An attempt to add an action that exists in one action set to another action set.

## Declaration

```swift
static var actionInAnotherActionSet: HMError.Code { get }
```

## See Also

### Detecting action set errors

- [actionSetExecutionFailed](actionsetexecutionfailed.md): An attempt to execute the action set failed.
- [actionSetExecutionInProgress](actionsetexecutioninprogress.md): An error indicating the execution of the action set is in progress.
- [actionSetExecutionPartialSuccess](actionsetexecutionpartialsuccess.md): An attempt to execute the action set was only partially successful.
- [cannotRemoveBuiltinActionSet](cannotremovebuiltinactionset.md): An error indicating the built-in action set cannot be removed.
- [noActionsInActionSet](noactionsinactionset.md): An attempt to execute an action set with no actions.
- [noRegisteredActionSets](noregisteredactionsets.md): An attempt to activate a trigger with no action sets.

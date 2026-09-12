> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmerror/cannotremovebuiltinactionset](https://developer.apple.com/documentation/homekit/hmerror/cannotremovebuiltinactionset)

# cannotRemoveBuiltinActionSet

**Framework:** HomeKit  
**Kind:** Type Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An error indicating the built-in action set cannot be removed.

## Declaration

```swift
static var cannotRemoveBuiltinActionSet: HMError.Code { get }
```

## See Also

### Detecting action set errors

- [actionInAnotherActionSet](actioninanotheractionset.md): An attempt to add an action that exists in one action set to another action set.
- [actionSetExecutionFailed](actionsetexecutionfailed.md): An attempt to execute the action set failed.
- [actionSetExecutionInProgress](actionsetexecutioninprogress.md): An error indicating the execution of the action set is in progress.
- [actionSetExecutionPartialSuccess](actionsetexecutionpartialsuccess.md): An attempt to execute the action set was only partially successful.
- [noActionsInActionSet](noactionsinactionset.md): An attempt to execute an action set with no actions.
- [noRegisteredActionSets](noregisteredactionsets.md): An attempt to activate a trigger with no action sets.

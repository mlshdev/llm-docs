> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundtasks/bgtaskscheduler/error/notpermitted](https://developer.apple.com/documentation/backgroundtasks/bgtaskscheduler/error/notpermitted)

# notPermitted

**Framework:** Background Tasks  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

A task scheduling error that indicates the app isn’t permitted to launch the task.

## Declaration

```swift
static var notPermitted: BGTaskScheduler.Error.Code { get }
```

<a id="Discussion"></a>

## Discussion

There are two causes for this error:

- The app didn’t set the appropriate mode in the [UIBackgroundModes](../../../bundleresources/information-property-list/uibackgroundmodes.md) array.
- The task identifier of the submitted task wasn’t in the [BGTaskSchedulerPermittedIdentifiers](../../../bundleresources/information-property-list/bgtaskschedulerpermittedidentifiers.md) array in [The Info.plist File](https://developer.apple.com/library/archive/documentation/Carbon/Conceptual/ProvidingUserAssitAppleHelp/authoring_help/authoring_help_book.html#//apple_ref/doc/uid/TP30000903-CH206-SW22).

## See Also

### Getting the error codes

- [BGTaskScheduler.Error.Code](code.md): An enumeration of the task scheduling errors.
- [tooManyPendingTaskRequests](toomanypendingtaskrequests.md): A task scheduling error that indicates there are too many pending tasks of the type requested.
- [unavailable](unavailable.md): A task scheduling error that indicates the app or extension can’t schedule background work.

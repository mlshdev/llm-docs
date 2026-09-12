> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundtasks/bgtaskscheduler/error/unavailable](https://developer.apple.com/documentation/backgroundtasks/bgtaskscheduler/error/unavailable)

# unavailable

**Framework:** Background Tasks  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

A task scheduling error that indicates the app or extension can’t schedule background work.

## Declaration

```swift
static var unavailable: BGTaskScheduler.Error.Code { get }
```

<a id="Discussion"></a>

## Discussion

This error usually occurs for one of three reasons:

- A person disabled background refresh in settings.
- The app runs on Simulator which doesn’t support background processing.
- The extension either didn’t set [RequestsOpenAccess](../../../bundleresources/information-property-list/nsextension/nsextensionattributes/requestsopenaccess.md) to `YES` in [The Info.plist File](https://developer.apple.com/library/archive/documentation/Carbon/Conceptual/ProvidingUserAssitAppleHelp/authoring_help/authoring_help_book.html#//apple_ref/doc/uid/TP30000903-CH206-SW22), or a person didn’t grant open access.

## See Also

### Getting the error codes

- [BGTaskScheduler.Error.Code](code.md): An enumeration of the task scheduling errors.
- [notPermitted](notpermitted.md): A task scheduling error that indicates the app isn’t permitted to launch the task.
- [tooManyPendingTaskRequests](toomanypendingtaskrequests.md): A task scheduling error that indicates there are too many pending tasks of the type requested.

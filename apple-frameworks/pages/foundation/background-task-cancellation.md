> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/background-task-cancellation](https://developer.apple.com/documentation/foundation/background-task-cancellation)

# Background task cancellation

**Interface languages:** Swift, Objective-C

**Framework:** Foundation  
**Kind:** API Collection

Constants that indicate why a background task was canceled.

<a id="overview"></a>

## Overview

These values are used in conjunction with the [NSURLErrorBackgroundTaskCancelledReasonKey](nsurlerrorbackgroundtaskcancelledreasonkey.md) key in an [NSError](nserror.md) object’s `userInfo` dictionary.

## Topics

### Cancellation reasons

- [NSURLErrorCancelledReasonBackgroundUpdatesDisabled](nsurlerrorcancelledreasonbackgroundupdatesdisabled.md): A reason that indicates the system canceled the background task because background tasks are disabled.
- [NSURLErrorCancelledReasonInsufficientSystemResources](nsurlerrorcancelledreasoninsufficientsystemresources.md): A reason that indicates the system canceled the background task because it lacks sufficient resources to perform the task.
- [NSURLErrorCancelledReasonUserForceQuitApplication](nsurlerrorcancelledreasonuserforcequitapplication.md): A reason that indicates the system canceled the background task because the user force-quit the application.

## See Also

### Handling errors

- [URL session error dictionary keys](url-session-error-dictionary-keys.md): Keys used in conjunction with error objects returned by URL sessions and tasks.

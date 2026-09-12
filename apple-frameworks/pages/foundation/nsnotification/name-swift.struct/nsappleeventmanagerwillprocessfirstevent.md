> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsnotification/name-swift.struct/nsappleeventmanagerwillprocessfirstevent](https://developer.apple.com/documentation/foundation/nsnotification/name-swift.struct/nsappleeventmanagerwillprocessfirstevent)

# NSAppleEventManagerWillProcessFirstEvent (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Posted by `NSAppleEventManager` before it first dispatches an Apple event. Your application can use this notification to avoid registering any Apple event handlers until the first time at which they may be needed.

## Declaration

```swift
static let NSAppleEventManagerWillProcessFirstEvent: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The notification object is the `NSAppleEventManager`. This notification does not contain a `userInfo` dictionary.

## See Also

### Foundation

- [NSUbiquityIdentityDidChange](nsubiquityidentitydidchange.md): Sent after the iCloud (“ubiquity”) identity has changed.
- [NSUndoManagerCheckpoint](nsundomanagercheckpoint.md): Posted whenever an undo manager opens or closes an undo group (except when it opens a top-level group) and when checking the redo stack.
- [NSUndoManagerDidCloseUndoGroup](nsundomanagerdidcloseundogroup.md): Posted after an undo manager closes an undo group.
- [NSUndoManagerDidOpenUndoGroup](nsundomanagerdidopenundogroup.md): Posted whenever an undo manager opens an undo group.
- [NSUndoManagerDidRedoChange](nsundomanagerdidredochange.md): Posted just after an undo manager performs a redo operation.
- [NSUndoManagerDidUndoChange](nsundomanagerdidundochange.md): Posted just after an undo manager performs an undo operation.
- [NSUndoManagerWillCloseUndoGroup](nsundomanagerwillcloseundogroup.md): Posted before an undo manager closes an undo group.
- [NSUndoManagerWillRedoChange](nsundomanagerwillredochange.md): Posted just before an undo manager performs a redo operation.
- [NSUndoManagerWillUndoChange](nsundomanagerwillundochange.md): Posted just before an undo manager performs an undo operation.
- [NSWillBecomeMultiThreaded](nswillbecomemultithreaded.md): Deprecated. Posted when the first thread is detached from the current thread. The `NSThread` class posts this notification at most once—the first time a thread is detached using [detachNewThreadSelector(\_:toTarget:with:)](../../thread/detachnewthreadselector%28__totarget_with_%29.md) or the [start()](../../thread/start%28%29.md) method. Subsequent invocations of those methods do not post this notification. Observers of this notification have their notification method invoked in the main thread, not the new thread. The observer notification methods always execute before the new thread begins executing.
- [NSBundleResourceRequestLowDiskSpace](nsbundleresourcerequestlowdiskspace.md): Deprecated. Posted after the system detects that the amount of available disk space is getting low. The notification is posted to the default notification center.
- [NSCalendarDayChanged](nscalendardaychanged.md): A notification that is posted whenever the calendar day of the system changes, as determined by the system calendar, locale, and time zone.
- [NSDidBecomeSingleThreaded](nsdidbecomesinglethreaded.md): Deprecated. Not implemented.
- [NSExtensionHostDidBecomeActive](nsextensionhostdidbecomeactive.md): Posted when the extension’s host app moves from the inactive to the active state.
- [NSExtensionHostDidEnterBackground](nsextensionhostdidenterbackground.md): Posted when the extension’s host app begins running in the background.

# NSAppleEventManagerWillProcessFirstEventNotification (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Posted by `NSAppleEventManager` before it first dispatches an Apple event. Your application can use this notification to avoid registering any Apple event handlers until the first time at which they may be needed.

## Declaration

```objectivec
extern NSNotificationName const NSAppleEventManagerWillProcessFirstEventNotification;
```

<a id="Discussion"></a>

## Discussion

The notification object is the `NSAppleEventManager`. This notification does not contain a `userInfo` dictionary.

## See Also

### Foundation

- [NSUbiquityIdentityDidChangeNotification](nsubiquityidentitydidchange.md): Sent after the iCloud (“ubiquity”) identity has changed.
- [NSUndoManagerCheckpointNotification](nsundomanagercheckpoint.md): Posted whenever an undo manager opens or closes an undo group (except when it opens a top-level group) and when checking the redo stack.
- [NSUndoManagerDidCloseUndoGroupNotification](nsundomanagerdidcloseundogroup.md): Posted after an undo manager closes an undo group.
- [NSUndoManagerDidOpenUndoGroupNotification](nsundomanagerdidopenundogroup.md): Posted whenever an undo manager opens an undo group.
- [NSUndoManagerDidRedoChangeNotification](nsundomanagerdidredochange.md): Posted just after an undo manager performs a redo operation.
- [NSUndoManagerDidUndoChangeNotification](nsundomanagerdidundochange.md): Posted just after an undo manager performs an undo operation.
- [NSUndoManagerWillCloseUndoGroupNotification](nsundomanagerwillcloseundogroup.md): Posted before an undo manager closes an undo group.
- [NSUndoManagerWillRedoChangeNotification](nsundomanagerwillredochange.md): Posted just before an undo manager performs a redo operation.
- [NSUndoManagerWillUndoChangeNotification](nsundomanagerwillundochange.md): Posted just before an undo manager performs an undo operation.
- [NSWillBecomeMultiThreadedNotification](nswillbecomemultithreaded.md): Deprecated. Posted when the first thread is detached from the current thread. The `NSThread` class posts this notification at most once—the first time a thread is detached using [detachNewThreadSelector:toTarget:withObject:](../../thread/detachnewthreadselector%28__totarget_with_%29.md) or the [start](../../thread/start%28%29.md) method. Subsequent invocations of those methods do not post this notification. Observers of this notification have their notification method invoked in the main thread, not the new thread. The observer notification methods always execute before the new thread begins executing.
- [NSBundleResourceRequestLowDiskSpaceNotification](nsbundleresourcerequestlowdiskspace.md): Deprecated. Posted after the system detects that the amount of available disk space is getting low. The notification is posted to the default notification center.
- [NSCalendarDayChangedNotification](nscalendardaychanged.md): A notification that is posted whenever the calendar day of the system changes, as determined by the system calendar, locale, and time zone.
- [NSDidBecomeSingleThreadedNotification](nsdidbecomesinglethreaded.md): Deprecated. Not implemented.
- [NSExtensionHostDidBecomeActiveNotification](nsextensionhostdidbecomeactive.md): Posted when the extension’s host app moves from the inactive to the active state.
- [NSExtensionHostDidEnterBackgroundNotification](nsextensionhostdidenterbackground.md): Posted when the extension’s host app begins running in the background.

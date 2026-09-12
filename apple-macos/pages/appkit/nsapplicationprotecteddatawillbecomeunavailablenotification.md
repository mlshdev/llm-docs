> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplicationprotecteddatawillbecomeunavailablenotification](https://developer.apple.com/documentation/appkit/nsapplicationprotecteddatawillbecomeunavailablenotification)

# NSApplicationProtectedDataWillBecomeUnavailableNotification

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 12.0+

Posted when protected data is about to become unavailable.

## Declaration

```objectivec
extern NSNotificationName NSApplicationProtectedDataWillBecomeUnavailableNotification;
```

<a id="Discussion"></a>

## Discussion

The notification object is [sharedApplication](nsapplication/shared.md). This notification doesn’t contain a `userInfo` dictionary. The system posts this notification on the main actor.

To observe this notification using Swift concurrency, use [NSApplication.ProtectedDataWillBecomeUnavailableMessage](nsapplication/protecteddatawillbecomeunavailablemessage.md).

## See Also

### Notifications

- [NSApplicationDidBecomeActiveNotification](nsapplication/didbecomeactivenotification.md): Posted immediately after the app becomes active.
- [NSApplicationDidChangeScreenParametersNotification](nsapplication/didchangescreenparametersnotification.md): Posted when the configuration of the displays attached to the computer is changed.
- [NSApplicationDidFinishLaunchingNotification](nsapplication/didfinishlaunchingnotification.md): Posted at the end of the [finishLaunching](nsapplication/finishlaunching%28%29.md) method to indicate that the app has completed launching and is ready to run.
- [NSApplicationDidHideNotification](nsapplication/didhidenotification.md): Posted at the end of the [hide:](nsapplication/hide%28__%29.md) method to indicate that the app is now hidden.
- [NSApplicationDidResignActiveNotification](nsapplication/didresignactivenotification.md): Posted immediately after the app gives up its active status to another app.
- [NSApplicationDidUnhideNotification](nsapplication/didunhidenotification.md): Posted at the end of the [unhideWithoutActivation](nsapplication/unhidewithoutactivation%28%29.md) method to indicate that the app is now visible.
- [NSApplicationDidUpdateNotification](nsapplication/didupdatenotification.md): Posted at the end of the [updateWindows](nsapplication/updatewindows%28%29.md) method to indicate that the app has finished updating its windows.
- [NSApplicationWillBecomeActiveNotification](nsapplication/willbecomeactivenotification.md): Posted immediately before the app becomes active.
- [NSApplicationWillFinishLaunchingNotification](nsapplication/willfinishlaunchingnotification.md): Posted at the start of the [finishLaunching](nsapplication/finishlaunching%28%29.md) method to indicate that the app has completed its initialization process and is about to finish launching.
- [NSApplicationWillHideNotification](nsapplication/willhidenotification.md): Posted at the start of the [hide:](nsapplication/hide%28__%29.md) method to indicate that the app is about to be hidden.
- [NSApplicationWillResignActiveNotification](nsapplication/willresignactivenotification.md): Posted immediately before the app gives up its active status to another app.
- [NSApplicationWillTerminateNotification](nsapplication/willterminatenotification.md): Sends a notification to terminate the app.
- [NSApplicationWillUnhideNotification](nsapplication/willunhidenotification.md): Posted at the start of the [unhideWithoutActivation](nsapplication/unhidewithoutactivation%28%29.md) method to indicate that the app is about to become visible.
- [NSApplicationWillUpdateNotification](nsapplication/willupdatenotification.md): Posted at the start of the [updateWindows](nsapplication/updatewindows%28%29.md) method to indicate that the app is about to update its windows.
- [NSApplicationDidFinishRestoringWindowsNotification](nsapplication/didfinishrestoringwindowsnotification.md): Posted when the app has finished restoring windows.

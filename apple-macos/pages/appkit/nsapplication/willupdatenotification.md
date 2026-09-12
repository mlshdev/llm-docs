> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/willupdatenotification](https://developer.apple.com/documentation/appkit/nsapplication/willupdatenotification)

# willUpdateNotification (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Posted at the start of the [updateWindows()](updatewindows%28%29.md) method to indicate that the app is about to update its windows.

## Declaration

```swift
class let willUpdateNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The notification object is [shared](shared.md). This notification doesn’t contain a `userInfo` dictionary.  The system posts this notification on the main actor.

To observe this notification using Swift concurrency, use [NSApplication.WillUpdateWindowsMessage](willupdatewindowsmessage.md).

## See Also

### Notifications

- [didBecomeActiveNotification](didbecomeactivenotification.md): Posted immediately after the app becomes active.
- [didChangeScreenParametersNotification](didchangescreenparametersnotification.md): Posted when the configuration of the displays attached to the computer is changed.
- [didFinishLaunchingNotification](didfinishlaunchingnotification.md): Posted at the end of the [finishLaunching()](finishlaunching%28%29.md) method to indicate that the app has completed launching and is ready to run.
- [didHideNotification](didhidenotification.md): Posted at the end of the [hide(\_:)](hide%28__%29.md) method to indicate that the app is now hidden.
- [didResignActiveNotification](didresignactivenotification.md): Posted immediately after the app gives up its active status to another app.
- [didUnhideNotification](didunhidenotification.md): Posted at the end of the [unhideWithoutActivation()](unhidewithoutactivation%28%29.md) method to indicate that the app is now visible.
- [didUpdateNotification](didupdatenotification.md): Posted at the end of the [updateWindows()](updatewindows%28%29.md) method to indicate that the app has finished updating its windows.
- [willBecomeActiveNotification](willbecomeactivenotification.md): Posted immediately before the app becomes active.
- [willFinishLaunchingNotification](willfinishlaunchingnotification.md): Posted at the start of the [finishLaunching()](finishlaunching%28%29.md) method to indicate that the app has completed its initialization process and is about to finish launching.
- [willHideNotification](willhidenotification.md): Posted at the start of the [hide(\_:)](hide%28__%29.md) method to indicate that the app is about to be hidden.
- [willResignActiveNotification](willresignactivenotification.md): Posted immediately before the app gives up its active status to another app.
- [willTerminateNotification](willterminatenotification.md): Sends a notification to terminate the app.
- [willUnhideNotification](willunhidenotification.md): Posted at the start of the [unhideWithoutActivation()](unhidewithoutactivation%28%29.md) method to indicate that the app is about to become visible.
- [didFinishRestoringWindowsNotification](didfinishrestoringwindowsnotification.md): Posted when the app has finished restoring windows.
- [didChangeOcclusionStateNotification](didchangeocclusionstatenotification.md): Posted when the app’s occlusion state changes.

# NSApplicationWillUpdateNotification (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS

Posted at the start of the [updateWindows](updatewindows%28%29.md) method to indicate that the app is about to update its windows.

## Declaration

```objectivec
extern NSNotificationName NSApplicationWillUpdateNotification;
```

<a id="Discussion"></a>

## Discussion

The notification object is [sharedApplication](shared.md). This notification doesn’t contain a `userInfo` dictionary.  The system posts this notification on the main actor.

To observe this notification using Swift concurrency, use [NSApplication.WillUpdateWindowsMessage](willupdatewindowsmessage.md).

## See Also

### Notifications

- [NSApplicationDidBecomeActiveNotification](didbecomeactivenotification.md): Posted immediately after the app becomes active.
- [NSApplicationDidChangeScreenParametersNotification](didchangescreenparametersnotification.md): Posted when the configuration of the displays attached to the computer is changed.
- [NSApplicationDidFinishLaunchingNotification](didfinishlaunchingnotification.md): Posted at the end of the [finishLaunching](finishlaunching%28%29.md) method to indicate that the app has completed launching and is ready to run.
- [NSApplicationDidHideNotification](didhidenotification.md): Posted at the end of the [hide:](hide%28__%29.md) method to indicate that the app is now hidden.
- [NSApplicationDidResignActiveNotification](didresignactivenotification.md): Posted immediately after the app gives up its active status to another app.
- [NSApplicationDidUnhideNotification](didunhidenotification.md): Posted at the end of the [unhideWithoutActivation](unhidewithoutactivation%28%29.md) method to indicate that the app is now visible.
- [NSApplicationDidUpdateNotification](didupdatenotification.md): Posted at the end of the [updateWindows](updatewindows%28%29.md) method to indicate that the app has finished updating its windows.
- [NSApplicationWillBecomeActiveNotification](willbecomeactivenotification.md): Posted immediately before the app becomes active.
- [NSApplicationWillFinishLaunchingNotification](willfinishlaunchingnotification.md): Posted at the start of the [finishLaunching](finishlaunching%28%29.md) method to indicate that the app has completed its initialization process and is about to finish launching.
- [NSApplicationWillHideNotification](willhidenotification.md): Posted at the start of the [hide:](hide%28__%29.md) method to indicate that the app is about to be hidden.
- [NSApplicationWillResignActiveNotification](willresignactivenotification.md): Posted immediately before the app gives up its active status to another app.
- [NSApplicationWillTerminateNotification](willterminatenotification.md): Sends a notification to terminate the app.
- [NSApplicationWillUnhideNotification](willunhidenotification.md): Posted at the start of the [unhideWithoutActivation](unhidewithoutactivation%28%29.md) method to indicate that the app is about to become visible.
- [NSApplicationDidFinishRestoringWindowsNotification](didfinishrestoringwindowsnotification.md): Posted when the app has finished restoring windows.
- [NSApplicationDidChangeOcclusionStateNotification](didchangeocclusionstatenotification.md): Posted when the app’s occlusion state changes.

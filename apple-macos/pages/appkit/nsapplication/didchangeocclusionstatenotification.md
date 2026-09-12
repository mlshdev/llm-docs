> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/didchangeocclusionstatenotification](https://developer.apple.com/documentation/appkit/nsapplication/didchangeocclusionstatenotification)

# didChangeOcclusionStateNotification (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.9+

Posted when the app’s occlusion state changes.

## Declaration

```swift
class let didChangeOcclusionStateNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The system posts this notification on the main actor.  Upon receiving this notification, you can query the app for its occlusion state. Note that this only notifies about changes in the state of the occlusion, not when the occlusion region changes. You can use this notification to increase responsiveness and save power by halting any expensive calculations that the user can’t see.

To observe this notification using Swift concurrency, use [NSApplication.DidChangeOcclusionStateMessage](didchangeocclusionstatemessage.md).

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
- [willUpdateNotification](willupdatenotification.md): Posted at the start of the [updateWindows()](updatewindows%28%29.md) method to indicate that the app is about to update its windows.
- [didFinishRestoringWindowsNotification](didfinishrestoringwindowsnotification.md): Posted when the app has finished restoring windows.

# NSApplicationDidChangeOcclusionStateNotification (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.9+

Posted when the app’s occlusion state changes.

## Declaration

```objectivec
extern NSNotificationName const NSApplicationDidChangeOcclusionStateNotification;
```

<a id="Discussion"></a>

## Discussion

The system posts this notification on the main actor.  Upon receiving this notification, you can query the app for its occlusion state. Note that this only notifies about changes in the state of the occlusion, not when the occlusion region changes. You can use this notification to increase responsiveness and save power by halting any expensive calculations that the user can’t see.

To observe this notification using Swift concurrency, use [NSApplication.DidChangeOcclusionStateMessage](didchangeocclusionstatemessage.md).

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
- [NSApplicationWillUpdateNotification](willupdatenotification.md): Posted at the start of the [updateWindows](updatewindows%28%29.md) method to indicate that the app is about to update its windows.
- [NSApplicationDidFinishRestoringWindowsNotification](didfinishrestoringwindowsnotification.md): Posted when the app has finished restoring windows.

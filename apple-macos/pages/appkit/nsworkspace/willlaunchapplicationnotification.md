> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsworkspace/willlaunchapplicationnotification](https://developer.apple.com/documentation/appkit/nsworkspace/willlaunchapplicationnotification)

# willLaunchApplicationNotification (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

A notification that the workspace posts when the Finder is about to launch an app.

## Declaration

```swift
class let willLaunchApplicationNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The notification object is the shared `NSWorkspace` instance. The `userInfo` dictionary contains the [applicationUserInfoKey](applicationuserinfokey.md) key with a corresponding instance of [NSRunningApplication](../nsrunningapplication.md) that represents the affected app.

The system doesn’t post this notification for background apps or for apps that have the `LSUIElement` key in their `Info.plist` file. If you want to know when all apps (including background apps) launch or terminate, use key-value observing to monitor the value that returns from the [runningApplications](runningapplications.md) method.

> **Important**

>  To receive this notification, use [notificationCenter](notificationcenter.md) to register for it. If you use a different notification center to register, you won’t receive the notification.

To observe this notification using Swift concurrency, use [NSWorkspace.WillLaunchApplicationMessage](willlaunchapplicationmessage.md).

## See Also

### Responding to Environment Notifications

- [didLaunchApplicationNotification](didlaunchapplicationnotification.md): A notification that the workspace posts when a new app starts up.
- [didTerminateApplicationNotification](didterminateapplicationnotification.md): A notification that the workspace posts when an app finishes executing.
- [sessionDidBecomeActiveNotification](sessiondidbecomeactivenotification.md): A notification that the workspace posts after a user session switches in.
- [sessionDidResignActiveNotification](sessiondidresignactivenotification.md): A notification that the workspace posts before a user session switches out.
- [didHideApplicationNotification](didhideapplicationnotification.md): A notification that the workspace posts when the Finder hides an app.
- [didUnhideApplicationNotification](didunhideapplicationnotification.md): A notification that the workspace posts when the Finder unhides an app.
- [didActivateApplicationNotification](didactivateapplicationnotification.md): A notification that the workspace posts when the Finder is about to activate an app.
- [didDeactivateApplicationNotification](diddeactivateapplicationnotification.md): A notification that the workspace posts when the Finder deactivates an app.
- [didRenameVolumeNotification](didrenamevolumenotification.md): A notification that the workspace posts when a volume changes its name or mount path.
- [didMountNotification](didmountnotification.md): A notification that the workspace posts when a new device mounts.
- [willUnmountNotification](willunmountnotification.md): A notification that the workspace posts when the Finder is about to unmount a device.
- [didUnmountNotification](didunmountnotification.md): A notification that the workspace posts when the Finder unmounts a device.
- [didChangeFileLabelsNotification](didchangefilelabelsnotification.md): A notification that the workspace posts when the Finder file labels or colors change.
- [activeSpaceDidChangeNotification](activespacedidchangenotification.md): A notification that the workspace posts when a Spaces change occurs.
- [didWakeNotification](didwakenotification.md): A notification that the workspace posts when the device wakes from sleep.

# NSWorkspaceWillLaunchApplicationNotification (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS

A notification that the workspace posts when the Finder is about to launch an app.

## Declaration

```objectivec
extern NSNotificationName NSWorkspaceWillLaunchApplicationNotification;
```

<a id="Discussion"></a>

## Discussion

The notification object is the shared `NSWorkspace` instance. The `userInfo` dictionary contains the [NSWorkspaceApplicationKey](applicationuserinfokey.md) key with a corresponding instance of [NSRunningApplication](../nsrunningapplication.md) that represents the affected app.

The system doesn’t post this notification for background apps or for apps that have the `LSUIElement` key in their `Info.plist` file. If you want to know when all apps (including background apps) launch or terminate, use key-value observing to monitor the value that returns from the [runningApplications](runningapplications.md) method.

> **Important**

>  To receive this notification, use [notificationCenter](notificationcenter.md) to register for it. If you use a different notification center to register, you won’t receive the notification.

To observe this notification using Swift concurrency, use [NSWorkspace.WillLaunchApplicationMessage](willlaunchapplicationmessage.md).

## See Also

### Responding to Environment Notifications

- [NSWorkspaceDidLaunchApplicationNotification](didlaunchapplicationnotification.md): A notification that the workspace posts when a new app starts up.
- [NSWorkspaceDidTerminateApplicationNotification](didterminateapplicationnotification.md): A notification that the workspace posts when an app finishes executing.
- [NSWorkspaceSessionDidBecomeActiveNotification](sessiondidbecomeactivenotification.md): A notification that the workspace posts after a user session switches in.
- [NSWorkspaceSessionDidResignActiveNotification](sessiondidresignactivenotification.md): A notification that the workspace posts before a user session switches out.
- [NSWorkspaceDidHideApplicationNotification](didhideapplicationnotification.md): A notification that the workspace posts when the Finder hides an app.
- [NSWorkspaceDidUnhideApplicationNotification](didunhideapplicationnotification.md): A notification that the workspace posts when the Finder unhides an app.
- [NSWorkspaceDidActivateApplicationNotification](didactivateapplicationnotification.md): A notification that the workspace posts when the Finder is about to activate an app.
- [NSWorkspaceDidDeactivateApplicationNotification](diddeactivateapplicationnotification.md): A notification that the workspace posts when the Finder deactivates an app.
- [NSWorkspaceDidRenameVolumeNotification](didrenamevolumenotification.md): A notification that the workspace posts when a volume changes its name or mount path.
- [NSWorkspaceDidMountNotification](didmountnotification.md): A notification that the workspace posts when a new device mounts.
- [NSWorkspaceWillUnmountNotification](willunmountnotification.md): A notification that the workspace posts when the Finder is about to unmount a device.
- [NSWorkspaceDidUnmountNotification](didunmountnotification.md): A notification that the workspace posts when the Finder unmounts a device.
- [NSWorkspaceDidChangeFileLabelsNotification](didchangefilelabelsnotification.md): A notification that the workspace posts when the Finder file labels or colors change.
- [NSWorkspaceActiveSpaceDidChangeNotification](activespacedidchangenotification.md): A notification that the workspace posts when a Spaces change occurs.
- [NSWorkspaceDidWakeNotification](didwakenotification.md): A notification that the workspace posts when the device wakes from sleep.

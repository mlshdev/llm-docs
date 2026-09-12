> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsworkspace/willunmountnotification](https://developer.apple.com/documentation/appkit/nsworkspace/willunmountnotification)

# willUnmountNotification (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

A notification that the workspace posts when the Finder is about to unmount a device.

## Declaration

```swift
class let willUnmountNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

This notification doesn’t post if a volume becomes forcibly and immediately unavailable, such as when simply unplugging a drive.

The notification object is the shared `NSWorkspace` instance. The `userInfo` dictionary contains a key `@"NSDevicePath"` that returns the path where the device mounts as a string.

> **Important**

>  To receive this notification, use [notificationCenter](notificationcenter.md) to register for it. If you use a different notification center to register, you won’t receive the notification.

To observe this notification using Swift concurrency, use [NSWorkspace.WillUnmountVolumeMessage](willunmountvolumemessage.md).

## See Also

### Responding to Environment Notifications

- [willLaunchApplicationNotification](willlaunchapplicationnotification.md): A notification that the workspace posts when the Finder is about to launch an app.
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
- [didUnmountNotification](didunmountnotification.md): A notification that the workspace posts when the Finder unmounts a device.
- [didChangeFileLabelsNotification](didchangefilelabelsnotification.md): A notification that the workspace posts when the Finder file labels or colors change.
- [activeSpaceDidChangeNotification](activespacedidchangenotification.md): A notification that the workspace posts when a Spaces change occurs.
- [didWakeNotification](didwakenotification.md): A notification that the workspace posts when the device wakes from sleep.

# NSWorkspaceWillUnmountNotification (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS

A notification that the workspace posts when the Finder is about to unmount a device.

## Declaration

```objectivec
extern NSNotificationName NSWorkspaceWillUnmountNotification;
```

<a id="Discussion"></a>

## Discussion

This notification doesn’t post if a volume becomes forcibly and immediately unavailable, such as when simply unplugging a drive.

The notification object is the shared `NSWorkspace` instance. The `userInfo` dictionary contains a key `@"NSDevicePath"` that returns the path where the device mounts as a string.

> **Important**

>  To receive this notification, use [notificationCenter](notificationcenter.md) to register for it. If you use a different notification center to register, you won’t receive the notification.

To observe this notification using Swift concurrency, use [NSWorkspace.WillUnmountVolumeMessage](willunmountvolumemessage.md).

## See Also

### Responding to Environment Notifications

- [NSWorkspaceWillLaunchApplicationNotification](willlaunchapplicationnotification.md): A notification that the workspace posts when the Finder is about to launch an app.
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
- [NSWorkspaceDidUnmountNotification](didunmountnotification.md): A notification that the workspace posts when the Finder unmounts a device.
- [NSWorkspaceDidChangeFileLabelsNotification](didchangefilelabelsnotification.md): A notification that the workspace posts when the Finder file labels or colors change.
- [NSWorkspaceActiveSpaceDidChangeNotification](activespacedidchangenotification.md): A notification that the workspace posts when a Spaces change occurs.
- [NSWorkspaceDidWakeNotification](didwakenotification.md): A notification that the workspace posts when the device wakes from sleep.

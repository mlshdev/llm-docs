> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/notificationcenter/messageidentifier/diddeactivateapplication](https://developer.apple.com/documentation/foundation/notificationcenter/messageidentifier/diddeactivateapplication)

# didDeactivateApplication

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** macOS 26.0+

## Declaration

```swift
static var didDeactivateApplication: NotificationCenter.BaseMessageIdentifier<NSWorkspace.DidDeactivateApplicationMessage> { get }
```

## See Also

### Identifying AppKit workspace messages

- [didHideApplication](didhideapplication.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSWorkspace.DidHideApplicationMessage>`.
- [didUnhideApplication](didunhideapplication.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSWorkspace.DidUnhideApplicationMessage>`.
- [willLaunchApplication](willlaunchapplication.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSWorkspace.WillLaunchApplicationMessage>`.
- [didLaunchApplication](didlaunchapplication.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSWorkspace.DidLaunchApplicationMessage>`.
- [willSleep](willsleep.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSWorkspace.WillSleepMessage>`.
- [didWake](didwake.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSWorkspace.DidWakeMessage>`.
- [didTerminateApplication](didterminateapplication.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSWorkspace.DidTerminateApplicationMessage>`.
- [didMountVolume](didmountvolume.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSWorkspace.DidMountVolumeMessage>`.
- [willUnmountVolume](willunmountvolume.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSWorkspace.WillUnmountVolumeMessage>`.
- [didUnmountVolume](didunmountvolume.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSWorkspace.DidUnmountVolumeMessage>`.
- [didActivateApplication](didactivateapplication.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSWorkspace.DidActivateApplicationMessage>`.
- [didRenameVolume](didrenamevolume.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSWorkspace.DidRenameVolumeMessage>`.
- [sessionDidBecomeActive](sessiondidbecomeactive.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSWorkspace.SessionDidBecomeActiveMessage>`.
- [sessionDidResignActive](sessiondidresignactive.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSWorkspace.SessionDidResignActiveMessage>`.
- [didChangeFileLabels](didchangefilelabels.md): Conforms when `Self` is `NotificationCenter.BaseMessageIdentifier<NSWorkspace.DidChangeFileLabelsMessage>`.

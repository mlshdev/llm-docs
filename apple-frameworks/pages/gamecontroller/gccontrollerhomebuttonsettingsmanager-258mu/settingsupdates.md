> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gccontrollerhomebuttonsettingsmanager-258mu/settingsupdates](https://developer.apple.com/documentation/gamecontroller/gccontrollerhomebuttonsettingsmanager-258mu/settingsupdates)

# settingsUpdates

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

The asynchronous sequence of update notifications for the Home button settings.

## Declaration

```swift
var settingsUpdates: some AsyncSequence<(), Never> { get }
```

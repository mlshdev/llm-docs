> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipasteboard/removednotification](https://developer.apple.com/documentation/uikit/uipasteboard/removednotification)

# removedNotification (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

A notification that a pasteboard object posts just before an app removes it.

## Declaration

```swift
nonisolated class let removedNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The removal class method is [remove(withName:)](remove%28withname_%29.md). There is no `userInfo` dictionary.

## See Also

### Notifications

- [changedNotification](changednotification.md): A notification that a pasteboard object posts when its contents change.

# UIPasteboardRemovedNotification (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

A notification that a pasteboard object posts just before an app removes it.

## Declaration

```objectivec
extern NSNotificationName const UIPasteboardRemovedNotification;
```

<a id="Discussion"></a>

## Discussion

The removal class method is [removePasteboardWithName:](remove%28withname_%29.md). There is no `userInfo` dictionary.

## See Also

### Notifications

- [UIPasteboardChangedNotification](changednotification.md): A notification that a pasteboard object posts when its contents change.

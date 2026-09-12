> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipasteboard/changednotification](https://developer.apple.com/documentation/uikit/uipasteboard/changednotification)

# changedNotification (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

A notification that a pasteboard object posts when its contents change.

## Declaration

```swift
nonisolated class let changedNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

This happens at the same time the pasteboard’s change count ([changeCount](changecount.md) property) is incremented. Changes include the addition, removal, and modification of pasteboard items. The `userInfo` dictionary may contain the representation types of pasteboard items that have been added to or removed from the pasteboard. See [UserInfo Dictionary Keys](../userinfo-dictionary-keys.md) for the keys used to access these representation types. If pasteboard items have been modified but not added or removed, the `userInfo` dictionary is `nil`.

## See Also

### Notifications

- [removedNotification](removednotification.md): A notification that a pasteboard object posts just before an app removes it.

# UIPasteboardChangedNotification (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

A notification that a pasteboard object posts when its contents change.

## Declaration

```objectivec
extern NSNotificationName const UIPasteboardChangedNotification;
```

<a id="Discussion"></a>

## Discussion

This happens at the same time the pasteboard’s change count ([changeCount](changecount.md) property) is incremented. Changes include the addition, removal, and modification of pasteboard items. The `userInfo` dictionary may contain the representation types of pasteboard items that have been added to or removed from the pasteboard. See [UserInfo Dictionary Keys](../userinfo-dictionary-keys.md) for the keys used to access these representation types. If pasteboard items have been modified but not added or removed, the `userInfo` dictionary is `nil`.

## See Also

### Notifications

- [UIPasteboardRemovedNotification](removednotification.md): A notification that a pasteboard object posts just before an app removes it.

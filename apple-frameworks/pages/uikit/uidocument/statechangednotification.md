> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocument/statechangednotification](https://developer.apple.com/documentation/uikit/uidocument/statechangednotification)

# stateChangedNotification (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A notification the document object posts when there’s a change in the state of the document.

## Declaration

```swift
nonisolated class let stateChangedNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

When handling this notification, check the value of the [documentState](documentstate.md) property to see what the new state is, and then proceed accordingly. There’s no `userInfo` dictionary.

# UIDocumentStateChangedNotification (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A notification the document object posts when there’s a change in the state of the document.

## Declaration

```objectivec
extern NSNotificationName const UIDocumentStateChangedNotification;
```

<a id="Discussion"></a>

## Discussion

When handling this notification, check the value of the [documentState](documentstate.md) property to see what the new state is, and then proceed accordingly. There’s no `userInfo` dictionary.

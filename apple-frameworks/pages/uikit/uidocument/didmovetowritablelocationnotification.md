> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocument/didmovetowritablelocationnotification](https://developer.apple.com/documentation/uikit/uidocument/didmovetowritablelocationnotification)

# didMoveToWritableLocationNotification (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · visionOS 26.0+

A notification that the document posts when copying the file from a readonly location in order to write changes. This notification will be posted on the file presenter queue.

## Declaration

```swift
nonisolated class let didMoveToWritableLocationNotification: NSNotification.Name
```

# UIDocumentDidMoveToWritableLocationNotification (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · visionOS 26.0+

A notification that the document posts when copying the file from a readonly location in order to write changes. This notification will be posted on the file presenter queue.

## Declaration

```objectivec
extern NSNotificationName const UIDocumentDidMoveToWritableLocationNotification;
```

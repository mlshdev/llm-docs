> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccessibility/reducemotionstatusdidchangenotification](https://developer.apple.com/documentation/uikit/uiaccessibility/reducemotionstatusdidchangenotification)

# reduceMotionStatusDidChangeNotification (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A notification that UIKit posts when the system’s Reduce Motion setting changes.

## Declaration

```swift
nonisolated static let reduceMotionStatusDidChangeNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

This notification doesn’t include a parameter. Observe this notification using the default notification center.

## See Also

### Motion

- [shakeToUndoDidChangeNotification](shaketoundodidchangenotification.md): A notification that UIKit posts when the system’s Shake to Undo setting changes.

# UIAccessibilityReduceMotionStatusDidChangeNotification (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A notification that UIKit posts when the system’s Reduce Motion setting changes.

## Declaration

```objectivec
extern NSNotificationName const UIAccessibilityReduceMotionStatusDidChangeNotification;
```

<a id="Discussion"></a>

## Discussion

This notification doesn’t include a parameter. Observe this notification using the default notification center.

## See Also

### Motion

- [UIAccessibilityShakeToUndoDidChangeNotification](shaketoundodidchangenotification.md): A notification that UIKit posts when the system’s Shake to Undo setting changes.

> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsanimation/progressmarknotification](https://developer.apple.com/documentation/appkit/nsanimation/progressmarknotification)

# progressMarkNotification (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Posted when the current progress of a running animation reaches one of its progress marks.

## Declaration

```swift
class let progressMarkNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The notification object is a running `NSAnimation` object. The `userInfo` dictionary contains the current progress mark, accessed via the key `NSAnimationProgressMark`.

## See Also

### Related Documentation

- [animation(\_:didReachProgressMark:)](../nsanimationdelegate/animation%28__didreachprogressmark_%29.md): Sent to the delegate when an animation reaches a specific progress mark.

# NSAnimationProgressMarkNotification (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS

Posted when the current progress of a running animation reaches one of its progress marks.

## Declaration

```objectivec
extern NSNotificationName NSAnimationProgressMarkNotification;
```

<a id="Discussion"></a>

## Discussion

The notification object is a running `NSAnimation` object. The `userInfo` dictionary contains the current progress mark, accessed via the key `NSAnimationProgressMark`.

## See Also

### Related Documentation

- [animation:didReachProgressMark:](../nsanimationdelegate/animation%28__didreachprogressmark_%29.md): Sent to the delegate when an animation reaches a specific progress mark.

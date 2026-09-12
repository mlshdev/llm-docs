> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uikeyboardcenterbeginuserinfokey](https://developer.apple.com/documentation/uikit/uikeyboardcenterbeginuserinfokey)

# UIKeyboardCenterBeginUserInfoKey

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ (deprecated in 3.2) · iPadOS 2.0+ (deprecated in 3.2) · Mac Catalyst 13.1+ (deprecated in 13.1)

A user info key to retrieve the center point of the keyboard before its animation begins.

> Use [UIKeyboardFrameBeginUserInfoKey](uiresponder/keyboardframebeginuserinfokey.md) instead.

## Declaration

```objectivec
extern NSString * const UIKeyboardCenterBeginUserInfoKey;
```

<a id="Discussion"></a>

## Discussion

The value for this key is an [NSValue](../foundation/nsvalue.md) object containing a [CGPoint](../corefoundation/cgpoint.md) that identifies the keyboard’s center point, in the window’s coordinate space, before its animation begins. These coordinates take into account any rotation factors applied to the window’s contents as a result of interface orientation changes. Thus, the center point of the keyboard is different in portrait versus landscape orientations.

## See Also

### Deprecated

- [UIKeyboardCenterEndUserInfoKey](uikeyboardcenterenduserinfokey.md): Deprecated. A user info key to retrieve the center point of the keyboard after its animation completes.
- [UIKeyboardBoundsUserInfoKey](uikeyboardboundsuserinfokey.md): Deprecated. A user info key to retrieve the bounds of the keyboard.

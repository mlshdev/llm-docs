> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uikeyboardboundsuserinfokey](https://developer.apple.com/documentation/uikit/uikeyboardboundsuserinfokey)

# UIKeyboardBoundsUserInfoKey

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ (deprecated in 3.2) · iPadOS 2.0+ (deprecated in 3.2) · Mac Catalyst 13.1+ (deprecated in 13.1)

A user info key to retrieve the bounds of the keyboard.

> Use [UIKeyboardFrameBeginUserInfoKey](uiresponder/keyboardframebeginuserinfokey.md) or [UIKeyboardFrameEndUserInfoKey](uiresponder/keyboardframeenduserinfokey.md) instead.

## Declaration

```objectivec
extern NSString * const UIKeyboardBoundsUserInfoKey;
```

<a id="Discussion"></a>

## Discussion

The value for this key is an [NSValue](../foundation/nsvalue.md) object containing a [CGRect](../corefoundation/cgrect.md) that identifies the bounds rectangle of the keyboard in the window coordinate space. This value is sufficient for obtaining the size of the keyboard. If you want to get the origin of the keyboard on the screen (before or after animation), use the values obtained from the user info dictionary through the [UIKeyboardCenterBeginUserInfoKey](uikeyboardcenterbeginuserinfokey.md) or [UIKeyboardCenterEndUserInfoKey](uikeyboardcenterenduserinfokey.md) constants.

## See Also

### Deprecated

- [UIKeyboardCenterBeginUserInfoKey](uikeyboardcenterbeginuserinfokey.md): Deprecated. A user info key to retrieve the center point of the keyboard before its animation begins.
- [UIKeyboardCenterEndUserInfoKey](uikeyboardcenterenduserinfokey.md): Deprecated. A user info key to retrieve the center point of the keyboard after its animation completes.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiresponder/keyboardanimationdurationuserinfokey](https://developer.apple.com/documentation/uikit/uiresponder/keyboardanimationdurationuserinfokey)

# keyboardAnimationDurationUserInfoKey (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A user info key to retrieve the duration of the keyboard animation in seconds.

## Declaration

```swift
nonisolated class let keyboardAnimationDurationUserInfoKey: String
```

<a id="Discussion"></a>

## Discussion

The value for this key is an [NSNumber](../../foundation/nsnumber.md) object containing a `double` that represents the duration of the keyboard animation in seconds. You can use this value to match the animation of the keyboard in your own animations.

For an example of how to match the keyboard’s animation, see [keyboardAnimationCurveUserInfoKey](keyboardanimationcurveuserinfokey.md).

## See Also

### Constants

- [keyboardAnimationCurveUserInfoKey](keyboardanimationcurveuserinfokey.md): A user info key to retrieve the animation curve that the system uses to animate the keyboard onto or off the screen.
- [keyboardDidChangeFrameNotification](keyboarddidchangeframenotification.md): A notification that posts immediately after a change in the keyboard’s frame.
- [keyboardDidHideNotification](keyboarddidhidenotification.md): A notification that posts immediately after dismissing the keyboard.
- [keyboardDidShowNotification](keyboarddidshownotification.md): A notification that posts immediately after displaying the keyboard.
- [keyboardFrameBeginUserInfoKey](keyboardframebeginuserinfokey.md): A user info key to retrieve the keyboard’s frame at the beginning of its animation.
- [keyboardFrameEndUserInfoKey](keyboardframeenduserinfokey.md): A user info key to retrieve the keyboard’s frame at the end of its animation.
- [keyboardIsLocalUserInfoKey](keyboardislocaluserinfokey.md): A user info key to retrieve a Boolean value that indicates whether the keyboard belongs to the current app.
- [keyboardWillChangeFrameNotification](keyboardwillchangeframenotification.md): A notification that posts immediately prior to a change in the keyboard’s frame.
- [keyboardWillHideNotification](keyboardwillhidenotification.md): A notification that posts immediately prior to dismissing the keyboard.
- [keyboardWillShowNotification](keyboardwillshownotification.md): A notification that posts immediately prior to displaying the keyboard.

# UIKeyboardAnimationDurationUserInfoKey (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A user info key to retrieve the duration of the keyboard animation in seconds.

## Declaration

```objectivec
extern NSString * const UIKeyboardAnimationDurationUserInfoKey;
```

<a id="Discussion"></a>

## Discussion

The value for this key is an [NSNumber](../../foundation/nsnumber.md) object containing a `double` that represents the duration of the keyboard animation in seconds. You can use this value to match the animation of the keyboard in your own animations.

For an example of how to match the keyboard’s animation, see [UIKeyboardAnimationCurveUserInfoKey](keyboardanimationcurveuserinfokey.md).

## See Also

### Constants

- [UIKeyboardAnimationCurveUserInfoKey](keyboardanimationcurveuserinfokey.md): A user info key to retrieve the animation curve that the system uses to animate the keyboard onto or off the screen.
- [UIKeyboardDidChangeFrameNotification](keyboarddidchangeframenotification.md): A notification that posts immediately after a change in the keyboard’s frame.
- [UIKeyboardDidHideNotification](keyboarddidhidenotification.md): A notification that posts immediately after dismissing the keyboard.
- [UIKeyboardDidShowNotification](keyboarddidshownotification.md): A notification that posts immediately after displaying the keyboard.
- [UIKeyboardFrameBeginUserInfoKey](keyboardframebeginuserinfokey.md): A user info key to retrieve the keyboard’s frame at the beginning of its animation.
- [UIKeyboardFrameEndUserInfoKey](keyboardframeenduserinfokey.md): A user info key to retrieve the keyboard’s frame at the end of its animation.
- [UIKeyboardIsLocalUserInfoKey](keyboardislocaluserinfokey.md): A user info key to retrieve a Boolean value that indicates whether the keyboard belongs to the current app.
- [UIKeyboardWillChangeFrameNotification](keyboardwillchangeframenotification.md): A notification that posts immediately prior to a change in the keyboard’s frame.
- [UIKeyboardWillHideNotification](keyboardwillhidenotification.md): A notification that posts immediately prior to dismissing the keyboard.
- [UIKeyboardWillShowNotification](keyboardwillshownotification.md): A notification that posts immediately prior to displaying the keyboard.

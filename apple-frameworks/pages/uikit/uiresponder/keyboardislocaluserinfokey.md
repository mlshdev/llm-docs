> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiresponder/keyboardislocaluserinfokey](https://developer.apple.com/documentation/uikit/uiresponder/keyboardislocaluserinfokey)

# keyboardIsLocalUserInfoKey (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A user info key to retrieve a Boolean value that indicates whether the keyboard belongs to the current app.

## Declaration

```swift
nonisolated class let keyboardIsLocalUserInfoKey: String
```

<a id="Discussion"></a>

## Discussion

The value for this key is an [NSNumber](../../foundation/nsnumber.md) object containing a Boolean value that indicates whether the keyboard belongs to the current app. With Multitasking in iPadOS, the system notifies all visible apps when the keyboard appears and disappears. The value is [true](https://developer.apple.com/documentation/swift/true) for the app that caused the keyboard to appear and [false](https://developer.apple.com/documentation/swift/false) for the other apps.

## See Also

### Constants

- [keyboardAnimationCurveUserInfoKey](keyboardanimationcurveuserinfokey.md): A user info key to retrieve the animation curve that the system uses to animate the keyboard onto or off the screen.
- [keyboardAnimationDurationUserInfoKey](keyboardanimationdurationuserinfokey.md): A user info key to retrieve the duration of the keyboard animation in seconds.
- [keyboardDidChangeFrameNotification](keyboarddidchangeframenotification.md): A notification that posts immediately after a change in the keyboard’s frame.
- [keyboardDidHideNotification](keyboarddidhidenotification.md): A notification that posts immediately after dismissing the keyboard.
- [keyboardDidShowNotification](keyboarddidshownotification.md): A notification that posts immediately after displaying the keyboard.
- [keyboardFrameBeginUserInfoKey](keyboardframebeginuserinfokey.md): A user info key to retrieve the keyboard’s frame at the beginning of its animation.
- [keyboardFrameEndUserInfoKey](keyboardframeenduserinfokey.md): A user info key to retrieve the keyboard’s frame at the end of its animation.
- [keyboardWillChangeFrameNotification](keyboardwillchangeframenotification.md): A notification that posts immediately prior to a change in the keyboard’s frame.
- [keyboardWillHideNotification](keyboardwillhidenotification.md): A notification that posts immediately prior to dismissing the keyboard.
- [keyboardWillShowNotification](keyboardwillshownotification.md): A notification that posts immediately prior to displaying the keyboard.

# UIKeyboardIsLocalUserInfoKey (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A user info key to retrieve a Boolean value that indicates whether the keyboard belongs to the current app.

## Declaration

```objectivec
extern NSString * const UIKeyboardIsLocalUserInfoKey;
```

<a id="Discussion"></a>

## Discussion

The value for this key is an [NSNumber](../../foundation/nsnumber.md) object containing a Boolean value that indicates whether the keyboard belongs to the current app. With Multitasking in iPadOS, the system notifies all visible apps when the keyboard appears and disappears. The value is [true](https://developer.apple.com/documentation/swift/true) for the app that caused the keyboard to appear and [false](https://developer.apple.com/documentation/swift/false) for the other apps.

## See Also

### Constants

- [UIKeyboardAnimationCurveUserInfoKey](keyboardanimationcurveuserinfokey.md): A user info key to retrieve the animation curve that the system uses to animate the keyboard onto or off the screen.
- [UIKeyboardAnimationDurationUserInfoKey](keyboardanimationdurationuserinfokey.md): A user info key to retrieve the duration of the keyboard animation in seconds.
- [UIKeyboardDidChangeFrameNotification](keyboarddidchangeframenotification.md): A notification that posts immediately after a change in the keyboard’s frame.
- [UIKeyboardDidHideNotification](keyboarddidhidenotification.md): A notification that posts immediately after dismissing the keyboard.
- [UIKeyboardDidShowNotification](keyboarddidshownotification.md): A notification that posts immediately after displaying the keyboard.
- [UIKeyboardFrameBeginUserInfoKey](keyboardframebeginuserinfokey.md): A user info key to retrieve the keyboard’s frame at the beginning of its animation.
- [UIKeyboardFrameEndUserInfoKey](keyboardframeenduserinfokey.md): A user info key to retrieve the keyboard’s frame at the end of its animation.
- [UIKeyboardWillChangeFrameNotification](keyboardwillchangeframenotification.md): A notification that posts immediately prior to a change in the keyboard’s frame.
- [UIKeyboardWillHideNotification](keyboardwillhidenotification.md): A notification that posts immediately prior to dismissing the keyboard.
- [UIKeyboardWillShowNotification](keyboardwillshownotification.md): A notification that posts immediately prior to displaying the keyboard.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiresponder/keyboardframebeginuserinfokey](https://developer.apple.com/documentation/uikit/uiresponder/keyboardframebeginuserinfokey)

# keyboardFrameBeginUserInfoKey (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

A user info key to retrieve the keyboard’s frame at the beginning of its animation.

## Declaration

```swift
nonisolated class let keyboardFrameBeginUserInfoKey: String
```

<a id="Discussion"></a>

## Discussion

The value for this key is an [NSValue](../../foundation/nsvalue.md) object that contains a [CGRect](../../corefoundation/cgrect.md) for identifying the frame rectangle of the keyboard (in the screen’s coordinate space) before animating the keyboard. The frame rectangle reflects the current orientation of the device.

The keyboard’s frame uses the screen’s coordinate space, which is different than the coordinate space of your views. Although they might sometimes match, such as when your app is full screen, they might be different when your app isn’t full screen, such as in Split View, Slide Over, and Stage Manager. This means you need to account for this difference by converting the keyboard’s frame from the screen’s coordinate space to that of your views. For an example of how to handle this conversion, see [keyboardFrameEndUserInfoKey](keyboardframeenduserinfokey.md).

## See Also

### Constants

- [keyboardAnimationCurveUserInfoKey](keyboardanimationcurveuserinfokey.md): A user info key to retrieve the animation curve that the system uses to animate the keyboard onto or off the screen.
- [keyboardAnimationDurationUserInfoKey](keyboardanimationdurationuserinfokey.md): A user info key to retrieve the duration of the keyboard animation in seconds.
- [keyboardDidChangeFrameNotification](keyboarddidchangeframenotification.md): A notification that posts immediately after a change in the keyboard’s frame.
- [keyboardDidHideNotification](keyboarddidhidenotification.md): A notification that posts immediately after dismissing the keyboard.
- [keyboardDidShowNotification](keyboarddidshownotification.md): A notification that posts immediately after displaying the keyboard.
- [keyboardFrameEndUserInfoKey](keyboardframeenduserinfokey.md): A user info key to retrieve the keyboard’s frame at the end of its animation.
- [keyboardIsLocalUserInfoKey](keyboardislocaluserinfokey.md): A user info key to retrieve a Boolean value that indicates whether the keyboard belongs to the current app.
- [keyboardWillChangeFrameNotification](keyboardwillchangeframenotification.md): A notification that posts immediately prior to a change in the keyboard’s frame.
- [keyboardWillHideNotification](keyboardwillhidenotification.md): A notification that posts immediately prior to dismissing the keyboard.
- [keyboardWillShowNotification](keyboardwillshownotification.md): A notification that posts immediately prior to displaying the keyboard.

# UIKeyboardFrameBeginUserInfoKey (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

A user info key to retrieve the keyboard’s frame at the beginning of its animation.

## Declaration

```objectivec
extern NSString * const UIKeyboardFrameBeginUserInfoKey;
```

<a id="Discussion"></a>

## Discussion

The value for this key is an [NSValue](../../foundation/nsvalue.md) object that contains a [CGRect](../../corefoundation/cgrect.md) for identifying the frame rectangle of the keyboard (in the screen’s coordinate space) before animating the keyboard. The frame rectangle reflects the current orientation of the device.

The keyboard’s frame uses the screen’s coordinate space, which is different than the coordinate space of your views. Although they might sometimes match, such as when your app is full screen, they might be different when your app isn’t full screen, such as in Split View, Slide Over, and Stage Manager. This means you need to account for this difference by converting the keyboard’s frame from the screen’s coordinate space to that of your views. For an example of how to handle this conversion, see [UIKeyboardFrameEndUserInfoKey](keyboardframeenduserinfokey.md).

## See Also

### Constants

- [UIKeyboardAnimationCurveUserInfoKey](keyboardanimationcurveuserinfokey.md): A user info key to retrieve the animation curve that the system uses to animate the keyboard onto or off the screen.
- [UIKeyboardAnimationDurationUserInfoKey](keyboardanimationdurationuserinfokey.md): A user info key to retrieve the duration of the keyboard animation in seconds.
- [UIKeyboardDidChangeFrameNotification](keyboarddidchangeframenotification.md): A notification that posts immediately after a change in the keyboard’s frame.
- [UIKeyboardDidHideNotification](keyboarddidhidenotification.md): A notification that posts immediately after dismissing the keyboard.
- [UIKeyboardDidShowNotification](keyboarddidshownotification.md): A notification that posts immediately after displaying the keyboard.
- [UIKeyboardFrameEndUserInfoKey](keyboardframeenduserinfokey.md): A user info key to retrieve the keyboard’s frame at the end of its animation.
- [UIKeyboardIsLocalUserInfoKey](keyboardislocaluserinfokey.md): A user info key to retrieve a Boolean value that indicates whether the keyboard belongs to the current app.
- [UIKeyboardWillChangeFrameNotification](keyboardwillchangeframenotification.md): A notification that posts immediately prior to a change in the keyboard’s frame.
- [UIKeyboardWillHideNotification](keyboardwillhidenotification.md): A notification that posts immediately prior to dismissing the keyboard.
- [UIKeyboardWillShowNotification](keyboardwillshownotification.md): A notification that posts immediately prior to displaying the keyboard.

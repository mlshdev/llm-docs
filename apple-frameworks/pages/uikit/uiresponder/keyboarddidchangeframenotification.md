> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiresponder/keyboarddidchangeframenotification](https://developer.apple.com/documentation/uikit/uiresponder/keyboarddidchangeframenotification)

# keyboardDidChangeFrameNotification (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A notification that posts immediately after a change in the keyboard’s frame.

## Declaration

```swift
nonisolated class let keyboardDidChangeFrameNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

In iOS 16.1 and later, the notification object is the [UIScreen](../uiscreen.md) that the keyboard appears on. In earlier versions of iOS, the notification object is `nil`.

The `userInfo` dictionary contains information about the keyboard. To get the location and size of the keyboard from the `userInfo` dictionary, use [keyboardFrameBeginUserInfoKey](keyboardframebeginuserinfokey.md) and [keyboardFrameEndUserInfoKey](keyboardframeenduserinfokey.md).

The keyboard’s frame uses the screen’s coordinate space, which is different than the coordinate space of your views. Although they might sometimes match, such as when your app is full screen, they might be different when your app isn’t full screen, such as in Split View, Slide Over, and Stage Manager. This means you need to account for this difference by converting the keyboard’s frame from the screen’s coordinate space to that of your views. For an example of how to handle this conversion, see [keyboardFrameEndUserInfoKey](keyboardframeenduserinfokey.md).

The system posts this notification on the main actor. An app running in visionOS never receives this notification. The system displays the keyboard in a separate window, leaving the app’s window unaffected by changes to the keyboard.

## See Also

### Constants

- [keyboardAnimationCurveUserInfoKey](keyboardanimationcurveuserinfokey.md): A user info key to retrieve the animation curve that the system uses to animate the keyboard onto or off the screen.
- [keyboardAnimationDurationUserInfoKey](keyboardanimationdurationuserinfokey.md): A user info key to retrieve the duration of the keyboard animation in seconds.
- [keyboardDidHideNotification](keyboarddidhidenotification.md): A notification that posts immediately after dismissing the keyboard.
- [keyboardDidShowNotification](keyboarddidshownotification.md): A notification that posts immediately after displaying the keyboard.
- [keyboardFrameBeginUserInfoKey](keyboardframebeginuserinfokey.md): A user info key to retrieve the keyboard’s frame at the beginning of its animation.
- [keyboardFrameEndUserInfoKey](keyboardframeenduserinfokey.md): A user info key to retrieve the keyboard’s frame at the end of its animation.
- [keyboardIsLocalUserInfoKey](keyboardislocaluserinfokey.md): A user info key to retrieve a Boolean value that indicates whether the keyboard belongs to the current app.
- [keyboardWillChangeFrameNotification](keyboardwillchangeframenotification.md): A notification that posts immediately prior to a change in the keyboard’s frame.
- [keyboardWillHideNotification](keyboardwillhidenotification.md): A notification that posts immediately prior to dismissing the keyboard.
- [keyboardWillShowNotification](keyboardwillshownotification.md): A notification that posts immediately prior to displaying the keyboard.

# UIKeyboardDidChangeFrameNotification (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A notification that posts immediately after a change in the keyboard’s frame.

## Declaration

```objectivec
extern NSNotificationName const UIKeyboardDidChangeFrameNotification;
```

<a id="Discussion"></a>

## Discussion

In iOS 16.1 and later, the notification object is the [UIScreen](../uiscreen.md) that the keyboard appears on. In earlier versions of iOS, the notification object is `nil`.

The `userInfo` dictionary contains information about the keyboard. To get the location and size of the keyboard from the `userInfo` dictionary, use [UIKeyboardFrameBeginUserInfoKey](keyboardframebeginuserinfokey.md) and [UIKeyboardFrameEndUserInfoKey](keyboardframeenduserinfokey.md).

The keyboard’s frame uses the screen’s coordinate space, which is different than the coordinate space of your views. Although they might sometimes match, such as when your app is full screen, they might be different when your app isn’t full screen, such as in Split View, Slide Over, and Stage Manager. This means you need to account for this difference by converting the keyboard’s frame from the screen’s coordinate space to that of your views. For an example of how to handle this conversion, see [UIKeyboardFrameEndUserInfoKey](keyboardframeenduserinfokey.md).

The system posts this notification on the main actor. An app running in visionOS never receives this notification. The system displays the keyboard in a separate window, leaving the app’s window unaffected by changes to the keyboard.

## See Also

### Constants

- [UIKeyboardAnimationCurveUserInfoKey](keyboardanimationcurveuserinfokey.md): A user info key to retrieve the animation curve that the system uses to animate the keyboard onto or off the screen.
- [UIKeyboardAnimationDurationUserInfoKey](keyboardanimationdurationuserinfokey.md): A user info key to retrieve the duration of the keyboard animation in seconds.
- [UIKeyboardDidHideNotification](keyboarddidhidenotification.md): A notification that posts immediately after dismissing the keyboard.
- [UIKeyboardDidShowNotification](keyboarddidshownotification.md): A notification that posts immediately after displaying the keyboard.
- [UIKeyboardFrameBeginUserInfoKey](keyboardframebeginuserinfokey.md): A user info key to retrieve the keyboard’s frame at the beginning of its animation.
- [UIKeyboardFrameEndUserInfoKey](keyboardframeenduserinfokey.md): A user info key to retrieve the keyboard’s frame at the end of its animation.
- [UIKeyboardIsLocalUserInfoKey](keyboardislocaluserinfokey.md): A user info key to retrieve a Boolean value that indicates whether the keyboard belongs to the current app.
- [UIKeyboardWillChangeFrameNotification](keyboardwillchangeframenotification.md): A notification that posts immediately prior to a change in the keyboard’s frame.
- [UIKeyboardWillHideNotification](keyboardwillhidenotification.md): A notification that posts immediately prior to dismissing the keyboard.
- [UIKeyboardWillShowNotification](keyboardwillshownotification.md): A notification that posts immediately prior to displaying the keyboard.

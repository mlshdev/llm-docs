> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiresponder/keyboardanimationcurveuserinfokey](https://developer.apple.com/documentation/uikit/uiresponder/keyboardanimationcurveuserinfokey)

# keyboardAnimationCurveUserInfoKey (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A user info key to retrieve the animation curve that the system uses to animate the keyboard onto or off the screen.

## Declaration

```swift
nonisolated class let keyboardAnimationCurveUserInfoKey: String
```

<a id="Discussion"></a>

## Discussion

The value for this key is an [NSNumber](../../foundation/nsnumber.md) object that contains a [UIView.AnimationCurve](../uiview/animationcurve.md) constant used to determine how the system animates the keyboard onto or off the screen. You can use this value to match the animation of the keyboard in your own animations.

Before using this value, convert the animation curve constant to [UIView.AnimationOptions](../uiview/animationoptions.md), which you can pass to one of UIKit’s animation methods, such as [animate(withDuration:animations:completion:)](../uiview/animate%28withduration_animations_completion_%29.md).

**Swift**

```swift
// Get the animation curve constant and the duration for your animation.
guard let animationCurve = userInfo[UIResponder.keyboardAnimationCurveUserInfoKey] as? UInt,
      let animationDuration = userInfo[UIResponder.keyboardAnimationDurationUserInfoKey] as? Double else { return }

// Convert the animation curve constant to animation options.
let animationOptions = UIView.AnimationOptions(rawValue: animationCurve << 16)

// Perform your animation.
UIView.animate(withDuration: animationDuration,
               delay: 0,
               options: animationOptions) {
    // Specify what to animate. For example, calling layoutIfNeeded animates a change to
    // the view's constraints.
    self.view.layoutIfNeeded()
} completion: { _ in
    // Use the completion handler to perform anything that needs to happen after the keyboard
    // frame finishes animating, such as scrolling your text view after the animation completes.
}
```

**Objective-C**

```objc
// Convert the animation curve constant to animation options.
UIViewAnimationOptions options = (UIViewAnimationOptions)[[userInfo objectForKey:UIKeyboardAnimationCurveUserInfoKey]
                          integerValue] << 16;

// Get the duration for your animation.
CGFloat duration = [[userInfo objectForKey:UIKeyboardAnimationDurationUserInfoKey] floatValue];

// Perform your animation.
[UIView animateWithDuration:duration
                      delay:0.0
                    options:options
                 animations:^{
    // Specify what to animate. For example, calling layoutIfNeeded animates a change 
    // to the view's constraints.
    [self.view layoutIfNeeded]; 
}
                 completion:^(BOOL finished) {
    // Use the completion handler to perform anything that needs to happen after the keyboard
    // frame finishes animating, such as scrolling your text view after the animation completes.
}];
```

## See Also

### Constants

- [keyboardAnimationDurationUserInfoKey](keyboardanimationdurationuserinfokey.md): A user info key to retrieve the duration of the keyboard animation in seconds.
- [keyboardDidChangeFrameNotification](keyboarddidchangeframenotification.md): A notification that posts immediately after a change in the keyboard’s frame.
- [keyboardDidHideNotification](keyboarddidhidenotification.md): A notification that posts immediately after dismissing the keyboard.
- [keyboardDidShowNotification](keyboarddidshownotification.md): A notification that posts immediately after displaying the keyboard.
- [keyboardFrameBeginUserInfoKey](keyboardframebeginuserinfokey.md): A user info key to retrieve the keyboard’s frame at the beginning of its animation.
- [keyboardFrameEndUserInfoKey](keyboardframeenduserinfokey.md): A user info key to retrieve the keyboard’s frame at the end of its animation.
- [keyboardIsLocalUserInfoKey](keyboardislocaluserinfokey.md): A user info key to retrieve a Boolean value that indicates whether the keyboard belongs to the current app.
- [keyboardWillChangeFrameNotification](keyboardwillchangeframenotification.md): A notification that posts immediately prior to a change in the keyboard’s frame.
- [keyboardWillHideNotification](keyboardwillhidenotification.md): A notification that posts immediately prior to dismissing the keyboard.
- [keyboardWillShowNotification](keyboardwillshownotification.md): A notification that posts immediately prior to displaying the keyboard.

# UIKeyboardAnimationCurveUserInfoKey (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A user info key to retrieve the animation curve that the system uses to animate the keyboard onto or off the screen.

## Declaration

```objectivec
extern NSString * const UIKeyboardAnimationCurveUserInfoKey;
```

<a id="Discussion"></a>

## Discussion

The value for this key is an [NSNumber](../../foundation/nsnumber.md) object that contains a [UIViewAnimationCurve](../uiview/animationcurve.md) constant used to determine how the system animates the keyboard onto or off the screen. You can use this value to match the animation of the keyboard in your own animations.

Before using this value, convert the animation curve constant to [UIViewAnimationOptions](../uiview/animationoptions.md), which you can pass to one of UIKit’s animation methods, such as [animateWithDuration:animations:completion:](../uiview/animate%28withduration_animations_completion_%29.md).

**Swift**

```swift
// Get the animation curve constant and the duration for your animation.
guard let animationCurve = userInfo[UIResponder.keyboardAnimationCurveUserInfoKey] as? UInt,
      let animationDuration = userInfo[UIResponder.keyboardAnimationDurationUserInfoKey] as? Double else { return }

// Convert the animation curve constant to animation options.
let animationOptions = UIView.AnimationOptions(rawValue: animationCurve << 16)

// Perform your animation.
UIView.animate(withDuration: animationDuration,
               delay: 0,
               options: animationOptions) {
    // Specify what to animate. For example, calling layoutIfNeeded animates a change to
    // the view's constraints.
    self.view.layoutIfNeeded()
} completion: { _ in
    // Use the completion handler to perform anything that needs to happen after the keyboard
    // frame finishes animating, such as scrolling your text view after the animation completes.
}
```

**Objective-C**

```objc
// Convert the animation curve constant to animation options.
UIViewAnimationOptions options = (UIViewAnimationOptions)[[userInfo objectForKey:UIKeyboardAnimationCurveUserInfoKey]
                          integerValue] << 16;

// Get the duration for your animation.
CGFloat duration = [[userInfo objectForKey:UIKeyboardAnimationDurationUserInfoKey] floatValue];

// Perform your animation.
[UIView animateWithDuration:duration
                      delay:0.0
                    options:options
                 animations:^{
    // Specify what to animate. For example, calling layoutIfNeeded animates a change 
    // to the view's constraints.
    [self.view layoutIfNeeded]; 
}
                 completion:^(BOOL finished) {
    // Use the completion handler to perform anything that needs to happen after the keyboard
    // frame finishes animating, such as scrolling your text view after the animation completes.
}];
```

## See Also

### Constants

- [UIKeyboardAnimationDurationUserInfoKey](keyboardanimationdurationuserinfokey.md): A user info key to retrieve the duration of the keyboard animation in seconds.
- [UIKeyboardDidChangeFrameNotification](keyboarddidchangeframenotification.md): A notification that posts immediately after a change in the keyboard’s frame.
- [UIKeyboardDidHideNotification](keyboarddidhidenotification.md): A notification that posts immediately after dismissing the keyboard.
- [UIKeyboardDidShowNotification](keyboarddidshownotification.md): A notification that posts immediately after displaying the keyboard.
- [UIKeyboardFrameBeginUserInfoKey](keyboardframebeginuserinfokey.md): A user info key to retrieve the keyboard’s frame at the beginning of its animation.
- [UIKeyboardFrameEndUserInfoKey](keyboardframeenduserinfokey.md): A user info key to retrieve the keyboard’s frame at the end of its animation.
- [UIKeyboardIsLocalUserInfoKey](keyboardislocaluserinfokey.md): A user info key to retrieve a Boolean value that indicates whether the keyboard belongs to the current app.
- [UIKeyboardWillChangeFrameNotification](keyboardwillchangeframenotification.md): A notification that posts immediately prior to a change in the keyboard’s frame.
- [UIKeyboardWillHideNotification](keyboardwillhidenotification.md): A notification that posts immediately prior to dismissing the keyboard.
- [UIKeyboardWillShowNotification](keyboardwillshownotification.md): A notification that posts immediately prior to displaying the keyboard.

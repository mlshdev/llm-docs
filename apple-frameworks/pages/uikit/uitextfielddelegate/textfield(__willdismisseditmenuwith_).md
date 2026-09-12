> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextfielddelegate/textfield(_:willdismisseditmenuwith:)](https://developer.apple.com/documentation/uikit/uitextfielddelegate/textfield(_:willdismisseditmenuwith:))

# textField(\_:willDismissEditMenuWith:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Tells the delegate that the system is about to dismiss an edit menu with an animator.

## Declaration

```swift
optional func textField(_ textField: UITextField, willDismissEditMenuWith animator: any UIEditMenuInteractionAnimating)
```

## Parameters

- `textField`: The text field showing the menu.
- `animator`: The dismissal animator to add animations to, so that the animations will run alongside the dismissal transition.

## See Also

### Customizing an edit menu

- [textField(\_:willPresentEditMenuWith:)](textfield%28__willpresenteditmenuwith_%29.md): Tells the delegate that the system is about to present an edit menu with an animator.

# textField:willDismissEditMenuWithAnimator: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Tells the delegate that the system is about to dismiss an edit menu with an animator.

## Declaration

```objectivec
- (void) textField:(UITextField *) textField willDismissEditMenuWithAnimator:(id<UIEditMenuInteractionAnimating>) animator;
```

## Parameters

- `textField`: The text field showing the menu.
- `animator`: The dismissal animator to add animations to, so that the animations will run alongside the dismissal transition.

## See Also

### Customizing an edit menu

- [textField:willPresentEditMenuWithAnimator:](textfield%28__willpresenteditmenuwith_%29.md): Tells the delegate that the system is about to present an edit menu with an animator.

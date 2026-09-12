> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextfielddelegate/textfield(_:willpresenteditmenuwith:)](https://developer.apple.com/documentation/uikit/uitextfielddelegate/textfield(_:willpresenteditmenuwith:))

# textField(\_:willPresentEditMenuWith:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Tells the delegate that the system is about to present an edit menu with an animator.

## Declaration

```swift
optional func textField(_ textField: UITextField, willPresentEditMenuWith animator: any UIEditMenuInteractionAnimating)
```

## Parameters

- `textField`: The text field showing the menu.
- `animator`: The appearance animator to add animations to, so that the animations will run alongside the appearance transition.

## See Also

### Customizing an edit menu

- [textField(\_:willDismissEditMenuWith:)](textfield%28__willdismisseditmenuwith_%29.md): Tells the delegate that the system is about to dismiss an edit menu with an animator.

# textField:willPresentEditMenuWithAnimator: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Tells the delegate that the system is about to present an edit menu with an animator.

## Declaration

```objectivec
- (void) textField:(UITextField *) textField willPresentEditMenuWithAnimator:(id<UIEditMenuInteractionAnimating>) animator;
```

## Parameters

- `textField`: The text field showing the menu.
- `animator`: The appearance animator to add animations to, so that the animations will run alongside the appearance transition.

## See Also

### Customizing an edit menu

- [textField:willDismissEditMenuWithAnimator:](textfield%28__willdismisseditmenuwith_%29.md): Tells the delegate that the system is about to dismiss an edit menu with an animator.

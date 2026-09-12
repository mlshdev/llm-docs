> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextinput/willdismisseditmenu(animator:)](https://developer.apple.com/documentation/uikit/uitextinput/willdismisseditmenu(animator:))

# willDismissEditMenu(animator:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Tells the object when the system is about to dismiss an edit menu with an animator.

## Declaration

```swift
optional func willDismissEditMenu(animator: any UIEditMenuInteractionAnimating)
```

## Parameters

- `animator`: The dismissal animator to add animations to, so that the animations will run alongside the dismissal transition.

## See Also

### Managing the edit menu

- [editMenu(for:suggestedActions:)](editmenu%28for_suggestedactions_%29.md): Asks for the menu to display for the given text range and actions the system provides.
- [willPresentEditMenu(animator:)](willpresenteditmenu%28animator_%29.md): Tells the object when the system is about to present an edit menu with an animator.

# willDismissEditMenuWithAnimator: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Tells the object when the system is about to dismiss an edit menu with an animator.

## Declaration

```objectivec
- (void) willDismissEditMenuWithAnimator:(id<UIEditMenuInteractionAnimating>) animator;
```

## Parameters

- `animator`: The dismissal animator to add animations to, so that the animations will run alongside the dismissal transition.

## See Also

### Managing the edit menu

- [editMenuForTextRange:suggestedActions:](editmenu%28for_suggestedactions_%29.md): Asks for the menu to display for the given text range and actions the system provides.
- [willPresentEditMenuWithAnimator:](willpresenteditmenu%28animator_%29.md): Tells the object when the system is about to present an edit menu with an animator.

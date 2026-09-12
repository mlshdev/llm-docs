> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextviewdelegate/textview(_:willdismisseditmenuwith:)](https://developer.apple.com/documentation/uikit/uitextviewdelegate/textview(_:willdismisseditmenuwith:))

# textView(\_:willDismissEditMenuWith:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

## Declaration

```swift
optional func textView(_ textView: UITextView, willDismissEditMenuWith animator: any UIEditMenuInteractionAnimating)
```

## Parameters

- `textView`: The text view displaying the menu.
- `animator`: Dismissal animator. Add animations to this object to run them alongside the dismissal transition.

<a id="discussion"></a>

## Discussion

Called when the text view is about to dismiss the edit menu.

## See Also

### Customizing an edit menu

- [textView(\_:willPresentEditMenuWith:)](textview%28__willpresenteditmenuwith_%29.md)

# textView:willDismissEditMenuWithAnimator: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

## Declaration

```objectivec
- (void) textView:(UITextView *) textView willDismissEditMenuWithAnimator:(id<UIEditMenuInteractionAnimating>) animator;
```

## Parameters

- `textView`: The text view displaying the menu.
- `animator`: Dismissal animator. Add animations to this object to run them alongside the dismissal transition.

<a id="discussion"></a>

## Discussion

Called when the text view is about to dismiss the edit menu.

## See Also

### Customizing an edit menu

- [textView:willPresentEditMenuWithAnimator:](textview%28__willpresenteditmenuwith_%29.md)

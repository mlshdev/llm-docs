> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextviewdelegate/textview(_:willpresenteditmenuwith:)](https://developer.apple.com/documentation/uikit/uitextviewdelegate/textview(_:willpresenteditmenuwith:))

# textView(\_:willPresentEditMenuWith:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

## Declaration

```swift
optional func textView(_ textView: UITextView, willPresentEditMenuWith animator: any UIEditMenuInteractionAnimating)
```

## Parameters

- `textView`: The text view displaying the menu.
- `animator`: Appearance animator. Add animations to this object to run them alongside the appearance transition.

<a id="discussion"></a>

## Discussion

Called when the text view is about to present the edit menu.

## See Also

### Customizing an edit menu

- [textView(\_:willDismissEditMenuWith:)](textview%28__willdismisseditmenuwith_%29.md)

# textView:willPresentEditMenuWithAnimator: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

## Declaration

```objectivec
- (void) textView:(UITextView *) textView willPresentEditMenuWithAnimator:(id<UIEditMenuInteractionAnimating>) animator;
```

## Parameters

- `textView`: The text view displaying the menu.
- `animator`: Appearance animator. Add animations to this object to run them alongside the appearance transition.

<a id="discussion"></a>

## Discussion

Called when the text view is about to present the edit menu.

## See Also

### Customizing an edit menu

- [textView:willDismissEditMenuWithAnimator:](textview%28__willdismisseditmenuwith_%29.md)

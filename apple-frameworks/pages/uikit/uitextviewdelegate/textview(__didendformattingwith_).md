> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uitextviewdelegate/textview(_:didendformattingwith:)

# textView(\_:didEndFormattingWith:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 26.0+

## Declaration

```swift
optional func textView(_ textView: UITextView, didEndFormattingWith viewController: UITextFormattingViewController)
```

## Parameters

- `viewController`: The text formatting controller that is being presented.

<a id="discussion"></a>

## Discussion

Informs the delegate that text formatting controller has been dismissed.

# textView:didEndFormattingWithViewController: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · visionOS 26.0+

## Declaration

```objectivec
- (void) textView:(UITextView *) textView didEndFormattingWithViewController:(UITextFormattingViewController *) viewController;
```

## Parameters

- `viewController`: The text formatting controller that is being presented.

<a id="discussion"></a>

## Discussion

Informs the delegate that text formatting controller has been dismissed.

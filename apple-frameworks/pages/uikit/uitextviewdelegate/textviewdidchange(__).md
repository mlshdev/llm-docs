> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextviewdelegate/textviewdidchange(_:)](https://developer.apple.com/documentation/uikit/uitextviewdelegate/textviewdidchange(_:))

# textViewDidChange(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Tells the delegate when the user changes the text or attributes in the specified text view.

## Declaration

```swift
optional func textViewDidChange(_ textView: UITextView)
```

## Parameters

- `textView`: The text view containing the changes.

<a id="Discussion"></a>

## Discussion

The text view calls this method in response to user-initiated changes to the text. This method is not called in response to programmatically initiated changes.

Implementation of this method is optional.

## See Also

### Responding to text changes

- [textView(\_:shouldChangeTextIn:replacementText:)](textview%28__shouldchangetextin_replacementtext_%29.md): Deprecated. Asks the delegate whether to replace the specified text in the text view.

# textViewDidChange: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Tells the delegate when the user changes the text or attributes in the specified text view.

## Declaration

```objectivec
- (void) textViewDidChange:(UITextView *) textView;
```

## Parameters

- `textView`: The text view containing the changes.

<a id="Discussion"></a>

## Discussion

The text view calls this method in response to user-initiated changes to the text. This method is not called in response to programmatically initiated changes.

Implementation of this method is optional.

## See Also

### Responding to text changes

- [textView:shouldChangeTextInRange:replacementText:](textview%28__shouldchangetextin_replacementtext_%29.md): Deprecated. Asks the delegate whether to replace the specified text in the text view.

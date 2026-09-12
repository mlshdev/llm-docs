> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextviewdelegate/textview(_:shouldchangetextin:replacementtext:)](https://developer.apple.com/documentation/uikit/uitextviewdelegate/textview(_:shouldchangetextin:replacementtext:))

# textView(\_:shouldChangeTextIn:replacementText:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · tvOS  (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Asks the delegate whether to replace the specified text in the text view.

## Declaration

```swift
optional func textView(_ textView: UITextView, shouldChangeTextIn range: NSRange, replacementText text: String) -> Bool
```

## Parameters

- `textView`: The text view containing the changes.
- `range`: The current selection range. If the length of the range is 0, `range` reflects the current insertion point. If the user presses the Delete key, the length of the range is 1 and an empty string object replaces that single character.
- `text`: The text to insert.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the old text should be replaced by the new text; [false](https://developer.apple.com/documentation/swift/false) if the replacement operation should be aborted.

<a id="Discussion"></a>

## Discussion

The text view calls this method whenever the user types a new character or deletes an existing character. Implementation of this method is optional. You can use this method to replace text before it is committed to the text view storage. For example, a spell checker might use this method to replace a misspelled word with the correct spelling.

## See Also

### Responding to text changes

- [textViewDidChange(\_:)](textviewdidchange%28__%29.md): Tells the delegate when the user changes the text or attributes in the specified text view.

# textView:shouldChangeTextInRange:replacementText: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · tvOS  (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Asks the delegate whether to replace the specified text in the text view.

## Declaration

```objectivec
- (BOOL) textView:(UITextView *) textView shouldChangeTextInRange:(NSRange) range replacementText:(NSString *) text;
```

## Parameters

- `textView`: The text view containing the changes.
- `range`: The current selection range. If the length of the range is 0, `range` reflects the current insertion point. If the user presses the Delete key, the length of the range is 1 and an empty string object replaces that single character.
- `text`: The text to insert.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the old text should be replaced by the new text; [false](https://developer.apple.com/documentation/swift/false) if the replacement operation should be aborted.

<a id="Discussion"></a>

## Discussion

The text view calls this method whenever the user types a new character or deletes an existing character. Implementation of this method is optional. You can use this method to replace text before it is committed to the text view storage. For example, a spell checker might use this method to replace a misspelled word with the correct spelling.

## See Also

### Responding to text changes

- [textViewDidChange:](textviewdidchange%28__%29.md): Tells the delegate when the user changes the text or attributes in the specified text view.

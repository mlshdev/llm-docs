> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextpastedelegate/textpasteconfigurationsupporting(_:performpasteof:to:)](https://developer.apple.com/documentation/uikit/uitextpastedelegate/textpasteconfigurationsupporting(_:performpasteof:to:))

# textPasteConfigurationSupporting(\_:performPasteOf:to:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Asks the delegate to explicitly handle the final incorporation of a pasted or dropped string of text into the text view.

## Declaration

```swift
optional func textPasteConfigurationSupporting(_ textPasteConfigurationSupporting: any UITextPasteConfigurationSupporting, performPasteOf attributedString: NSAttributedString, to textRange: UITextRange) -> UITextRange
```

<a id="return-value"></a>

## Return Value

A text range representing the position of the text added to the text view.

<a id="Discussion"></a>

## Discussion

You implement this method when you want to handle pasting the final attributed string into the text view. If you don’t implement this method, the standard paste mechanism is used. When adding the attributed string to the text view, be sure to place the text at the provided text range. Placing the string elsewhere in the text view may confuse the user.

## See Also

### Pasting the text paste item

- [textPasteConfigurationSupporting(\_:combineItemAttributedStrings:for:)](textpasteconfigurationsupporting%28__combineitemattributedstrings_for_%29.md): Asks the delegate to combine multiple strings into a single attributed string.

# textPasteConfigurationSupporting:performPasteOfAttributedString:toRange: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Asks the delegate to explicitly handle the final incorporation of a pasted or dropped string of text into the text view.

## Declaration

```objectivec
- (UITextRange *) textPasteConfigurationSupporting:(id<UITextPasteConfigurationSupporting>) textPasteConfigurationSupporting performPasteOfAttributedString:(NSAttributedString *) attributedString toRange:(UITextRange *) textRange;
```

<a id="return-value"></a>

## Return Value

A text range representing the position of the text added to the text view.

<a id="Discussion"></a>

## Discussion

You implement this method when you want to handle pasting the final attributed string into the text view. If you don’t implement this method, the standard paste mechanism is used. When adding the attributed string to the text view, be sure to place the text at the provided text range. Placing the string elsewhere in the text view may confuse the user.

## See Also

### Pasting the text paste item

- [textPasteConfigurationSupporting:combineItemAttributedStrings:forRange:](textpasteconfigurationsupporting%28__combineitemattributedstrings_for_%29.md): Asks the delegate to combine multiple strings into a single attributed string.

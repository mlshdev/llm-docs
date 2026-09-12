> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextpastedelegate/textpasteconfigurationsupporting(_:combineitemattributedstrings:for:)](https://developer.apple.com/documentation/uikit/uitextpastedelegate/textpasteconfigurationsupporting(_:combineitemattributedstrings:for:))

# textPasteConfigurationSupporting(\_:combineItemAttributedStrings:for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Asks the delegate to combine multiple strings into a single attributed string.

## Declaration

```swift
optional func textPasteConfigurationSupporting(_ textPasteConfigurationSupporting: any UITextPasteConfigurationSupporting, combineItemAttributedStrings itemStrings: [NSAttributedString], for textRange: UITextRange) -> NSAttributedString
```

## Parameters

- `textPasteConfigurationSupporting`: The object that received the paste or drop request.
- `itemStrings`: An array of attributed strings that will be combined to form a single attributed string.
- `textRange`: The position in the text view where the paste or drop operation will place the text.

<a id="return-value"></a>

## Return Value

An attributed string based on the combination of multiple strings.

<a id="Discussion"></a>

## Discussion

You implement this method when you need to change how the item strings are combined to form the single attributed string. If this method isn’t implemented, the item strings are concatenated without any delimiters.

## See Also

### Pasting the text paste item

- [textPasteConfigurationSupporting(\_:performPasteOf:to:)](textpasteconfigurationsupporting%28__performpasteof_to_%29.md): Asks the delegate to explicitly handle the final incorporation of a pasted or dropped string of text into the text view.

# textPasteConfigurationSupporting:combineItemAttributedStrings:forRange: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Asks the delegate to combine multiple strings into a single attributed string.

## Declaration

```objectivec
- (NSAttributedString *) textPasteConfigurationSupporting:(id<UITextPasteConfigurationSupporting>) textPasteConfigurationSupporting combineItemAttributedStrings:(NSArray<NSAttributedString *> *) itemStrings forRange:(UITextRange *) textRange;
```

## Parameters

- `textPasteConfigurationSupporting`: The object that received the paste or drop request.
- `itemStrings`: An array of attributed strings that will be combined to form a single attributed string.
- `textRange`: The position in the text view where the paste or drop operation will place the text.

<a id="return-value"></a>

## Return Value

An attributed string based on the combination of multiple strings.

<a id="Discussion"></a>

## Discussion

You implement this method when you need to change how the item strings are combined to form the single attributed string. If this method isn’t implemented, the item strings are concatenated without any delimiters.

## See Also

### Pasting the text paste item

- [textPasteConfigurationSupporting:performPasteOfAttributedString:toRange:](textpasteconfigurationsupporting%28__performpasteof_to_%29.md): Asks the delegate to explicitly handle the final incorporation of a pasted or dropped string of text into the text view.

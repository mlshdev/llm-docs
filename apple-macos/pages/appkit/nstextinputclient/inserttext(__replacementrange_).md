> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextinputclient/inserttext(_:replacementrange:)](https://developer.apple.com/documentation/appkit/nstextinputclient/inserttext(_:replacementrange:))

# insertText(\_:replacementRange:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Inserts the given string into the receiver, replacing the specified content.

## Declaration

```swift
func insertText(_ string: Any, replacementRange: NSRange)
```

## Parameters

- `string`: The text to insert, either an `NSString` or `NSAttributedString` instance.
- `replacementRange`: The range of content to replace in the receiver’s text storage.

## Mentioned In

- [Supporting Writing Tools via the pasteboard](../supporting-writing-tools-via-the-pasteboard.md)

<a id="Discussion"></a>

## Discussion

This method is the entry point for inserting text typed by the user and is generally not suitable for other purposes. Programmatic modification of the text is best done by operating on the text storage directly. Because this method pertains to the actions of the user, the text view must be editable for the insertion to work.

## See Also

### Storing text

- [attributedString()](attributedstring%28%29.md): Returns an attributed string representing the receiver’s text storage.
- [attributedSubstring(forProposedRange:actualRange:)](attributedsubstring%28forproposedrange_actualrange_%29.md): Returns an attributed string derived from the given range in the receiver’s text storage.

# insertText:replacementRange: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Inserts the given string into the receiver, replacing the specified content.

## Declaration

```objectivec
- (void) insertText:(id) string replacementRange:(NSRange) replacementRange;
```

## Parameters

- `string`: The text to insert, either an `NSString` or `NSAttributedString` instance.
- `replacementRange`: The range of content to replace in the receiver’s text storage.

## Mentioned In

- [Supporting Writing Tools via the pasteboard](../supporting-writing-tools-via-the-pasteboard.md)

<a id="Discussion"></a>

## Discussion

This method is the entry point for inserting text typed by the user and is generally not suitable for other purposes. Programmatic modification of the text is best done by operating on the text storage directly. Because this method pertains to the actions of the user, the text view must be editable for the insertion to work.

## See Also

### Storing text

- [attributedString](attributedstring%28%29.md): Returns an attributed string representing the receiver’s text storage.
- [attributedSubstringForProposedRange:actualRange:](attributedsubstring%28forproposedrange_actualrange_%29.md): Returns an attributed string derived from the given range in the receiver’s text storage.

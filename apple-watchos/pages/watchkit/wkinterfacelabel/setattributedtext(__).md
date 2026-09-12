> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacelabel/setattributedtext(_:)](https://developer.apple.com/documentation/watchkit/wkinterfacelabel/setattributedtext(_:))

# setAttributedText(\_:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Sets the label text to the specified attributed string.

## Declaration

```swift
func setAttributedText(_ attributedText: NSAttributedString?)
```

## Parameters

- `attributedText`: The formatted text string to be displayed in the label. Specifying `nil` clears the current text from the label.

## Mentioned In

- [Connecting Your User Interface to Your Code](../connecting-your-user-interface-to-your-code.md)

<a id="Discussion"></a>

## Discussion

This method changes the label text to the new value, replacing the old text if any. Any font and style attributes applied to the string take precedence over default values. If you do not explicitly specify font or styling information, the default values are used instead. For example, if you do not specify a text color explicitly, the default text color is used.

Attributed strings may not contain any [NSTextAttachment](https://developer.apple.com/documentation/uikit/nstextattachment) objects as part of their content.

## See Also

### Setting the Label Text

- [setText(\_:)](settext%28__%29.md): Sets the label text to the specified string.
- [setTextColor(\_:)](settextcolor%28__%29.md): Sets the color to apply to plain text strings.

# setAttributedText: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Sets the label text to the specified attributed string.

## Declaration

```objectivec
- (void) setAttributedText:(NSAttributedString *) attributedText;
```

## Parameters

- `attributedText`: The formatted text string to be displayed in the label. Specifying `nil` clears the current text from the label.

## Mentioned In

- [Connecting Your User Interface to Your Code](../connecting-your-user-interface-to-your-code.md)

<a id="Discussion"></a>

## Discussion

This method changes the label text to the new value, replacing the old text if any. Any font and style attributes applied to the string take precedence over default values. If you do not explicitly specify font or styling information, the default values are used instead. For example, if you do not specify a text color explicitly, the default text color is used.

Attributed strings may not contain any [NSTextAttachment](https://developer.apple.com/documentation/uikit/nstextattachment) objects as part of their content.

## See Also

### Setting the Label Text

- [setText:](settext%28__%29.md): Sets the label text to the specified string.
- [setTextColor:](settextcolor%28__%29.md): Sets the color to apply to plain text strings.

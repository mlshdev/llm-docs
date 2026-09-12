> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacelabel/settext(_:)](https://developer.apple.com/documentation/watchkit/wkinterfacelabel/settext(_:))

# setText(\_:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Sets the label text to the specified string.

## Declaration

```swift
func setText(_ text: String?)
```

## Parameters

- `text`: The text to be displayed in the label. Specifying `nil` clears the current text from the label.

## Mentioned In

- [Connecting Your User Interface to Your Code](../connecting-your-user-interface-to-your-code.md)

<a id="Discussion"></a>

## Discussion

This method changes the string displayed by the label to the new value. When using this method to set the text, the default font and styling information for the text is derived from the storyboard file. You can change the default text color using the [setTextColor(\_:)](settextcolor%28__%29.md) method.

Changing the text of the label causes the label to resize itself to accommodate the new string. If the string is too large to fit the available space, WatchKit truncates the text.

## See Also

### Related Documentation

- [App Programming Guide for watchOS](https://developer.apple.com/library/archive/documentation/General/Conceptual/WatchKitProgrammingGuide/index.html#//apple_ref/doc/uid/TP40014969)

### Setting the Label Text

- [setTextColor(\_:)](settextcolor%28__%29.md): Sets the color to apply to plain text strings.
- [setAttributedText(\_:)](setattributedtext%28__%29.md): Sets the label text to the specified attributed string.

# setText: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Sets the label text to the specified string.

## Declaration

```objectivec
- (void) setText:(NSString *) text;
```

## Parameters

- `text`: The text to be displayed in the label. Specifying `nil` clears the current text from the label.

## Mentioned In

- [Connecting Your User Interface to Your Code](../connecting-your-user-interface-to-your-code.md)

<a id="Discussion"></a>

## Discussion

This method changes the string displayed by the label to the new value. When using this method to set the text, the default font and styling information for the text is derived from the storyboard file. You can change the default text color using the [setTextColor:](settextcolor%28__%29.md) method.

Changing the text of the label causes the label to resize itself to accommodate the new string. If the string is too large to fit the available space, WatchKit truncates the text.

## See Also

### Related Documentation

- [App Programming Guide for watchOS](https://developer.apple.com/library/archive/documentation/General/Conceptual/WatchKitProgrammingGuide/index.html#//apple_ref/doc/uid/TP40014969)

### Setting the Label Text

- [setTextColor:](settextcolor%28__%29.md): Sets the color to apply to plain text strings.
- [setAttributedText:](setattributedtext%28__%29.md): Sets the label text to the specified attributed string.

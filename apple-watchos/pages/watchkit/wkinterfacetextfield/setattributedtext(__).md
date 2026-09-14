> Snapshot-pinned source payload for Apple watchOS snapshot-2bb3946a9b15; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/watchkit/wkinterfacetextfield/setattributedtext(_:)

# setAttributedText(\_:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 6.0+

Sets the styled text displayed by the text field.

## Declaration

```swift
func setAttributedText(_ attributedText: NSAttributedString?)
```

## Parameters

- `attributedText`: The styled text displayed in the text field. Specifying `nil` clears the current text.

## See Also

### Setting the Text

- [setText(\_:)](settext%28__%29.md): Sets the text displayed by the text field.
- [setTextColor(\_:)](settextcolor%28__%29.md): Sets the text’s color.

# setAttributedText: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 6.0+

Sets the styled text displayed by the text field.

## Declaration

```objectivec
- (void) setAttributedText:(NSAttributedString *) attributedText;
```

## Parameters

- `attributedText`: The styled text displayed in the text field. Specifying `nil` clears the current text.

## See Also

### Setting the Text

- [setText:](settext%28__%29.md): Sets the text displayed by the text field.
- [setTextColor:](settextcolor%28__%29.md): Sets the text’s color.

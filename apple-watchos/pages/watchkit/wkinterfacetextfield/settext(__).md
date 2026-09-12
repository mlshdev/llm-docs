> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacetextfield/settext(_:)](https://developer.apple.com/documentation/watchkit/wkinterfacetextfield/settext(_:))

# setText(\_:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 6.0+

Sets the text displayed by the text field.

## Declaration

```swift
func setText(_ text: String?)
```

## Parameters

- `text`: The text displayed in the text field. Specifying `nil` clears the current text.

## See Also

### Setting the Text

- [setAttributedText(\_:)](setattributedtext%28__%29.md): Sets the styled text displayed by the text field.
- [setTextColor(\_:)](settextcolor%28__%29.md): Sets the text’s color.

# setText: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 6.0+

Sets the text displayed by the text field.

## Declaration

```objectivec
- (void) setText:(NSString *) text;
```

## Parameters

- `text`: The text displayed in the text field. Specifying `nil` clears the current text.

## See Also

### Setting the Text

- [setAttributedText:](setattributedtext%28__%29.md): Sets the styled text displayed by the text field.
- [setTextColor:](settextcolor%28__%29.md): Sets the text’s color.

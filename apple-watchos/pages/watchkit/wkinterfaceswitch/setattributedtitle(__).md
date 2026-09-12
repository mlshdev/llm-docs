> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfaceswitch/setattributedtitle(_:)](https://developer.apple.com/documentation/watchkit/wkinterfaceswitch/setattributedtitle(_:))

# setAttributedTitle(\_:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Sets the switch title to the specified attributed string.

## Declaration

```swift
func setAttributedTitle(_ attributedTitle: NSAttributedString?)
```

## Parameters

- `attributedTitle`: The formatted text string to be displayed in the switch. Specifying `nil` clears the current text from the switch.

<a id="Discussion"></a>

## Discussion

This method sets the content of the switch to the specified text, replacing the previous text. The text is drawn using the style information in `attributedTitle`.

If you use styled text in your switches, you must provide localized versions of the text yourself. Attributed strings may not contain any [NSTextAttachment](https://developer.apple.com/documentation/uikit/nstextattachment) objects as part of their content.

## See Also

### Setting the Switch’s Title

- [setTitle(\_:)](settitle%28__%29.md): Sets the switch title to the specified string.

# setAttributedTitle: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Sets the switch title to the specified attributed string.

## Declaration

```objectivec
- (void) setAttributedTitle:(NSAttributedString *) attributedTitle;
```

## Parameters

- `attributedTitle`: The formatted text string to be displayed in the switch. Specifying `nil` clears the current text from the switch.

<a id="Discussion"></a>

## Discussion

This method sets the content of the switch to the specified text, replacing the previous text. The text is drawn using the style information in `attributedTitle`.

If you use styled text in your switches, you must provide localized versions of the text yourself. Attributed strings may not contain any [NSTextAttachment](https://developer.apple.com/documentation/uikit/nstextattachment) objects as part of their content.

## See Also

### Setting the Switch’s Title

- [setTitle:](settitle%28__%29.md): Sets the switch title to the specified string.

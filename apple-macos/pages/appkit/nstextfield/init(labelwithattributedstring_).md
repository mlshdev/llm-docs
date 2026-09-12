> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextfield/init(labelwithattributedstring:)](https://developer.apple.com/documentation/appkit/nstextfield/init(labelwithattributedstring:))

# init(labelWithAttributedString:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.12+

Creates a text field for use as a static label that displays styled text, doesn’t wrap, and doesn’t have selectable text.

## Declaration

```swift
convenience init(labelWithAttributedString attributedStringValue: NSAttributedString)
```

## Parameters

- `attributedStringValue`: An attributed string to use as the content of the label.

<a id="return-value"></a>

## Return Value

A text field that displays the specified attributed string as a static label.

<a id="Discussion"></a>

## Discussion

The text field determines its line-break mode by inspecting the paragraph style attributes in the attributed string.

> **Note**

>  When the text field has an attributed string value, the system ignores the [textColor](textcolor.md), [font](../nscontrol/font.md), [alignment](../nscontrol/alignment.md), [lineBreakMode](../nscontrol/linebreakmode.md), and `lineBreakStrategy` properties. Set the [foregroundColor](https://developer.apple.com/documentation/foundation/nsattributedstring/key/foregroundcolor), [font](https://developer.apple.com/documentation/foundation/nsattributedstring/key/font), [alignment](../nsmutableparagraphstyle/alignment.md), linebreakmode, and [lineBreakStrategy](../nsparagraphstyle/linebreakstrategy-swift.property.md) properties in the attributed string instead.

## See Also

### Creating text fields

- [init(labelWithString:)](init%28labelwithstring_%29.md): Initializes a text field for use as a static label that uses the system default font, doesn’t wrap, and doesn’t have selectable text.
- [init(string:)](init%28string_%29.md): Initializes a single-line editable text field for user input using the system default font and standard visual appearance.
- [init(wrappingLabelWithString:)](init%28wrappinglabelwithstring_%29.md): Initializes a text field for use as a multiline static label with selectable text that uses the system default font.

# labelWithAttributedString: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.12+

Creates a text field for use as a static label that displays styled text, doesn’t wrap, and doesn’t have selectable text.

## Declaration

```objectivec
+ (instancetype) labelWithAttributedString:(NSAttributedString *) attributedStringValue;
```

## Parameters

- `attributedStringValue`: An attributed string to use as the content of the label.

<a id="return-value"></a>

## Return Value

A text field that displays the specified attributed string as a static label.

<a id="Discussion"></a>

## Discussion

The text field determines its line-break mode by inspecting the paragraph style attributes in the attributed string.

> **Note**

>  When the text field has an attributed string value, the system ignores the [textColor](textcolor.md), [font](../nscontrol/font.md), [alignment](../nscontrol/alignment.md), [lineBreakMode](../nscontrol/linebreakmode.md), and `lineBreakStrategy` properties. Set the [foregroundColor](https://developer.apple.com/documentation/foundation/nsattributedstring/key/foregroundcolor), [font](https://developer.apple.com/documentation/foundation/nsattributedstring/key/font), [alignment](../nsmutableparagraphstyle/alignment.md), linebreakmode, and [lineBreakStrategy](../nsparagraphstyle/linebreakstrategy-swift.property.md) properties in the attributed string instead.

## See Also

### Creating text fields

- [labelWithString:](init%28labelwithstring_%29.md): Initializes a text field for use as a static label that uses the system default font, doesn’t wrap, and doesn’t have selectable text.
- [textFieldWithString:](init%28string_%29.md): Initializes a single-line editable text field for user input using the system default font and standard visual appearance.
- [wrappingLabelWithString:](init%28wrappinglabelwithstring_%29.md): Initializes a text field for use as a multiline static label with selectable text that uses the system default font.

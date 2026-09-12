> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uilabel/textcolor](https://developer.apple.com/documentation/uikit/uilabel/textcolor)

# textColor (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The color of the text.

## Declaration

```swift
var textColor: UIColor! { get set }
```

<a id="Discussion"></a>

## Discussion

If you’re using styled text, assigning a new value to this property applies the color to the entirety of the string in the [attributedText](attributedtext.md) property. If you want to apply the color to only a portion of the text, create a new attributed string with the desired style information and associate it with the label. If you aren’t using styled text, this property applies to the entire text string in the [text](text.md) property.

The default value for this property is the system’s [label](../uicolor/label.md) color, which adapts dynamically to Dark Mode changes. Setting this property to `nil` causes it to be reset to the default value. For more information, see [UI element colors](../ui-element-colors.md).

## See Also

### Accessing the text attributes

- [text](text.md): The text that the label displays.
- [attributedText](attributedtext.md): The styled text that the label displays.
- [font](font.md): The font of the text.
- [textAlignment](textalignment.md): The technique for aligning the text.
- [lineBreakMode](linebreakmode.md): The technique for wrapping and truncating the label’s text.
- [lineBreakStrategy](linebreakstrategy.md): The strategy that the system uses to break lines when laying out multiple lines of text.
- [isEnabled](isenabled.md): A Boolean value that determines whether the label draws its text in an enabled state.
- [enablesMarqueeWhenAncestorFocused](enablesmarqueewhenancestorfocused.md): A Boolean value that determines whether the label scrolls its text while one of its containing views has focus.
- [showsExpansionTextWhenTruncated](showsexpansiontextwhentruncated.md): A Boolean value that determines whether the full text of the label displays when the pointer hovers over the truncated text.

# textColor (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The color of the text.

## Declaration

```objectivec
@property (nonatomic, strong, null_resettable) UIColor * textColor;
```

<a id="Discussion"></a>

## Discussion

If you’re using styled text, assigning a new value to this property applies the color to the entirety of the string in the [attributedText](attributedtext.md) property. If you want to apply the color to only a portion of the text, create a new attributed string with the desired style information and associate it with the label. If you aren’t using styled text, this property applies to the entire text string in the [text](text.md) property.

The default value for this property is the system’s [labelColor](../uicolor/label.md) color, which adapts dynamically to Dark Mode changes. Setting this property to `nil` causes it to be reset to the default value. For more information, see [UI element colors](../ui-element-colors.md).

## See Also

### Accessing the text attributes

- [text](text.md): The text that the label displays.
- [attributedText](attributedtext.md): The styled text that the label displays.
- [font](font.md): The font of the text.
- [textAlignment](textalignment.md): The technique for aligning the text.
- [lineBreakMode](linebreakmode.md): The technique for wrapping and truncating the label’s text.
- [lineBreakStrategy](linebreakstrategy.md): The strategy that the system uses to break lines when laying out multiple lines of text.
- [enabled](isenabled.md): A Boolean value that determines whether the label draws its text in an enabled state.
- [enablesMarqueeWhenAncestorFocused](enablesmarqueewhenancestorfocused.md): A Boolean value that determines whether the label scrolls its text while one of its containing views has focus.
- [showsExpansionTextWhenTruncated](showsexpansiontextwhentruncated.md): A Boolean value that determines whether the full text of the label displays when the pointer hovers over the truncated text.

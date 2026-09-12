> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolor/textbackgroundcolor](https://developer.apple.com/documentation/appkit/nscolor/textbackgroundcolor)

# textBackgroundColor (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

The color to use for the background area behind text.

## Declaration

```swift
class var textBackgroundColor: NSColor { get }
```

<a id="Discussion"></a>

## Discussion

When text is selected, its background color changes to the return value of [selectedTextBackgroundColor](selectedtextbackgroundcolor.md).

When applied to an [NSBox](../nsbox.md) object, this color supports Desktop Tinting in Dark Mode. With Desktop Tinting, the system modifies this color dynamically by incorporating some of the color from the underlying desktop image. The system does not apply this dynamic tinting effect to other types of views.

## See Also

### Text colors

- [textColor](textcolor.md): The color to use for text.
- [placeholderTextColor](placeholdertextcolor.md): The color to use for placeholder text in controls or text views.
- [selectedTextColor](selectedtextcolor.md): The color to use for selected text.
- [selectedTextBackgroundColor](selectedtextbackgroundcolor.md): The color to use for the background of selected text.
- [keyboardFocusIndicatorColor](keyboardfocusindicatorcolor.md): The color to use for the keyboard focus ring around controls.
- [unemphasizedSelectedTextColor](unemphasizedselectedtextcolor.md): The color to use for selected text in an unemphasized context.
- [unemphasizedSelectedTextBackgroundColor](unemphasizedselectedtextbackgroundcolor.md): The color to use for the text background in an unemphasized context.

# textBackgroundColor (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

The color to use for the background area behind text.

## Declaration

```objectivec
@property (class, strong, readonly) NSColor * textBackgroundColor;
```

<a id="Discussion"></a>

## Discussion

When text is selected, its background color changes to the return value of [selectedTextBackgroundColor](selectedtextbackgroundcolor.md).

When applied to an [NSBox](../nsbox.md) object, this color supports Desktop Tinting in Dark Mode. With Desktop Tinting, the system modifies this color dynamically by incorporating some of the color from the underlying desktop image. The system does not apply this dynamic tinting effect to other types of views.

## See Also

### Text colors

- [textColor](textcolor.md): The color to use for text.
- [placeholderTextColor](placeholdertextcolor.md): The color to use for placeholder text in controls or text views.
- [selectedTextColor](selectedtextcolor.md): The color to use for selected text.
- [selectedTextBackgroundColor](selectedtextbackgroundcolor.md): The color to use for the background of selected text.
- [keyboardFocusIndicatorColor](keyboardfocusindicatorcolor.md): The color to use for the keyboard focus ring around controls.
- [unemphasizedSelectedTextColor](unemphasizedselectedtextcolor.md): The color to use for selected text in an unemphasized context.
- [unemphasizedSelectedTextBackgroundColor](unemphasizedselectedtextbackgroundcolor.md): The color to use for the text background in an unemphasized context.

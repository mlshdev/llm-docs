> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbuttoncell/title](https://developer.apple.com/documentation/appkit/nsbuttoncell/title)

# title (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The title displayed on the button when it’s in its normal state.

## Declaration

```swift
var title: String! { get set }
```

<a id="Discussion"></a>

## Discussion

If the button doesn’t display a title, the value of this property is the empty string. This title is always displayed if the button doesn’t use its alternate contents for highlighting or displaying the alternate state. By default, a button’s title is “Button.” Setting this property may redraw the button if necessary.

## See Also

### Related Documentation

- [font](../nscell/font.md): The font that the cell uses to display text.
- [setButtonType(\_:)](setbuttontype%28__%29.md): Sets how the button highlights while pressed and how it shows its state.

### Setting Titles

- [alternateTitle](alternatetitle.md): The string displayed by the button when it’s in its alternate state.
- [attributedAlternateTitle](attributedalternatetitle.md): The title displayed by the button when it’s in its alternate state, as an attributed string.
- [attributedTitle](attributedtitle.md): The title displayed by the button when it’s in its normal state as an attributed string.

# title (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The title displayed on the button when it’s in its normal state.

## Declaration

```objectivec
@property (copy, null_resettable) NSString * title;
```

<a id="Discussion"></a>

## Discussion

If the button doesn’t display a title, the value of this property is the empty string. This title is always displayed if the button doesn’t use its alternate contents for highlighting or displaying the alternate state. By default, a button’s title is “Button.” Setting this property may redraw the button if necessary.

## See Also

### Related Documentation

- [font](../nscell/font.md): The font that the cell uses to display text.
- [setTitleWithMnemonic:](settitlewithmnemonic_.md): Deprecated. Sets the title the button displays when it’s in its normal state to the given string with an embedded mnemonic.
- [mnemonicLocation](../nscell/mnemoniclocation.md): Deprecated. Returns the position of the underlined mnemonic character in the receiver’s title.
- [mnemonic](../nscell/mnemonic.md): Deprecated. Returns the character in the receiver’s title that appears underlined for use as a mnemonic.
- [setButtonType:](setbuttontype%28__%29.md): Sets how the button highlights while pressed and how it shows its state.

### Setting Titles

- [alternateMnemonic](alternatemnemonic.md): Deprecated. Returns the character in the alternate title that’s marked as the “keyboard mnemonic.”
- [alternateMnemonicLocation](alternatemnemoniclocation.md): Deprecated. Returns an unsigned integer indicating the character in the alternate title that’s marked as the “keyboard mnemonic.”
- [alternateTitle](alternatetitle.md): The string displayed by the button when it’s in its alternate state.
- [attributedAlternateTitle](attributedalternatetitle.md): The title displayed by the button when it’s in its alternate state, as an attributed string.
- [attributedTitle](attributedtitle.md): The title displayed by the button when it’s in its normal state as an attributed string.
- [setAlternateMnemonicLocation:](setalternatemnemoniclocation_.md): Deprecated. Sets the character in the alternate title that should be the “keyboard mnemonic.”
- [setAlternateTitleWithMnemonic:](setalternatetitlewithmnemonic_.md): Deprecated. Sets the title the button displays when it’s in its alternate state to the given string with an embedded mnemonic.
- [setTitleWithMnemonic:](settitlewithmnemonic_.md): Deprecated. Sets the title the button displays when it’s in its normal state to the given string with an embedded mnemonic.

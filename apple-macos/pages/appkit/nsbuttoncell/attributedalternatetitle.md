> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbuttoncell/attributedalternatetitle](https://developer.apple.com/documentation/appkit/nsbuttoncell/attributedalternatetitle)

# attributedAlternateTitle (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The title displayed by the button when it’s in its alternate state, as an attributed string.

## Declaration

```swift
@NSCopying var attributedAlternateTitle: NSAttributedString { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property is the attributed string that appears on the button when it’s in its alternate state, or the empty string if the button doesn’t display an alternate title. Note that some button types don’t display an alternate title. By default, a button’s alternate title is “Button.”

Graphics attributes that are set on the cell (such as `backgroundColor`, `alignment`, `font`, and so on) are overridden when corresponding properties are set for the attributed string.

## See Also

### Related Documentation

- [font](../nscell/font.md): The font that the cell uses to display text.
- [setButtonType(\_:)](setbuttontype%28__%29.md): Sets how the button highlights while pressed and how it shows its state.

### Setting Titles

- [alternateTitle](alternatetitle.md): The string displayed by the button when it’s in its alternate state.
- [attributedTitle](attributedtitle.md): The title displayed by the button when it’s in its normal state as an attributed string.
- [title](title.md): The title displayed on the button when it’s in its normal state.

# attributedAlternateTitle (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The title displayed by the button when it’s in its alternate state, as an attributed string.

## Declaration

```objectivec
@property (copy) NSAttributedString * attributedAlternateTitle;
```

<a id="Discussion"></a>

## Discussion

The value of this property is the attributed string that appears on the button when it’s in its alternate state, or the empty string if the button doesn’t display an alternate title. Note that some button types don’t display an alternate title. By default, a button’s alternate title is “Button.”

Graphics attributes that are set on the cell (such as `backgroundColor`, `alignment`, `font`, and so on) are overridden when corresponding properties are set for the attributed string.

## See Also

### Related Documentation

- [font](../nscell/font.md): The font that the cell uses to display text.
- [setAlternateMnemonicLocation:](setalternatemnemoniclocation_.md): Deprecated. Sets the character in the alternate title that should be the “keyboard mnemonic.”
- [setAlternateTitleWithMnemonic:](setalternatetitlewithmnemonic_.md): Deprecated. Sets the title the button displays when it’s in its alternate state to the given string with an embedded mnemonic.
- [alternateMnemonic](alternatemnemonic.md): Deprecated. Returns the character in the alternate title that’s marked as the “keyboard mnemonic.”
- [setButtonType:](setbuttontype%28__%29.md): Sets how the button highlights while pressed and how it shows its state.

### Setting Titles

- [alternateMnemonic](alternatemnemonic.md): Deprecated. Returns the character in the alternate title that’s marked as the “keyboard mnemonic.”
- [alternateMnemonicLocation](alternatemnemoniclocation.md): Deprecated. Returns an unsigned integer indicating the character in the alternate title that’s marked as the “keyboard mnemonic.”
- [alternateTitle](alternatetitle.md): The string displayed by the button when it’s in its alternate state.
- [attributedTitle](attributedtitle.md): The title displayed by the button when it’s in its normal state as an attributed string.
- [setAlternateMnemonicLocation:](setalternatemnemoniclocation_.md): Deprecated. Sets the character in the alternate title that should be the “keyboard mnemonic.”
- [setAlternateTitleWithMnemonic:](setalternatetitlewithmnemonic_.md): Deprecated. Sets the title the button displays when it’s in its alternate state to the given string with an embedded mnemonic.
- [setTitleWithMnemonic:](settitlewithmnemonic_.md): Deprecated. Sets the title the button displays when it’s in its normal state to the given string with an embedded mnemonic.
- [title](title.md): The title displayed on the button when it’s in its normal state.

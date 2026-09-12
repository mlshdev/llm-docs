> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbuttoncell/settitlewithmnemonic:](https://developer.apple.com/documentation/appkit/nsbuttoncell/settitlewithmnemonic:)

# setTitleWithMnemonic:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.8)

Sets the title the button displays when it’s in its normal state to the given string with an embedded mnemonic.

## Declaration

```objectivec
- (void) setTitleWithMnemonic:(NSString *) stringWithAmpersand;
```

## Parameters

- `stringWithAmpersand`: The string to set as the button’s title, taking into account the fact that an embedded “&” character is not a literal but instead marks the alternate state’s “keyboard mnemonic.” This title is always shown on buttons that don’t use their alternate contents when highlighting or displaying their alternate state.

<a id="Discussion"></a>

## Discussion

If necessary, [setTitleWithMnemonic:](settitlewithmnemonic_.md) redraws the button cell. Mnemonics are not supported in macOS.

## See Also

### Related Documentation

- [setMnemonicLocation:](../nscell/setmnemoniclocation_.md): Deprecated. Sets the character of the receiver’s title to be used as a mnemonic character.
- [setTitleWithMnemonic:](../nscell/settitlewithmnemonic_.md): Deprecated. Sets the title of the receiver with one character in the string denoted as an access key.

### Setting Titles

- [alternateMnemonic](alternatemnemonic.md): Deprecated. Returns the character in the alternate title that’s marked as the “keyboard mnemonic.”
- [alternateMnemonicLocation](alternatemnemoniclocation.md): Deprecated. Returns an unsigned integer indicating the character in the alternate title that’s marked as the “keyboard mnemonic.”
- [alternateTitle](alternatetitle.md): The string displayed by the button when it’s in its alternate state.
- [attributedAlternateTitle](attributedalternatetitle.md): The title displayed by the button when it’s in its alternate state, as an attributed string.
- [attributedTitle](attributedtitle.md): The title displayed by the button when it’s in its normal state as an attributed string.
- [setAlternateMnemonicLocation:](setalternatemnemoniclocation_.md): Deprecated. Sets the character in the alternate title that should be the “keyboard mnemonic.”
- [setAlternateTitleWithMnemonic:](setalternatetitlewithmnemonic_.md): Deprecated. Sets the title the button displays when it’s in its alternate state to the given string with an embedded mnemonic.
- [title](title.md): The title displayed on the button when it’s in its normal state.

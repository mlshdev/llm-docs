> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbuttoncell/setalternatetitlewithmnemonic:](https://developer.apple.com/documentation/appkit/nsbuttoncell/setalternatetitlewithmnemonic:)

# setAlternateTitleWithMnemonic:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.8)

Sets the title the button displays when it’s in its alternate state to the given string with an embedded mnemonic.

## Declaration

```objectivec
- (void) setAlternateTitleWithMnemonic:(NSString *) stringWithAmpersand;
```

## Parameters

- `stringWithAmpersand`: The string to set as the button’s alternate title, taking into account the fact that an embedded “&” character is not a literal but instead marks the alternate state’s “keyboard mnemonic.”

<a id="Discussion"></a>

## Discussion

Mnemonics are not supported in macOS.

If necessary, [setAlternateTitleWithMnemonic:](setalternatetitlewithmnemonic_.md) redraws the button cell. Note that some button types don’t display an alternate title.

## See Also

### Setting Titles

- [alternateMnemonic](alternatemnemonic.md): Deprecated. Returns the character in the alternate title that’s marked as the “keyboard mnemonic.”
- [alternateMnemonicLocation](alternatemnemoniclocation.md): Deprecated. Returns an unsigned integer indicating the character in the alternate title that’s marked as the “keyboard mnemonic.”
- [alternateTitle](alternatetitle.md): The string displayed by the button when it’s in its alternate state.
- [attributedAlternateTitle](attributedalternatetitle.md): The title displayed by the button when it’s in its alternate state, as an attributed string.
- [attributedTitle](attributedtitle.md): The title displayed by the button when it’s in its normal state as an attributed string.
- [setAlternateMnemonicLocation:](setalternatemnemoniclocation_.md): Deprecated. Sets the character in the alternate title that should be the “keyboard mnemonic.”
- [setTitleWithMnemonic:](settitlewithmnemonic_.md): Deprecated. Sets the title the button displays when it’s in its normal state to the given string with an embedded mnemonic.
- [title](title.md): The title displayed on the button when it’s in its normal state.

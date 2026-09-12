> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbuttoncell/alternatemnemoniclocation](https://developer.apple.com/documentation/appkit/nsbuttoncell/alternatemnemoniclocation)

# alternateMnemonicLocation

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.8)

Returns an unsigned integer indicating the character in the alternate title that’s marked as the “keyboard mnemonic.”

## Declaration

```objectivec
- (NSUInteger) alternateMnemonicLocation;
```

<a id="return-value"></a>

## Return Value

An unsigned integer indicating the character in the alternate title (the title displayed on the button when it’s in its alternate state) that’s marked as the “keyboard mnemonic.” If the alternate title doesn’t have a keyboard mnemonic, returns `NSNotFound`.

<a id="Discussion"></a>

## Discussion

Mnemonics are not supported in macOS.

## See Also

### Related Documentation

- [mnemonicLocation](../nscell/mnemoniclocation.md): Deprecated. Returns the position of the underlined mnemonic character in the receiver’s title.

### Setting Titles

- [alternateMnemonic](alternatemnemonic.md): Deprecated. Returns the character in the alternate title that’s marked as the “keyboard mnemonic.”
- [alternateTitle](alternatetitle.md): The string displayed by the button when it’s in its alternate state.
- [attributedAlternateTitle](attributedalternatetitle.md): The title displayed by the button when it’s in its alternate state, as an attributed string.
- [attributedTitle](attributedtitle.md): The title displayed by the button when it’s in its normal state as an attributed string.
- [setAlternateMnemonicLocation:](setalternatemnemoniclocation_.md): Deprecated. Sets the character in the alternate title that should be the “keyboard mnemonic.”
- [setAlternateTitleWithMnemonic:](setalternatetitlewithmnemonic_.md): Deprecated. Sets the title the button displays when it’s in its alternate state to the given string with an embedded mnemonic.
- [setTitleWithMnemonic:](settitlewithmnemonic_.md): Deprecated. Sets the title the button displays when it’s in its normal state to the given string with an embedded mnemonic.
- [title](title.md): The title displayed on the button when it’s in its normal state.

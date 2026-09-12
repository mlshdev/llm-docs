> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbuttoncell/setalternatemnemoniclocation:](https://developer.apple.com/documentation/appkit/nsbuttoncell/setalternatemnemoniclocation:)

# setAlternateMnemonicLocation:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.8)

Sets the character in the alternate title that should be the “keyboard mnemonic.”

## Declaration

```objectivec
- (void) setAlternateMnemonicLocation:(NSUInteger) location;
```

## Parameters

- `location`: An unsigned integer indicating the character in the alternate title that should be marked as the “keyboard mnemonic.” If you don’t want the alternate title to have a keyboard mnemonic, specify a location of `NSNotFound`.

<a id="Discussion"></a>

## Discussion

Mnemonics are not supported in macOS.

The [setAlternateMnemonicLocation:](setalternatemnemoniclocation_.md) method doesn’t cause the button cell to be redisplayed.

## See Also

### Setting Titles

- [alternateMnemonic](alternatemnemonic.md): Deprecated. Returns the character in the alternate title that’s marked as the “keyboard mnemonic.”
- [alternateMnemonicLocation](alternatemnemoniclocation.md): Deprecated. Returns an unsigned integer indicating the character in the alternate title that’s marked as the “keyboard mnemonic.”
- [alternateTitle](alternatetitle.md): The string displayed by the button when it’s in its alternate state.
- [attributedAlternateTitle](attributedalternatetitle.md): The title displayed by the button when it’s in its alternate state, as an attributed string.
- [attributedTitle](attributedtitle.md): The title displayed by the button when it’s in its normal state as an attributed string.
- [setAlternateTitleWithMnemonic:](setalternatetitlewithmnemonic_.md): Deprecated. Sets the title the button displays when it’s in its alternate state to the given string with an embedded mnemonic.
- [setTitleWithMnemonic:](settitlewithmnemonic_.md): Deprecated. Sets the title the button displays when it’s in its normal state to the given string with an embedded mnemonic.
- [title](title.md): The title displayed on the button when it’s in its normal state.

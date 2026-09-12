> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmenuitem/mnemoniclocation](https://developer.apple.com/documentation/appkit/nsmenuitem/mnemoniclocation)

# mnemonicLocation

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.6)

Returns the position of the underlined character in the menu item title used as a mnemonic.

> This method did nothing useful and there is no replacement.

## Declaration

```objectivec
- (NSUInteger) mnemonicLocation;
```

<a id="Discussion"></a>

## Discussion

The position is the zero-based index of that character in the title string. If the receiver has no mnemonic character, returns `NSNotFound`.

## See Also

### Managing mnemonics

- [setMnemonicLocation:](setmnemoniclocation_.md): Deprecated. Sets the character of the menu item title at location that is to be underlined.
- [setTitleWithMnemonic:](settitlewithmnemonic%28__%29.md): Deprecated. Sets the title of a menu item with a character denoting an access key.
- [mnemonic](mnemonic.md): Deprecated. Returns the character in the menu item title that appears underlined for use as a mnemonic.

> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmenuitem/mnemonic](https://developer.apple.com/documentation/appkit/nsmenuitem/mnemonic)

# mnemonic

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.6)

Returns the character in the menu item title that appears underlined for use as a mnemonic.

> This method did nothing useful and there is no replacement.

## Declaration

```objectivec
- (NSString *) mnemonic;
```

<a id="Discussion"></a>

## Discussion

If there is no mnemonic character, returns an empty string.

## See Also

### Managing mnemonics

- [setMnemonicLocation:](setmnemoniclocation_.md): Deprecated. Sets the character of the menu item title at location that is to be underlined.
- [mnemonicLocation](mnemoniclocation.md): Deprecated. Returns the position of the underlined character in the menu item title used as a mnemonic.
- [setTitleWithMnemonic:](settitlewithmnemonic%28__%29.md): Deprecated. Sets the title of a menu item with a character denoting an access key.

> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmenuitem/setmnemoniclocation:](https://developer.apple.com/documentation/appkit/nsmenuitem/setmnemoniclocation:)

# setMnemonicLocation:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.6)

Sets the character of the menu item title at location that is to be underlined.

> This method did nothing useful and there is no replacement.

## Declaration

```objectivec
- (void) setMnemonicLocation:(NSUInteger) location;
```

## Parameters

- `location`: An integer index into the character array of the title. `location` must be from 0 to 254.

<a id="Discussion"></a>

## Discussion

This character identifies the access key by which users can access the menu item.

## See Also

### Managing mnemonics

- [mnemonicLocation](mnemoniclocation.md): Deprecated. Returns the position of the underlined character in the menu item title used as a mnemonic.
- [setTitleWithMnemonic:](settitlewithmnemonic%28__%29.md): Deprecated. Sets the title of a menu item with a character denoting an access key.
- [mnemonic](mnemonic.md): Deprecated. Returns the character in the menu item title that appears underlined for use as a mnemonic.

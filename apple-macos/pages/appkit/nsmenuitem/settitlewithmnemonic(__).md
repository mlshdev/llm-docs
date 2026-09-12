> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmenuitem/settitlewithmnemonic(_:)](https://developer.apple.com/documentation/appkit/nsmenuitem/settitlewithmnemonic(_:))

# setTitleWithMnemonic(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.13)

Sets the title of a menu item with a character denoting an access key.

## Declaration

```swift
func setTitleWithMnemonic(_ stringWithAmpersand: String)
```

<a id="Discussion"></a>

## Discussion

Use an ampersand character to mark the character (the one following the ampersand) to be designated.

# setTitleWithMnemonic: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.13)

Sets the title of a menu item with a character denoting an access key.

## Declaration

```objectivec
- (void) setTitleWithMnemonic:(NSString *) stringWithAmpersand;
```

<a id="Discussion"></a>

## Discussion

Use an ampersand character to mark the character (the one following the ampersand) to be designated.

## See Also

### Related Documentation

- [mnemonic](mnemonic.md): Deprecated. Returns the character in the menu item title that appears underlined for use as a mnemonic.
- [setMnemonicLocation:](setmnemoniclocation_.md): Deprecated. Sets the character of the menu item title at location that is to be underlined.

### Managing mnemonics

- [setMnemonicLocation:](setmnemoniclocation_.md): Deprecated. Sets the character of the menu item title at location that is to be underlined.
- [mnemonicLocation](mnemoniclocation.md): Deprecated. Returns the position of the underlined character in the menu item title used as a mnemonic.
- [mnemonic](mnemonic.md): Deprecated. Returns the character in the menu item title that appears underlined for use as a mnemonic.

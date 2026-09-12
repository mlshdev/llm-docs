> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextfield/settitlewithmnemonic:](https://developer.apple.com/documentation/appkit/nstextfield/settitlewithmnemonic:)

# setTitleWithMnemonic:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.8)

Sets the text field’s string value using the embedded character as the keyboard mnemonic.

> Use [title](../nscell/title.md) instead.

## Declaration

```objectivec
- (void) setTitleWithMnemonic:(NSString *) stringWithAmpersand;
```

## Parameters

- `stringWithAmpersand`: The string to set as the title. The system uses the first character that has an ampersand (&) preceding it as the mnemonic, and strips out the ampersand.

## See Also

### Using keyboard interface control

- [allowsCharacterPickerTouchBarItem](allowscharacterpickertouchbaritem.md): A Boolean value that controls whether the Touch Bar displays the character picker item for rich text fields.

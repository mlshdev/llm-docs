> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscell/mnemonic](https://developer.apple.com/documentation/appkit/nscell/mnemonic)

# mnemonic

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.8)

Returns the character in the receiver’s title that appears underlined for use as a mnemonic.

> Mnemonics are not used.

## Declaration

```objectivec
- (NSString *) mnemonic;
```

<a id="return-value"></a>

## Return Value

A string containing the mnemonic character, or an empty string if no mnemonic character is set.

<a id="Discussion"></a>

## Discussion

Mnemonics are not supported in macOS

## See Also

### Deprecated Methods

- [setEntryType:](setentrytype_.md): Deprecated. Sets how numeric data is formatted in the receiver and places restrictions on acceptable input.
- [entryType](entrytype.md): Deprecated. Returns the type of data the user can type into the receiver.
- [isEntryAcceptable:](isentryacceptable_.md): Deprecated. Returns whether a string representing a numeric or date value is formatted in a suitable way for the cell’s entry type.
- [setFloatingPointFormat:left:right:](setfloatingpointformat_left_right_.md): Deprecated. Sets the auto-ranging and floating point number format of the receiver’s cell.
- [setTitleWithMnemonic:](settitlewithmnemonic_.md): Deprecated. Sets the title of the receiver with one character in the string denoted as an access key.
- [setMnemonicLocation:](setmnemoniclocation_.md): Deprecated. Sets the character of the receiver’s title to be used as a mnemonic character.
- [mnemonicLocation](mnemoniclocation.md): Deprecated. Returns the position of the underlined mnemonic character in the receiver’s title.

> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsformcell/settitlewithmnemonic:](https://developer.apple.com/documentation/appkit/nsformcell/settitlewithmnemonic:)

# setTitleWithMnemonic:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.8)

Sets the cell title and mnemonic character.

## Declaration

```objectivec
- (void) setTitleWithMnemonic:(NSString *) stringWithAmpersand;
```

## Parameters

- `stringWithAmpersand`: The title of the cell, including a mnemonic identifier. To specify the mnemonic character, place an ampersand (`&`) in the front of the desired character.

<a id="Discussion"></a>

## Discussion

Mnemonics are not supported in macOS.

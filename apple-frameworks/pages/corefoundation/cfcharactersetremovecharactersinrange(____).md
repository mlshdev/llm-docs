> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfcharactersetremovecharactersinrange(_:_:)](https://developer.apple.com/documentation/corefoundation/cfcharactersetremovecharactersinrange(_:_:))

# CFCharacterSetRemoveCharactersInRange(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Removes a given range of Unicode characters from a character set.

## Declaration

```swift
func CFCharacterSetRemoveCharactersInRange(_ theSet: CFMutableCharacterSet!, _ theRange: CFRange)
```

## Parameters

- `theSet`: The character set to modify.
- `theRange`: The range to remove from the character set. The range is specified in 32-bits in UTF-32 format, and must lie within the valid Unicode character range (from `0x00000` to `0x10FFFF`).

## See Also

### Removing Characters

- [CFCharacterSetRemoveCharactersInString(\_:\_:)](cfcharactersetremovecharactersinstring%28____%29.md): Removes the characters in a given string from a character set.

# CFCharacterSetRemoveCharactersInRange (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Removes a given range of Unicode characters from a character set.

## Declaration

```objectivec
extern void CFCharacterSetRemoveCharactersInRange(CFMutableCharacterSetRef theSet, CFRange theRange);
```

## Parameters

- `theSet`: The character set to modify.
- `theRange`: The range to remove from the character set. The range is specified in 32-bits in UTF-32 format, and must lie within the valid Unicode character range (from `0x00000` to `0x10FFFF`).

## See Also

### Removing Characters

- [CFCharacterSetRemoveCharactersInString](cfcharactersetremovecharactersinstring%28____%29.md): Removes the characters in a given string from a character set.

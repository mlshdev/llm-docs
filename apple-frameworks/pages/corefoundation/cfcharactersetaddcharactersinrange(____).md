> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfcharactersetaddcharactersinrange(_:_:)](https://developer.apple.com/documentation/corefoundation/cfcharactersetaddcharactersinrange(_:_:))

# CFCharacterSetAddCharactersInRange(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Adds a given range to a character set.

## Declaration

```swift
func CFCharacterSetAddCharactersInRange(_ theSet: CFMutableCharacterSet!, _ theRange: CFRange)
```

## Parameters

- `theSet`: The character set to modify.
- `theRange`: The range to add to the character set. The range is specified in 32-bits in UTF-32 format, and must lie within the valid Unicode character range (from `0x00000` to `0x10FFFF`).

## See Also

### Adding Characters

- [CFCharacterSetAddCharactersInString(\_:\_:)](cfcharactersetaddcharactersinstring%28____%29.md): Adds the characters in a given string to a character set.

# CFCharacterSetAddCharactersInRange (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Adds a given range to a character set.

## Declaration

```objectivec
extern void CFCharacterSetAddCharactersInRange(CFMutableCharacterSetRef theSet, CFRange theRange);
```

## Parameters

- `theSet`: The character set to modify.
- `theRange`: The range to add to the character set. The range is specified in 32-bits in UTF-32 format, and must lie within the valid Unicode character range (from `0x00000` to `0x10FFFF`).

## See Also

### Adding Characters

- [CFCharacterSetAddCharactersInString](cfcharactersetaddcharactersinstring%28____%29.md): Adds the characters in a given string to a character set.

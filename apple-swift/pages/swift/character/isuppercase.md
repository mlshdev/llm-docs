> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/character/isuppercase](https://developer.apple.com/documentation/swift/character/isuppercase)

# isUppercase

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value indicating whether this character is considered uppercase.

## Declaration

```swift
var isUppercase: Bool { get }
```

<a id="discussion"></a>

## Discussion

Uppercase characters vary under case-conversion to lowercase, but not when converted to uppercase. The following characters are all uppercase:

- “É” (U+0045 LATIN CAPITAL LETTER E, U+0301 COMBINING ACUTE ACCENT)
- “И” (U+0418 CYRILLIC CAPITAL LETTER I)
- “Π” (U+03A0 GREEK CAPITAL LETTER PI)

## See Also

### Checking a Character’s Case

- [isCased](iscased.md): A Boolean value indicating whether this character changes under any form of case conversion.
- [uppercased()](uppercased%28%29.md): Returns an uppercased version of this character.
- [isLowercase](islowercase.md): A Boolean value indicating whether this character is considered lowercase.
- [lowercased()](lowercased%28%29.md): Returns a lowercased version of this character.

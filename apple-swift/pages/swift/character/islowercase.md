> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/character/islowercase](https://developer.apple.com/documentation/swift/character/islowercase)

# isLowercase

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value indicating whether this character is considered lowercase.

## Declaration

```swift
var isLowercase: Bool { get }
```

<a id="discussion"></a>

## Discussion

Lowercase characters change when converted to uppercase, but not when converted to lowercase. The following characters are all lowercase:

- “é” (U+0065 LATIN SMALL LETTER E, U+0301 COMBINING ACUTE ACCENT)
- “и” (U+0438 CYRILLIC SMALL LETTER I)
- “π” (U+03C0 GREEK SMALL LETTER PI)

## See Also

### Checking a Character’s Case

- [isCased](iscased.md): A Boolean value indicating whether this character changes under any form of case conversion.
- [isUppercase](isuppercase.md): A Boolean value indicating whether this character is considered uppercase.
- [uppercased()](uppercased%28%29.md): Returns an uppercased version of this character.
- [lowercased()](lowercased%28%29.md): Returns a lowercased version of this character.

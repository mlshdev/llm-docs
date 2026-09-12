> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/character/uppercased()](https://developer.apple.com/documentation/swift/character/uppercased())

# uppercased()

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an uppercased version of this character.

## Declaration

```swift
func uppercased() -> String
```

<a id="discussion"></a>

## Discussion

Because case conversion can result in multiple characters, the result of `uppercased()` is a string.

```swift
let chars: [Character] = ["e", "é", "и", "π", "ß", "1"]
for ch in chars {
    print(ch, "-->", ch.uppercased())
}
// Prints:
// e --> E
// é --> É
// и --> И
// π --> Π
// ß --> SS
// 1 --> 1
```

## See Also

### Checking a Character’s Case

- [isCased](iscased.md): A Boolean value indicating whether this character changes under any form of case conversion.
- [isUppercase](isuppercase.md): A Boolean value indicating whether this character is considered uppercase.
- [isLowercase](islowercase.md): A Boolean value indicating whether this character is considered lowercase.
- [lowercased()](lowercased%28%29.md): Returns a lowercased version of this character.

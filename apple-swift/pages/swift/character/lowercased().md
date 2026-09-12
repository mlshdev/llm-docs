> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/character/lowercased()](https://developer.apple.com/documentation/swift/character/lowercased())

# lowercased()

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a lowercased version of this character.

## Declaration

```swift
func lowercased() -> String
```

<a id="discussion"></a>

## Discussion

Because case conversion can result in multiple characters, the result of `lowercased()` is a string.

```swift
let chars: [Character] = ["E", "É", "И", "Π", "1"]
for ch in chars {
    print(ch, "-->", ch.lowercased())
}
// Prints:
// E --> e
// É --> é
// И --> и
// Π --> π
// 1 --> 1
```

## See Also

### Checking a Character’s Case

- [isCased](iscased.md): A Boolean value indicating whether this character changes under any form of case conversion.
- [isUppercase](isuppercase.md): A Boolean value indicating whether this character is considered uppercase.
- [uppercased()](uppercased%28%29.md): Returns an uppercased version of this character.
- [isLowercase](islowercase.md): A Boolean value indicating whether this character is considered lowercase.

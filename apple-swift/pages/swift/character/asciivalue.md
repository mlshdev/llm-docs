> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/character/asciivalue](https://developer.apple.com/documentation/swift/character/asciivalue)

# asciiValue

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The ASCII encoding value of this character, if it is an ASCII character.

## Declaration

```swift
var asciiValue: UInt8? { get }
```

<a id="discussion"></a>

## Discussion

```swift
let chars: [Character] = ["a", " ", "™"]
for ch in chars {
    print(ch, "-->", ch.asciiValue)
}
// Prints:
// a --> Optional(97)
//   --> Optional(32)
// ™ --> nil
```

A character with the value “\\r\\n” (CR-LF) is normalized to “\\n” (LF) and has an `asciiValue` property equal to 10.

```swift
let cr = "\r" as Character
// cr.asciiValue == 13
let lf = "\n" as Character
// lf.asciiValue == 10
let crlf = "\r\n" as Character
// crlf.asciiValue == 10
```

## See Also

### Working with a Character’s Unicode Values

- [init(\_:)](init%28__%29-8hq6x.md): Creates a character containing the given Unicode scalar value.
- [unicodeScalars](unicodescalars.md)
- [Character.UnicodeScalarView](unicodescalarview.md)
- [isASCII](isascii.md): A Boolean value indicating whether this is an ASCII character.

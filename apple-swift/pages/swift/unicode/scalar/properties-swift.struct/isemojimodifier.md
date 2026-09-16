> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swift/unicode/scalar/properties-swift.struct/isemojimodifier

# isEmojiModifier

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 10.2+ · iPadOS 10.2+ · Mac Catalyst 10.2+ · macOS 10.12.2+ · tvOS 10.1+ · visionOS 1.0+ · watchOS 3.1.1+

A Boolean value indicating whether the scalar is one that can modify a base emoji that precedes it.

## Declaration

```swift
var isEmojiModifier: Bool { get }
```

<a id="discussion"></a>

## Discussion

The Fitzpatrick skin types are examples of emoji modifiers; they change the appearance of the preceding emoji base (that is, a scalar for which `isEmojiModifierBase` is true) by rendering it with a different skin tone.

This property corresponds to the “Emoji_Modifier” property in the [Unicode Standard](http://www.unicode.org/versions/latest/).

> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unicode/scalar/properties-swift.struct/isemojipresentation](https://developer.apple.com/documentation/swift/unicode/scalar/properties-swift.struct/isemojipresentation)

# isEmojiPresentation

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 10.2+ · iPadOS 10.2+ · Mac Catalyst 10.2+ · macOS 10.12.2+ · tvOS 10.1+ · visionOS 1.0+ · watchOS 3.1.1+

A Boolean value indicating whether the scalar is one that should be rendered with an emoji presentation, rather than a text presentation, by default.

## Declaration

```swift
var isEmojiPresentation: Bool { get }
```

<a id="discussion"></a>

## Discussion

Scalars that have default to emoji presentation can be followed by U+FE0E VARIATION SELECTOR-15 to request the text presentation of the scalar instead. Likewise, scalars that default to text presentation can be followed by U+FE0F VARIATION SELECTOR-16 to request the emoji presentation.

This property corresponds to the “Emoji_Presentation” property in the [Unicode Standard](http://www.unicode.org/versions/latest/).

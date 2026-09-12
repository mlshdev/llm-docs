> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unicode/scalar/properties-swift.struct/isjoincontrol](https://developer.apple.com/documentation/swift/unicode/scalar/properties-swift.struct/isjoincontrol)

# isJoinControl

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value indicating whether the scalar is a format control character that has a specific function in controlling cursive joining and ligation.

## Declaration

```swift
var isJoinControl: Bool { get }
```

<a id="discussion"></a>

## Discussion

There are two scalars for which this property is `true`:

- When U+200C ZERO WIDTH NON-JOINER is inserted between two characters, it directs the rendering engine to render them separately/disconnected when it might otherwise render them as a ligature. For example, a rendering engine might display “fl” in English as a connected glyph; inserting the zero width non-joiner would force them to be rendered as disconnected glyphs.
- When U+200D ZERO WIDTH JOINER is inserted between two characters, it directs the rendering engine to render them as a connected glyph when it would otherwise render them independently. The zero width joiner is also used to construct complex emoji from sequences of base emoji characters. For example, the various “family” emoji are encoded as sequences of man, woman, or child emoji that are interleaved with zero width joiners.

This property corresponds to the “Join_Control” property in the [Unicode Standard](http://www.unicode.org/versions/latest/).

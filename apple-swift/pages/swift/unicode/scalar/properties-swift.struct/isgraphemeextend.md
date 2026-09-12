> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unicode/scalar/properties-swift.struct/isgraphemeextend](https://developer.apple.com/documentation/swift/unicode/scalar/properties-swift.struct/isgraphemeextend)

# isGraphemeExtend

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value indicating whether the scalar is a grapheme extender.

## Declaration

```swift
var isGraphemeExtend: Bool { get }
```

<a id="discussion"></a>

## Discussion

A grapheme extender can be thought of primarily as a non-spacing glyph that is applied above or below another glyph. For example, when the character `é` is represented in its decomposed form, the grapheme base is “e” (U+0065 LATIN SMALL LETTER E) and it is followed by a single grapheme extender, U+0301 COMBINING ACUTE ACCENT.

The set of scalars for which `isGraphemeExtend` is `true` is disjoint by definition from the set for which `isGraphemeBase` is `true`.

This property corresponds to the “Grapheme_Extend” and the “Other_Grapheme_Extend” properties in the [Unicode Standard](http://www.unicode.org/versions/latest/).

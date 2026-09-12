> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctfontsymbolictraits/condensedtrait](https://developer.apple.com/documentation/coretext/ctfontsymbolictraits/condensedtrait)

# condensedTrait (Swift)

**Framework:** Core Text  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The font typestyle is condensed.

> Use [traitCondensed](traitcondensed.md).

## Declaration

```swift
static var condensedTrait: CTFontSymbolicTraits { get }
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  [expandedTrait](expandedtrait.md) and [condensedTrait](condensedtrait.md) are mutually exclusive.

Additional detail is available via [kCTFontWidthTrait](../kctfontwidthtrait.md).

## See Also

### Related Documentation

- [kCTFontWidthTrait](../kctfontwidthtrait.md): The normalized proportion (width condense or expand) trait from the font traits dictionary.

### Deprecated Constants

- [italicTrait](italictrait.md): Deprecated. The font typestyle is italic.
- [boldTrait](boldtrait.md): Deprecated. The font typestyle is boldface.
- [expandedTrait](expandedtrait.md): Deprecated. The font typestyle is expanded.
- [monoSpaceTrait](monospacetrait.md): Deprecated. The font uses fixed-pitch glyphs if available.
- [verticalTrait](verticaltrait.md): Deprecated. The font uses vertical glyph variants and metrics.
- [uiOptimizedTrait](uioptimizedtrait.md): Deprecated. The font synthesizes appropriate attributes for user interface rendering, such as control titles, if necessary.
- [colorGlyphsTrait](colorglyphstrait.md): Deprecated. The font contains color glyphs.
- [compositeTrait](compositetrait.md): Deprecated. The font is in Composite Font Reference format.
- [classMaskTrait](classmasktrait.md): Deprecated. Mask for the font class.

# kCTFontCondensedTrait (Objective-C)

**Framework:** Core Text  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The font typestyle is condensed.

> Use [kCTFontTraitCondensed](traitcondensed.md).

## Declaration

```objectivec
kCTFontCondensedTrait
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  [kCTFontExpandedTrait](expandedtrait.md) and [kCTFontCondensedTrait](condensedtrait.md) are mutually exclusive.

Additional detail is available via [kCTFontWidthTrait](../kctfontwidthtrait.md).

## See Also

### Related Documentation

- [kCTFontWidthTrait](../kctfontwidthtrait.md): The normalized proportion (width condense or expand) trait from the font traits dictionary.

### Deprecated Constants

- [kCTFontItalicTrait](italictrait.md): Deprecated. The font typestyle is italic.
- [kCTFontBoldTrait](boldtrait.md): Deprecated. The font typestyle is boldface.
- [kCTFontExpandedTrait](expandedtrait.md): Deprecated. The font typestyle is expanded.
- [kCTFontMonoSpaceTrait](monospacetrait.md): Deprecated. The font uses fixed-pitch glyphs if available.
- [kCTFontVerticalTrait](verticaltrait.md): Deprecated. The font uses vertical glyph variants and metrics.
- [kCTFontUIOptimizedTrait](uioptimizedtrait.md): Deprecated. The font synthesizes appropriate attributes for user interface rendering, such as control titles, if necessary.
- [kCTFontColorGlyphsTrait](colorglyphstrait.md): Deprecated. The font contains color glyphs.
- [kCTFontCompositeTrait](compositetrait.md): Deprecated. The font is in Composite Font Reference format.
- [kCTFontClassMaskTrait](classmasktrait.md): Deprecated. Mask for the font class.

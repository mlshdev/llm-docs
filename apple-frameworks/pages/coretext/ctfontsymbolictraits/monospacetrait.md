> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctfontsymbolictraits/monospacetrait](https://developer.apple.com/documentation/coretext/ctfontsymbolictraits/monospacetrait)

# monoSpaceTrait (Swift)

**Framework:** Core Text  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The font uses fixed-pitch glyphs if available.

> Use [traitMonoSpace](traitmonospace.md).

## Declaration

```swift
static var monoSpaceTrait: CTFontSymbolicTraits { get }
```

<a id="Discussion"></a>

## Discussion

The font may have multiple glyph advances (many CJK glyphs contain two spaces).

## See Also

### Deprecated Constants

- [italicTrait](italictrait.md): Deprecated. The font typestyle is italic.
- [boldTrait](boldtrait.md): Deprecated. The font typestyle is boldface.
- [expandedTrait](expandedtrait.md): Deprecated. The font typestyle is expanded.
- [condensedTrait](condensedtrait.md): Deprecated. The font typestyle is condensed.
- [verticalTrait](verticaltrait.md): Deprecated. The font uses vertical glyph variants and metrics.
- [uiOptimizedTrait](uioptimizedtrait.md): Deprecated. The font synthesizes appropriate attributes for user interface rendering, such as control titles, if necessary.
- [colorGlyphsTrait](colorglyphstrait.md): Deprecated. The font contains color glyphs.
- [compositeTrait](compositetrait.md): Deprecated. The font is in Composite Font Reference format.
- [classMaskTrait](classmasktrait.md): Deprecated. Mask for the font class.

# kCTFontMonoSpaceTrait (Objective-C)

**Framework:** Core Text  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The font uses fixed-pitch glyphs if available.

> Use [kCTFontTraitMonoSpace](traitmonospace.md).

## Declaration

```objectivec
kCTFontMonoSpaceTrait
```

<a id="Discussion"></a>

## Discussion

The font may have multiple glyph advances (many CJK glyphs contain two spaces).

## See Also

### Deprecated Constants

- [kCTFontItalicTrait](italictrait.md): Deprecated. The font typestyle is italic.
- [kCTFontBoldTrait](boldtrait.md): Deprecated. The font typestyle is boldface.
- [kCTFontExpandedTrait](expandedtrait.md): Deprecated. The font typestyle is expanded.
- [kCTFontCondensedTrait](condensedtrait.md): Deprecated. The font typestyle is condensed.
- [kCTFontVerticalTrait](verticaltrait.md): Deprecated. The font uses vertical glyph variants and metrics.
- [kCTFontUIOptimizedTrait](uioptimizedtrait.md): Deprecated. The font synthesizes appropriate attributes for user interface rendering, such as control titles, if necessary.
- [kCTFontColorGlyphsTrait](colorglyphstrait.md): Deprecated. The font contains color glyphs.
- [kCTFontCompositeTrait](compositetrait.md): Deprecated. The font is in Composite Font Reference format.
- [kCTFontClassMaskTrait](classmasktrait.md): Deprecated. Mask for the font class.

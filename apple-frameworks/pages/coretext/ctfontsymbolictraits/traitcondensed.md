> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctfontsymbolictraits/traitcondensed](https://developer.apple.com/documentation/coretext/ctfontsymbolictraits/traitcondensed)

# traitCondensed (Swift)

**Framework:** Core Text  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The font typestyle is condensed.

## Declaration

```swift
static var traitCondensed: CTFontSymbolicTraits { get }
```

<a id="Discussion"></a>

## Discussion

Additional detail is available via [kCTFontWidthTrait](../kctfontwidthtrait.md).

> **Important**

>  [expandedTrait](expandedtrait.md) and [condensedTrait](condensedtrait.md) are mutually exclusive.

## See Also

### Related Documentation

- [kCTFontWidthTrait](../kctfontwidthtrait.md): The normalized proportion (width condense or expand) trait from the font traits dictionary.

### Symbolic Traits

- [traitItalic](traititalic.md): The font typestyle is italic.
- [traitBold](traitbold.md): The font typestyle is boldface.
- [traitExpanded](traitexpanded.md): The font typestyle is expanded.
- [traitMonoSpace](traitmonospace.md): The font uses fixed-pitch glyphs if available.
- [traitVertical](traitvertical.md): The font uses vertical glyph variants and metrics.
- [traitUIOptimized](traituioptimized.md): The font synthesizes appropriate attributes for user interface rendering, such as control titles, if necessary.
- [traitColorGlyphs](traitcolorglyphs.md): The font contains color glyphs.
- [traitComposite](traitcomposite.md): The font is in Composite Font Reference format.
- [traitClassMask](traitclassmask.md): Mask for the font class.

# kCTFontTraitCondensed (Objective-C)

**Framework:** Core Text  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The font typestyle is condensed.

## Declaration

```objectivec
kCTFontTraitCondensed
```

<a id="Discussion"></a>

## Discussion

Additional detail is available via [kCTFontWidthTrait](../kctfontwidthtrait.md).

> **Important**

>  [kCTFontExpandedTrait](expandedtrait.md) and [kCTFontCondensedTrait](condensedtrait.md) are mutually exclusive.

## See Also

### Related Documentation

- [kCTFontWidthTrait](../kctfontwidthtrait.md): The normalized proportion (width condense or expand) trait from the font traits dictionary.

### Symbolic Traits

- [kCTFontTraitItalic](traititalic.md): The font typestyle is italic.
- [kCTFontTraitBold](traitbold.md): The font typestyle is boldface.
- [kCTFontTraitExpanded](traitexpanded.md): The font typestyle is expanded.
- [kCTFontTraitMonoSpace](traitmonospace.md): The font uses fixed-pitch glyphs if available.
- [kCTFontTraitVertical](traitvertical.md): The font uses vertical glyph variants and metrics.
- [kCTFontTraitUIOptimized](traituioptimized.md): The font synthesizes appropriate attributes for user interface rendering, such as control titles, if necessary.
- [kCTFontTraitColorGlyphs](traitcolorglyphs.md): The font contains color glyphs.
- [kCTFontTraitComposite](traitcomposite.md): The font is in Composite Font Reference format.
- [kCTFontTraitClassMask](traitclassmask.md): Mask for the font class.

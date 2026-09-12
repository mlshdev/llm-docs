> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctlineboundsoptions/includelanguageextents](https://developer.apple.com/documentation/coretext/ctlineboundsoptions/includelanguageextents)

# includeLanguageExtents (Swift)

**Framework:** Core Text  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An option to include additional space based on common glyph sequences for various languages.

## Declaration

```swift
static var includeLanguageExtents: CTLineBoundsOptions { get }
```

<a id="Discussion"></a>

## Discussion

Use the result of this option when drawing to avoid clipping that the typographic bounds may cause. This option doesn’t have an effect when you use it with [useGlyphPathBounds](useglyphpathbounds.md).

## See Also

### Line Bounds Options

- [excludeTypographicLeading](excludetypographicleading.md): An option to exclude typographic leading.
- [excludeTypographicShifts](excludetypographicshifts.md): An option to ignore cross-stream shifts due to positioning, such as kerning or baseline alignment.
- [useGlyphPathBounds](useglyphpathbounds.md): An option to use glyph path bounds rather than the default typographic bounds.
- [useHangingPunctuation](usehangingpunctuation.md): An option to enable hanging punctuation.
- [useOpticalBounds](useopticalbounds.md): An option to use optical bounds.

# kCTLineBoundsIncludeLanguageExtents (Objective-C)

**Framework:** Core Text  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An option to include additional space based on common glyph sequences for various languages.

## Declaration

```objectivec
kCTLineBoundsIncludeLanguageExtents
```

<a id="Discussion"></a>

## Discussion

Use the result of this option when drawing to avoid clipping that the typographic bounds may cause. This option doesn’t have an effect when you use it with [kCTLineBoundsUseGlyphPathBounds](useglyphpathbounds.md).

## See Also

### Line Bounds Options

- [kCTLineBoundsExcludeTypographicLeading](excludetypographicleading.md): An option to exclude typographic leading.
- [kCTLineBoundsExcludeTypographicShifts](excludetypographicshifts.md): An option to ignore cross-stream shifts due to positioning, such as kerning or baseline alignment.
- [kCTLineBoundsUseGlyphPathBounds](useglyphpathbounds.md): An option to use glyph path bounds rather than the default typographic bounds.
- [kCTLineBoundsUseHangingPunctuation](usehangingpunctuation.md): An option to enable hanging punctuation.
- [kCTLineBoundsUseOpticalBounds](useopticalbounds.md): An option to use optical bounds.

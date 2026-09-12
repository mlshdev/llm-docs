> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctlineboundsoptions/useopticalbounds](https://developer.apple.com/documentation/coretext/ctlineboundsoptions/useopticalbounds)

# useOpticalBounds (Swift)

**Framework:** Core Text  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An option to use optical bounds.

## Declaration

```swift
static var useOpticalBounds: CTLineBoundsOptions { get }
```

<a id="Discussion"></a>

## Discussion

This option overrides [useGlyphPathBounds](useglyphpathbounds.md).

## See Also

### Line Bounds Options

- [excludeTypographicLeading](excludetypographicleading.md): An option to exclude typographic leading.
- [excludeTypographicShifts](excludetypographicshifts.md): An option to ignore cross-stream shifts due to positioning, such as kerning or baseline alignment.
- [includeLanguageExtents](includelanguageextents.md): An option to include additional space based on common glyph sequences for various languages.
- [useGlyphPathBounds](useglyphpathbounds.md): An option to use glyph path bounds rather than the default typographic bounds.
- [useHangingPunctuation](usehangingpunctuation.md): An option to enable hanging punctuation.

# kCTLineBoundsUseOpticalBounds (Objective-C)

**Framework:** Core Text  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An option to use optical bounds.

## Declaration

```objectivec
kCTLineBoundsUseOpticalBounds
```

<a id="Discussion"></a>

## Discussion

This option overrides [kCTLineBoundsUseGlyphPathBounds](useglyphpathbounds.md).

## See Also

### Line Bounds Options

- [kCTLineBoundsExcludeTypographicLeading](excludetypographicleading.md): An option to exclude typographic leading.
- [kCTLineBoundsExcludeTypographicShifts](excludetypographicshifts.md): An option to ignore cross-stream shifts due to positioning, such as kerning or baseline alignment.
- [kCTLineBoundsIncludeLanguageExtents](includelanguageextents.md): An option to include additional space based on common glyph sequences for various languages.
- [kCTLineBoundsUseGlyphPathBounds](useglyphpathbounds.md): An option to use glyph path bounds rather than the default typographic bounds.
- [kCTLineBoundsUseHangingPunctuation](usehangingpunctuation.md): An option to enable hanging punctuation.

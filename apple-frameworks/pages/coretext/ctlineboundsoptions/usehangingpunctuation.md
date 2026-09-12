> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctlineboundsoptions/usehangingpunctuation](https://developer.apple.com/documentation/coretext/ctlineboundsoptions/usehangingpunctuation)

# useHangingPunctuation (Swift)

**Framework:** Core Text  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An option to enable hanging punctuation.

## Declaration

```swift
static var useHangingPunctuation: CTLineBoundsOptions { get }
```

<a id="Discussion"></a>

## Discussion

The result of this option moves standard punctuation, such as periods, commas, hyphens, dashes, quotation marks, and asterisks, into the margin of either end of text, to give the appearance of a more uniform vertical alignment. Consider using this option when the text is fully justified.

## See Also

### Line Bounds Options

- [excludeTypographicLeading](excludetypographicleading.md): An option to exclude typographic leading.
- [excludeTypographicShifts](excludetypographicshifts.md): An option to ignore cross-stream shifts due to positioning, such as kerning or baseline alignment.
- [includeLanguageExtents](includelanguageextents.md): An option to include additional space based on common glyph sequences for various languages.
- [useGlyphPathBounds](useglyphpathbounds.md): An option to use glyph path bounds rather than the default typographic bounds.
- [useOpticalBounds](useopticalbounds.md): An option to use optical bounds.

# kCTLineBoundsUseHangingPunctuation (Objective-C)

**Framework:** Core Text  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An option to enable hanging punctuation.

## Declaration

```objectivec
kCTLineBoundsUseHangingPunctuation
```

<a id="Discussion"></a>

## Discussion

The result of this option moves standard punctuation, such as periods, commas, hyphens, dashes, quotation marks, and asterisks, into the margin of either end of text, to give the appearance of a more uniform vertical alignment. Consider using this option when the text is fully justified.

## See Also

### Line Bounds Options

- [kCTLineBoundsExcludeTypographicLeading](excludetypographicleading.md): An option to exclude typographic leading.
- [kCTLineBoundsExcludeTypographicShifts](excludetypographicshifts.md): An option to ignore cross-stream shifts due to positioning, such as kerning or baseline alignment.
- [kCTLineBoundsIncludeLanguageExtents](includelanguageextents.md): An option to include additional space based on common glyph sequences for various languages.
- [kCTLineBoundsUseGlyphPathBounds](useglyphpathbounds.md): An option to use glyph path bounds rather than the default typographic bounds.
- [kCTLineBoundsUseOpticalBounds](useopticalbounds.md): An option to use optical bounds.

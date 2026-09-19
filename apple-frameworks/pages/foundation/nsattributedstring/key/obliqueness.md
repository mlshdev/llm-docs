> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nsattributedstring/key/obliqueness

# obliqueness

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 7.0+ (deprecated in 27.2) · iPadOS 7.0+ (deprecated in 27.2) · Mac Catalyst 13.1+ (deprecated in 27.2) · macOS 10.0+ (deprecated in 27.2) · tvOS 9.0+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 27.2)

The obliqueness of the text.

> This attribute is not supported with TextKit 2

## Declaration

```swift
static let obliqueness: NSAttributedString.Key
```

<a id="Discussion"></a>

## Discussion

The value of this attribute is an [NSNumber](../../nsnumber.md) object containing a floating point value indicating skew to be applied to glyphs. The default value is `0`, indicating no skew.

## See Also

### Deprecated Keys

- [expansion](expansion.md): Deprecated. The expansion factor of the text.
- [verticalGlyphForm](verticalglyphform.md): Deprecated. The vertical glyph form of the text.
- [characterShapeAttributeName](charactershapeattributename.md): Deprecated. The character shape attribute.
- [usesScreenFontsDocumentAttribute](usesscreenfontsdocumentattribute.md): Deprecated. The screen fonts attribute.

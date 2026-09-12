> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstring/key/expansion](https://developer.apple.com/documentation/foundation/nsattributedstring/key/expansion)

# expansion

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.0+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 27.0)

The expansion factor of the text.

> This attribute is not supported with TextKit 2

## Declaration

```swift
static let expansion: NSAttributedString.Key
```

<a id="Discussion"></a>

## Discussion

The value of this attribute is an [NSNumber](../../nsnumber.md) object containing a floating point value indicating the log of the expansion factor to be applied to glyphs. The default value is `0`, indicating no expansion.

## See Also

### Deprecated Keys

- [obliqueness](obliqueness.md): Deprecated. The obliqueness of the text.
- [verticalGlyphForm](verticalglyphform.md): Deprecated. The vertical glyph form of the text.
- [characterShapeAttributeName](charactershapeattributename.md): Deprecated. The character shape attribute.
- [usesScreenFontsDocumentAttribute](usesscreenfontsdocumentattribute.md): Deprecated. The screen fonts attribute.

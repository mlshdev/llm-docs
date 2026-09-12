> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstring/key/verticalglyphform](https://developer.apple.com/documentation/foundation/nsattributedstring/key/verticalglyphform)

# verticalGlyphForm

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.0+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 27.0)

The vertical glyph form of the text.

> This attribute is not supported with TextKit 2

## Declaration

```swift
static let verticalGlyphForm: NSAttributedString.Key
```

<a id="Discussion"></a>

## Discussion

The value of this attribute is an [NSNumber](../../nsnumber.md) object containing an integer. The value `0` indicates horizontal text. The value `1` indicates vertical text. In iOS, horizontal text is always used and specifying a different value is undefined.

## See Also

### Deprecated Keys

- [expansion](expansion.md): Deprecated. The expansion factor of the text.
- [obliqueness](obliqueness.md): Deprecated. The obliqueness of the text.
- [characterShapeAttributeName](charactershapeattributename.md): Deprecated. The character shape attribute.
- [usesScreenFontsDocumentAttribute](usesscreenfontsdocumentattribute.md): Deprecated. The screen fonts attribute.

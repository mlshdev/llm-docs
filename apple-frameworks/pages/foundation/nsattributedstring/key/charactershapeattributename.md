> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstring/key/charactershapeattributename](https://developer.apple.com/documentation/foundation/nsattributedstring/key/charactershapeattributename)

# characterShapeAttributeName

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** macOS 10.0+ (deprecated in 10.11)

The character shape attribute.

> This attribute is bound to a specific implementation of ATS feature and not generically supported by wide range of fonts. The majority of characters accessed through this API are now encoded in the Unicode standard. Use the CTFont feature API for fine control over character shape choices.

## Declaration

```swift
static let characterShapeAttributeName: NSAttributedString.Key
```

<a id="Discussion"></a>

## Discussion

An integer value. The value is interpreted as Apple Type Services `kCharacterShapeType selector + 1`.

The character shape feature type (`kCharacterShapeType`) is used when a single font contains different appearances for the same character shape, and these shapes are not traditionally treated as swashes. It is needed for languages such as Chinese that have both traditional and simplified character sets.

The default value is 0 (disable). 1 is `kTraditionalCharactersSelector,` and so on. Refer to `<ATS/SFNTLayoutTypes.h>` and Font Features in ATSUI Programming Guide for additional information.

## See Also

### Deprecated Keys

- [expansion](expansion.md): Deprecated. The expansion factor of the text.
- [obliqueness](obliqueness.md): Deprecated. The obliqueness of the text.
- [verticalGlyphForm](verticalglyphform.md): Deprecated. The vertical glyph form of the text.
- [usesScreenFontsDocumentAttribute](usesscreenfontsdocumentattribute.md): Deprecated. The screen fonts attribute.

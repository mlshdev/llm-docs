> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstring/key/usesscreenfontsdocumentattribute](https://developer.apple.com/documentation/foundation/nsattributedstring/key/usesscreenfontsdocumentattribute)

# usesScreenFontsDocumentAttribute

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** macOS 10.8+ (deprecated in 10.11)

The screen fonts attribute.

## Declaration

```swift
static let usesScreenFontsDocumentAttribute: NSAttributedString.Key
```

<a id="Discussion"></a>

## Discussion

The value of this attribute is an [NSNumber](../../nsnumber.md) object containing a Boolean; this attribute corresponds to the [usesScreenFonts](https://developer.apple.com/documentation/appkit/nslayoutmanager/usesscreenfonts) method of [NSLayoutManager](https://developer.apple.com/documentation/appkit/nslayoutmanager); if absent, follows the system default setting.

## See Also

### Deprecated Keys

- [expansion](expansion.md): Deprecated. The expansion factor of the text.
- [obliqueness](obliqueness.md): Deprecated. The obliqueness of the text.
- [verticalGlyphForm](verticalglyphform.md): Deprecated. The vertical glyph form of the text.
- [characterShapeAttributeName](charactershapeattributename.md): Deprecated. The character shape attribute.

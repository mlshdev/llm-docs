> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nslayoutmanager/showcgglyphs(_:positions:count:font:matrix:attributes:in:)](https://developer.apple.com/documentation/uikit/nslayoutmanager/showcgglyphs(_:positions:count:font:matrix:attributes:in:))

# showCGGlyphs(\_:positions:count:font:matrix:attributes:in:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 13.0) · iPadOS 7.0+ (deprecated in 13.0) · Mac Catalyst 7.0+ (deprecated in 13.0) · tvOS 9.0+ (deprecated in 13.0)

Renders the glyphs at the specified positions, using the specified attributes.

> Use [showCGGlyphs(\_:positions:count:font:textMatrix:attributes:in:)](showcgglyphs%28__positions_count_font_textmatrix_attributes_in_%29.md) instead.

## Declaration

```swift
func showCGGlyphs(_ glyphs: UnsafePointer<CGGlyph>, positions: UnsafePointer<CGPoint>, count glyphCount: Int, font: UIFont, matrix textMatrix: CGAffineTransform, attributes: [NSAttributedString.Key : Any] = [:], in graphicsContext: CGContext)
```

## Parameters

- `glyphs`: The glyphs to draw; may contain embedded `NULL` bytes.
- `positions`: The positions at which to draw the glyphs in the user space coordinate system.
- `glyphCount`: The number of glyphs.
- `font`: The font applied to the graphics state. This value can be different from the `NSFontAttributeName` value in the `attributes` argument because of various font substitutions that the system automatically executes.
- `textMatrix`: The affine transform mapping the text space coordinate system to the user space coordinate system. The `tx` and `ty` components of `textMatrix` are ignored since Quartz overrides them with the glyph positions.
- `attributes`: A dictionary of glyph attributes. See [Glyph Attributes](https://developer.apple.com/documentation/appkit/glyph-attributes) for supported keys and values.
- `graphicsContext`: If non-`nil`, `graphicsContext` is already configured according to the text attributes arguments: `font`, `textMatrix`, and `attributes`.

<a id="Discussion"></a>

## Discussion

`NSLayoutManager` invokes this primitive method unless an override implementation of the deprecated [showPackedGlyphs:length:glyphRange:atPoint:font:color:printingAdjustment:](https://developer.apple.com/documentation/appkit/nslayoutmanager/showpackedglyphs:length:glyphrange:atpoint:font:color:printingadjustment:) method exists and this method is not overridden.

## See Also

### Methods

- [invalidateGlyphs(onLayoutInvalidationForGlyphRange:)](https://developer.apple.com/documentation/appkit/nslayoutmanager/invalidateglyphs%28onlayoutinvalidationforglyphrange:%29): Deprecated. Specifies explicitly when portions of the glyph stream depend on layout.
- [invalidateLayout(forCharacterRange:isSoft:actualCharacterRange:)](https://developer.apple.com/documentation/appkit/nslayoutmanager/invalidatelayout%28forcharacterrange:issoft:actualcharacterrange:%29): Deprecated. Invalidates the layout information for the glyphs mapped to the given range of characters.
- [textStorage(\_:edited:range:changeInLength:invalidatedRange:)](https://developer.apple.com/documentation/appkit/nslayoutmanager/textstorage%28_:edited:range:changeinlength:invalidatedrange:%29): Deprecated. Invalidates glyph and layout information for a portion of the text in the given text storage object.
- [insertGlyph(\_:atGlyphIndex:characterIndex:)](https://developer.apple.com/documentation/appkit/nslayoutmanager/insertglyph%28_:atglyphindex:characterindex:%29): Deprecated. Inserts a single glyph into the glyph stream at the given index and maps it to the character at the given character index.
- [insertGlyphs(\_:length:forStartingGlyphAt:characterIndex:)](https://developer.apple.com/documentation/appkit/nslayoutmanager/insertglyphs%28_:length:forstartingglyphat:characterindex:%29): Deprecated. Inserts the given glyphs into the glyph cache at the given index and maps them to characters beginning at the given character index.
- [glyph(at:)](glyph%28at_%29.md): Deprecated. Returns the glyph at the specified index.
- [glyph(at:isValidIndex:)](glyph%28at_isvalidindex_%29.md): Deprecated. Returns the glyph at a specified index, and optionally returns a flag indicating whether the requested index is valid.
- [replaceGlyph(at:withGlyph:)](https://developer.apple.com/documentation/appkit/nslayoutmanager/replaceglyph%28at:withglyph:%29): Deprecated. Replaces the glyph at the given index with a new glyph.
- [getGlyphs(\_:range:)](https://developer.apple.com/documentation/appkit/nslayoutmanager/getglyphs%28_:range:%29): Deprecated. Fills the passed-in buffer with a sequence of glyphs.
- [getGlyphs(in:glyphs:characterIndexes:glyphInscriptions:elasticBits:)](https://developer.apple.com/documentation/appkit/nslayoutmanager/getglyphs%28in:glyphs:characterindexes:glyphinscriptions:elasticbits:%29): Deprecated. Returns the glyphs and information needed to perform layout for the given glyph range.
- [getGlyphs(in:glyphs:characterIndexes:glyphInscriptions:elasticBits:bidiLevels:)](https://developer.apple.com/documentation/appkit/nslayoutmanager/getglyphs%28in:glyphs:characterindexes:glyphinscriptions:elasticbits:bidilevels:%29): Deprecated. Returns the glyphs and information needed to perform layout for the given glyph range.
- [deleteGlyphs(in:)](https://developer.apple.com/documentation/appkit/nslayoutmanager/deleteglyphs%28in:%29): Deprecated. Deletes the glyphs in the given range from the receiver’s glyph store.
- [setCharacterIndex(\_:forGlyphAt:)](https://developer.apple.com/documentation/appkit/nslayoutmanager/setcharacterindex%28_:forglyphat:%29): Deprecated. Sets the index of the character corresponding to the glyph at the given glyph index.
- [intAttribute(\_:forGlyphAt:)](https://developer.apple.com/documentation/appkit/nslayoutmanager/intattribute%28_:forglyphat:%29): Deprecated. Returns the value of the attribute identified by the given attribute tag for the glyph at the given index.
- [setIntAttribute(\_:value:forGlyphAt:)](https://developer.apple.com/documentation/appkit/nslayoutmanager/setintattribute%28_:value:forglyphat:%29): Deprecated. Sets a custom attribute value for a given glyph.

# showCGGlyphs:positions:count:font:matrix:attributes:inContext: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 13.0) · iPadOS 7.0+ (deprecated in 13.0) · tvOS 9.0+ (deprecated in 13.0)

Renders the glyphs at the specified positions, using the specified attributes.

> Use [showCGGlyphs:positions:count:font:textMatrix:attributes:inContext:](showcgglyphs%28__positions_count_font_textmatrix_attributes_in_%29.md) instead.

## Declaration

```objectivec
- (void) showCGGlyphs:(const CGGlyph *) glyphs positions:(const CGPoint *) positions count:(NSUInteger) glyphCount font:(UIFont *) font matrix:(CGAffineTransform) textMatrix attributes:(NSDictionary<NSString *,id> *) attributes inContext:(CGContextRef) graphicsContext;
```

## Parameters

- `glyphs`: The glyphs to draw; may contain embedded `NULL` bytes.
- `positions`: The positions at which to draw the glyphs in the user space coordinate system.
- `glyphCount`: The number of glyphs.
- `font`: The font applied to the graphics state. This value can be different from the `NSFontAttributeName` value in the `attributes` argument because of various font substitutions that the system automatically executes.
- `textMatrix`: The affine transform mapping the text space coordinate system to the user space coordinate system. The `tx` and `ty` components of `textMatrix` are ignored since Quartz overrides them with the glyph positions.
- `attributes`: A dictionary of glyph attributes. See [Glyph Attributes](https://developer.apple.com/documentation/appkit/glyph-attributes) for supported keys and values.
- `graphicsContext`: If non-`nil`, `graphicsContext` is already configured according to the text attributes arguments: `font`, `textMatrix`, and `attributes`.

<a id="Discussion"></a>

## Discussion

`NSLayoutManager` invokes this primitive method unless an override implementation of the deprecated [showPackedGlyphs:length:glyphRange:atPoint:font:color:printingAdjustment:](https://developer.apple.com/documentation/appkit/nslayoutmanager/showpackedglyphs:length:glyphrange:atpoint:font:color:printingadjustment:) method exists and this method is not overridden.

## See Also

### Methods

- [invalidateGlyphsOnLayoutInvalidationForGlyphRange:](https://developer.apple.com/documentation/appkit/nslayoutmanager/invalidateglyphs%28onlayoutinvalidationforglyphrange:%29): Deprecated. Specifies explicitly when portions of the glyph stream depend on layout.
- [invalidateLayoutForCharacterRange:isSoft:actualCharacterRange:](https://developer.apple.com/documentation/appkit/nslayoutmanager/invalidatelayout%28forcharacterrange:issoft:actualcharacterrange:%29): Deprecated. Invalidates the layout information for the glyphs mapped to the given range of characters.
- [textStorage:edited:range:changeInLength:invalidatedRange:](https://developer.apple.com/documentation/appkit/nslayoutmanager/textstorage%28_:edited:range:changeinlength:invalidatedrange:%29): Deprecated. Invalidates glyph and layout information for a portion of the text in the given text storage object.
- [insertGlyph:atGlyphIndex:characterIndex:](https://developer.apple.com/documentation/appkit/nslayoutmanager/insertglyph%28_:atglyphindex:characterindex:%29): Deprecated. Inserts a single glyph into the glyph stream at the given index and maps it to the character at the given character index.
- [insertGlyphs:length:forStartingGlyphAtIndex:characterIndex:](https://developer.apple.com/documentation/appkit/nslayoutmanager/insertglyphs%28_:length:forstartingglyphat:characterindex:%29): Deprecated. Inserts the given glyphs into the glyph cache at the given index and maps them to characters beginning at the given character index.
- [glyphAtIndex:](glyph%28at_%29.md): Deprecated. Returns the glyph at the specified index.
- [glyphAtIndex:isValidIndex:](glyph%28at_isvalidindex_%29.md): Deprecated. Returns the glyph at a specified index, and optionally returns a flag indicating whether the requested index is valid.
- [replaceGlyphAtIndex:withGlyph:](https://developer.apple.com/documentation/appkit/nslayoutmanager/replaceglyph%28at:withglyph:%29): Deprecated. Replaces the glyph at the given index with a new glyph.
- [getGlyphs:range:](https://developer.apple.com/documentation/appkit/nslayoutmanager/getglyphs%28_:range:%29): Deprecated. Fills the passed-in buffer with a sequence of glyphs.
- [getGlyphsInRange:glyphs:characterIndexes:glyphInscriptions:elasticBits:](https://developer.apple.com/documentation/appkit/nslayoutmanager/getglyphs%28in:glyphs:characterindexes:glyphinscriptions:elasticbits:%29): Deprecated. Returns the glyphs and information needed to perform layout for the given glyph range.
- [getGlyphsInRange:glyphs:characterIndexes:glyphInscriptions:elasticBits:bidiLevels:](https://developer.apple.com/documentation/appkit/nslayoutmanager/getglyphs%28in:glyphs:characterindexes:glyphinscriptions:elasticbits:bidilevels:%29): Deprecated. Returns the glyphs and information needed to perform layout for the given glyph range.
- [deleteGlyphsInRange:](https://developer.apple.com/documentation/appkit/nslayoutmanager/deleteglyphs%28in:%29): Deprecated. Deletes the glyphs in the given range from the receiver’s glyph store.
- [setCharacterIndex:forGlyphAtIndex:](https://developer.apple.com/documentation/appkit/nslayoutmanager/setcharacterindex%28_:forglyphat:%29): Deprecated. Sets the index of the character corresponding to the glyph at the given glyph index.
- [intAttribute:forGlyphAtIndex:](https://developer.apple.com/documentation/appkit/nslayoutmanager/intattribute%28_:forglyphat:%29): Deprecated. Returns the value of the attribute identified by the given attribute tag for the glyph at the given index.
- [setIntAttribute:value:forGlyphAtIndex:](https://developer.apple.com/documentation/appkit/nslayoutmanager/setintattribute%28_:value:forglyphat:%29): Deprecated. Sets a custom attribute value for a given glyph.

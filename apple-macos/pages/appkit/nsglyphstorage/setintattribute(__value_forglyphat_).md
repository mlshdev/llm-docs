> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsglyphstorage/setintattribute(_:value:forglyphat:)](https://developer.apple.com/documentation/appkit/nsglyphstorage/setintattribute(_:value:forglyphat:))

# setIntAttribute(\_:value:forGlyphAt:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets a custom attribute value for a given glyph.

## Declaration

```swift
func setIntAttribute(_ attributeTag: Int, value val: Int, forGlyphAt glyphIndex: Int)
```

## Parameters

- `attributeTag`: The custom attribute.
- `val`: The new attribute value.
- `glyphIndex`: Index of the glyph whose attribute is set.

<a id="Discussion"></a>

## Discussion

Custom attributes are glyph attributes such as `NSGlyphInscription` or attributes defined by subclasses. Subclasses that define their own custom attributes must override this method and provide their own storage for the attribute values. Nonnegative tags are reserved; you can define your own attributes with negative tags and set values using this method.

## See Also

### Modifying the glyph cache

- [insertGlyphs(\_:length:forStartingGlyphAt:characterIndex:)](insertglyphs%28__length_forstartingglyphat_characterindex_%29.md): Inserts the given glyphs into the glyph cache and maps them to the specified characters.

# setIntAttribute:value:forGlyphAtIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets a custom attribute value for a given glyph.

## Declaration

```objectivec
- (void) setIntAttribute:(NSInteger) attributeTag value:(NSInteger) val forGlyphAtIndex:(NSUInteger) glyphIndex;
```

## Parameters

- `attributeTag`: The custom attribute.
- `val`: The new attribute value.
- `glyphIndex`: Index of the glyph whose attribute is set.

<a id="Discussion"></a>

## Discussion

Custom attributes are glyph attributes such as `NSGlyphInscription` or attributes defined by subclasses. Subclasses that define their own custom attributes must override this method and provide their own storage for the attribute values. Nonnegative tags are reserved; you can define your own attributes with negative tags and set values using this method.

## See Also

### Modifying the glyph cache

- [insertGlyphs:length:forStartingGlyphAtIndex:characterIndex:](insertglyphs%28__length_forstartingglyphat_characterindex_%29.md): Inserts the given glyphs into the glyph cache and maps them to the specified characters.

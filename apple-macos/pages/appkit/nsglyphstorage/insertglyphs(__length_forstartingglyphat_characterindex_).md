> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsglyphstorage/insertglyphs(_:length:forstartingglyphat:characterindex:)](https://developer.apple.com/documentation/appkit/nsglyphstorage/insertglyphs(_:length:forstartingglyphat:characterindex:))

# insertGlyphs(\_:length:forStartingGlyphAt:characterIndex:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Inserts the given glyphs into the glyph cache and maps them to the specified characters.

## Declaration

```swift
func insertGlyphs(_ glyphs: UnsafePointer<NSGlyph>, length: Int, forStartingGlyphAt glyphIndex: Int, characterIndex charIndex: Int)
```

## Parameters

- `glyphs`: The glyphs to insert.
- `length`: Number of glyphs to insert.
- `glyphIndex`: Location in the glyph cache to begin inserting glyphs.
- `charIndex`: Index of first character to be mapped.

<a id="Discussion"></a>

## Discussion

This is a bulk insert method for the glyph cache.

## See Also

### Modifying the glyph cache

- [setIntAttribute(\_:value:forGlyphAt:)](setintattribute%28__value_forglyphat_%29.md): Sets a custom attribute value for a given glyph.

# insertGlyphs:length:forStartingGlyphAtIndex:characterIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Inserts the given glyphs into the glyph cache and maps them to the specified characters.

## Declaration

```objectivec
- (void) insertGlyphs:(const NSGlyph *) glyphs length:(NSUInteger) length forStartingGlyphAtIndex:(NSUInteger) glyphIndex characterIndex:(NSUInteger) charIndex;
```

## Parameters

- `glyphs`: The glyphs to insert.
- `length`: Number of glyphs to insert.
- `glyphIndex`: Location in the glyph cache to begin inserting glyphs.
- `charIndex`: Index of first character to be mapped.

<a id="Discussion"></a>

## Discussion

This is a bulk insert method for the glyph cache.

## See Also

### Modifying the glyph cache

- [setIntAttribute:value:forGlyphAtIndex:](setintattribute%28__value_forglyphat_%29.md): Sets a custom attribute value for a given glyph.

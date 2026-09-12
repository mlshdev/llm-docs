> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsglyphgenerator/generateglyphs(for:desirednumberofcharacters:glyphindex:characterindex:)](https://developer.apple.com/documentation/appkit/nsglyphgenerator/generateglyphs(for:desirednumberofcharacters:glyphindex:characterindex:))

# generateGlyphs(for:desiredNumberOfCharacters:glyphIndex:characterIndex:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Generates glyphs for the specified glyph storage object (`NSLayoutManager` by default).

## Declaration

```swift
func generateGlyphs(for glyphStorage: any NSGlyphStorage, desiredNumberOfCharacters nChars: Int, glyphIndex: UnsafeMutablePointer<Int>?, characterIndex charIndex: UnsafeMutablePointer<Int>?)
```

<a id="Discussion"></a>

## Discussion

Generates glyphs for the glyph storage object specified by `glyphStorage`, beginning with the character at `charIndex` and continuing for `nChars` characters. The `glyphIndex` specifies the index of the first glyph generated.

# generateGlyphsForGlyphStorage:desiredNumberOfCharacters:glyphIndex:characterIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Generates glyphs for the specified glyph storage object (`NSLayoutManager` by default).

## Declaration

```objectivec
- (void) generateGlyphsForGlyphStorage:(id<NSGlyphStorage>) glyphStorage desiredNumberOfCharacters:(NSUInteger) nChars glyphIndex:(NSUInteger *) glyphIndex characterIndex:(NSUInteger *) charIndex;
```

<a id="Discussion"></a>

## Discussion

Generates glyphs for the glyph storage object specified by `glyphStorage`, beginning with the character at `charIndex` and continuing for `nChars` characters. The `glyphIndex` specifies the index of the first glyph generated.

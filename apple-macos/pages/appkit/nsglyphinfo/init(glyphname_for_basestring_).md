> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsglyphinfo/init(glyphname:for:basestring:)](https://developer.apple.com/documentation/appkit/nsglyphinfo/init(glyphname:for:basestring:))

# init(glyphName:for:baseString:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS

## Declaration

```swift
init?(glyphName: String, for font: NSFont, baseString string: String)
```

## See Also

### Creating a glyph info object

- [init(cgGlyph:for:baseString:)](init%28cgglyph_for_basestring_%29.md): Creates a glyph info object from the specified glyph identifier and font informaton.
- [init(CGGlyph:forFont:baseString:)](init%28cgglyph_forfont_basestring_%29.md)
- [init(coder:)](init%28coder_%29.md)
- [init(glyph:for:baseString:)](init%28glyph_for_basestring_%29.md)

# glyphInfoWithGlyphName:forFont:baseString: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

## Declaration

```objectivec
+ (NSGlyphInfo *) glyphInfoWithGlyphName:(NSString *) glyphName forFont:(NSFont *) font baseString:(NSString *) string;
```

## See Also

### Creating a glyph info object

- [glyphInfoWithCGGlyph:forFont:baseString:](init%28cgglyph_for_basestring_%29.md): Creates a glyph info object from the specified glyph identifier and font informaton.
- [glyphInfoWithGlyph:forFont:baseString:](init%28glyph_for_basestring_%29.md)

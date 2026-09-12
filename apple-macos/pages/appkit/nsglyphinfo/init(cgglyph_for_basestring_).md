> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsglyphinfo/init(cgglyph:for:basestring:)](https://developer.apple.com/documentation/appkit/nsglyphinfo/init(cgglyph:for:basestring:))

# init(cgGlyph:for:baseString:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.13+

Creates a glyph info object from the specified glyph identifier and font informaton.

## Declaration

```swift
init?(cgGlyph glyph: CGGlyph, for font: NSFont, baseString string: String)
```

## Parameters

- `glyph`: The requested [CGGlyph](https://developer.apple.com/documentation/coregraphics/cgglyph) object.
- `font`: The font containing the glyph.
- `string`: A string containing the character represented by the glyph.

<a id="return-value"></a>

## Return Value

A glyph info object for the specified glyph or `nil` if the glyph information is not available.

## See Also

### Creating a glyph info object

- [init(CGGlyph:forFont:baseString:)](init%28cgglyph_forfont_basestring_%29.md)
- [init(coder:)](init%28coder_%29.md)
- [init(glyph:for:baseString:)](init%28glyph_for_basestring_%29.md)
- [init(glyphName:for:baseString:)](init%28glyphname_for_basestring_%29.md)

# glyphInfoWithCGGlyph:forFont:baseString: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.13+

Creates a glyph info object from the specified glyph identifier and font informaton.

## Declaration

```objectivec
+ (NSGlyphInfo *) glyphInfoWithCGGlyph:(CGGlyph) glyph forFont:(NSFont *) font baseString:(NSString *) string;
```

## Parameters

- `glyph`: The requested [CGGlyph](https://developer.apple.com/documentation/coregraphics/cgglyph) object.
- `font`: The font containing the glyph.
- `string`: A string containing the character represented by the glyph.

<a id="return-value"></a>

## Return Value

A glyph info object for the specified glyph or `nil` if the glyph information is not available.

## See Also

### Creating a glyph info object

- [glyphInfoWithGlyph:forFont:baseString:](init%28glyph_for_basestring_%29.md)
- [glyphInfoWithGlyphName:forFont:baseString:](init%28glyphname_for_basestring_%29.md)

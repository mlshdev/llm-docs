> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgfont](https://developer.apple.com/documentation/coregraphics/cgfont)

# CGFont (Swift)

**Framework:** Core Graphics  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A set of character glyphs and layout information for drawing text.

## Declaration

```swift
class CGFont
```

<a id="overview"></a>

## Overview

A glyph can represent a single character (such as ‘b’), more than one character (such as the “ﬁ” ligature), or a special character such as a space. Core Graphics retrieves the glyphs for the font from ATS (Apple Type Services) and paints the glyphs based on the relevant parameters of the current graphics state.

Core Graphics provides a limited, low-level interface for drawing text. For information on text-drawing functions, see [CGContext](cgcontext.md). For full Unicode and text-layout support,  use the services provided by TextKit).

## Topics

### Creating Font Objects

- [init(\_:)](cgfont/init%28__%29-9aour.md): Creates a font object from data supplied from a data provider.
- [init(\_:)](cgfont/init%28__%29-1p4b.md): Creates a font object corresponding to the font specified by a PostScript or full name.

### Examining Font Metadata

- [fullName](cgfont/fullname.md): Returns the full name associated with a font object.

### Examining Font Metrics

- [ascent](cgfont/ascent.md): Returns the ascent of a font.
- [capHeight](cgfont/capheight.md): Returns the cap height of a font.
- [descent](cgfont/descent.md): Returns the descent of a font.
- [fontBBox](cgfont/fontbbox.md): Returns the bounding box of a font.
- [italicAngle](cgfont/italicangle.md): Returns the italic angle of a font.
- [leading](cgfont/leading.md): Returns the leading of a font.
- [stemV](cgfont/stemv.md): Returns the thickness of the dominant vertical stems of glyphs in a font.
- [unitsPerEm](cgfont/unitsperem.md): Returns the number of glyph space units per em for the provided font.
- [xHeight](cgfont/xheight.md): Returns the x-height of a font.

### Working with PostScript Fonts

- [postScriptName](cgfont/postscriptname.md): Obtains the PostScript name of a font.
- [canCreatePostScriptSubset(\_:)](cgfont/cancreatepostscriptsubset%28__%29.md): Determines whether Core Graphics can create a subset of the font in PostScript format.
- [createPostScriptSubset(subsetName:format:glyphs:count:encoding:)](cgfont/createpostscriptsubset%28subsetname_format_glyphs_count_encoding_%29.md): Creates a subset of the font in the specified PostScript format.
- [CGFontPostScriptFormat](cgfontpostscriptformat.md): Possible formats for a PostScript font subset.
- [createPostScriptEncoding(encoding:)](cgfont/createpostscriptencoding%28encoding_%29.md): Creates a PostScript encoding of a font.

### Working with Font Tables

- [tableTags](cgfont/tabletags.md): Returns an array of tags that correspond to the font tables for a font.
- [table(for:)](cgfont/table%28for_%29.md): Returns the font table that corresponds to the provided tag.
- [Font Table Index Values](font-table-index-values.md): Possible values for an index into a font table.
- [Obsolete Font Table Index Values](obsolete-font-table-index-values.md): Deprecated values for an index into a font table.

### Working with Variations

- [copy(withVariations:)](cgfont/copy%28withvariations_%29.md): Creates a copy of a font using a variation specification dictionary.
- [variations](cgfont/variations.md): Returns the variation specification dictionary for a font.
- [variationAxes](cgfont/variationaxes.md): Returns an array of the variation axis dictionaries for a font.
- [Font Variation Axis Keys](font-variation-axis-keys.md): Keys used for a font variation axis dictionary.

### Working with Glyphs

- [numberOfGlyphs](cgfont/numberofglyphs.md): Returns the number of glyphs in a font.
- [name(for:)](cgfont/name%28for_%29.md): Returns the glyph name of the specified glyph in the specified font.
- [getGlyphWithGlyphName(name:)](cgfont/getglyphwithglyphname%28name_%29.md): Returns the glyph for the glyph name associated with the specified font object.
- [getGlyphBBoxes(glyphs:count:bboxes:)](cgfont/getglyphbboxes%28glyphs_count_bboxes_%29.md): Get the bounding box of each glyph in an array.
- [getGlyphAdvances(glyphs:count:advances:)](cgfont/getglyphadvances%28glyphs_count_advances_%29.md): Gets the advance width of each glyph in the provided array.
- [CGGlyph](cgglyph.md): An index into the internal glyph table of a font.
- [kCGGlyphMax](kcgglyphmax.md): The maximum allowed value of a [CGGlyph](cgglyph.md).
- [CGFontIndex](cgfontindex.md): An index into a font table.
- [kCGFontIndexMax](kcgfontindexmax.md): The maximum allowed value of a [CGFontIndex](cgfontindex.md).
- [kCGFontIndexInvalid](kcgfontindexinvalid.md): An invalid font index (a value which never represents a valid glyph).

### Working with Core Foundation Types

- [typeID](cgfont/typeid.md): Returns the Core Foundation type identifier for Core Graphics fonts.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Related Documentation

- [Quartz 2D Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/drawingwithquartz2d/Introduction/Introduction.html#//apple_ref/doc/uid/TP30001066)

### Colors and Fonts

- [CGColor](cgcolor.md): A set of components that define a color, with a color space specifying how to interpret them.
- [CGColorConversionInfo](cgcolorconversioninfo.md): An object that describes how to convert between color spaces for use by other system services.
- [CGColorSpace](cgcolorspace.md): A profile that specifies how to interpret a color value for display.

# CGFontRef (Objective-C)

**Framework:** Core Graphics  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A set of character glyphs and layout information for drawing text.

## Declaration

```objectivec
typedef struct CGFont * CGFontRef;
```

<a id="overview"></a>

## Overview

A glyph can represent a single character (such as ‘b’), more than one character (such as the “ﬁ” ligature), or a special character such as a space. Core Graphics retrieves the glyphs for the font from ATS (Apple Type Services) and paints the glyphs based on the relevant parameters of the current graphics state.

Core Graphics provides a limited, low-level interface for drawing text. For information on text-drawing functions, see [CGContextRef](cgcontext.md). For full Unicode and text-layout support,  use the services provided by TextKit).

## Topics

### Creating Font Objects

- [CGFontCreateWithDataProvider](cgfont/init%28__%29-9aour.md): Creates a font object from data supplied from a data provider.
- [CGFontCreateWithFontName](cgfont/init%28__%29-1p4b.md): Creates a font object corresponding to the font specified by a PostScript or full name.
- [CGFontCreateWithPlatformFont](cgfontcreatewithplatformfont.md): Deprecated. Creates a font object from an Apple Type Services (ATS) font.

### Retaining and Releasing a CGFont Object

- [CGFontRelease](cgfontrelease.md): Decrements the retain count of a font.
- [CGFontRetain](cgfontretain.md): Increments the retain count of a font.

### Examining Font Metadata

- [CGFontCopyFullName](cgfont/fullname.md): Returns the full name associated with a font object.

### Examining Font Metrics

- [CGFontGetAscent](cgfont/ascent.md): Returns the ascent of a font.
- [CGFontGetCapHeight](cgfont/capheight.md): Returns the cap height of a font.
- [CGFontGetDescent](cgfont/descent.md): Returns the descent of a font.
- [CGFontGetFontBBox](cgfont/fontbbox.md): Returns the bounding box of a font.
- [CGFontGetItalicAngle](cgfont/italicangle.md): Returns the italic angle of a font.
- [CGFontGetLeading](cgfont/leading.md): Returns the leading of a font.
- [CGFontGetStemV](cgfont/stemv.md): Returns the thickness of the dominant vertical stems of glyphs in a font.
- [CGFontGetUnitsPerEm](cgfont/unitsperem.md): Returns the number of glyph space units per em for the provided font.
- [CGFontGetXHeight](cgfont/xheight.md): Returns the x-height of a font.

### Working with PostScript Fonts

- [CGFontCopyPostScriptName](cgfont/postscriptname.md): Obtains the PostScript name of a font.
- [CGFontCanCreatePostScriptSubset](cgfont/cancreatepostscriptsubset%28__%29.md): Determines whether Core Graphics can create a subset of the font in PostScript format.
- [CGFontCreatePostScriptSubset](cgfont/createpostscriptsubset%28subsetname_format_glyphs_count_encoding_%29.md): Creates a subset of the font in the specified PostScript format.
- [CGFontPostScriptFormat](cgfontpostscriptformat.md): Possible formats for a PostScript font subset.
- [CGFontCreatePostScriptEncoding](cgfont/createpostscriptencoding%28encoding_%29.md): Creates a PostScript encoding of a font.

### Working with Font Tables

- [CGFontCopyTableTags](cgfont/tabletags.md): Returns an array of tags that correspond to the font tables for a font.
- [CGFontCopyTableForTag](cgfont/table%28for_%29.md): Returns the font table that corresponds to the provided tag.
- [Font Table Index Values](font-table-index-values.md): Possible values for an index into a font table.
- [Obsolete Font Table Index Values](obsolete-font-table-index-values.md): Deprecated values for an index into a font table.

### Working with Variations

- [CGFontCreateCopyWithVariations](cgfont/copy%28withvariations_%29.md): Creates a copy of a font using a variation specification dictionary.
- [CGFontCopyVariations](cgfont/variations.md): Returns the variation specification dictionary for a font.
- [CGFontCopyVariationAxes](cgfont/variationaxes.md): Returns an array of the variation axis dictionaries for a font.
- [Font Variation Axis Keys](font-variation-axis-keys.md): Keys used for a font variation axis dictionary.

### Working with Glyphs

- [CGFontGetNumberOfGlyphs](cgfont/numberofglyphs.md): Returns the number of glyphs in a font.
- [CGFontCopyGlyphNameForGlyph](cgfont/name%28for_%29.md): Returns the glyph name of the specified glyph in the specified font.
- [CGFontGetGlyphWithGlyphName](cgfont/getglyphwithglyphname%28name_%29.md): Returns the glyph for the glyph name associated with the specified font object.
- [CGFontGetGlyphBBoxes](cgfont/getglyphbboxes%28glyphs_count_bboxes_%29.md): Get the bounding box of each glyph in an array.
- [CGFontGetGlyphAdvances](cgfont/getglyphadvances%28glyphs_count_advances_%29.md): Gets the advance width of each glyph in the provided array.
- [CGGlyph](cgglyph.md): An index into the internal glyph table of a font.
- [kCGGlyphMax](kcgglyphmax.md): The maximum allowed value of a [CGGlyph](cgglyph.md).
- [CGFontIndex](cgfontindex.md): An index into a font table.
- [kCGFontIndexMax](kcgfontindexmax.md): The maximum allowed value of a [CGFontIndex](cgfontindex.md).
- [kCGFontIndexInvalid](kcgfontindexinvalid.md): An invalid font index (a value which never represents a valid glyph).

### Working with Core Foundation Types

- [CGFontGetTypeID](cgfont/typeid.md): Returns the Core Foundation type identifier for Core Graphics fonts.

## See Also

### Related Documentation

- [Quartz 2D Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/drawingwithquartz2d/Introduction/Introduction.html#//apple_ref/doc/uid/TP30001066)

### Opaque Types

- [CGContextRef](cgcontext.md): A Quartz 2D drawing environment.
- [CGColorRef](cgcolor.md): A set of components that define a color, with a color space specifying how to interpret them.
- [CGColorConversionInfoRef](cgcolorconversioninfo.md): An object that describes how to convert between color spaces for use by other system services.
- [CGColorSpaceRef](cgcolorspace.md): A profile that specifies how to interpret a color value for display.
- [CGDataConsumerRef](cgdataconsumer.md): An abstraction for data-writing tasks that eliminates the need to manage a raw memory buffer.
- [CGDataProviderRef](cgdataprovider.md): An abstraction for data-reading tasks that eliminates the need to manage a raw memory buffer.
- [CGFunctionRef](cgfunction.md): A general facility for defining and using callback functions.
- [CGGradientRef](cggradient.md): A definition for a smooth transition between colors for drawing radial and axial gradient fills.
- [CGImageRef](cgimage.md): A bitmap image or image mask.
- [CGLayerRef](cglayer.md): An offscreen context for reusing content drawn with Core Graphics.
- [CGPathRef](cgpath.md): An immutable graphics path: a mathematical description of shapes or lines to be drawn in a graphics context.
- [CGPatternRef](cgpattern.md): A 2D pattern to be used for drawing graphics paths.
- [CGPDFArray](cgpdfarray.md): An array structure within a PDF document.
- [CGPDFContentStream](cgpdfcontentstream.md): A representation of one or more content data streams in a PDF page.
- [CGPDFDictionary](cgpdfdictionary.md): A dictionary structure within a PDF document.

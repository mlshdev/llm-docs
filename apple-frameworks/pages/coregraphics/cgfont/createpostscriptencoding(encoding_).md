> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgfont/createpostscriptencoding(encoding:)](https://developer.apple.com/documentation/coregraphics/cgfont/createpostscriptencoding(encoding:))

# createPostScriptEncoding(encoding:) (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a PostScript encoding of a font.

## Declaration

```swift
func createPostScriptEncoding(encoding: UnsafePointer<CGGlyph>?) -> CFData?
```

## Parameters

- `encoding`: The encoding to use.

<a id="return-value"></a>

## Return Value

A PostScript encoding of the font that contains glyphs in the specified encoding.

<a id="Discussion"></a>

## Discussion

For more information on PostScript format, see *Adobe Type 1 Font Format*, which is available from [http://partners.adobe.com/](http://partners.adobe.com/).

## See Also

### Working with PostScript Fonts

- [postScriptName](postscriptname.md): Obtains the PostScript name of a font.
- [canCreatePostScriptSubset(\_:)](cancreatepostscriptsubset%28__%29.md): Determines whether Core Graphics can create a subset of the font in PostScript format.
- [createPostScriptSubset(subsetName:format:glyphs:count:encoding:)](createpostscriptsubset%28subsetname_format_glyphs_count_encoding_%29.md): Creates a subset of the font in the specified PostScript format.
- [CGFontPostScriptFormat](../cgfontpostscriptformat.md): Possible formats for a PostScript font subset.

# CGFontCreatePostScriptEncoding (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a PostScript encoding of a font.

## Declaration

```objectivec
extern CFDataRefCGFontCreatePostScriptEncoding(CGFontRef font, const CGGlyph encoding[256]);
```

## Parameters

- `font`: A CGFont object.
- `encoding`: The encoding to use.

<a id="return-value"></a>

## Return Value

A PostScript encoding of the font that contains glyphs in the specified encoding.

<a id="Discussion"></a>

## Discussion

For more information on PostScript format, see *Adobe Type 1 Font Format*, which is available from [http://partners.adobe.com/](http://partners.adobe.com/).

## See Also

### Working with PostScript Fonts

- [CGFontCopyPostScriptName](postscriptname.md): Obtains the PostScript name of a font.
- [CGFontCanCreatePostScriptSubset](cancreatepostscriptsubset%28__%29.md): Determines whether Core Graphics can create a subset of the font in PostScript format.
- [CGFontCreatePostScriptSubset](createpostscriptsubset%28subsetname_format_glyphs_count_encoding_%29.md): Creates a subset of the font in the specified PostScript format.
- [CGFontPostScriptFormat](../cgfontpostscriptformat.md): Possible formats for a PostScript font subset.

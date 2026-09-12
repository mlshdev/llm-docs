> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgfont/cancreatepostscriptsubset(_:)](https://developer.apple.com/documentation/coregraphics/cgfont/cancreatepostscriptsubset(_:))

# canCreatePostScriptSubset(\_:) (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Determines whether Core Graphics can create a subset of the font in PostScript format.

## Declaration

```swift
func canCreatePostScriptSubset(_ format: CGFontPostScriptFormat) -> Bool
```

## Parameters

- `format`: A PostScript font format.

<a id="return-value"></a>

## Return Value

Returns `true` if a subset in the PostScript format can be created for the font; `false` otherwise.

<a id="Discussion"></a>

## Discussion

For more information on PostScript format, see *Adobe Type 1 Font Format*, which is available from [http://partners.adobe.com/](http://partners.adobe.com/).

## See Also

### Working with PostScript Fonts

- [postScriptName](postscriptname.md): Obtains the PostScript name of a font.
- [createPostScriptSubset(subsetName:format:glyphs:count:encoding:)](createpostscriptsubset%28subsetname_format_glyphs_count_encoding_%29.md): Creates a subset of the font in the specified PostScript format.
- [CGFontPostScriptFormat](../cgfontpostscriptformat.md): Possible formats for a PostScript font subset.
- [createPostScriptEncoding(encoding:)](createpostscriptencoding%28encoding_%29.md): Creates a PostScript encoding of a font.

# CGFontCanCreatePostScriptSubset (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Determines whether Core Graphics can create a subset of the font in PostScript format.

## Declaration

```objectivec
extern bool CGFontCanCreatePostScriptSubset(CGFontRef font, CGFontPostScriptFormat format);
```

## Parameters

- `font`: A font object.
- `format`: A PostScript font format.

<a id="return-value"></a>

## Return Value

Returns `true` if a subset in the PostScript format can be created for the font; `false` otherwise.

<a id="Discussion"></a>

## Discussion

For more information on PostScript format, see *Adobe Type 1 Font Format*, which is available from [http://partners.adobe.com/](http://partners.adobe.com/).

## See Also

### Working with PostScript Fonts

- [CGFontCopyPostScriptName](postscriptname.md): Obtains the PostScript name of a font.
- [CGFontCreatePostScriptSubset](createpostscriptsubset%28subsetname_format_glyphs_count_encoding_%29.md): Creates a subset of the font in the specified PostScript format.
- [CGFontPostScriptFormat](../cgfontpostscriptformat.md): Possible formats for a PostScript font subset.
- [CGFontCreatePostScriptEncoding](createpostscriptencoding%28encoding_%29.md): Creates a PostScript encoding of a font.

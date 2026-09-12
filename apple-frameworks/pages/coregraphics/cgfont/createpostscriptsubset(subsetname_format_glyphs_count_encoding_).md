> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgfont/createpostscriptsubset(subsetname:format:glyphs:count:encoding:)](https://developer.apple.com/documentation/coregraphics/cgfont/createpostscriptsubset(subsetname:format:glyphs:count:encoding:))

# createPostScriptSubset(subsetName:format:glyphs:count:encoding:) (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a subset of the font in the specified PostScript format.

## Declaration

```swift
func createPostScriptSubset(subsetName: CFString, format: CGFontPostScriptFormat, glyphs: UnsafePointer<CGGlyph>?, count: Int, encoding: UnsafePointer<CGGlyph>?) -> CFData?
```

## Parameters

- `subsetName`: The name of the subset.
- `format`: The PostScript format of the font.
- `glyphs`: An array that contains the glyphs in the subset.
- `count`: The number of glyphs specified by the `glyphs` array.
- `encoding`: The default encoding for the subset. You can pass `nil` if you do not want to specify an encoding.

<a id="return-value"></a>

## Return Value

A subset of the font created from the supplied parameters.

<a id="Discussion"></a>

## Discussion

For more information on PostScript format, see *Adobe Type 1 Font Format*, which is available from [http://partners.adobe.com/](http://partners.adobe.com/).

## See Also

### Working with PostScript Fonts

- [postScriptName](postscriptname.md): Obtains the PostScript name of a font.
- [canCreatePostScriptSubset(\_:)](cancreatepostscriptsubset%28__%29.md): Determines whether Core Graphics can create a subset of the font in PostScript format.
- [CGFontPostScriptFormat](../cgfontpostscriptformat.md): Possible formats for a PostScript font subset.
- [createPostScriptEncoding(encoding:)](createpostscriptencoding%28encoding_%29.md): Creates a PostScript encoding of a font.

# CGFontCreatePostScriptSubset (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a subset of the font in the specified PostScript format.

## Declaration

```objectivec
extern CFDataRefCGFontCreatePostScriptSubset(CGFontRef font, CFStringRef subsetName, CGFontPostScriptFormat format, const CGGlyph *glyphs, size_t count, const CGGlyph encoding[256]);
```

## Parameters

- `font`: A font object.
- `subsetName`: The name of the subset.
- `format`: The PostScript format of the font.
- `glyphs`: An array that contains the glyphs in the subset.
- `count`: The number of glyphs specified by the `glyphs` array.
- `encoding`: The default encoding for the subset. You can pass `nil` if you do not want to specify an encoding.

<a id="return-value"></a>

## Return Value

A subset of the font created from the supplied parameters.

<a id="Discussion"></a>

## Discussion

For more information on PostScript format, see *Adobe Type 1 Font Format*, which is available from [http://partners.adobe.com/](http://partners.adobe.com/).

## See Also

### Working with PostScript Fonts

- [CGFontCopyPostScriptName](postscriptname.md): Obtains the PostScript name of a font.
- [CGFontCanCreatePostScriptSubset](cancreatepostscriptsubset%28__%29.md): Determines whether Core Graphics can create a subset of the font in PostScript format.
- [CGFontPostScriptFormat](../cgfontpostscriptformat.md): Possible formats for a PostScript font subset.
- [CGFontCreatePostScriptEncoding](createpostscriptencoding%28encoding_%29.md): Creates a PostScript encoding of a font.

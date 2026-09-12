> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgfont/postscriptname](https://developer.apple.com/documentation/coregraphics/cgfont/postscriptname)

# postScriptName (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Obtains the PostScript name of a font.

## Declaration

```swift
var postScriptName: CFString? { get }
```

<a id="Discussion"></a>

## Discussion

For more information on PostScript format, see *Adobe Type 1 Font Format*, which is available from [http://partners.adobe.com/](http://partners.adobe.com/).

## See Also

### Working with PostScript Fonts

- [canCreatePostScriptSubset(\_:)](cancreatepostscriptsubset%28__%29.md): Determines whether Core Graphics can create a subset of the font in PostScript format.
- [createPostScriptSubset(subsetName:format:glyphs:count:encoding:)](createpostscriptsubset%28subsetname_format_glyphs_count_encoding_%29.md): Creates a subset of the font in the specified PostScript format.
- [CGFontPostScriptFormat](../cgfontpostscriptformat.md): Possible formats for a PostScript font subset.
- [createPostScriptEncoding(encoding:)](createpostscriptencoding%28encoding_%29.md): Creates a PostScript encoding of a font.

# CGFontCopyPostScriptName (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Obtains the PostScript name of a font.

## Declaration

```objectivec
extern CFStringRefCGFontCopyPostScriptName(CGFontRef font);
```

## Parameters

- `font`: A font object.

<a id="return-value"></a>

## Return Value

The PostScript name of the font.

<a id="Discussion"></a>

## Discussion

For more information on PostScript format, see *Adobe Type 1 Font Format*, which is available from [http://partners.adobe.com/](http://partners.adobe.com/).

## See Also

### Working with PostScript Fonts

- [CGFontCanCreatePostScriptSubset](cancreatepostscriptsubset%28__%29.md): Determines whether Core Graphics can create a subset of the font in PostScript format.
- [CGFontCreatePostScriptSubset](createpostscriptsubset%28subsetname_format_glyphs_count_encoding_%29.md): Creates a subset of the font in the specified PostScript format.
- [CGFontPostScriptFormat](../cgfontpostscriptformat.md): Possible formats for a PostScript font subset.
- [CGFontCreatePostScriptEncoding](createpostscriptencoding%28encoding_%29.md): Creates a PostScript encoding of a font.

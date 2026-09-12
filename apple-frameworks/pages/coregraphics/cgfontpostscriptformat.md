> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgfontpostscriptformat](https://developer.apple.com/documentation/coregraphics/cgfontpostscriptformat)

# CGFontPostScriptFormat (Swift)

**Framework:** Core Graphics  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Possible formats for a PostScript font subset.

## Declaration

```swift
enum CGFontPostScriptFormat
```

## Topics

### Constants

- [CGFontPostScriptFormat.type1](cgfontpostscriptformat/type1.md): A Type 1 font format.
- [CGFontPostScriptFormat.type3](cgfontpostscriptformat/type3.md): A Type 3 PostScript format.
- [CGFontPostScriptFormat.type42](cgfontpostscriptformat/type42.md): A constant representing a Type 42 font format.

### Initializers

- [init(rawValue:)](cgfontpostscriptformat/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Working with PostScript Fonts

- [postScriptName](cgfont/postscriptname.md): Obtains the PostScript name of a font.
- [canCreatePostScriptSubset(\_:)](cgfont/cancreatepostscriptsubset%28__%29.md): Determines whether Core Graphics can create a subset of the font in PostScript format.
- [createPostScriptSubset(subsetName:format:glyphs:count:encoding:)](cgfont/createpostscriptsubset%28subsetname_format_glyphs_count_encoding_%29.md): Creates a subset of the font in the specified PostScript format.
- [createPostScriptEncoding(encoding:)](cgfont/createpostscriptencoding%28encoding_%29.md): Creates a PostScript encoding of a font.

# CGFontPostScriptFormat (Objective-C)

**Framework:** Core Graphics  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Possible formats for a PostScript font subset.

## Declaration

```objectivec
enum CGFontPostScriptFormat : int32_t;
```

## Topics

### Constants

- [kCGFontPostScriptFormatType1](cgfontpostscriptformat/type1.md): A Type 1 font format.
- [kCGFontPostScriptFormatType3](cgfontpostscriptformat/type3.md): A Type 3 PostScript format.
- [kCGFontPostScriptFormatType42](cgfontpostscriptformat/type42.md): A constant representing a Type 42 font format.

## See Also

### Working with PostScript Fonts

- [CGFontCopyPostScriptName](cgfont/postscriptname.md): Obtains the PostScript name of a font.
- [CGFontCanCreatePostScriptSubset](cgfont/cancreatepostscriptsubset%28__%29.md): Determines whether Core Graphics can create a subset of the font in PostScript format.
- [CGFontCreatePostScriptSubset](cgfont/createpostscriptsubset%28subsetname_format_glyphs_count_encoding_%29.md): Creates a subset of the font in the specified PostScript format.
- [CGFontCreatePostScriptEncoding](cgfont/createpostscriptencoding%28encoding_%29.md): Creates a PostScript encoding of a font.

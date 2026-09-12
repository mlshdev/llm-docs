> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfont/systemfontsize](https://developer.apple.com/documentation/appkit/nsfont/systemfontsize)

# systemFontSize (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Returns the size of the standard system font.

## Declaration

```swift
class var systemFontSize: CGFloat { get }
```

<a id="return-value"></a>

## Return Value

The standard system font size in points.

## See Also

### Creating System Fonts

- [preferredFont(forTextStyle:options:)](preferredfont%28fortextstyle_options_%29.md): Returns the font associated with the text style.
- [systemFont(ofSize:)](systemfont%28ofsize_%29.md): Returns the standard system font with the specified size.
- [systemFont(ofSize:weight:)](systemfont%28ofsize_weight_%29.md): Returns the standard system font with the specified size and weight.
- [boldSystemFont(ofSize:)](boldsystemfont%28ofsize_%29.md): Returns the standard system font in boldface type with the specified size.
- [monospacedSystemFont(ofSize:weight:)](monospacedsystemfont%28ofsize_weight_%29.md): Returns a monospace version of the system font with the specified size and weight.
- [monospacedDigitSystemFont(ofSize:weight:)](monospaceddigitsystemfont%28ofsize_weight_%29.md): Returns a version of the standard system font that contains monospaced digit glyphs.
- [smallSystemFontSize](smallsystemfontsize.md): Returns the size of the standard small system font.
- [NSFont.Weight](weight.md): System-defined font-weight values.
- [NSFont.TextStyle](textstyle.md): Constants that specify the preferred text styles you use with fonts.
- [NSFont.TextStyleOptionKey](textstyleoptionkey.md): The options that you apply when requesting the font or font descriptor of a preferred text style.

# systemFontSize (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Returns the size of the standard system font.

## Declaration

```objectivec
@property (class, readonly) CGFloat systemFontSize;
```

<a id="return-value"></a>

## Return Value

The standard system font size in points.

## See Also

### Creating System Fonts

- [preferredFontForTextStyle:options:](preferredfont%28fortextstyle_options_%29.md): Returns the font associated with the text style.
- [systemFontOfSize:](systemfont%28ofsize_%29.md): Returns the standard system font with the specified size.
- [systemFontOfSize:weight:](systemfont%28ofsize_weight_%29.md): Returns the standard system font with the specified size and weight.
- [boldSystemFontOfSize:](boldsystemfont%28ofsize_%29.md): Returns the standard system font in boldface type with the specified size.
- [monospacedSystemFontOfSize:weight:](monospacedsystemfont%28ofsize_weight_%29.md): Returns a monospace version of the system font with the specified size and weight.
- [monospacedDigitSystemFontOfSize:weight:](monospaceddigitsystemfont%28ofsize_weight_%29.md): Returns a version of the standard system font that contains monospaced digit glyphs.
- [smallSystemFontSize](smallsystemfontsize.md): Returns the size of the standard small system font.
- [NSFontWeight](weight.md): System-defined font-weight values.
- [NSFontTextStyle](textstyle.md): Constants that specify the preferred text styles you use with fonts.
- [NSFontTextStyleOptionKey](textstyleoptionkey.md): The options that you apply when requesting the font or font descriptor of a preferred text style.

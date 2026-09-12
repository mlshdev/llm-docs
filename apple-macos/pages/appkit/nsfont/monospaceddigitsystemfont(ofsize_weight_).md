> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfont/monospaceddigitsystemfont(ofsize:weight:)](https://developer.apple.com/documentation/appkit/nsfont/monospaceddigitsystemfont(ofsize:weight:))

# monospacedDigitSystemFont(ofSize:weight:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.11+

Returns a version of the standard system font that contains monospaced digit glyphs.

## Declaration

```swift
class func monospacedDigitSystemFont(ofSize fontSize: CGFloat, weight: NSFont.Weight) -> NSFont
```

## Parameters

- `fontSize`: The desired font size specified in points. If you specify `0.0` or a negative number for this parameter, the method returns the system font at the default size.
- `weight`: The desired weight of font lines, specified as one of the constants in [NSFont.Weight](weight.md).

<a id="return-value"></a>

## Return Value

A font object containing the system font with monospace digits at the specified size and weight.

<a id="Discussion"></a>

## Discussion

The font returned by this method has monospaced digit glyphs. Glyphs for other characters and symbols may be wider or narrower than the monospaced characters. To ensure the font uses fixed spacing for all characters, apply the [fixedAdvance](../nsfontdescriptor/attributename/fixedadvance.md) attribute to the any strings you render.

## See Also

### Creating System Fonts

- [preferredFont(forTextStyle:options:)](preferredfont%28fortextstyle_options_%29.md): Returns the font associated with the text style.
- [systemFont(ofSize:)](systemfont%28ofsize_%29.md): Returns the standard system font with the specified size.
- [systemFont(ofSize:weight:)](systemfont%28ofsize_weight_%29.md): Returns the standard system font with the specified size and weight.
- [boldSystemFont(ofSize:)](boldsystemfont%28ofsize_%29.md): Returns the standard system font in boldface type with the specified size.
- [monospacedSystemFont(ofSize:weight:)](monospacedsystemfont%28ofsize_weight_%29.md): Returns a monospace version of the system font with the specified size and weight.
- [systemFontSize](systemfontsize.md): Returns the size of the standard system font.
- [smallSystemFontSize](smallsystemfontsize.md): Returns the size of the standard small system font.
- [NSFont.Weight](weight.md): System-defined font-weight values.
- [NSFont.TextStyle](textstyle.md): Constants that specify the preferred text styles you use with fonts.
- [NSFont.TextStyleOptionKey](textstyleoptionkey.md): The options that you apply when requesting the font or font descriptor of a preferred text style.

# monospacedDigitSystemFontOfSize:weight: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.11+

Returns a version of the standard system font that contains monospaced digit glyphs.

## Declaration

```objectivec
+ (NSFont *) monospacedDigitSystemFontOfSize:(CGFloat) fontSize weight:(NSFontWeight) weight;
```

## Parameters

- `fontSize`: The desired font size specified in points. If you specify `0.0` or a negative number for this parameter, the method returns the system font at the default size.
- `weight`: The desired weight of font lines, specified as one of the constants in [NSFontWeight](weight.md).

<a id="return-value"></a>

## Return Value

A font object containing the system font with monospace digits at the specified size and weight.

<a id="Discussion"></a>

## Discussion

The font returned by this method has monospaced digit glyphs. Glyphs for other characters and symbols may be wider or narrower than the monospaced characters. To ensure the font uses fixed spacing for all characters, apply the [NSFontFixedAdvanceAttribute](../nsfontdescriptor/attributename/fixedadvance.md) attribute to the any strings you render.

## See Also

### Creating System Fonts

- [preferredFontForTextStyle:options:](preferredfont%28fortextstyle_options_%29.md): Returns the font associated with the text style.
- [systemFontOfSize:](systemfont%28ofsize_%29.md): Returns the standard system font with the specified size.
- [systemFontOfSize:weight:](systemfont%28ofsize_weight_%29.md): Returns the standard system font with the specified size and weight.
- [boldSystemFontOfSize:](boldsystemfont%28ofsize_%29.md): Returns the standard system font in boldface type with the specified size.
- [monospacedSystemFontOfSize:weight:](monospacedsystemfont%28ofsize_weight_%29.md): Returns a monospace version of the system font with the specified size and weight.
- [systemFontSize](systemfontsize.md): Returns the size of the standard system font.
- [smallSystemFontSize](smallsystemfontsize.md): Returns the size of the standard small system font.
- [NSFontWeight](weight.md): System-defined font-weight values.
- [NSFontTextStyle](textstyle.md): Constants that specify the preferred text styles you use with fonts.
- [NSFontTextStyleOptionKey](textstyleoptionkey.md): The options that you apply when requesting the font or font descriptor of a preferred text style.

> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfont/systemfont(ofsize:)](https://developer.apple.com/documentation/appkit/nsfont/systemfont(ofsize:))

# systemFont(ofSize:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Returns the standard system font with the specified size.

## Declaration

```swift
class func systemFont(ofSize fontSize: CGFloat) -> NSFont
```

## Parameters

- `fontSize`: The desired font size specified in points. If you specify `0.0` or a negative number for this parameter, the method returns the system font at the default size.

<a id="return-value"></a>

## Return Value

A font object containing the system font at the specified size.

<a id="Discussion"></a>

## Discussion

Use the returned font for standard interface items, including button labels, menu items, and so on that use the default font appearance.

## See Also

### Related Documentation

- [init(name:size:)](init%28name_size_%29.md): Creates a font object for the specified font name and font size.
- [userFixedPitchFont(ofSize:)](userfixedpitchfont%28ofsize_%29.md): Returns the font used by default for documents and other text under the user’s control (that is, text whose font the user can normally change), when that font should be fixed-pitch, in the specified size.
- [userFont(ofSize:)](userfont%28ofsize_%29.md): Returns the font used by default for documents and other text under the user’s control (that is, text whose font the user can normally change), in the specified size.

### Creating System Fonts

- [preferredFont(forTextStyle:options:)](preferredfont%28fortextstyle_options_%29.md): Returns the font associated with the text style.
- [systemFont(ofSize:weight:)](systemfont%28ofsize_weight_%29.md): Returns the standard system font with the specified size and weight.
- [boldSystemFont(ofSize:)](boldsystemfont%28ofsize_%29.md): Returns the standard system font in boldface type with the specified size.
- [monospacedSystemFont(ofSize:weight:)](monospacedsystemfont%28ofsize_weight_%29.md): Returns a monospace version of the system font with the specified size and weight.
- [monospacedDigitSystemFont(ofSize:weight:)](monospaceddigitsystemfont%28ofsize_weight_%29.md): Returns a version of the standard system font that contains monospaced digit glyphs.
- [systemFontSize](systemfontsize.md): Returns the size of the standard system font.
- [smallSystemFontSize](smallsystemfontsize.md): Returns the size of the standard small system font.
- [NSFont.Weight](weight.md): System-defined font-weight values.
- [NSFont.TextStyle](textstyle.md): Constants that specify the preferred text styles you use with fonts.
- [NSFont.TextStyleOptionKey](textstyleoptionkey.md): The options that you apply when requesting the font or font descriptor of a preferred text style.

# systemFontOfSize: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Returns the standard system font with the specified size.

## Declaration

```objectivec
+ (NSFont *) systemFontOfSize:(CGFloat) fontSize;
```

## Parameters

- `fontSize`: The desired font size specified in points. If you specify `0.0` or a negative number for this parameter, the method returns the system font at the default size.

<a id="return-value"></a>

## Return Value

A font object containing the system font at the specified size.

<a id="Discussion"></a>

## Discussion

Use the returned font for standard interface items, including button labels, menu items, and so on that use the default font appearance.

## See Also

### Related Documentation

- [fontWithName:size:](init%28name_size_%29.md): Creates a font object for the specified font name and font size.
- [userFixedPitchFontOfSize:](userfixedpitchfont%28ofsize_%29.md): Returns the font used by default for documents and other text under the user’s control (that is, text whose font the user can normally change), when that font should be fixed-pitch, in the specified size.
- [userFontOfSize:](userfont%28ofsize_%29.md): Returns the font used by default for documents and other text under the user’s control (that is, text whose font the user can normally change), in the specified size.

### Creating System Fonts

- [preferredFontForTextStyle:options:](preferredfont%28fortextstyle_options_%29.md): Returns the font associated with the text style.
- [systemFontOfSize:weight:](systemfont%28ofsize_weight_%29.md): Returns the standard system font with the specified size and weight.
- [boldSystemFontOfSize:](boldsystemfont%28ofsize_%29.md): Returns the standard system font in boldface type with the specified size.
- [monospacedSystemFontOfSize:weight:](monospacedsystemfont%28ofsize_weight_%29.md): Returns a monospace version of the system font with the specified size and weight.
- [monospacedDigitSystemFontOfSize:weight:](monospaceddigitsystemfont%28ofsize_weight_%29.md): Returns a version of the standard system font that contains monospaced digit glyphs.
- [systemFontSize](systemfontsize.md): Returns the size of the standard system font.
- [smallSystemFontSize](smallsystemfontsize.md): Returns the size of the standard small system font.
- [NSFontWeight](weight.md): System-defined font-weight values.
- [NSFontTextStyle](textstyle.md): Constants that specify the preferred text styles you use with fonts.
- [NSFontTextStyleOptionKey](textstyleoptionkey.md): The options that you apply when requesting the font or font descriptor of a preferred text style.

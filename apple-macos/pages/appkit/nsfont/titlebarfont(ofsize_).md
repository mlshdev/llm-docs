> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfont/titlebarfont(ofsize:)](https://developer.apple.com/documentation/appkit/nsfont/titlebarfont(ofsize:))

# titleBarFont(ofSize:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Returns the font used for window title bars, in the specified size.

## Declaration

```swift
class func titleBarFont(ofSize fontSize: CGFloat) -> NSFont
```

## Parameters

- `fontSize`: The size in points to which the font is scaled.

<a id="return-value"></a>

## Return Value

A font object of the specified size.

<a id="Discussion"></a>

## Discussion

If `fontSize` is 0 or negative, returns the title bar font at the default size. This method is equivalent to [boldSystemFont(ofSize:)](boldsystemfont%28ofsize_%29.md).

## See Also

### Creating UI Element Fonts

- [labelFont(ofSize:)](labelfont%28ofsize_%29.md): Returns the font used for standard interface labels in the specified size.
- [messageFont(ofSize:)](messagefont%28ofsize_%29.md): Returns the font used for standard interface items, such as button labels, menu items, and so on, in the specified size.
- [menuBarFont(ofSize:)](menubarfont%28ofsize_%29.md): Returns the font used for menu bar items, in the specified size.
- [menuFont(ofSize:)](menufont%28ofsize_%29.md): Returns the font used for menu items, in the specified size.
- [controlContentFont(ofSize:)](controlcontentfont%28ofsize_%29.md): Returns the font used for the content of controls in the specified size.
- [paletteFont(ofSize:)](palettefont%28ofsize_%29.md): Returns the font used for palette window title bars, in the specified size.
- [toolTipsFont(ofSize:)](tooltipsfont%28ofsize_%29.md): Returns the font used for tool tips labels, in the specified size.
- [labelFontSize](labelfontsize.md): Returns the size of the standard label font.
- [systemFontSize(for:)](systemfontsize%28for_%29.md): Returns the font size used for the specified control size.

# titleBarFontOfSize: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Returns the font used for window title bars, in the specified size.

## Declaration

```objectivec
+ (NSFont *) titleBarFontOfSize:(CGFloat) fontSize;
```

## Parameters

- `fontSize`: The size in points to which the font is scaled.

<a id="return-value"></a>

## Return Value

A font object of the specified size.

<a id="Discussion"></a>

## Discussion

If `fontSize` is 0 or negative, returns the title bar font at the default size. This method is equivalent to [boldSystemFontOfSize:](boldsystemfont%28ofsize_%29.md).

## See Also

### Creating UI Element Fonts

- [labelFontOfSize:](labelfont%28ofsize_%29.md): Returns the font used for standard interface labels in the specified size.
- [messageFontOfSize:](messagefont%28ofsize_%29.md): Returns the font used for standard interface items, such as button labels, menu items, and so on, in the specified size.
- [menuBarFontOfSize:](menubarfont%28ofsize_%29.md): Returns the font used for menu bar items, in the specified size.
- [menuFontOfSize:](menufont%28ofsize_%29.md): Returns the font used for menu items, in the specified size.
- [controlContentFontOfSize:](controlcontentfont%28ofsize_%29.md): Returns the font used for the content of controls in the specified size.
- [paletteFontOfSize:](palettefont%28ofsize_%29.md): Returns the font used for palette window title bars, in the specified size.
- [toolTipsFontOfSize:](tooltipsfont%28ofsize_%29.md): Returns the font used for tool tips labels, in the specified size.
- [labelFontSize](labelfontsize.md): Returns the size of the standard label font.
- [systemFontSizeForControlSize:](systemfontsize%28for_%29.md): Returns the font size used for the specified control size.

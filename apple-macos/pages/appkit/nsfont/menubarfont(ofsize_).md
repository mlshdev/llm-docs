> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfont/menubarfont(ofsize:)](https://developer.apple.com/documentation/appkit/nsfont/menubarfont(ofsize:))

# menuBarFont(ofSize:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Returns the font used for menu bar items, in the specified size.

## Declaration

```swift
class func menuBarFont(ofSize fontSize: CGFloat) -> NSFont
```

## Parameters

- `fontSize`: The size in points to which the font is scaled.

<a id="return-value"></a>

## Return Value

A font object of the specified size.

<a id="Discussion"></a>

## Discussion

If `fontSize` is 0 or negative, returns the menu bar font with the default size.

## See Also

### Related Documentation

- [init(name:size:)](init%28name_size_%29.md): Creates a font object for the specified font name and font size.

### Creating UI Element Fonts

- [labelFont(ofSize:)](labelfont%28ofsize_%29.md): Returns the font used for standard interface labels in the specified size.
- [messageFont(ofSize:)](messagefont%28ofsize_%29.md): Returns the font used for standard interface items, such as button labels, menu items, and so on, in the specified size.
- [menuFont(ofSize:)](menufont%28ofsize_%29.md): Returns the font used for menu items, in the specified size.
- [controlContentFont(ofSize:)](controlcontentfont%28ofsize_%29.md): Returns the font used for the content of controls in the specified size.
- [titleBarFont(ofSize:)](titlebarfont%28ofsize_%29.md): Returns the font used for window title bars, in the specified size.
- [paletteFont(ofSize:)](palettefont%28ofsize_%29.md): Returns the font used for palette window title bars, in the specified size.
- [toolTipsFont(ofSize:)](tooltipsfont%28ofsize_%29.md): Returns the font used for tool tips labels, in the specified size.
- [labelFontSize](labelfontsize.md): Returns the size of the standard label font.
- [systemFontSize(for:)](systemfontsize%28for_%29.md): Returns the font size used for the specified control size.

# menuBarFontOfSize: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Returns the font used for menu bar items, in the specified size.

## Declaration

```objectivec
+ (NSFont *) menuBarFontOfSize:(CGFloat) fontSize;
```

## Parameters

- `fontSize`: The size in points to which the font is scaled.

<a id="return-value"></a>

## Return Value

A font object of the specified size.

<a id="Discussion"></a>

## Discussion

If `fontSize` is 0 or negative, returns the menu bar font with the default size.

## See Also

### Related Documentation

- [fontWithName:size:](init%28name_size_%29.md): Creates a font object for the specified font name and font size.

### Creating UI Element Fonts

- [labelFontOfSize:](labelfont%28ofsize_%29.md): Returns the font used for standard interface labels in the specified size.
- [messageFontOfSize:](messagefont%28ofsize_%29.md): Returns the font used for standard interface items, such as button labels, menu items, and so on, in the specified size.
- [menuFontOfSize:](menufont%28ofsize_%29.md): Returns the font used for menu items, in the specified size.
- [controlContentFontOfSize:](controlcontentfont%28ofsize_%29.md): Returns the font used for the content of controls in the specified size.
- [titleBarFontOfSize:](titlebarfont%28ofsize_%29.md): Returns the font used for window title bars, in the specified size.
- [paletteFontOfSize:](palettefont%28ofsize_%29.md): Returns the font used for palette window title bars, in the specified size.
- [toolTipsFontOfSize:](tooltipsfont%28ofsize_%29.md): Returns the font used for tool tips labels, in the specified size.
- [labelFontSize](labelfontsize.md): Returns the size of the standard label font.
- [systemFontSizeForControlSize:](systemfontsize%28for_%29.md): Returns the font size used for the specified control size.

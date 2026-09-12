> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfont/labelfontsize](https://developer.apple.com/documentation/appkit/nsfont/labelfontsize)

# labelFontSize (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Returns the size of the standard label font.

## Declaration

```swift
class var labelFontSize: CGFloat { get }
```

<a id="return-value"></a>

## Return Value

The label font size in points.

<a id="Discussion"></a>

## Discussion

The label font (Lucida Grande Regular 10 point) is used for the labels on toolbar buttons and to label tick marks on full-size sliders. For more information on system fonts, see Human Interface Guidelines \> [Typography](https://developer.apple.com/design/human-interface-guidelines/typography).

## See Also

### Creating UI Element Fonts

- [labelFont(ofSize:)](labelfont%28ofsize_%29.md): Returns the font used for standard interface labels in the specified size.
- [messageFont(ofSize:)](messagefont%28ofsize_%29.md): Returns the font used for standard interface items, such as button labels, menu items, and so on, in the specified size.
- [menuBarFont(ofSize:)](menubarfont%28ofsize_%29.md): Returns the font used for menu bar items, in the specified size.
- [menuFont(ofSize:)](menufont%28ofsize_%29.md): Returns the font used for menu items, in the specified size.
- [controlContentFont(ofSize:)](controlcontentfont%28ofsize_%29.md): Returns the font used for the content of controls in the specified size.
- [titleBarFont(ofSize:)](titlebarfont%28ofsize_%29.md): Returns the font used for window title bars, in the specified size.
- [paletteFont(ofSize:)](palettefont%28ofsize_%29.md): Returns the font used for palette window title bars, in the specified size.
- [toolTipsFont(ofSize:)](tooltipsfont%28ofsize_%29.md): Returns the font used for tool tips labels, in the specified size.
- [systemFontSize(for:)](systemfontsize%28for_%29.md): Returns the font size used for the specified control size.

# labelFontSize (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Returns the size of the standard label font.

## Declaration

```objectivec
@property (class, readonly) CGFloat labelFontSize;
```

<a id="return-value"></a>

## Return Value

The label font size in points.

<a id="Discussion"></a>

## Discussion

The label font (Lucida Grande Regular 10 point) is used for the labels on toolbar buttons and to label tick marks on full-size sliders. For more information on system fonts, see Human Interface Guidelines \> [Typography](https://developer.apple.com/design/human-interface-guidelines/typography).

## See Also

### Creating UI Element Fonts

- [labelFontOfSize:](labelfont%28ofsize_%29.md): Returns the font used for standard interface labels in the specified size.
- [messageFontOfSize:](messagefont%28ofsize_%29.md): Returns the font used for standard interface items, such as button labels, menu items, and so on, in the specified size.
- [menuBarFontOfSize:](menubarfont%28ofsize_%29.md): Returns the font used for menu bar items, in the specified size.
- [menuFontOfSize:](menufont%28ofsize_%29.md): Returns the font used for menu items, in the specified size.
- [controlContentFontOfSize:](controlcontentfont%28ofsize_%29.md): Returns the font used for the content of controls in the specified size.
- [titleBarFontOfSize:](titlebarfont%28ofsize_%29.md): Returns the font used for window title bars, in the specified size.
- [paletteFontOfSize:](palettefont%28ofsize_%29.md): Returns the font used for palette window title bars, in the specified size.
- [toolTipsFontOfSize:](tooltipsfont%28ofsize_%29.md): Returns the font used for tool tips labels, in the specified size.
- [systemFontSizeForControlSize:](systemfontsize%28for_%29.md): Returns the font size used for the specified control size.

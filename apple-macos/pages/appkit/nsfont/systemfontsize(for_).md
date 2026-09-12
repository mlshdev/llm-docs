> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfont/systemfontsize(for:)](https://developer.apple.com/documentation/appkit/nsfont/systemfontsize(for:))

# systemFontSize(for:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Returns the font size used for the specified control size.

## Declaration

```swift
class func systemFontSize(for controlSize: NSControl.ControlSize) -> CGFloat
```

## Parameters

- `controlSize`: The control size constant.

<a id="return-value"></a>

## Return Value

The font size in points for the specified control size.

<a id="Discussion"></a>

## Discussion

If `controlSize` does not correspond to a valid `NSControlSize`, returns the size of the standard system font.

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
- [labelFontSize](labelfontsize.md): Returns the size of the standard label font.

# systemFontSizeForControlSize: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Returns the font size used for the specified control size.

## Declaration

```objectivec
+ (CGFloat) systemFontSizeForControlSize:(NSControlSize) controlSize;
```

## Parameters

- `controlSize`: The control size constant.

<a id="return-value"></a>

## Return Value

The font size in points for the specified control size.

<a id="Discussion"></a>

## Discussion

If `controlSize` does not correspond to a valid `NSControlSize`, returns the size of the standard system font.

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
- [labelFontSize](labelfontsize.md): Returns the size of the standard label font.

> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfontmanager/convert(_:tosize:)](https://developer.apple.com/documentation/appkit/nsfontmanager/convert(_:tosize:))

# convert(\_:toSize:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a font object whose traits are the same as those of the given font, except for the size, which is changed to the given size.

## Declaration

```swift
func convert(_ fontObj: NSFont, toSize size: CGFloat) -> NSFont
```

## Parameters

- `fontObj`: The font whose traits are matched.
- `size`: The new font size.

<a id="return-value"></a>

## Return Value

A font with matching traits except in the new size, or `aFont` if it can’t be converted.

## See Also

### Related Documentation

- [convert(\_:)](convert%28__%29.md): Converts the given font according to the object that initiated a font change, typically the Font panel or Font menu.

### Converting Fonts Manually

- [convert(\_:toFace:)](convert%28__toface_%29.md): Returns a font whose traits are as similar as possible to those of the given font except for the typeface, which is changed to the given typeface.
- [convert(\_:toFamily:)](convert%28__tofamily_%29.md): Returns a font whose traits are as similar as possible to those of the given font except for the font family, which is changed to the given family.
- [convert(\_:toHaveTrait:)](convert%28__tohavetrait_%29.md): Returns a new version of the font object containing a single additional trait.
- [convert(\_:toNotHaveTrait:)](convert%28__tonothavetrait_%29.md): Returns a new version of a font object without the specified traits.
- [convertWeight(\_:of:)](convertweight%28__of_%29.md): Returns a font object whose weight is greater or lesser than that of the given font.
- [currentFontAction](currentfontaction.md): The current font conversion action.
- [convertFontTraits(\_:)](convertfonttraits%28__%29.md): Converts font traits to a new traits mask value.

# convertFont:toSize: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a font object whose traits are the same as those of the given font, except for the size, which is changed to the given size.

## Declaration

```objectivec
- (NSFont *) convertFont:(NSFont *) fontObj toSize:(CGFloat) size;
```

## Parameters

- `fontObj`: The font whose traits are matched.
- `size`: The new font size.

<a id="return-value"></a>

## Return Value

A font with matching traits except in the new size, or `aFont` if it can’t be converted.

## See Also

### Related Documentation

- [convertFont:](convert%28__%29.md): Converts the given font according to the object that initiated a font change, typically the Font panel or Font menu.

### Converting Fonts Manually

- [convertFont:toFace:](convert%28__toface_%29.md): Returns a font whose traits are as similar as possible to those of the given font except for the typeface, which is changed to the given typeface.
- [convertFont:toFamily:](convert%28__tofamily_%29.md): Returns a font whose traits are as similar as possible to those of the given font except for the font family, which is changed to the given family.
- [convertFont:toHaveTrait:](convert%28__tohavetrait_%29.md): Returns a new version of the font object containing a single additional trait.
- [convertFont:toNotHaveTrait:](convert%28__tonothavetrait_%29.md): Returns a new version of a font object without the specified traits.
- [convertWeight:ofFont:](convertweight%28__of_%29.md): Returns a font object whose weight is greater or lesser than that of the given font.
- [currentFontAction](currentfontaction.md): The current font conversion action.
- [convertFontTraits:](convertfonttraits%28__%29.md): Converts font traits to a new traits mask value.

> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfontmanager/convert(_:toface:)](https://developer.apple.com/documentation/appkit/nsfontmanager/convert(_:toface:))

# convert(\_:toFace:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a font whose traits are as similar as possible to those of the given font except for the typeface, which is changed to the given typeface.

## Declaration

```swift
func convert(_ fontObj: NSFont, toFace typeface: String) -> NSFont?
```

## Parameters

- `fontObj`: The font whose traits are matched.
- `typeface`: The new typeface; a fully specified family-face name, such as Helvetica-BoldOblique or Times-Roman.

<a id="return-value"></a>

## Return Value

A font with matching traits and the given typeface, or `aFont` if it can’t be converted.

<a id="Discussion"></a>

## Discussion

This method attempts to match the weight and posture of `aFont` as closely as possible. Italic is mapped to Oblique, for example. Weights are mapped based on an approximate numeric scale of 0 to 15.

## See Also

### Related Documentation

- [convert(\_:)](convert%28__%29.md): Converts the given font according to the object that initiated a font change, typically the Font panel or Font menu.

### Converting Fonts Manually

- [convert(\_:toFamily:)](convert%28__tofamily_%29.md): Returns a font whose traits are as similar as possible to those of the given font except for the font family, which is changed to the given family.
- [convert(\_:toHaveTrait:)](convert%28__tohavetrait_%29.md): Returns a new version of the font object containing a single additional trait.
- [convert(\_:toNotHaveTrait:)](convert%28__tonothavetrait_%29.md): Returns a new version of a font object without the specified traits.
- [convert(\_:toSize:)](convert%28__tosize_%29.md): Returns a font object whose traits are the same as those of the given font, except for the size, which is changed to the given size.
- [convertWeight(\_:of:)](convertweight%28__of_%29.md): Returns a font object whose weight is greater or lesser than that of the given font.
- [currentFontAction](currentfontaction.md): The current font conversion action.
- [convertFontTraits(\_:)](convertfonttraits%28__%29.md): Converts font traits to a new traits mask value.

# convertFont:toFace: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a font whose traits are as similar as possible to those of the given font except for the typeface, which is changed to the given typeface.

## Declaration

```objectivec
- (NSFont *) convertFont:(NSFont *) fontObj toFace:(NSString *) typeface;
```

## Parameters

- `fontObj`: The font whose traits are matched.
- `typeface`: The new typeface; a fully specified family-face name, such as Helvetica-BoldOblique or Times-Roman.

<a id="return-value"></a>

## Return Value

A font with matching traits and the given typeface, or `aFont` if it can’t be converted.

<a id="Discussion"></a>

## Discussion

This method attempts to match the weight and posture of `aFont` as closely as possible. Italic is mapped to Oblique, for example. Weights are mapped based on an approximate numeric scale of 0 to 15.

## See Also

### Related Documentation

- [convertFont:](convert%28__%29.md): Converts the given font according to the object that initiated a font change, typically the Font panel or Font menu.

### Converting Fonts Manually

- [convertFont:toFamily:](convert%28__tofamily_%29.md): Returns a font whose traits are as similar as possible to those of the given font except for the font family, which is changed to the given family.
- [convertFont:toHaveTrait:](convert%28__tohavetrait_%29.md): Returns a new version of the font object containing a single additional trait.
- [convertFont:toNotHaveTrait:](convert%28__tonothavetrait_%29.md): Returns a new version of a font object without the specified traits.
- [convertFont:toSize:](convert%28__tosize_%29.md): Returns a font object whose traits are the same as those of the given font, except for the size, which is changed to the given size.
- [convertWeight:ofFont:](convertweight%28__of_%29.md): Returns a font object whose weight is greater or lesser than that of the given font.
- [currentFontAction](currentfontaction.md): The current font conversion action.
- [convertFontTraits:](convertfonttraits%28__%29.md): Converts font traits to a new traits mask value.

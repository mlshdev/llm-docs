> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfontmanager/convertweight(_:of:)](https://developer.apple.com/documentation/appkit/nsfontmanager/convertweight(_:of:))

# convertWeight(\_:of:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a font object whose weight is greater or lesser than that of the given font.

## Declaration

```swift
func convertWeight(_ upFlag: Bool, of fontObj: NSFont) -> NSFont
```

## Parameters

- `upFlag`: If [true](https://developer.apple.com/documentation/swift/true), a heavier font is returned; if it’s [false](https://developer.apple.com/documentation/swift/false), a lighter font is returned.
- `fontObj`: The font whose weight is increased or decreased.

<a id="return-value"></a>

## Return Value

A font with matching traits except for the new weight, or `aFont` if it can’t be converted.

<a id="Discussion"></a>

## Discussion

Weights are graded along the following scale. The list on the left gives Apple’s terminology, and the list on the right gives the ISO equivalents. Names on the same line are treated as identical:

| Apple Terminology | ISO Equivalent |
| --- | --- |
| \1. ultralight |  |
| \2. thin | W1. ultralight |
| \3. light, extralight | W2. extralight |
| \4. book | W3. light |
| \5. regular, plain, display, roman | W4. semilight |
| \6. medium | W5. medium |
| \7. demi, demibold |  |
| \8. semi, semibold | W6. semibold |
| \9. bold | W7. bold |
| \10. extra, extrabold | W8. extrabold |
| \11. heavy, heavyface |  |
| \12. black, super | W9. ultrabold |
| \13. ultra, ultrablack, fat |  |
| \14. extrablack, obese, nord |  |

The `NSFontManager` implementation of this method refuses to convert a font’s weight if it can’t maintain all other traits, such as italic and condensed. You might wish to override this method to allow a looser interpretation of weight conversion.

## See Also

### Related Documentation

- [convert(\_:)](convert%28__%29.md): Converts the given font according to the object that initiated a font change, typically the Font panel or Font menu.

### Converting Fonts Manually

- [convert(\_:toFace:)](convert%28__toface_%29.md): Returns a font whose traits are as similar as possible to those of the given font except for the typeface, which is changed to the given typeface.
- [convert(\_:toFamily:)](convert%28__tofamily_%29.md): Returns a font whose traits are as similar as possible to those of the given font except for the font family, which is changed to the given family.
- [convert(\_:toHaveTrait:)](convert%28__tohavetrait_%29.md): Returns a new version of the font object containing a single additional trait.
- [convert(\_:toNotHaveTrait:)](convert%28__tonothavetrait_%29.md): Returns a new version of a font object without the specified traits.
- [convert(\_:toSize:)](convert%28__tosize_%29.md): Returns a font object whose traits are the same as those of the given font, except for the size, which is changed to the given size.
- [currentFontAction](currentfontaction.md): The current font conversion action.
- [convertFontTraits(\_:)](convertfonttraits%28__%29.md): Converts font traits to a new traits mask value.

# convertWeight:ofFont: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a font object whose weight is greater or lesser than that of the given font.

## Declaration

```objectivec
- (NSFont *) convertWeight:(BOOL) upFlag ofFont:(NSFont *) fontObj;
```

## Parameters

- `upFlag`: If [true](https://developer.apple.com/documentation/swift/true), a heavier font is returned; if it’s [false](https://developer.apple.com/documentation/swift/false), a lighter font is returned.
- `fontObj`: The font whose weight is increased or decreased.

<a id="return-value"></a>

## Return Value

A font with matching traits except for the new weight, or `aFont` if it can’t be converted.

<a id="Discussion"></a>

## Discussion

Weights are graded along the following scale. The list on the left gives Apple’s terminology, and the list on the right gives the ISO equivalents. Names on the same line are treated as identical:

| Apple Terminology | ISO Equivalent |
| --- | --- |
| \1. ultralight |  |
| \2. thin | W1. ultralight |
| \3. light, extralight | W2. extralight |
| \4. book | W3. light |
| \5. regular, plain, display, roman | W4. semilight |
| \6. medium | W5. medium |
| \7. demi, demibold |  |
| \8. semi, semibold | W6. semibold |
| \9. bold | W7. bold |
| \10. extra, extrabold | W8. extrabold |
| \11. heavy, heavyface |  |
| \12. black, super | W9. ultrabold |
| \13. ultra, ultrablack, fat |  |
| \14. extrablack, obese, nord |  |

The `NSFontManager` implementation of this method refuses to convert a font’s weight if it can’t maintain all other traits, such as italic and condensed. You might wish to override this method to allow a looser interpretation of weight conversion.

## See Also

### Related Documentation

- [convertFont:](convert%28__%29.md): Converts the given font according to the object that initiated a font change, typically the Font panel or Font menu.

### Converting Fonts Manually

- [convertFont:toFace:](convert%28__toface_%29.md): Returns a font whose traits are as similar as possible to those of the given font except for the typeface, which is changed to the given typeface.
- [convertFont:toFamily:](convert%28__tofamily_%29.md): Returns a font whose traits are as similar as possible to those of the given font except for the font family, which is changed to the given family.
- [convertFont:toHaveTrait:](convert%28__tohavetrait_%29.md): Returns a new version of the font object containing a single additional trait.
- [convertFont:toNotHaveTrait:](convert%28__tonothavetrait_%29.md): Returns a new version of a font object without the specified traits.
- [convertFont:toSize:](convert%28__tosize_%29.md): Returns a font object whose traits are the same as those of the given font, except for the size, which is changed to the given size.
- [currentFontAction](currentfontaction.md): The current font conversion action.
- [convertFontTraits:](convertfonttraits%28__%29.md): Converts font traits to a new traits mask value.

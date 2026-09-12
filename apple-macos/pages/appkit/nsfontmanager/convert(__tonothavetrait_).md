> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfontmanager/convert(_:tonothavetrait:)](https://developer.apple.com/documentation/appkit/nsfontmanager/convert(_:tonothavetrait:))

# convert(\_:toNotHaveTrait:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a new version of a font object without the specified traits.

## Declaration

```swift
func convert(_ fontObj: NSFont, toNotHaveTrait trait: NSFontTraitMask) -> NSFont
```

## Parameters

- `fontObj`: The font whose traits are matched.
- `trait`: The mask for the traits to remove, created using the C bitwise OR operator to combine the traits described in `Constants`. Using [boldFontMask](../nsfonttraitmask/boldfontmask.md) or [italicFontMask](../nsfonttraitmask/italicfontmask.md) removes the bold or italic trait, respectively.

<a id="return-value"></a>

## Return Value

A font with matching traits minus the given traits, or `aFont` if it can’t be converted.

## See Also

### Related Documentation

- [convert(\_:)](convert%28__%29.md): Converts the given font according to the object that initiated a font change, typically the Font panel or Font menu.

### Converting Fonts Manually

- [convert(\_:toFace:)](convert%28__toface_%29.md): Returns a font whose traits are as similar as possible to those of the given font except for the typeface, which is changed to the given typeface.
- [convert(\_:toFamily:)](convert%28__tofamily_%29.md): Returns a font whose traits are as similar as possible to those of the given font except for the font family, which is changed to the given family.
- [convert(\_:toHaveTrait:)](convert%28__tohavetrait_%29.md): Returns a new version of the font object containing a single additional trait.
- [convert(\_:toSize:)](convert%28__tosize_%29.md): Returns a font object whose traits are the same as those of the given font, except for the size, which is changed to the given size.
- [convertWeight(\_:of:)](convertweight%28__of_%29.md): Returns a font object whose weight is greater or lesser than that of the given font.
- [currentFontAction](currentfontaction.md): The current font conversion action.
- [convertFontTraits(\_:)](convertfonttraits%28__%29.md): Converts font traits to a new traits mask value.

# convertFont:toNotHaveTrait: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a new version of a font object without the specified traits.

## Declaration

```objectivec
- (NSFont *) convertFont:(NSFont *) fontObj toNotHaveTrait:(NSFontTraitMask) trait;
```

## Parameters

- `fontObj`: The font whose traits are matched.
- `trait`: The mask for the traits to remove, created using the C bitwise OR operator to combine the traits described in `Constants`. Using [NSBoldFontMask](../nsfonttraitmask/boldfontmask.md) or [NSItalicFontMask](../nsfonttraitmask/italicfontmask.md) removes the bold or italic trait, respectively.

<a id="return-value"></a>

## Return Value

A font with matching traits minus the given traits, or `aFont` if it can’t be converted.

## See Also

### Related Documentation

- [convertFont:](convert%28__%29.md): Converts the given font according to the object that initiated a font change, typically the Font panel or Font menu.

### Converting Fonts Manually

- [convertFont:toFace:](convert%28__toface_%29.md): Returns a font whose traits are as similar as possible to those of the given font except for the typeface, which is changed to the given typeface.
- [convertFont:toFamily:](convert%28__tofamily_%29.md): Returns a font whose traits are as similar as possible to those of the given font except for the font family, which is changed to the given family.
- [convertFont:toHaveTrait:](convert%28__tohavetrait_%29.md): Returns a new version of the font object containing a single additional trait.
- [convertFont:toSize:](convert%28__tosize_%29.md): Returns a font object whose traits are the same as those of the given font, except for the size, which is changed to the given size.
- [convertWeight:ofFont:](convertweight%28__of_%29.md): Returns a font object whose weight is greater or lesser than that of the given font.
- [currentFontAction](currentfontaction.md): The current font conversion action.
- [convertFontTraits:](convertfonttraits%28__%29.md): Converts font traits to a new traits mask value.

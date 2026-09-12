> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfontmanager/convertfonttraits(_:)](https://developer.apple.com/documentation/appkit/nsfontmanager/convertfonttraits(_:))

# convertFontTraits(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Converts font traits to a new traits mask value.

## Declaration

```swift
func convertFontTraits(_ traits: NSFontTraitMask) -> NSFontTraitMask
```

## Parameters

- `traits`: The current font traits.

<a id="return-value"></a>

## Return Value

The new traits mask value to be used by [convert(\_:)](convert%28__%29.md).

<a id="Discussion"></a>

## Discussion

This method is intended to be invoked to query the font traits while the action message (usually [changeFont:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/changefont:)) is being invoked when the current font action is either [NSFontAction.addTraitFontAction](../nsfontaction/addtraitfontaction.md) or [NSFontAction.removeTraitFontAction](../nsfontaction/removetraitfontaction.md).

## See Also

### Converting Fonts Manually

- [convert(\_:toFace:)](convert%28__toface_%29.md): Returns a font whose traits are as similar as possible to those of the given font except for the typeface, which is changed to the given typeface.
- [convert(\_:toFamily:)](convert%28__tofamily_%29.md): Returns a font whose traits are as similar as possible to those of the given font except for the font family, which is changed to the given family.
- [convert(\_:toHaveTrait:)](convert%28__tohavetrait_%29.md): Returns a new version of the font object containing a single additional trait.
- [convert(\_:toNotHaveTrait:)](convert%28__tonothavetrait_%29.md): Returns a new version of a font object without the specified traits.
- [convert(\_:toSize:)](convert%28__tosize_%29.md): Returns a font object whose traits are the same as those of the given font, except for the size, which is changed to the given size.
- [convertWeight(\_:of:)](convertweight%28__of_%29.md): Returns a font object whose weight is greater or lesser than that of the given font.
- [currentFontAction](currentfontaction.md): The current font conversion action.

# convertFontTraits: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Converts font traits to a new traits mask value.

## Declaration

```objectivec
- (NSFontTraitMask) convertFontTraits:(NSFontTraitMask) traits;
```

## Parameters

- `traits`: The current font traits.

<a id="return-value"></a>

## Return Value

The new traits mask value to be used by [convertFont:](convert%28__%29.md).

<a id="Discussion"></a>

## Discussion

This method is intended to be invoked to query the font traits while the action message (usually [changeFont:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/changefont:)) is being invoked when the current font action is either [NSAddTraitFontAction](../nsfontaction/addtraitfontaction.md) or [NSRemoveTraitFontAction](../nsfontaction/removetraitfontaction.md).

## See Also

### Converting Fonts Manually

- [convertFont:toFace:](convert%28__toface_%29.md): Returns a font whose traits are as similar as possible to those of the given font except for the typeface, which is changed to the given typeface.
- [convertFont:toFamily:](convert%28__tofamily_%29.md): Returns a font whose traits are as similar as possible to those of the given font except for the font family, which is changed to the given family.
- [convertFont:toHaveTrait:](convert%28__tohavetrait_%29.md): Returns a new version of the font object containing a single additional trait.
- [convertFont:toNotHaveTrait:](convert%28__tonothavetrait_%29.md): Returns a new version of a font object without the specified traits.
- [convertFont:toSize:](convert%28__tosize_%29.md): Returns a font object whose traits are the same as those of the given font, except for the size, which is changed to the given size.
- [convertWeight:ofFont:](convertweight%28__of_%29.md): Returns a font object whose weight is greater or lesser than that of the given font.
- [currentFontAction](currentfontaction.md): The current font conversion action.

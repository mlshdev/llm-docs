> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfontmanager/currentfontaction](https://developer.apple.com/documentation/appkit/nsfontmanager/currentfontaction)

# currentFontAction (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The current font conversion action.

## Declaration

```swift
var currentFontAction: NSFontAction { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property represents the current font action used by the [convert(\_:)](convert%28__%29.md) method. This property is intended to be used to query the font conversion action while the action message (usually [changeFont:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/changefont:)) is being invoked.

## See Also

### Converting Fonts Manually

- [convert(\_:toFace:)](convert%28__toface_%29.md): Returns a font whose traits are as similar as possible to those of the given font except for the typeface, which is changed to the given typeface.
- [convert(\_:toFamily:)](convert%28__tofamily_%29.md): Returns a font whose traits are as similar as possible to those of the given font except for the font family, which is changed to the given family.
- [convert(\_:toHaveTrait:)](convert%28__tohavetrait_%29.md): Returns a new version of the font object containing a single additional trait.
- [convert(\_:toNotHaveTrait:)](convert%28__tonothavetrait_%29.md): Returns a new version of a font object without the specified traits.
- [convert(\_:toSize:)](convert%28__tosize_%29.md): Returns a font object whose traits are the same as those of the given font, except for the size, which is changed to the given size.
- [convertWeight(\_:of:)](convertweight%28__of_%29.md): Returns a font object whose weight is greater or lesser than that of the given font.
- [convertFontTraits(\_:)](convertfonttraits%28__%29.md): Converts font traits to a new traits mask value.

# currentFontAction (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The current font conversion action.

## Declaration

```objectivec
@property (readonly) NSFontAction currentFontAction;
```

<a id="Discussion"></a>

## Discussion

The value of this property represents the current font action used by the [convertFont:](convert%28__%29.md) method. This property is intended to be used to query the font conversion action while the action message (usually [changeFont:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/changefont:)) is being invoked.

## See Also

### Converting Fonts Manually

- [convertFont:toFace:](convert%28__toface_%29.md): Returns a font whose traits are as similar as possible to those of the given font except for the typeface, which is changed to the given typeface.
- [convertFont:toFamily:](convert%28__tofamily_%29.md): Returns a font whose traits are as similar as possible to those of the given font except for the font family, which is changed to the given family.
- [convertFont:toHaveTrait:](convert%28__tohavetrait_%29.md): Returns a new version of the font object containing a single additional trait.
- [convertFont:toNotHaveTrait:](convert%28__tonothavetrait_%29.md): Returns a new version of a font object without the specified traits.
- [convertFont:toSize:](convert%28__tosize_%29.md): Returns a font object whose traits are the same as those of the given font, except for the size, which is changed to the given size.
- [convertWeight:ofFont:](convertweight%28__of_%29.md): Returns a font object whose weight is greater or lesser than that of the given font.
- [convertFontTraits:](convertfonttraits%28__%29.md): Converts font traits to a new traits mask value.

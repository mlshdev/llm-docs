> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfontmanager/convert(_:)](https://developer.apple.com/documentation/appkit/nsfontmanager/convert(_:))

# convert(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Converts the given font according to the object that initiated a font change, typically the Font panel or Font menu.

## Declaration

```swift
func convert(_ fontObj: NSFont) -> NSFont
```

## Parameters

- `fontObj`: The font to convert.

<a id="return-value"></a>

## Return Value

The converted font, or `aFont` itself if the conversion isn’t possible.

<a id="Discussion"></a>

## Discussion

This method is invoked in response to an action message such as [addFontTrait(\_:)](addfonttrait%28__%29.md) or [modifyFontViaPanel(\_:)](modifyfontviapanel%28__%29.md). These initiating methods cause the font manager to query the sender for the action to take and the traits to change. See Converting Fonts Manually for more information.

## See Also

### Related Documentation

- [convert(\_:toFamily:)](convert%28__tofamily_%29.md): Returns a font whose traits are as similar as possible to those of the given font except for the font family, which is changed to the given family.
- [convert(\_:toSize:)](convert%28__tosize_%29.md): Returns a font object whose traits are the same as those of the given font, except for the size, which is changed to the given size.
- [convert(\_:toHaveTrait:)](convert%28__tohavetrait_%29.md): Returns a new version of the font object containing a single additional trait.
- [convert(\_:toNotHaveTrait:)](convert%28__tonothavetrait_%29.md): Returns a new version of a font object without the specified traits.
- [convertWeight(\_:of:)](convertweight%28__of_%29.md): Returns a font object whose weight is greater or lesser than that of the given font.
- [convert(\_:toFace:)](convert%28__toface_%29.md): Returns a font whose traits are as similar as possible to those of the given font except for the typeface, which is changed to the given typeface.

# convertFont: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Converts the given font according to the object that initiated a font change, typically the Font panel or Font menu.

## Declaration

```objectivec
- (NSFont *) convertFont:(NSFont *) fontObj;
```

## Parameters

- `fontObj`: The font to convert.

<a id="return-value"></a>

## Return Value

The converted font, or `aFont` itself if the conversion isn’t possible.

<a id="Discussion"></a>

## Discussion

This method is invoked in response to an action message such as [addFontTrait:](addfonttrait%28__%29.md) or [modifyFontViaPanel:](modifyfontviapanel%28__%29.md). These initiating methods cause the font manager to query the sender for the action to take and the traits to change. See Converting Fonts Manually for more information.

## See Also

### Related Documentation

- [convertFont:toFamily:](convert%28__tofamily_%29.md): Returns a font whose traits are as similar as possible to those of the given font except for the font family, which is changed to the given family.
- [convertFont:toSize:](convert%28__tosize_%29.md): Returns a font object whose traits are the same as those of the given font, except for the size, which is changed to the given size.
- [convertFont:toHaveTrait:](convert%28__tohavetrait_%29.md): Returns a new version of the font object containing a single additional trait.
- [convertFont:toNotHaveTrait:](convert%28__tonothavetrait_%29.md): Returns a new version of a font object without the specified traits.
- [convertWeight:ofFont:](convertweight%28__of_%29.md): Returns a font object whose weight is greater or lesser than that of the given font.
- [convertFont:toFace:](convert%28__toface_%29.md): Returns a font whose traits are as similar as possible to those of the given font except for the typeface, which is changed to the given typeface.

### Converting Fonts Automatically

- [changeFont:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/changefont:): Deprecated. Informs responders of a font change.

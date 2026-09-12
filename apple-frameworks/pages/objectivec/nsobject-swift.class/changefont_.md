> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/changefont:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/changefont:)

# changeFont:

**Interface language:** Objective-C

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 11.0)

Informs responders of a font change.

## Declaration

```objectivec
- (void) changeFont:(id) sender;
```

## Parameters

- `sender`: The object that sent the message.

<a id="Discussion"></a>

## Discussion

Generally this change is because the user changed the font either in the selection of a rich text field or in a whole plain text field. Any object that contains a font the user can change must respond to the [changeFont:](changefont_.md) message by sending a [convertFont:](https://developer.apple.com/documentation/appkit/nsfontmanager/convert%28_:%29) message back to `sender` (an NSFontManager object) for each font in the selection. For more information, see Responding to Font Changes.

Be aware that [selectedFont](https://developer.apple.com/documentation/appkit/nsfontmanager/selectedfont) at this point may return unpredictable results. The font in this property may not be the last font selected, or there may be multiple fonts selected at the time [changeFont:](changefont_.md) is called. The use of [selectedFont](https://developer.apple.com/documentation/appkit/nsfontmanager/selectedfont) from within [changeFont:](changefont_.md) is strongly discouraged.

## See Also

### Related Documentation

- [convertFont:toFamily:](https://developer.apple.com/documentation/appkit/nsfontmanager/convert%28_:tofamily:%29): Returns a font whose traits are as similar as possible to those of the given font except for the font family, which is changed to the given family.
- [addFontTrait:](https://developer.apple.com/documentation/appkit/nsfontmanager/addfonttrait%28_:%29): Adds a trait to the font.
- [convertFont:toSize:](https://developer.apple.com/documentation/appkit/nsfontmanager/convert%28_:tosize:%29): Returns a font object whose traits are the same as those of the given font, except for the size, which is changed to the given size.
- [convertFont:toHaveTrait:](https://developer.apple.com/documentation/appkit/nsfontmanager/convert%28_:tohavetrait:%29): Returns a new version of the font object containing a single additional trait.
- [modifyFont:](https://developer.apple.com/documentation/appkit/nsfontmanager/modifyfont%28_:%29): Modifies a trait of the font.
- [convertFont:toNotHaveTrait:](https://developer.apple.com/documentation/appkit/nsfontmanager/convert%28_:tonothavetrait:%29): Returns a new version of a font object without the specified traits.
- [modifyFontViaPanel:](https://developer.apple.com/documentation/appkit/nsfontmanager/modifyfontviapanel%28_:%29): Modifies a font trait using input from the Font panel.
- [convertWeight:ofFont:](https://developer.apple.com/documentation/appkit/nsfontmanager/convertweight%28_:of:%29): Returns a font object whose weight is greater or lesser than that of the given font.
- [convertFont:toFace:](https://developer.apple.com/documentation/appkit/nsfontmanager/convert%28_:toface:%29): Returns a font whose traits are as similar as possible to those of the given font except for the typeface, which is changed to the given typeface.
- [removeFontTrait:](https://developer.apple.com/documentation/appkit/nsfontmanager/removefonttrait%28_:%29): Removes a trait from the font.

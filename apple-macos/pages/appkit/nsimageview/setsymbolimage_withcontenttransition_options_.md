> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimageview/setsymbolimage:withcontenttransition:options:](https://developer.apple.com/documentation/appkit/nsimageview/setsymbolimage:withcontenttransition:options:)

# setSymbolImage:withContentTransition:options:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Sets a symbol image using the specified content-transition effect and options.

## Declaration

```objectivec
- (void) setSymbolImage:(NSImage *) symbolImage withContentTransition:(NSSymbolContentTransition *) transition options:(NSSymbolEffectOptions *) options;
```

## Parameters

- `symbolImage`: The symbol image to set.
- `transition`: The content transition to use when setting the symbol image.
- `options`: The options to use when setting the symbol image.

## See Also

### Configuring symbol effects

- [addSymbolEffect:](addsymboleffect_.md): Adds a symbol effect to the image view with default options and animation.
- [addSymbolEffect:options:](addsymboleffect_options_.md): Adds a symbol effect to the image view with the specified options and default animation.
- [addSymbolEffect:options:animated:](addsymboleffect_options_animated_.md): Adds a symbol effect to the image view with the specified options and animation.
- [setSymbolImage:withContentTransition:](setsymbolimage_withcontenttransition_.md): Sets a symbol image using the specified content-transition effect.
- [removeSymbolEffectOfType:](removesymboleffectoftype_.md): Removes the symbol effect that matches the specified effect type.
- [removeSymbolEffectOfType:options:](removesymboleffectoftype_options_.md): Removes the symbol effect that matches the specified effect type, using the specified options.
- [removeSymbolEffectOfType:options:animated:](removesymboleffectoftype_options_animated_.md): Removes the symbol effect that matches the specified effect type, using the specified options and animation setting.
- [removeAllSymbolEffects](removeallsymboleffects.md): Removes all symbol effects from the image view.
- [removeAllSymbolEffectsWithOptions:](removeallsymboleffectswithoptions_.md): Removes all symbol effects from the image view, using the specified options.
- [removeAllSymbolEffectsWithOptions:animated:](removeallsymboleffectswithoptions_animated_.md): Removes all symbol effects from the image view, using the specified options and animation setting.

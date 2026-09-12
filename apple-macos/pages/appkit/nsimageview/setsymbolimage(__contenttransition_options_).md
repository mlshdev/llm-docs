> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimageview/setsymbolimage(_:contenttransition:options:)](https://developer.apple.com/documentation/appkit/nsimageview/setsymbolimage(_:contenttransition:options:))

# setSymbolImage(\_:contentTransition:options:)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Sets a symbol image using the specified content-transition effect and options.

## Declaration

```swift
@MainActor @preconcurrency func setSymbolImage(_ image: NSImage, contentTransition: some ContentTransitionSymbolEffect & SymbolEffect, options: SymbolEffectOptions = .default)
```

## Parameters

- `image`: The symbol image to set.
- `contentTransition`: The content transition to use when setting the symbol image.
- `options`: The options to use when setting the symbol image.

## See Also

### Configuring symbol effects

- [addSymbolEffect(\_:options:animated:)](addsymboleffect%28__options_animated_%29-4kete.md): Adds an indefinite symbol effect to the image view with the specified options and animation.
- [addSymbolEffect(\_:options:animated:)](addsymboleffect%28__options_animated_%29-4p7p7.md): Adds a discrete symbol effect to the image view with the specified options and animation.
- [addSymbolEffect(\_:options:animated:)](addsymboleffect%28__options_animated_%29-66ckm.md): Adds a discrete, indefinite symbol effect to the image view with the specified options and animation.
- [removeSymbolEffect(ofType:options:animated:)](removesymboleffect%28oftype_options_animated_%29-8bszd.md): Removes the symbol effect that matches the specified indefinite effect type, using the specified options and animation setting.
- [removeSymbolEffect(ofType:options:animated:)](removesymboleffect%28oftype_options_animated_%29-4c6vq.md): Removes the symbol effect that matches the specified discrete, indefinite effect type, using the specified options and animation setting.
- [removeSymbolEffect(ofType:options:animated:)](removesymboleffect%28oftype_options_animated_%29-8tk6g.md): Removes the symbol effect that matches the specified discrete effect type, using the specified options and animation setting.
- [removeAllSymbolEffects(options:animated:)](removeallsymboleffects%28options_animated_%29.md): Removes all symbol effects from the image view, using the specified options and animation setting.

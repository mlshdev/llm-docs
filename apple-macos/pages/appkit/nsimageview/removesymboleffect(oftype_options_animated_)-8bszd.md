> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimageview/removesymboleffect(oftype:options:animated:)-8bszd](https://developer.apple.com/documentation/appkit/nsimageview/removesymboleffect(oftype:options:animated:)-8bszd)

# removeSymbolEffect(ofType:options:animated:)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Removes the symbol effect that matches the specified indefinite effect type, using the specified options and animation setting.

## Declaration

```swift
@MainActor @preconcurrency func removeSymbolEffect(ofType effect: some IndefiniteSymbolEffect & SymbolEffect, options: SymbolEffectOptions = .default, animated: Bool = true)
```

## Parameters

- `effect`: The symbol effect to match for removal.
- `options`: The options to use when removing the symbol effect.
- `animated`: A Boolean value that indicates whether to animate the removal of a scale, appear, or disappear effect.

## See Also

### Configuring symbol effects

- [addSymbolEffect(\_:options:animated:)](addsymboleffect%28__options_animated_%29-4kete.md): Adds an indefinite symbol effect to the image view with the specified options and animation.
- [addSymbolEffect(\_:options:animated:)](addsymboleffect%28__options_animated_%29-4p7p7.md): Adds a discrete symbol effect to the image view with the specified options and animation.
- [addSymbolEffect(\_:options:animated:)](addsymboleffect%28__options_animated_%29-66ckm.md): Adds a discrete, indefinite symbol effect to the image view with the specified options and animation.
- [setSymbolImage(\_:contentTransition:options:)](setsymbolimage%28__contenttransition_options_%29.md): Sets a symbol image using the specified content-transition effect and options.
- [removeSymbolEffect(ofType:options:animated:)](removesymboleffect%28oftype_options_animated_%29-4c6vq.md): Removes the symbol effect that matches the specified discrete, indefinite effect type, using the specified options and animation setting.
- [removeSymbolEffect(ofType:options:animated:)](removesymboleffect%28oftype_options_animated_%29-8tk6g.md): Removes the symbol effect that matches the specified discrete effect type, using the specified options and animation setting.
- [removeAllSymbolEffects(options:animated:)](removeallsymboleffects%28options_animated_%29.md): Removes all symbol effects from the image view, using the specified options and animation setting.

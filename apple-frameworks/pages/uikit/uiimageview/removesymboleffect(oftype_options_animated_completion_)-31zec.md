> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimageview/removesymboleffect(oftype:options:animated:completion:)-31zec](https://developer.apple.com/documentation/uikit/uiimageview/removesymboleffect(oftype:options:animated:completion:)-31zec)

# removeSymbolEffect(ofType:options:animated:completion:)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS

Removes the symbol effect that matches the specified discrete, indefinite effect type, using the specified options and animation setting.

## Declaration

```swift
@MainActor @preconcurrency func removeSymbolEffect(ofType effect: some DiscreteSymbolEffect & IndefiniteSymbolEffect & SymbolEffect, options: SymbolEffectOptions = .default, animated: Bool = true, completion: UISymbolEffectCompletion? = nil)
```

## Parameters

- `effect`: The symbol effect to match for removal.
- `options`: The options to use when removing the symbol effect.
- `animated`: A Boolean value that indicates whether to animate the removal of a scale, appear, or disappear effect.
- `completion`: A completion handler the system calls after the removal is complete.

## See Also

### Configuring symbol effects

- [addSymbolEffect(\_:options:animated:completion:)](addsymboleffect%28__options_animated_completion_%29-18jqj.md): Adds a discrete symbol effect to the image view with the specified options and animation.
- [addSymbolEffect(\_:options:animated:completion:)](addsymboleffect%28__options_animated_completion_%29-2ixnm.md): Adds a discrete, indefinite symbol effect to the image view with the specified options and animation.
- [addSymbolEffect(\_:options:animated:completion:)](addsymboleffect%28__options_animated_completion_%29-896qd.md): Adds an indefinite symbol effect to the image view with the specified options and animation.
- [setSymbolImage(\_:contentTransition:options:completion:)](setsymbolimage%28__contenttransition_options_completion_%29.md): Sets a symbol image using the specified content-transition effect, options, and completion handler.
- [removeSymbolEffect(ofType:options:animated:completion:)](removesymboleffect%28oftype_options_animated_completion_%29-218lh.md): Removes the symbol effect that matches the specified indefinite effect type, using the specified options and animation setting.
- [removeSymbolEffect(ofType:options:animated:completion:)](removesymboleffect%28oftype_options_animated_completion_%29-2boi2.md): Removes the symbol effect that matches the specified discrete effect type, using the specified options and animation setting.
- [removeAllSymbolEffects(options:animated:)](removeallsymboleffects%28options_animated_%29.md): Removes all symbol effects from the image view, using the specified options and animation setting.
- [UISymbolEffectCompletion](../uisymboleffectcompletion-7qt7g.md): A completion handler for adding and removing symbol effects and transitions.
- [UISymbolEffectCompletionContext](../uisymboleffectcompletioncontext-swift.struct.md): Information about a symbol effect’s addition or removal.

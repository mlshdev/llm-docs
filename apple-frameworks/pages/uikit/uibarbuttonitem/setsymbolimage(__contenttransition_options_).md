> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibarbuttonitem/setsymbolimage(_:contenttransition:options:)](https://developer.apple.com/documentation/uikit/uibarbuttonitem/setsymbolimage(_:contenttransition:options:))

# setSymbolImage(\_:contentTransition:options:)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS

Sets a symbol image using the specified content-transition effect and options.

## Declaration

```swift
@MainActor @preconcurrency func setSymbolImage(_ image: UIImage, contentTransition: some ContentTransitionSymbolEffect & SymbolEffect, options: SymbolEffectOptions = .default)
```

## Parameters

- `image`: The symbol image to set.
- `contentTransition`: The content transition to use when setting the symbol image.
- `options`: The options to use when setting the symbol image.

## See Also

### Configuring symbol effects

- [isSymbolAnimationEnabled](issymbolanimationenabled.md): A Boolean value that indicates whether symbol effects animate.
- [addSymbolEffect(\_:options:animated:)](addsymboleffect%28__options_animated_%29-3iew0.md): Adds an indefinite symbol effect to the bar button item with the specified options and animation.
- [addSymbolEffect(\_:options:animated:)](addsymboleffect%28__options_animated_%29-6jx3e.md): Adds a discrete, indefinite symbol effect to the bar button item with the specified options and animation.
- [addSymbolEffect(\_:options:animated:)](addsymboleffect%28__options_animated_%29-9dytr.md): Adds a discrete symbol effect to the bar button item with the specified options and animation.
- [removeSymbolEffect(ofType:options:animated:)](removesymboleffect%28oftype_options_animated_%29-214pl.md): Removes the symbol effect that matches the specified indefinite effect type, using the specified options and animation setting.
- [removeSymbolEffect(ofType:options:animated:)](removesymboleffect%28oftype_options_animated_%29-7m567.md): Removes the symbol effect that matches the specified discrete, indefinite effect type, using the specified options and animation setting.
- [removeSymbolEffect(ofType:options:animated:)](removesymboleffect%28oftype_options_animated_%29-8zc4d.md): Removes the symbol effect that matches the specified discrete effect type, using the specified options and animation setting.
- [removeAllSymbolEffects(options:animated:)](removeallsymboleffects%28options_animated_%29.md): Removes all symbol effects from the bar button item, using the specified options and animation setting.

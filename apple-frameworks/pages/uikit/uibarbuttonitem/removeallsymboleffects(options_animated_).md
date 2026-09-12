> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibarbuttonitem/removeallsymboleffects(options:animated:)](https://developer.apple.com/documentation/uikit/uibarbuttonitem/removeallsymboleffects(options:animated:))

# removeAllSymbolEffects(options:animated:)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS

Removes all symbol effects from the bar button item, using the specified options and animation setting.

## Declaration

```swift
@MainActor @preconcurrency func removeAllSymbolEffects(options: SymbolEffectOptions = .default, animated: Bool = true)
```

## Parameters

- `options`: The options to use when removing the symbol effects.
- `animated`: A Boolean value that indicates whether to animate the removal of a scale, appear, or disappear effects.

## See Also

### Configuring symbol effects

- [isSymbolAnimationEnabled](issymbolanimationenabled.md): A Boolean value that indicates whether symbol effects animate.
- [addSymbolEffect(\_:options:animated:)](addsymboleffect%28__options_animated_%29-3iew0.md): Adds an indefinite symbol effect to the bar button item with the specified options and animation.
- [addSymbolEffect(\_:options:animated:)](addsymboleffect%28__options_animated_%29-6jx3e.md): Adds a discrete, indefinite symbol effect to the bar button item with the specified options and animation.
- [addSymbolEffect(\_:options:animated:)](addsymboleffect%28__options_animated_%29-9dytr.md): Adds a discrete symbol effect to the bar button item with the specified options and animation.
- [setSymbolImage(\_:contentTransition:options:)](setsymbolimage%28__contenttransition_options_%29.md): Sets a symbol image using the specified content-transition effect and options.
- [removeSymbolEffect(ofType:options:animated:)](removesymboleffect%28oftype_options_animated_%29-214pl.md): Removes the symbol effect that matches the specified indefinite effect type, using the specified options and animation setting.
- [removeSymbolEffect(ofType:options:animated:)](removesymboleffect%28oftype_options_animated_%29-7m567.md): Removes the symbol effect that matches the specified discrete, indefinite effect type, using the specified options and animation setting.
- [removeSymbolEffect(ofType:options:animated:)](removesymboleffect%28oftype_options_animated_%29-8zc4d.md): Removes the symbol effect that matches the specified discrete effect type, using the specified options and animation setting.

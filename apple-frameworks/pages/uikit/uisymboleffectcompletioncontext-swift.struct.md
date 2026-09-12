> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisymboleffectcompletioncontext-swift.struct](https://developer.apple.com/documentation/uikit/uisymboleffectcompletioncontext-swift.struct)

# UISymbolEffectCompletionContext

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS

Information about a symbol effect’s addition or removal.

## Declaration

```swift
@MainActor struct UISymbolEffectCompletionContext
```

## Topics

### Determining completion status

- [effect](uisymboleffectcompletioncontext-swift.struct/effect.md): The symbol effect that completed.
- [isFinished](uisymboleffectcompletioncontext-swift.struct/isfinished.md): A Boolean value that indicates whether the symbol effect finished completely.
- [sender](uisymboleffectcompletioncontext-swift.struct/sender.md): The object, an image view or bar button item, that received the symbol effect.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring symbol effects

- [addSymbolEffect(\_:options:animated:completion:)](uiimageview/addsymboleffect%28__options_animated_completion_%29-18jqj.md): Adds a discrete symbol effect to the image view with the specified options and animation.
- [addSymbolEffect(\_:options:animated:completion:)](uiimageview/addsymboleffect%28__options_animated_completion_%29-2ixnm.md): Adds a discrete, indefinite symbol effect to the image view with the specified options and animation.
- [addSymbolEffect(\_:options:animated:completion:)](uiimageview/addsymboleffect%28__options_animated_completion_%29-896qd.md): Adds an indefinite symbol effect to the image view with the specified options and animation.
- [setSymbolImage(\_:contentTransition:options:completion:)](uiimageview/setsymbolimage%28__contenttransition_options_completion_%29.md): Sets a symbol image using the specified content-transition effect, options, and completion handler.
- [removeSymbolEffect(ofType:options:animated:completion:)](uiimageview/removesymboleffect%28oftype_options_animated_completion_%29-218lh.md): Removes the symbol effect that matches the specified indefinite effect type, using the specified options and animation setting.
- [removeSymbolEffect(ofType:options:animated:completion:)](uiimageview/removesymboleffect%28oftype_options_animated_completion_%29-31zec.md): Removes the symbol effect that matches the specified discrete, indefinite effect type, using the specified options and animation setting.
- [removeSymbolEffect(ofType:options:animated:completion:)](uiimageview/removesymboleffect%28oftype_options_animated_completion_%29-2boi2.md): Removes the symbol effect that matches the specified discrete effect type, using the specified options and animation setting.
- [removeAllSymbolEffects(options:animated:)](uiimageview/removeallsymboleffects%28options_animated_%29.md): Removes all symbol effects from the image view, using the specified options and animation setting.
- [UISymbolEffectCompletion](uisymboleffectcompletion-7qt7g.md): A completion handler for adding and removing symbol effects and transitions.

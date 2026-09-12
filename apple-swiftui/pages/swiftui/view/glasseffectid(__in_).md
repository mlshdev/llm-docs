> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/glasseffectid(_:in:)](https://developer.apple.com/documentation/swiftui/view/glasseffectid(_:in:))

# glassEffectID(\_:in:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · watchOS 26.0+

Associates an identity value to Liquid Glass effects defined within this view.

## Declaration

```swift
nonisolated func glassEffectID(_ id: (some Hashable & Sendable)?, in namespace: Namespace.ID) -> some View

```

## Mentioned In

- [Applying Liquid Glass to custom views](../applying-liquid-glass-to-custom-views.md)

<a id="discussion"></a>

## Discussion

You use this modifier with the [glassEffect(\_:in:)](glasseffect%28__in_%29.md) view modifier and a [GlassEffectContainer](../glasseffectcontainer.md) view. When used together, SwiftUI uses the identifier to animate shapes to and from each other during transitions.

## See Also

### Styling views with Liquid Glass

- [Applying Liquid Glass to custom views](../applying-liquid-glass-to-custom-views.md): Configure, combine, and morph views using Liquid Glass effects.
- [Landmarks: Building an app with Liquid Glass](../landmarks-building-an-app-with-liquid-glass.md): Enhance your app experience with system-provided and custom Liquid Glass.
- [glassEffect(\_:in:)](glasseffect%28__in_%29.md): Applies the Liquid Glass effect to a view.
- [glassEffectTransition(\_:)](glasseffecttransition%28__%29.md): Associates a glass effect transition with any glass effects defined within this view.
- [glassEffectUnion(id:namespace:)](glasseffectunion%28id_namespace_%29.md): Associates any Liquid Glass effects defined within this view to a union with the provided identifier.
- [interactive(\_:)](../glass/interactive%28__%29.md): Returns a copy of the structure configured to be interactive.
- [GlassEffectContainer](../glasseffectcontainer.md): A view that combines multiple Liquid Glass shapes into a single shape that can morph individual shapes into one another.
- [GlassEffectTransition](../glasseffecttransition.md): A structure that describes changes to apply when a glass effect is added or removed from the view hierarchy.
- [GlassButtonStyle](../glassbuttonstyle.md): A button style that applies glass border artwork based on the button’s context.
- [GlassProminentButtonStyle](../glassprominentbuttonstyle.md): A button style that applies prominent glass border artwork based on the button’s context.
- [DefaultGlassEffectShape](../defaultglasseffectshape.md): The default shape applied by glass effects, a capsule.

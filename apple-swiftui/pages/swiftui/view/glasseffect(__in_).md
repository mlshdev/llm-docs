> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/glasseffect(_:in:)](https://developer.apple.com/documentation/swiftui/view/glasseffect(_:in:))

# glassEffect(\_:in:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · watchOS 26.0+

Applies the Liquid Glass effect to a view.

## Declaration

```swift
nonisolated func glassEffect(_ glass: Glass = .regular, in shape: some Shape = DefaultGlassEffectShape()) -> some View

```

## Mentioned In

- [Applying Liquid Glass to custom views](../applying-liquid-glass-to-custom-views.md)

<a id="discussion"></a>

## Discussion

When you use this effect, the system:

- Renders a shape anchored behind a view with the Liquid Glass material.
- Applies the foreground effects of Liquid Glass over a view.

For example, to add this effect to a [Text](../text.md):

```swift
Text("Hello, World!")
    .font(.title)
    .padding()
    .glassEffect()
```

SwiftUI uses the [regular](../glass/regular.md) variant by default along with a [Capsule](../capsule.md) shape.

SwiftUI anchors the Liquid Glass to a view’s bounds. For the example above, the material fills the entirety of the `Text` frame, which includes the padding.

You typically use this modifier with a [GlassEffectContainer](../glasseffectcontainer.md) to combine multiple Liquid Glass shapes into a single shape that can morph into one another.

## See Also

### Styling views with Liquid Glass

- [Applying Liquid Glass to custom views](../applying-liquid-glass-to-custom-views.md): Configure, combine, and morph views using Liquid Glass effects.
- [Landmarks: Building an app with Liquid Glass](../landmarks-building-an-app-with-liquid-glass.md): Enhance your app experience with system-provided and custom Liquid Glass.
- [glassEffectID(\_:in:)](glasseffectid%28__in_%29.md): Associates an identity value to Liquid Glass effects defined within this view.
- [glassEffectTransition(\_:)](glasseffecttransition%28__%29.md): Associates a glass effect transition with any glass effects defined within this view.
- [glassEffectUnion(id:namespace:)](glasseffectunion%28id_namespace_%29.md): Associates any Liquid Glass effects defined within this view to a union with the provided identifier.
- [interactive(\_:)](../glass/interactive%28__%29.md): Returns a copy of the structure configured to be interactive.
- [GlassEffectContainer](../glasseffectcontainer.md): A view that combines multiple Liquid Glass shapes into a single shape that can morph individual shapes into one another.
- [GlassEffectTransition](../glasseffecttransition.md): A structure that describes changes to apply when a glass effect is added or removed from the view hierarchy.
- [GlassButtonStyle](../glassbuttonstyle.md): A button style that applies glass border artwork based on the button’s context.
- [GlassProminentButtonStyle](../glassprominentbuttonstyle.md): A button style that applies prominent glass border artwork based on the button’s context.
- [DefaultGlassEffectShape](../defaultglasseffectshape.md): The default shape applied by glass effects, a capsule.

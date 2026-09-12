> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/glasseffecttransition(_:)](https://developer.apple.com/documentation/swiftui/view/glasseffecttransition(_:))

# glassEffectTransition(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · watchOS 26.0+

Associates a glass effect transition with any glass effects defined within this view.

## Declaration

```swift
@MainActor @preconcurrency func glassEffectTransition(_ transition: GlassEffectTransition) -> some View

```

<a id="discussion"></a>

## Discussion

You use this modifier with the [glassEffect(\_:in:)](glasseffect%28__in_%29.md) view modifier and [GlassEffectContainer](../glasseffectcontainer.md) view. When used together, SwiftUI will use the provided transition to apply changes to the glass effect when you add or remove views with these effects from the view hierarchy.

In the example below, the notepad image will transition into and out of the pencil image when the isExpanded variable changes.

```swift
var isExpanded: Bool
@Namespace private var namespace

var body: some View {
    GlassEffectContainer(spacing: 10.0) {
        HStack(spacing: 10.0) {
            Image(systemName: "pencil")
                .frame(width: 20.0, height: 20.0)
                .glassEffect()
                .glassEffectID("pencil", in: namespace)

                if isExpanded {
                    Image(systemName: "note")
                        .frame(width: 20.0, height: 20.0)
                        .glassEffect()
                        .glassEffectID("note", in: namespace)
                        .glassEffectTransition(.matchedGeometry)
                }
            }
        }
    }
}
```

## See Also

### Styling views with Liquid Glass

- [Applying Liquid Glass to custom views](../applying-liquid-glass-to-custom-views.md): Configure, combine, and morph views using Liquid Glass effects.
- [Landmarks: Building an app with Liquid Glass](../landmarks-building-an-app-with-liquid-glass.md): Enhance your app experience with system-provided and custom Liquid Glass.
- [glassEffect(\_:in:)](glasseffect%28__in_%29.md): Applies the Liquid Glass effect to a view.
- [glassEffectID(\_:in:)](glasseffectid%28__in_%29.md): Associates an identity value to Liquid Glass effects defined within this view.
- [glassEffectUnion(id:namespace:)](glasseffectunion%28id_namespace_%29.md): Associates any Liquid Glass effects defined within this view to a union with the provided identifier.
- [interactive(\_:)](../glass/interactive%28__%29.md): Returns a copy of the structure configured to be interactive.
- [GlassEffectContainer](../glasseffectcontainer.md): A view that combines multiple Liquid Glass shapes into a single shape that can morph individual shapes into one another.
- [GlassEffectTransition](../glasseffecttransition.md): A structure that describes changes to apply when a glass effect is added or removed from the view hierarchy.
- [GlassButtonStyle](../glassbuttonstyle.md): A button style that applies glass border artwork based on the button’s context.
- [GlassProminentButtonStyle](../glassprominentbuttonstyle.md): A button style that applies prominent glass border artwork based on the button’s context.
- [DefaultGlassEffectShape](../defaultglasseffectshape.md): The default shape applied by glass effects, a capsule.

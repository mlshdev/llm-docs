> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/glasseffectcontainer](https://developer.apple.com/documentation/swiftui/glasseffectcontainer)

# GlassEffectContainer

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · watchOS 26.0+

A view that combines multiple Liquid Glass shapes into a single shape that can morph individual shapes into one another.

## Declaration

```swift
@MainActor @preconcurrency struct GlassEffectContainer<Content> where Content : View
```

## Mentioned In

- [Applying Liquid Glass to custom views](applying-liquid-glass-to-custom-views.md)

<a id="overview"></a>

## Overview

Use a container with the [glassEffect(\_:in:)](view/glasseffect%28__in_%29.md) modifier. Each view with a Liquid Glass effect contributes a shape rendered with the effect to a set of shapes. SwiftUI renders the effects together, improving rendering performance and allowing the effects to interact with and morph into one another.

Configure how shapes interact with one another by customizing the default spacing value of the container. As shapes near one another, their paths start to blend into one another. The higher the spacing, the sooner blending begins as the shapes approach each other.

## Topics

### Initializers

- [init(spacing:content:)](glasseffectcontainer/init%28spacing_content_%29.md): Creates a glass effect container with the provided spacing, extracting glass shapes from the provided content.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [View](view.md)

## See Also

### Styling views with Liquid Glass

- [Applying Liquid Glass to custom views](applying-liquid-glass-to-custom-views.md): Configure, combine, and morph views using Liquid Glass effects.
- [Landmarks: Building an app with Liquid Glass](landmarks-building-an-app-with-liquid-glass.md): Enhance your app experience with system-provided and custom Liquid Glass.
- [glassEffect(\_:in:)](view/glasseffect%28__in_%29.md): Applies the Liquid Glass effect to a view.
- [glassEffectID(\_:in:)](view/glasseffectid%28__in_%29.md): Associates an identity value to Liquid Glass effects defined within this view.
- [glassEffectTransition(\_:)](view/glasseffecttransition%28__%29.md): Associates a glass effect transition with any glass effects defined within this view.
- [glassEffectUnion(id:namespace:)](view/glasseffectunion%28id_namespace_%29.md): Associates any Liquid Glass effects defined within this view to a union with the provided identifier.
- [interactive(\_:)](glass/interactive%28__%29.md): Returns a copy of the structure configured to be interactive.
- [GlassEffectTransition](glasseffecttransition.md): A structure that describes changes to apply when a glass effect is added or removed from the view hierarchy.
- [GlassButtonStyle](glassbuttonstyle.md): A button style that applies glass border artwork based on the button’s context.
- [GlassProminentButtonStyle](glassprominentbuttonstyle.md): A button style that applies prominent glass border artwork based on the button’s context.
- [DefaultGlassEffectShape](defaultglasseffectshape.md): The default shape applied by glass effects, a capsule.

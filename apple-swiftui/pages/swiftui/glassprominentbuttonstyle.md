> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/glassprominentbuttonstyle](https://developer.apple.com/documentation/swiftui/glassprominentbuttonstyle)

# GlassProminentButtonStyle

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · watchOS 26.0+

A button style that applies prominent glass border artwork based on the button’s context.

## Declaration

```swift
nonisolated struct GlassProminentButtonStyle
```

<a id="overview"></a>

## Overview

You can also use [glassProminent](primitivebuttonstyle/glassprominent.md) to construct this style.

## Topics

### Initializers

- [init()](glassprominentbuttonstyle/init%28%29.md): Creates a prominent glass button style.

### Instance Methods

- [makeBody(configuration:)](glassprominentbuttonstyle/makebody%28configuration_%29.md): Creates a view that represents the body of a button.

## Relationships

### Conforms To

- [PrimitiveButtonStyle](primitivebuttonstyle.md)

## See Also

### Styling views with Liquid Glass

- [Applying Liquid Glass to custom views](applying-liquid-glass-to-custom-views.md): Configure, combine, and morph views using Liquid Glass effects.
- [Landmarks: Building an app with Liquid Glass](landmarks-building-an-app-with-liquid-glass.md): Enhance your app experience with system-provided and custom Liquid Glass.
- [glassEffect(\_:in:)](view/glasseffect%28__in_%29.md): Applies the Liquid Glass effect to a view.
- [glassEffectID(\_:in:)](view/glasseffectid%28__in_%29.md): Associates an identity value to Liquid Glass effects defined within this view.
- [glassEffectTransition(\_:)](view/glasseffecttransition%28__%29.md): Associates a glass effect transition with any glass effects defined within this view.
- [glassEffectUnion(id:namespace:)](view/glasseffectunion%28id_namespace_%29.md): Associates any Liquid Glass effects defined within this view to a union with the provided identifier.
- [interactive(\_:)](glass/interactive%28__%29.md): Returns a copy of the structure configured to be interactive.
- [GlassEffectContainer](glasseffectcontainer.md): A view that combines multiple Liquid Glass shapes into a single shape that can morph individual shapes into one another.
- [GlassEffectTransition](glasseffecttransition.md): A structure that describes changes to apply when a glass effect is added or removed from the view hierarchy.
- [GlassButtonStyle](glassbuttonstyle.md): A button style that applies glass border artwork based on the button’s context.
- [DefaultGlassEffectShape](defaultglasseffectshape.md): The default shape applied by glass effects, a capsule.

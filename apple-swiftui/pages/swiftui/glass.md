> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/glass](https://developer.apple.com/documentation/swiftui/glass)

# Glass

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · watchOS 26.0+

A structure that defines the configuration of the Liquid Glass material.

## Declaration

```swift
struct Glass
```

## Mentioned In

- [Applying Liquid Glass to custom views](applying-liquid-glass-to-custom-views.md)

<a id="overview"></a>

## Overview

You provide instances of a variant of Liquid Glass to the [glassEffect(\_:in:)](view/glasseffect%28__in_%29.md) view modifier:

```swift
Text("Hello, World!")
    .font(.title)
    .padding()
    .glassEffect()
```

You can combine Liquid Glass effects using a [GlassEffectContainer](glasseffectcontainer.md), which supports morphing views with this effect into each other based on the geometry of their associated views.

## Topics

### Instance Methods

- [interactive(\_:)](glass/interactive%28__%29.md): Returns a copy of the structure configured to be interactive.
- [tint(\_:)](glass/tint%28__%29.md): Returns a copy of the structure with a configured tint color.

### Type Properties

- [clear](glass/clear.md): The clear variant of glass.
- [identity](glass/identity.md): The identity variant of glass. When applied, your content remains unaffected as if no glass effect was applied.
- [regular](glass/regular.md): The regular variant of the Liquid Glass material.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Styling content

- [border(\_:width:)](view/border%28__width_%29.md): Adds a border to this view with the specified style and width.
- [foregroundStyle(\_:)](view/foregroundstyle%28__%29.md): Sets a view’s foreground elements to use a given style.
- [foregroundStyle(\_:\_:)](view/foregroundstyle%28____%29.md): Sets the primary and secondary levels of the foreground style in the child view.
- [foregroundStyle(\_:\_:\_:)](view/foregroundstyle%28______%29.md): Sets the primary, secondary, and tertiary levels of the foreground style.
- [backgroundStyle(\_:)](view/backgroundstyle%28__%29.md): Sets the specified style to render backgrounds within the view.
- [backgroundStyle](environmentvalues/backgroundstyle.md): An optional style that overrides the default system background style when set.
- [ShapeStyle](shapestyle.md): A color or pattern to use when rendering a shape.
- [AnyShapeStyle](anyshapestyle.md): A type-erased ShapeStyle value.
- [Gradient](gradient.md): A color gradient represented as an array of color stops, each having a parametric location value.
- [MeshGradient](meshgradient.md): A two-dimensional gradient defined by a 2D grid of positioned colors.
- [AnyGradient](anygradient.md): A color gradient.
- [ShadowStyle](shadowstyle.md): A style to use when rendering shadows.

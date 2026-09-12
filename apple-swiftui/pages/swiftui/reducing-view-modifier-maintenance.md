> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/reducing-view-modifier-maintenance](https://developer.apple.com/documentation/swiftui/reducing-view-modifier-maintenance)

# Reducing view modifier maintenance

**Framework:** SwiftUI  
**Kind:** Article

Bundle view modifiers that you regularly reuse into a custom view modifier.

<a id="Overview"></a>

## Overview

To create consistent views, you might reuse the same view modifier or group of modifiers repeatedly across your views. For example, you might apply the same font and foreground color to many text instances throughout your app, so they all match. Unfortunately, this can lead to maintenance challenges, because even a small change in format, like a different font size, requires changes in many different parts of your code.

To avoid this overhead, collect a set of modifiers into a single location using an instance of the [ViewModifier](viewmodifier.md) protocol. Then, extend the [View](view.md) protocol with a method that uses your modifier, making it easy to use and understand. Collecting the modifiers together provides a single location to update when you want to change them.

<a id="Create-a-custom-view-modifier"></a>

### Create a custom view modifier

When you create your custom modifier, name it to reflect the purpose of the collection. For example, if you repeatedly apply the [caption](font/caption.md) font style and a secondary color scheme to views to represent a secondary styling, collect them together as `CaptionTextFormat`:

```swift
struct CaptionTextFormat: ViewModifier {
    func body(content: Content) -> some View {
        content
            .font(.caption)
            .foregroundColor(.secondary)
    }
}
```

Apply your modifier using the [modifier(\_:)](view/modifier%28__%29.md) method. The following code applies the above example to a [Text](text.md) instance:

```swift
Text("Some additional information...")
    .modifier(CaptionTextFormat())
```

<a id="Extend-the-view-protocol-to-provide-fluent-modifier-access"></a>

### Extend the view protocol to provide fluent modifier access

To make your custom view modifier conveniently accessible, extend the [View](view.md) protocol with a function that applies your modifier:

```swift
extension View {
    func captionTextFormat() -> some View {
        modifier(CaptionTextFormat())
    }
}
```

Apply the modifier to a text view by including this extension:

```swift
Text("Some additional information...")
    .captionTextFormat()
```

## See Also

### Modifying a view

- [Configuring views](configuring-views.md): Adjust the characteristics of a view by applying view modifiers.
- [modifier(\_:)](view/modifier%28__%29.md): Applies a modifier to a view and returns a new view.
- [ViewModifier](viewmodifier.md): A modifier that you apply to a view or another view modifier, producing a different version of the original value.
- [EmptyModifier](emptymodifier.md): An empty, or identity, modifier, used during development to switch modifiers at compile time.
- [ModifiedContent](modifiedcontent.md): A value with a modifier applied to it.
- [EnvironmentalModifier](environmentalmodifier.md): A modifier that must resolve to a concrete modifier in an environment before use.
- [ManipulableModifier](manipulablemodifier.md)
- [ManipulableResponderModifier](manipulablerespondermodifier.md)
- [ManipulableTransformBindingModifier](manipulabletransformbindingmodifier.md)
- [ManipulationGeometryModifier](manipulationgeometrymodifier.md)
- [ManipulationGestureModifier](manipulationgesturemodifier.md)
- [ManipulationUsingGestureStateModifier](manipulationusinggesturestatemodifier.md)
- [Manipulable](manipulable.md): A namespace for various manipulable related types.

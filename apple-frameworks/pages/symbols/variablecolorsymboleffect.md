> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/symbols/variablecolorsymboleffect](https://developer.apple.com/documentation/symbols/variablecolorsymboleffect)

# VariableColorSymbolEffect

**Framework:** Symbols  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A type that replaces the opacity of variable layers in a symbol-based image in a repeatable sequence.

## Declaration

```swift
struct VariableColorSymbolEffect
```

<a id="overview"></a>

## Overview

A variable color animation draws attention to a symbol by changing the opacity of the symbol’s layers. You can choose to apply the effect to layers either cumulatively or iteratively. For cumulative animations, each layer’s opacity remains changed until the end of the animation cycle. For iterative animations, each layer’s opacity changes briefly before returning to its original state.

> **Note**

>  Variable color animations affect only symbols containing variable color layers.

> **Important**

>  Because SwiftUI is a state-driven framework, you pass a `value` parameter when adding discrete effects, like bounce. You trigger the animation by changing the `value` parameter. Because AppKit and UIKit are event-driven frameworks, discrete effects animate automatically when added to an image view.

```swift
// Add an effect in SwiftUI.
@State private var value1 = 0
@State private var value2 = 0
var body: some View {
    HStack {
        Image(systemName: "cellularbars")
            // Iteratively activates layers.
            .symbolEffect(.variableColor.iterative, value: value1)
            .onTapGesture {
                value1 += 1
            }
        Image(systemName: "cellularbars")
            // Cumulatively activates layers reversing and repeating three times.
            .symbolEffect(.variableColor.hideInactiveLayers.reversing, options: .repeat(3), value: value2)
            .onTapGesture {
                value2 += 1
            }
    }
}
```

```swift
// Add an effect in AppKit and UIKit.
// Iteratively activates layers.
imageView1.addSymbolEffect(.variableColor.iterative, options: .nonRepeating)
    
// Cumulatively activates layers reversing and repeating three times.
imageView2.addSymbolEffect(.variableColor.hideInactiveLayers.cumulative, options: .repeat(3))
```

## Topics

### Controlling fill style

- [cumulative](variablecolorsymboleffect/cumulative.md): An effect that enables each layer of a symbol-based image in sequence.
- [iterative](variablecolorsymboleffect/iterative.md): An effect that momentarily enables each layer of a symbol-based image in sequence.

### Changing playback style

- [nonReversing](variablecolorsymboleffect/nonreversing.md): An effect that doesn’t reverse each time it repeats.
- [reversing](variablecolorsymboleffect/reversing.md): An effect that reverses each time it repeats.

### Affecting inactive layers

- [dimInactiveLayers](variablecolorsymboleffect/diminactivelayers.md): An effect that dims inactive layers in a symbol-based image.
- [hideInactiveLayers](variablecolorsymboleffect/hideinactivelayers.md): An effect that hides inactive layers in a symbol-based image.

### Accessing the configuration

- [configuration](variablecolorsymboleffect/configuration.md): The configuration for the effect.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [DiscreteSymbolEffect](discretesymboleffect.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [IndefiniteSymbolEffect](indefinitesymboleffect.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SymbolEffect](symboleffect.md)

## See Also

### Symbol effect types

- [AppearSymbolEffect](appearsymboleffect.md): A type that makes the layers of a symbol-based image appear separately or as a whole.
- [AutomaticSymbolEffect](automaticsymboleffect.md): A type that applies the default animation to a symbol-based image in a context-sensitive manner.
- [BounceSymbolEffect](bouncesymboleffect.md): A type that applies a transitory scaling effect, or bounce, to the layers in a symbol-based image separately or as a whole.
- [DisappearSymbolEffect](disappearsymboleffect.md): A type that makes the layers of a symbol-based image disappear separately or as a whole.
- [PulseSymbolEffect](pulsesymboleffect.md): A type that fades the opacity of some or all layers in a symbol-based image.
- [ReplaceSymbolEffect](replacesymboleffect.md): A type that replaces the layers of one symbol-based image with those of another.
- [ScaleSymbolEffect](scalesymboleffect.md): A type that scales the layers in a symbol-based image separately or as a whole.
- [BreatheSymbolEffect](breathesymboleffect.md): A symbol effect that applies the Breathe animation to symbol images.
- [RotateSymbolEffect](rotatesymboleffect.md): A symbol effect that applies the Rotate animation to symbol images.
- [WiggleSymbolEffect](wigglesymboleffect.md): A symbol effect that applies the Wiggle animation to symbol images.

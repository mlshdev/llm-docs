> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/symbols/bouncesymboleffect](https://developer.apple.com/documentation/symbols/bouncesymboleffect)

# BounceSymbolEffect

**Framework:** Symbols  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A type that applies a transitory scaling effect, or bounce, to the layers in a symbol-based image separately or as a whole.

## Declaration

```swift
struct BounceSymbolEffect
```

<a id="overview"></a>

## Overview

A bounce animation draws attention to a symbol by applying a brief scaling operation to the symbol’s layers. You can choose to scale the symbol up or down as it bounces.

> **Important**

>  Because SwiftUI is a state-driven framework, you pass a `value` parameter when adding discrete effects, like bounce. You trigger the animation by changing the `value` parameter. Because AppKit and UIKit are event-driven frameworks, discrete effects animate automatically when added to an image view.

```swift
// Add an effect in SwiftUI.
@State private var value1 = 0
@State private var value2 = 0
var body: some View {
    HStack {
        Image(systemName: "arrow.up.circle")
            // Bounce with a scale-up animation.
            .symbolEffect(.bounce.up, value: value1)
            .onTapGesture {
                value1 += 1
            }
        Image(systemName: "arrow.down.circle")
            // Bounce three times with a scale-down animation.
            .symbolEffect(.bounce.down, options: .repeat(3), value: value2)
            .onTapGesture {
                value2 += 1
            }
    }
}
```

```swift
// Add an effect in AppKit and UIKit.
// Bounce with a scale-up animation.
imageView1.addSymbolEffect(.bounce.up)
    
// Bounce three times with a scale-down animation.
imageView2.addSymbolEffect(.bounce.down, options: .repeat(3))
```

## Topics

### Accessing symbol effects

- [down](bouncesymboleffect/down.md): An effect that bounces the symbol downward.
- [up](bouncesymboleffect/up.md): An effect that bounces the symbol upward.

### Determining effect scope

- [byLayer](bouncesymboleffect/bylayer.md): An effect that bounces each layer separately.
- [wholeSymbol](bouncesymboleffect/wholesymbol.md): An effect that bounces all layers simultaneously.

### Accessing the configuration

- [configuration](bouncesymboleffect/configuration.md): The configuration for the effect.

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
- [DisappearSymbolEffect](disappearsymboleffect.md): A type that makes the layers of a symbol-based image disappear separately or as a whole.
- [PulseSymbolEffect](pulsesymboleffect.md): A type that fades the opacity of some or all layers in a symbol-based image.
- [ReplaceSymbolEffect](replacesymboleffect.md): A type that replaces the layers of one symbol-based image with those of another.
- [ScaleSymbolEffect](scalesymboleffect.md): A type that scales the layers in a symbol-based image separately or as a whole.
- [VariableColorSymbolEffect](variablecolorsymboleffect.md): A type that replaces the opacity of variable layers in a symbol-based image in a repeatable sequence.
- [BreatheSymbolEffect](breathesymboleffect.md): A symbol effect that applies the Breathe animation to symbol images.
- [RotateSymbolEffect](rotatesymboleffect.md): A symbol effect that applies the Rotate animation to symbol images.
- [WiggleSymbolEffect](wigglesymboleffect.md): A symbol effect that applies the Wiggle animation to symbol images.

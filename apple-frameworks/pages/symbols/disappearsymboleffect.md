> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/symbols/disappearsymboleffect](https://developer.apple.com/documentation/symbols/disappearsymboleffect)

# DisappearSymbolEffect

**Framework:** Symbols  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A type that makes the layers of a symbol-based image disappear separately or as a whole.

## Declaration

```swift
struct DisappearSymbolEffect
```

<a id="overview"></a>

## Overview

A disappear transition causes a symbol to become invisible using a scaling animation. You can choose to scale the image up or down and to animate the symbol by individual layers or as a whole.

## Topics

### Accessing symbol effects

- [down](disappearsymboleffect/down.md): An effect that scales the symbol down as it disappears.
- [up](disappearsymboleffect/up.md): An effect that scales the symbol up as it disappears.

### Determining effect scope

- [byLayer](disappearsymboleffect/bylayer.md): An effect that makes each layer disappear separately.
- [wholeSymbol](disappearsymboleffect/wholesymbol.md): An effect that makes all layers disappear simultaneously.

### Accessing the configuration

- [configuration](disappearsymboleffect/configuration.md): The configuration for the effect.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [IndefiniteSymbolEffect](indefinitesymboleffect.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SymbolEffect](symboleffect.md)
- [TransitionSymbolEffect](transitionsymboleffect.md)

## See Also

### Symbol effect types

- [AppearSymbolEffect](appearsymboleffect.md): A type that makes the layers of a symbol-based image appear separately or as a whole.
- [AutomaticSymbolEffect](automaticsymboleffect.md): A type that applies the default animation to a symbol-based image in a context-sensitive manner.
- [BounceSymbolEffect](bouncesymboleffect.md): A type that applies a transitory scaling effect, or bounce, to the layers in a symbol-based image separately or as a whole.
- [PulseSymbolEffect](pulsesymboleffect.md): A type that fades the opacity of some or all layers in a symbol-based image.
- [ReplaceSymbolEffect](replacesymboleffect.md): A type that replaces the layers of one symbol-based image with those of another.
- [ScaleSymbolEffect](scalesymboleffect.md): A type that scales the layers in a symbol-based image separately or as a whole.
- [VariableColorSymbolEffect](variablecolorsymboleffect.md): A type that replaces the opacity of variable layers in a symbol-based image in a repeatable sequence.
- [BreatheSymbolEffect](breathesymboleffect.md): A symbol effect that applies the Breathe animation to symbol images.
- [RotateSymbolEffect](rotatesymboleffect.md): A symbol effect that applies the Rotate animation to symbol images.
- [WiggleSymbolEffect](wigglesymboleffect.md): A symbol effect that applies the Wiggle animation to symbol images.

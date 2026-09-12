> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/symbols/rotatesymboleffect](https://developer.apple.com/documentation/symbols/rotatesymboleffect)

# RotateSymbolEffect

**Framework:** Symbols  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A symbol effect that applies the Rotate animation to symbol images.

## Declaration

```swift
struct RotateSymbolEffect
```

<a id="overview"></a>

## Overview

The Rotate animation rotates parts of a symbol around a symbol-provided anchor point.

## Topics

### Instance Properties

- [byLayer](rotatesymboleffect/bylayer.md): Returns a copy of the effect requesting an animation that applies separately to each motion group.
- [clockwise](rotatesymboleffect/clockwise.md): Returns a copy of the effect requesting an animation that rotates clockwise.
- [configuration](rotatesymboleffect/configuration.md): The configuration for the effect.
- [counterClockwise](rotatesymboleffect/counterclockwise.md): Returns a copy of the effect requesting an animation that rotates counter-clockwise.
- [wholeSymbol](rotatesymboleffect/wholesymbol.md): Returns a copy of the effect requesting an animation that applies to all motion groups simultaneously.

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
- [VariableColorSymbolEffect](variablecolorsymboleffect.md): A type that replaces the opacity of variable layers in a symbol-based image in a repeatable sequence.
- [BreatheSymbolEffect](breathesymboleffect.md): A symbol effect that applies the Breathe animation to symbol images.
- [WiggleSymbolEffect](wigglesymboleffect.md): A symbol effect that applies the Wiggle animation to symbol images.

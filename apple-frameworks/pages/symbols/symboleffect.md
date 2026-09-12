> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/symbols/symboleffect](https://developer.apple.com/documentation/symbols/symboleffect)

# SymbolEffect

**Framework:** Symbols  
**Kind:** Protocol  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A presentation effect that you apply to a symbol-based image.

## Declaration

```swift
protocol SymbolEffect : Hashable, Sendable
```

## Topics

### Effects

- [appear](symboleffect/appear.md): Conforms when `Self` is `AppearSymbolEffect`. An animation that makes the layers of a symbol-based image appear separately or as a whole.
- [bounce](symboleffect/bounce.md): Conforms when `Self` is `BounceSymbolEffect`. An animation that applies a transitory scaling effect, or bounce, to the layers in a symbol-based image separately or as a whole.
- [disappear](symboleffect/disappear.md): Conforms when `Self` is `DisappearSymbolEffect`. An animation that makes the layers of a symbol-based image disappear separately or as a whole.
- [pulse](symboleffect/pulse.md): Conforms when `Self` is `PulseSymbolEffect`. An animation that fades the opacity of some or all layers in a symbol-based image.
- [scale](symboleffect/scale.md): Conforms when `Self` is `ScaleSymbolEffect`. An animation that scales the layers in a symbol-based image separately or as a whole.
- [variableColor](symboleffect/variablecolor.md): Conforms when `Self` is `VariableColorSymbolEffect`. An animation that replaces the opacity of variable layers in a symbol-based image in a repeatable sequence.
- [breathe](symboleffect/breathe.md): Conforms when `Self` is `BreatheSymbolEffect`. A symbol effect that applies the Breathe animation to symbol images.
- [rotate](symboleffect/rotate.md): Conforms when `Self` is `RotateSymbolEffect`. A symbol effect that applies the Rotate animation to symbol images.
- [wiggle](symboleffect/wiggle.md): Conforms when `Self` is `WiggleSymbolEffect`. A symbol effect that applies the Wiggle animation to symbol images.

### Accessing the configuration

- [configuration](symboleffect/configuration.md): A configuration for a symbol effect.
- [SymbolEffectConfiguration](symboleffectconfiguration.md): A type that specifies the configuration of a symbol effect.

### Type Properties

- [automatic](symboleffect/automatic.md): Conforms when `Self` is `AutomaticSymbolEffect`. A transition that applies the default animation to a symbol-based image in a context-sensitive manner.
- [drawOff](symboleffect/drawoff.md): Conforms when `Self` is `DrawOffSymbolEffect`. A symbol effect that applies the DrawOff animation to symbol images.
- [drawOn](symboleffect/drawon.md): Conforms when `Self` is `DrawOnSymbolEffect`. A symbol effect that applies the DrawOn animation to symbol images.
- [replace](symboleffect/replace.md): Conforms when `Self` is `ReplaceSymbolEffect`. An animation that replaces the layers of one symbol-based image with those of another.

## Relationships

### Inherits From

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Conforming Types

- [AppearSymbolEffect](appearsymboleffect.md)
- [AutomaticSymbolEffect](automaticsymboleffect.md)
- [BounceSymbolEffect](bouncesymboleffect.md)
- [BreatheSymbolEffect](breathesymboleffect.md)
- [DisappearSymbolEffect](disappearsymboleffect.md)
- [DrawOffSymbolEffect](drawoffsymboleffect.md)
- [DrawOnSymbolEffect](drawonsymboleffect.md)
- [PulseSymbolEffect](pulsesymboleffect.md)
- [ReplaceSymbolEffect](replacesymboleffect.md)
- [ReplaceSymbolEffect.MagicReplace](replacesymboleffect/magicreplace.md)
- [RotateSymbolEffect](rotatesymboleffect.md)
- [ScaleSymbolEffect](scalesymboleffect.md)
- [VariableColorSymbolEffect](variablecolorsymboleffect.md)
- [WiggleSymbolEffect](wigglesymboleffect.md)

## See Also

### Symbol effect protocols

- [DiscreteSymbolEffect](discretesymboleffect.md): An effect that performs a transient animation.
- [IndefiniteSymbolEffect](indefinitesymboleffect.md): An animation that continually affects a symbol until it’s disabled or removed.
- [ContentTransitionSymbolEffect](contenttransitionsymboleffect.md): An effect that animates between symbols or different configurations of the same symbol.
- [TransitionSymbolEffect](transitionsymboleffect.md): An effect that animates a symbol in or out.

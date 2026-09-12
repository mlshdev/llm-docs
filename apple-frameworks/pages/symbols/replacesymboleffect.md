> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/symbols/replacesymboleffect](https://developer.apple.com/documentation/symbols/replacesymboleffect)

# ReplaceSymbolEffect

**Framework:** Symbols  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A type that replaces the layers of one symbol-based image with those of another.

## Declaration

```swift
struct ReplaceSymbolEffect
```

<a id="overview"></a>

## Overview

A replace transition animates the change from one symbol image to another. You choose from one of the predefined scaling animations: Down-Up, Off-Up, and Up-Up.

- **Down-Up**: The initial symbol scales down as it’s removed, and the new symbol scales up as it’s added.
- **Off-Up**: The initial symbol is removed with no animation, and the new symbol scales up as it’s added.
- **Up-Up**: The initial symbol scales up as it’s removed, and the new symbol scales up as it’s added.

## Topics

### Accessing symbol effects

- [downUp](replacesymboleffect/downup-swift.property.md): An effect that replaces a symbol by scaling it down, and scaling a different symbol up.
- [offUp](replacesymboleffect/offup-swift.property.md): An effect that replaces a symbol by removing it, and scaling a different symbol up.
- [upUp](replacesymboleffect/upup-swift.property.md): An effect that replaces a symbol by scaling it up, and scaling a different symbol up.

### Determining effect scope

- [byLayer](replacesymboleffect/bylayer.md): An effect that replaces each layer separately.
- [wholeSymbol](replacesymboleffect/wholesymbol.md): An effect that replaces all layers simultaneously.

### Accessing the configuration

- [configuration](replacesymboleffect/configuration.md): The configuration for the effect.

### Structures

- [ReplaceSymbolEffect.MagicReplace](replacesymboleffect/magicreplace.md): A symbol effect applies the MagicReplace animation to symbol images.

### Instance Methods

- [magic(fallback:)](replacesymboleffect/magic%28fallback_%29.md): Returns an effect preferring MagicReplace and a configured ReplaceEffect if MagicReplace is not possible.

### Type Properties

- [downUp](replacesymboleffect/downup-swift.type.property.md): Returns an effect requesting the Down-Up variant of the Replace animation.
- [offUp](replacesymboleffect/offup-swift.type.property.md): Returns an effect requesting the Off-Up variant of the Replace animation.
- [upUp](replacesymboleffect/upup-swift.type.property.md): Returns an effect requesting the Up-Up variant of the Replace animation.

## Relationships

### Conforms To

- [ContentTransitionSymbolEffect](contenttransitionsymboleffect.md)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
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
- [ScaleSymbolEffect](scalesymboleffect.md): A type that scales the layers in a symbol-based image separately or as a whole.
- [VariableColorSymbolEffect](variablecolorsymboleffect.md): A type that replaces the opacity of variable layers in a symbol-based image in a repeatable sequence.
- [BreatheSymbolEffect](breathesymboleffect.md): A symbol effect that applies the Breathe animation to symbol images.
- [RotateSymbolEffect](rotatesymboleffect.md): A symbol effect that applies the Rotate animation to symbol images.
- [WiggleSymbolEffect](wigglesymboleffect.md): A symbol effect that applies the Wiggle animation to symbol images.

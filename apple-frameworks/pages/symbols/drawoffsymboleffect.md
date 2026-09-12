> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/symbols/drawoffsymboleffect](https://developer.apple.com/documentation/symbols/drawoffsymboleffect)

# DrawOffSymbolEffect

**Framework:** Symbols  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A symbol effect that applies the DrawOff animation to symbol images.

## Declaration

```swift
struct DrawOffSymbolEffect
```

<a id="overview"></a>

## Overview

The DrawOff animation makes the symbol hidden either as a whole, or one motion group at a time, animating parts of the symbol with draw data.

## Topics

### Instance Properties

- [byLayer](drawoffsymboleffect/bylayer.md): Returns a copy of the effect requesting an animation that applies separately to each motion group.
- [configuration](drawoffsymboleffect/configuration.md): The configuration for the effect.
- [individually](drawoffsymboleffect/individually.md): Returns a copy of the effect requesting an animation that applies separately to each motion group, where only one motion group is active at a time.
- [nonReversed](drawoffsymboleffect/nonreversed.md): Returns a copy of the effect requesting an animation that draws off following the draw metadata forwards.
- [reversed](drawoffsymboleffect/reversed.md): Returns a copy of the effect requesting an animation that draws off following the draw metadata in reverse.
- [wholeSymbol](drawoffsymboleffect/wholesymbol.md): Returns a copy of the effect requesting an animation that applies to all motion groups simultaneously.

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

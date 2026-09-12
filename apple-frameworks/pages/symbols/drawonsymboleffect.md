> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/symbols/drawonsymboleffect](https://developer.apple.com/documentation/symbols/drawonsymboleffect)

# DrawOnSymbolEffect

**Framework:** Symbols  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A symbol effect that applies the DrawOn animation to symbol images.

## Declaration

```swift
struct DrawOnSymbolEffect
```

<a id="overview"></a>

## Overview

The DrawOn animation makes the symbol visible either as a whole, or one motion group at a time, animating parts of the symbol with draw data.

## Topics

### Instance Properties

- [byLayer](drawonsymboleffect/bylayer.md): Returns a copy of the effect requesting an animation that applies separately to each motion group.
- [configuration](drawonsymboleffect/configuration.md): The configuration for the effect.
- [individually](drawonsymboleffect/individually.md): Returns a copy of the effect requesting an animation that applies separately to each motion group, where only one motion group is active at a time.
- [wholeSymbol](drawonsymboleffect/wholesymbol.md): Returns a copy of the effect requesting an animation that applies to all motion groups simultaneously.

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

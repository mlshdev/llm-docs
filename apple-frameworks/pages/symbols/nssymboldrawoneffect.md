> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/symbols/nssymboldrawoneffect](https://developer.apple.com/documentation/symbols/nssymboldrawoneffect)

# NSSymbolDrawOnEffect

**Interface language:** Objective-C

**Framework:** Symbols  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A symbol effect that applies the DrawOn animation to symbol images.

## Declaration

```objectivec
@interface NSSymbolDrawOnEffect : NSSymbolEffect
```

<a id="overview"></a>

## Overview

The DrawOn animation makes the symbol visible either as a whole, or one motion group at a time, animating parts of the symbol with draw data.

## Topics

### Instance Methods

- [effectWithByLayer](nssymboldrawoneffect/effectwithbylayer.md): Returns a copy of the effect requesting an animation that applies separately to each motion group.
- [effectWithIndividually](nssymboldrawoneffect/effectwithindividually.md): Returns a copy of the effect requesting an animation that applies separately to each motion group, where only one motion group is active at a time.
- [effectWithWholeSymbol](nssymboldrawoneffect/effectwithwholesymbol.md): Returns a copy of the effect requesting an animation that applies to all motion groups simultaneously.

### Type Methods

- [effect](nssymboldrawoneffect/effect.md): The default draw on effect, determined by the system.

## Relationships

### Inherits From

- [NSSymbolEffect](nssymboleffect.md)

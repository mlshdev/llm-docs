> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/symbols/nssymbolrotateeffect](https://developer.apple.com/documentation/symbols/nssymbolrotateeffect)

# NSSymbolRotateEffect

**Interface language:** Objective-C

**Framework:** Symbols  
**Kind:** Class  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A symbol effect that applies the Rotate animation to symbol images.

## Declaration

```objectivec
@interface NSSymbolRotateEffect : NSSymbolEffect
```

<a id="overview"></a>

## Overview

The Rotate animation rotates parts of a symbol around a symbol-provided anchor point.

## Topics

### Instance Methods

- [effectWithByLayer](nssymbolrotateeffect/effectwithbylayer.md): Returns a copy of the effect that animates incrementally, by layer.
- [effectWithWholeSymbol](nssymbolrotateeffect/effectwithwholesymbol.md): Returns a copy of the effect that animates all layers of the symbol simultaneously.

### Type Methods

- [effect](nssymbolrotateeffect/effect.md): The default rotate effect, determined by the system.
- [rotateClockwiseEffect](nssymbolrotateeffect/rotateclockwiseeffect.md): Convenience initializer for a rotate effect that rotates clockwise.
- [rotateCounterClockwiseEffect](nssymbolrotateeffect/rotatecounterclockwiseeffect.md): Convenience initializer for a rotate effect that rotates counter-clockwise.

## Relationships

### Inherits From

- [NSSymbolEffect](nssymboleffect.md)

## See Also

### Symbol effects

- [NSSymbolAppearEffect](nssymbolappeareffect.md): A type that makes the layers of a symbol-based image appear separately or as a whole.
- [NSSymbolBounceEffect](nssymbolbounceeffect.md): A type that applies a transitory scaling effect, or bounce, to the layers in a symbol-based image separately or as a whole.
- [NSSymbolDisappearEffect](nssymboldisappeareffect.md): A type that makes the layers of a symbol-based image disappear separately or as a whole.
- [NSSymbolPulseEffect](nssymbolpulseeffect.md): A type that fades the opacity of some or all layers in a symbol-based image.
- [NSSymbolScaleEffect](nssymbolscaleeffect.md): A type that scales the layers in a symbol-based image separately or as a whole.
- [NSSymbolVariableColorEffect](nssymbolvariablecoloreffect.md): A type that replaces the opacity of variable layers in a symbol-based image in a repeatable sequence.
- [NSSymbolBreatheEffect](nssymbolbreatheeffect.md): A symbol effect that applies the Breathe animation to symbol images.
- [NSSymbolWiggleEffect](nssymbolwiggleeffect.md): A symbol effect that applies the Wiggle animation to symbol images.

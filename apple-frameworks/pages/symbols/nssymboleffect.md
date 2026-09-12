> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/symbols/nssymboleffect](https://developer.apple.com/documentation/symbols/nssymboleffect)

# NSSymbolEffect

**Interface language:** Objective-C

**Framework:** Symbols  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

An abstract base class for effects that you can apply to a symbol-based image.

## Declaration

```objectivec
@interface NSSymbolEffect : NSObject
```

<a id="overview"></a>

## Overview

You don’t use this class directly. Instead, use a class that inherits from this one, such as [NSSymbolBounceEffect](nssymbolbounceeffect.md).

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [NSSymbolAppearEffect](nssymbolappeareffect.md)
- [NSSymbolBounceEffect](nssymbolbounceeffect.md)
- [NSSymbolBreatheEffect](nssymbolbreatheeffect.md)
- [NSSymbolDisappearEffect](nssymboldisappeareffect.md)
- [NSSymbolDrawOffEffect](nssymboldrawoffeffect.md)
- [NSSymbolDrawOnEffect](nssymboldrawoneffect.md)
- [NSSymbolPulseEffect](nssymbolpulseeffect.md)
- [NSSymbolRotateEffect](nssymbolrotateeffect.md)
- [NSSymbolScaleEffect](nssymbolscaleeffect.md)
- [NSSymbolVariableColorEffect](nssymbolvariablecoloreffect.md)
- [NSSymbolWiggleEffect](nssymbolwiggleeffect.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Symbol effect classes

- [NSSymbolContentTransition](nssymbolcontenttransition.md): An abstract base class for transitions you can apply to symbol-based images.

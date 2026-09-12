> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasecardioiddirectivitymodelsubbandparameters](https://developer.apple.com/documentation/phase/phasecardioiddirectivitymodelsubbandparameters)

# PHASECardioidDirectivityModelSubbandParameters (Swift)

**Framework:** PHASE  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A data set that projects sound of a certain frequency outward in the shape of a heart.

## Declaration

```swift
class PHASECardioidDirectivityModelSubbandParameters
```

<a id="overview"></a>

## Overview

This class defines one subband in the [PHASECardioidDirectivityModelParameters](phasecardioiddirectivitymodelparameters.md) class’s `subbands`. Depending on the specific shape you define with [pattern](phasecardioiddirectivitymodelsubbandparameters/pattern.md) and [sharpness](phasecardioiddirectivitymodelsubbandparameters/sharpness.md), you can attenuate sound focused at [frequency](phasecardioiddirectivitymodelsubbandparameters/frequency.md) to the sides of the listener, while leaving the sound in front of or behind the listener unchanged.

## Topics

### Creating Cardioid Directivity Subband Parameters

- [init()](phasecardioiddirectivitymodelsubbandparameters/init%28%29.md): Creates a data set that projects sound of a certain frequency outward in the shape of a heart.

### Sizing the Subband

- [frequency](phasecardioiddirectivitymodelsubbandparameters/frequency.md): A frequency in the audio spectrum where the pattern and sharpness resonate most.

### Shaping Directivity

- [pattern](phasecardioiddirectivitymodelsubbandparameters/pattern.md): A shape that determines the direction of sound.
- [sharpness](phasecardioiddirectivitymodelsubbandparameters/sharpness.md): The amount that the shape overlaps with bordering subbands.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Sound Directivity

- [PHASECardioidDirectivityModelParameters](phasecardioiddirectivitymodelparameters.md): An object that directs sound in a heart-shaped curve surrounding a sound source.
- [PHASEConeDirectivityModelParameters](phaseconedirectivitymodelparameters.md): An object that directs sound in a cone-shaped curve that extends from a sound source.
- [PHASEConeDirectivityModelSubbandParameters](phaseconedirectivitymodelsubbandparameters.md): A data set that projects sound of a certain frequency outward in the shape of a cone.
- [PHASEDirectivityModelParameters](phasedirectivitymodelparameters.md): A base class for objects that direct sound.

# PHASECardioidDirectivityModelSubbandParameters (Objective-C)

**Framework:** PHASE  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A data set that projects sound of a certain frequency outward in the shape of a heart.

## Declaration

```objectivec
@interface PHASECardioidDirectivityModelSubbandParameters : NSObject
```

<a id="overview"></a>

## Overview

This class defines one subband in the [PHASECardioidDirectivityModelParameters](phasecardioiddirectivitymodelparameters.md) class’s `subbands`. Depending on the specific shape you define with [pattern](phasecardioiddirectivitymodelsubbandparameters/pattern.md) and [sharpness](phasecardioiddirectivitymodelsubbandparameters/sharpness.md), you can attenuate sound focused at [frequency](phasecardioiddirectivitymodelsubbandparameters/frequency.md) to the sides of the listener, while leaving the sound in front of or behind the listener unchanged.

## Topics

### Creating Cardioid Directivity Subband Parameters

- [init](phasecardioiddirectivitymodelsubbandparameters/init%28%29.md): Creates a data set that projects sound of a certain frequency outward in the shape of a heart.

### Sizing the Subband

- [frequency](phasecardioiddirectivitymodelsubbandparameters/frequency.md): A frequency in the audio spectrum where the pattern and sharpness resonate most.

### Shaping Directivity

- [pattern](phasecardioiddirectivitymodelsubbandparameters/pattern.md): A shape that determines the direction of sound.
- [sharpness](phasecardioiddirectivitymodelsubbandparameters/sharpness.md): The amount that the shape overlaps with bordering subbands.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Sound Directivity

- [PHASECardioidDirectivityModelParameters](phasecardioiddirectivitymodelparameters.md): An object that directs sound in a heart-shaped curve surrounding a sound source.
- [PHASEConeDirectivityModelParameters](phaseconedirectivitymodelparameters.md): An object that directs sound in a cone-shaped curve that extends from a sound source.
- [PHASEConeDirectivityModelSubbandParameters](phaseconedirectivitymodelsubbandparameters.md): A data set that projects sound of a certain frequency outward in the shape of a cone.
- [PHASEDirectivityModelParameters](phasedirectivitymodelparameters.md): A base class for objects that direct sound.

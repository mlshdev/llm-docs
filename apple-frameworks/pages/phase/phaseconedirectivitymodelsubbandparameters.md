> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phaseconedirectivitymodelsubbandparameters](https://developer.apple.com/documentation/phase/phaseconedirectivitymodelsubbandparameters)

# PHASEConeDirectivityModelSubbandParameters (Swift)

**Framework:** PHASE  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A data set that projects sound of a certain frequency outward in the shape of a cone.

## Declaration

```swift
class PHASEConeDirectivityModelSubbandParameters
```

<a id="overview"></a>

## Overview

This class defines one subband in the [PHASEConeDirectivityModelParameters](phaseconedirectivitymodelparameters.md) class’s `subbands`. The inner and outer angles you define with [setAngles(innerAngle:outerAngle:)](phaseconedirectivitymodelsubbandparameters/setangles%28innerangle_outerangle_%29.md) describe a cone that directs sound of a given [frequency](phasecardioiddirectivitymodelsubbandparameters/frequency.md) toward the listener. The cone’s point rests at the 3D position of the sound source. The framework adjusts the volume of the sound according to location of the listener in the 3D scene:

- If the listener positions in an area outside of the subband’s [outerAngle](phaseconedirectivitymodelsubbandparameters/outerangle.md), the sound emanates from the source at the volume defined by [outerGain](phaseconedirectivitymodelsubbandparameters/outergain.md).
- If the listener positions inside the area defined by [innerAngle](phaseconedirectivitymodelsubbandparameters/innerangle.md), the sound emanates from the source at maximum volume.
- If the listener positions in between the outer and inner angles, the framework blends the volume to a value between [outerGain](phaseconedirectivitymodelsubbandparameters/outergain.md) and the maximum.

## Topics

### Creating Cone Directivity Subband Parameters

- [init()](phaseconedirectivitymodelsubbandparameters/init%28%29.md): Creates a data set that projects sound of a certain frequency outward in the shape of a cone.

### Sizing the Subband

- [frequency](phaseconedirectivitymodelsubbandparameters/frequency.md): A frequency in the audio spectrum where the subband resonates most.

### Shaping Directivity

- [innerAngle](phaseconedirectivitymodelsubbandparameters/innerangle.md): An angle, in degrees, that determines the size of the audio emitting area inside the cone.
- [outerAngle](phaseconedirectivitymodelsubbandparameters/outerangle.md): An angle, in degrees, that determines the size of the audio emitting area outside the cone.
- [outerGain](phaseconedirectivitymodelsubbandparameters/outergain.md): The loudness of the audio the outside area of the cone emits.
- [setAngles(innerAngle:outerAngle:)](phaseconedirectivitymodelsubbandparameters/setangles%28innerangle_outerangle_%29.md): Configures a focus area for cone-based sound directivity.

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
- [PHASECardioidDirectivityModelSubbandParameters](phasecardioiddirectivitymodelsubbandparameters.md): A data set that projects sound of a certain frequency outward in the shape of a heart.
- [PHASEConeDirectivityModelParameters](phaseconedirectivitymodelparameters.md): An object that directs sound in a cone-shaped curve that extends from a sound source.
- [PHASEDirectivityModelParameters](phasedirectivitymodelparameters.md): A base class for objects that direct sound.

# PHASEConeDirectivityModelSubbandParameters (Objective-C)

**Framework:** PHASE  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A data set that projects sound of a certain frequency outward in the shape of a cone.

## Declaration

```objectivec
@interface PHASEConeDirectivityModelSubbandParameters : NSObject
```

<a id="overview"></a>

## Overview

This class defines one subband in the [PHASEConeDirectivityModelParameters](phaseconedirectivitymodelparameters.md) class’s `subbands`. The inner and outer angles you define with [setInnerAngle:outerAngle:](phaseconedirectivitymodelsubbandparameters/setangles%28innerangle_outerangle_%29.md) describe a cone that directs sound of a given [frequency](phasecardioiddirectivitymodelsubbandparameters/frequency.md) toward the listener. The cone’s point rests at the 3D position of the sound source. The framework adjusts the volume of the sound according to location of the listener in the 3D scene:

- If the listener positions in an area outside of the subband’s [outerAngle](phaseconedirectivitymodelsubbandparameters/outerangle.md), the sound emanates from the source at the volume defined by [outerGain](phaseconedirectivitymodelsubbandparameters/outergain.md).
- If the listener positions inside the area defined by [innerAngle](phaseconedirectivitymodelsubbandparameters/innerangle.md), the sound emanates from the source at maximum volume.
- If the listener positions in between the outer and inner angles, the framework blends the volume to a value between [outerGain](phaseconedirectivitymodelsubbandparameters/outergain.md) and the maximum.

## Topics

### Creating Cone Directivity Subband Parameters

- [init](phaseconedirectivitymodelsubbandparameters/init%28%29.md): Creates a data set that projects sound of a certain frequency outward in the shape of a cone.

### Sizing the Subband

- [frequency](phaseconedirectivitymodelsubbandparameters/frequency.md): A frequency in the audio spectrum where the subband resonates most.

### Shaping Directivity

- [innerAngle](phaseconedirectivitymodelsubbandparameters/innerangle.md): An angle, in degrees, that determines the size of the audio emitting area inside the cone.
- [outerAngle](phaseconedirectivitymodelsubbandparameters/outerangle.md): An angle, in degrees, that determines the size of the audio emitting area outside the cone.
- [outerGain](phaseconedirectivitymodelsubbandparameters/outergain.md): The loudness of the audio the outside area of the cone emits.
- [setInnerAngle:outerAngle:](phaseconedirectivitymodelsubbandparameters/setangles%28innerangle_outerangle_%29.md): Configures a focus area for cone-based sound directivity.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Sound Directivity

- [PHASECardioidDirectivityModelParameters](phasecardioiddirectivitymodelparameters.md): An object that directs sound in a heart-shaped curve surrounding a sound source.
- [PHASECardioidDirectivityModelSubbandParameters](phasecardioiddirectivitymodelsubbandparameters.md): A data set that projects sound of a certain frequency outward in the shape of a heart.
- [PHASEConeDirectivityModelParameters](phaseconedirectivitymodelparameters.md): An object that directs sound in a cone-shaped curve that extends from a sound source.
- [PHASEDirectivityModelParameters](phasedirectivitymodelparameters.md): A base class for objects that direct sound.

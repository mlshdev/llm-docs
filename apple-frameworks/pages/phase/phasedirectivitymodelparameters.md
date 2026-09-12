> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasedirectivitymodelparameters](https://developer.apple.com/documentation/phase/phasedirectivitymodelparameters)

# PHASEDirectivityModelParameters (Swift)

**Framework:** PHASE  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A base class for objects that direct sound.

## Declaration

```swift
class PHASEDirectivityModelParameters
```

<a id="overview"></a>

## Overview

Several classes derive from this class that implement a unique strategy to direct sound. Rather than create an instance of this class, instantiate a subclass, such as [PHASECardioidDirectivityModelParameters](phasecardioiddirectivitymodelparameters.md) or [PHASEConeDirectivityModelParameters](phaseconedirectivitymodelparameters.md).

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [PHASECardioidDirectivityModelParameters](phasecardioiddirectivitymodelparameters.md)
- [PHASEConeDirectivityModelParameters](phaseconedirectivitymodelparameters.md)

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
- [PHASEConeDirectivityModelSubbandParameters](phaseconedirectivitymodelsubbandparameters.md): A data set that projects sound of a certain frequency outward in the shape of a cone.

# PHASEDirectivityModelParameters (Objective-C)

**Framework:** PHASE  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A base class for objects that direct sound.

## Declaration

```objectivec
@interface PHASEDirectivityModelParameters : NSObject
```

<a id="overview"></a>

## Overview

Several classes derive from this class that implement a unique strategy to direct sound. Rather than create an instance of this class, instantiate a subclass, such as [PHASECardioidDirectivityModelParameters](phasecardioiddirectivitymodelparameters.md) or [PHASEConeDirectivityModelParameters](phaseconedirectivitymodelparameters.md).

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [PHASECardioidDirectivityModelParameters](phasecardioiddirectivitymodelparameters.md)
- [PHASEConeDirectivityModelParameters](phaseconedirectivitymodelparameters.md)

## See Also

### Sound Directivity

- [PHASECardioidDirectivityModelParameters](phasecardioiddirectivitymodelparameters.md): An object that directs sound in a heart-shaped curve surrounding a sound source.
- [PHASECardioidDirectivityModelSubbandParameters](phasecardioiddirectivitymodelsubbandparameters.md): A data set that projects sound of a certain frequency outward in the shape of a heart.
- [PHASEConeDirectivityModelParameters](phaseconedirectivitymodelparameters.md): An object that directs sound in a cone-shaped curve that extends from a sound source.
- [PHASEConeDirectivityModelSubbandParameters](phaseconedirectivitymodelsubbandparameters.md): A data set that projects sound of a certain frequency outward in the shape of a cone.

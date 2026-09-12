> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasedistancemodelparameters](https://developer.apple.com/documentation/phase/phasedistancemodelparameters)

# PHASEDistanceModelParameters (Swift)

**Framework:** PHASE  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A base class for a sound’s rate of change over distance.

## Declaration

```swift
class PHASEDistanceModelParameters
```

<a id="overview"></a>

## Overview

When your app outputs sound with a 3D position and orientation, designate a subclass of this class to indicate the manner in which PHASE changes sound with distance. Assign an instance of either [PHASEGeometricSpreadingDistanceModelParameters](phasegeometricspreadingdistancemodelparameters.md) or [PHASEEnvelopeDistanceModelParameters](phaseenvelopedistancemodelparameters.md), depending on your app’s needs, to the [PHASESpatialMixerDefinition](phasespatialmixerdefinition.md) class’s [distanceModelParameters](phasespatialmixerdefinition/distancemodelparameters.md) property.

## Topics

### Fading the Sound

- [fadeOutParameters](phasedistancemodelparameters/fadeoutparameters.md): A distance over which the framework fades out the mixer’s sound.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [PHASEEnvelopeDistanceModelParameters](phaseenvelopedistancemodelparameters.md)
- [PHASEGeometricSpreadingDistanceModelParameters](phasegeometricspreadingdistancemodelparameters.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Distance Modeling

- [PHASEGeometricSpreadingDistanceModelParameters](phasegeometricspreadingdistancemodelparameters.md): An object that dissipates sound frequencies over distance.
- [PHASEEnvelopeDistanceModelParameters](phaseenvelopedistancemodelparameters.md): A graph of points and curves that shapes the volume of a sound over distance.
- [PHASEDistanceModelFadeOutParameters](phasedistancemodelfadeoutparameters.md): A distance over which the framework fades out sound.

# PHASEDistanceModelParameters (Objective-C)

**Framework:** PHASE  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A base class for a sound’s rate of change over distance.

## Declaration

```objectivec
@interface PHASEDistanceModelParameters : NSObject
```

<a id="overview"></a>

## Overview

When your app outputs sound with a 3D position and orientation, designate a subclass of this class to indicate the manner in which PHASE changes sound with distance. Assign an instance of either [PHASEGeometricSpreadingDistanceModelParameters](phasegeometricspreadingdistancemodelparameters.md) or [PHASEEnvelopeDistanceModelParameters](phaseenvelopedistancemodelparameters.md), depending on your app’s needs, to the [PHASESpatialMixerDefinition](phasespatialmixerdefinition.md) class’s [distanceModelParameters](phasespatialmixerdefinition/distancemodelparameters.md) property.

## Topics

### Fading the Sound

- [fadeOutParameters](phasedistancemodelparameters/fadeoutparameters.md): A distance over which the framework fades out the mixer’s sound.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [PHASEEnvelopeDistanceModelParameters](phaseenvelopedistancemodelparameters.md)
- [PHASEGeometricSpreadingDistanceModelParameters](phasegeometricspreadingdistancemodelparameters.md)

## See Also

### Distance Modeling

- [PHASEGeometricSpreadingDistanceModelParameters](phasegeometricspreadingdistancemodelparameters.md): An object that dissipates sound frequencies over distance.
- [PHASEEnvelopeDistanceModelParameters](phaseenvelopedistancemodelparameters.md): A graph of points and curves that shapes the volume of a sound over distance.
- [PHASEDistanceModelFadeOutParameters](phasedistancemodelfadeoutparameters.md): A distance over which the framework fades out sound.

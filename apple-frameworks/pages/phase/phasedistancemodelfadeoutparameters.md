> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasedistancemodelfadeoutparameters](https://developer.apple.com/documentation/phase/phasedistancemodelfadeoutparameters)

# PHASEDistanceModelFadeOutParameters (Swift)

**Framework:** PHASE  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A distance over which the framework fades out sound.

## Declaration

```swift
class PHASEDistanceModelFadeOutParameters
```

<a id="overview"></a>

## Overview

For spatial sound output, the framework stops playing a sound when its distance from the listener surpases [cullDistance](phasedistancemodelfadeoutparameters/culldistance.md). The framework gradually fades out the sound’s volume as the distance between the source and listener approaches [cullDistance](phasedistancemodelfadeoutparameters/culldistance.md). Likewise, the framework gradually fades in the sound as the distance between the source and listener approaches `0`. A [PHASEDistanceModelParameters](phasedistancemodelparameters.md) object provides an instance of this class to a spatial mixer; for more information, see [fadeOutParameters](phasedistancemodelparameters/fadeoutparameters.md).

<a id="Specifying-a-Maximum-Distance-That-Sound-Reaches"></a>

### Specifying a Maximum Distance That Sound Reaches

The following code demonstrates a spatial mixer’s additional fade out. By setting `fadeOutLength` to `1.0`, the framework begins to fade out a sound after its distance to the listener surpases `1.0`.

**Swift**

```swift
let fadeOut = PHASEDistanceModelFadeOutParameters(maximumDistance: 10.0,
 fadeOutLength: 1.0,
 curveType: PHASECurveType.linear)
piecewiseModel.fadeOutParameters = fadeOut
spatialMixer.distanceModelParameters = piecewiseModel
```

**Objective-C**

```objc
PHASEDistanceModelFadeOutParameters* fadeOut = 
    [[PHASEDistanceModelFadeOutParameters alloc] 
        initWithMaximumDistance:10.f 
        fadeOutLength:1.f curveType:PHASECurveTypeLinear];
piecewiseModel.fadeOutParameters = fadeOut;
spatialMixer.distanceModelParameters = piecewiseModel;
```

## Topics

### Creating the Distance Model Fade-Out Parameters

- [init(cullDistance:)](phasedistancemodelfadeoutparameters/init%28culldistance_%29.md): Creates a distance beyond which sound sources stop playing.

### Inspecting the Cull Distance

- [cullDistance](phasedistancemodelfadeoutparameters/culldistance.md): The distance beyond which the framework doesn’t process the sound.

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

### Distance Modeling

- [PHASEGeometricSpreadingDistanceModelParameters](phasegeometricspreadingdistancemodelparameters.md): An object that dissipates sound frequencies over distance.
- [PHASEEnvelopeDistanceModelParameters](phaseenvelopedistancemodelparameters.md): A graph of points and curves that shapes the volume of a sound over distance.
- [PHASEDistanceModelParameters](phasedistancemodelparameters.md): A base class for a sound’s rate of change over distance.

# PHASEDistanceModelFadeOutParameters (Objective-C)

**Framework:** PHASE  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A distance over which the framework fades out sound.

## Declaration

```objectivec
@interface PHASEDistanceModelFadeOutParameters : NSObject
```

<a id="overview"></a>

## Overview

For spatial sound output, the framework stops playing a sound when its distance from the listener surpases [cullDistance](phasedistancemodelfadeoutparameters/culldistance.md). The framework gradually fades out the sound’s volume as the distance between the source and listener approaches [cullDistance](phasedistancemodelfadeoutparameters/culldistance.md). Likewise, the framework gradually fades in the sound as the distance between the source and listener approaches `0`. A [PHASEDistanceModelParameters](phasedistancemodelparameters.md) object provides an instance of this class to a spatial mixer; for more information, see [fadeOutParameters](phasedistancemodelparameters/fadeoutparameters.md).

<a id="Specifying-a-Maximum-Distance-That-Sound-Reaches"></a>

### Specifying a Maximum Distance That Sound Reaches

The following code demonstrates a spatial mixer’s additional fade out. By setting `fadeOutLength` to `1.0`, the framework begins to fade out a sound after its distance to the listener surpases `1.0`.

**Swift**

```swift
let fadeOut = PHASEDistanceModelFadeOutParameters(maximumDistance: 10.0,
 fadeOutLength: 1.0,
 curveType: PHASECurveType.linear)
piecewiseModel.fadeOutParameters = fadeOut
spatialMixer.distanceModelParameters = piecewiseModel
```

**Objective-C**

```objc
PHASEDistanceModelFadeOutParameters* fadeOut = 
    [[PHASEDistanceModelFadeOutParameters alloc] 
        initWithMaximumDistance:10.f 
        fadeOutLength:1.f curveType:PHASECurveTypeLinear];
piecewiseModel.fadeOutParameters = fadeOut;
spatialMixer.distanceModelParameters = piecewiseModel;
```

## Topics

### Creating the Distance Model Fade-Out Parameters

- [initWithCullDistance:](phasedistancemodelfadeoutparameters/init%28culldistance_%29.md): Creates a distance beyond which sound sources stop playing.

### Inspecting the Cull Distance

- [cullDistance](phasedistancemodelfadeoutparameters/culldistance.md): The distance beyond which the framework doesn’t process the sound.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Distance Modeling

- [PHASEGeometricSpreadingDistanceModelParameters](phasegeometricspreadingdistancemodelparameters.md): An object that dissipates sound frequencies over distance.
- [PHASEEnvelopeDistanceModelParameters](phaseenvelopedistancemodelparameters.md): A graph of points and curves that shapes the volume of a sound over distance.
- [PHASEDistanceModelParameters](phasedistancemodelparameters.md): A base class for a sound’s rate of change over distance.

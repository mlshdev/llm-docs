> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasedistancemodelparameters/fadeoutparameters](https://developer.apple.com/documentation/phase/phasedistancemodelparameters/fadeoutparameters)

# fadeOutParameters (Swift)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A distance over which the framework fades out the mixer’s sound.

## Declaration

```swift
var fadeOutParameters: PHASEDistanceModelFadeOutParameters? { get set }
```

<a id="Discussion"></a>

## Discussion

As a sound source’s distance between the listener approaches the value of this property, the framework gradually lowers the sound’s volume to `0`. Beyond this distance, PHASE culls the sound. This property offers an additional fade out that the framework applies on top of the spatial mixer’s [distanceModelParameters](../phasespatialmixerdefinition/distancemodelparameters.md).

The framework calculates distance as the difference between the listener’s position and the sound-source position, scaled by the engine’s [unitsPerMeter](../phaseengine/unitspermeter.md).

# fadeOutParameters (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A distance over which the framework fades out the mixer’s sound.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) PHASEDistanceModelFadeOutParameters * fadeOutParameters;
```

<a id="Discussion"></a>

## Discussion

As a sound source’s distance between the listener approaches the value of this property, the framework gradually lowers the sound’s volume to `0`. Beyond this distance, PHASE culls the sound. This property offers an additional fade out that the framework applies on top of the spatial mixer’s [distanceModelParameters](../phasespatialmixerdefinition/distancemodelparameters.md).

The framework calculates distance as the difference between the listener’s position and the sound-source position, scaled by the engine’s [unitsPerMeter](../phaseengine/unitspermeter.md).

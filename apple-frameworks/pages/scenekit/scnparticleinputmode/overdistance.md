> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnparticleinputmode/overdistance](https://developer.apple.com/documentation/scenekit/scnparticleinputmode/overdistance)

# SCNParticleInputMode.overDistance (Swift)

**Framework:** SceneKit  
**Kind:** Case  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The controller’s effect on a particle property is a function of the particle’s distance from the position of a specified node.

## Declaration

```swift
case overDistance
```

<a id="Discussion"></a>

## Discussion

Use the [inputOrigin](../scnparticlepropertycontroller/inputorigin.md) property to specify the node to measure distance from, and the [inputBias](../scnparticlepropertycontroller/inputbias.md) and [inputScale](../scnparticlepropertycontroller/inputscale.md) properties to refine the relationship between a range of distances into a range of input values for the controller’s animation.

## See Also

### Constants

- [SCNParticleInputMode.overLife](overlife.md): The controller’s effect on a particle property is a function of the time since the particle’s birth.
- [SCNParticleInputMode.overOtherProperty](overotherproperty.md): The controller’s effect on a particle property is a function of another of the particle’s properties.

# SCNParticleInputModeOverDistance (Objective-C)

**Framework:** SceneKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The controller’s effect on a particle property is a function of the particle’s distance from the position of a specified node.

## Declaration

```objectivec
SCNParticleInputModeOverDistance
```

<a id="Discussion"></a>

## Discussion

Use the [inputOrigin](../scnparticlepropertycontroller/inputorigin.md) property to specify the node to measure distance from, and the [inputBias](../scnparticlepropertycontroller/inputbias.md) and [inputScale](../scnparticlepropertycontroller/inputscale.md) properties to refine the relationship between a range of distances into a range of input values for the controller’s animation.

## See Also

### Constants

- [SCNParticleInputModeOverLife](overlife.md): The controller’s effect on a particle property is a function of the time since the particle’s birth.
- [SCNParticleInputModeOverOtherProperty](overotherproperty.md): The controller’s effect on a particle property is a function of another of the particle’s properties.

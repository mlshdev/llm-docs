> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnparticleinputmode/overotherproperty](https://developer.apple.com/documentation/scenekit/scnparticleinputmode/overotherproperty)

# SCNParticleInputMode.overOtherProperty (Swift)

**Framework:** SceneKit  
**Kind:** Case  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The controller’s effect on a particle property is a function of another of the particle’s properties.

## Declaration

```swift
case overOtherProperty
```

<a id="Discussion"></a>

## Discussion

Use the [inputProperty](../scnparticlepropertycontroller/inputproperty.md) property to specify the input property, and the [inputBias](../scnparticlepropertycontroller/inputbias.md) and [inputScale](../scnparticlepropertycontroller/inputscale.md) properties to refine the relationship between a range of property values into a range of input values for the controller’s animation.

## See Also

### Constants

- [SCNParticleInputMode.overLife](overlife.md): The controller’s effect on a particle property is a function of the time since the particle’s birth.
- [SCNParticleInputMode.overDistance](overdistance.md): The controller’s effect on a particle property is a function of the particle’s distance from the position of a specified node.

# SCNParticleInputModeOverOtherProperty (Objective-C)

**Framework:** SceneKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The controller’s effect on a particle property is a function of another of the particle’s properties.

## Declaration

```objectivec
SCNParticleInputModeOverOtherProperty
```

<a id="Discussion"></a>

## Discussion

Use the [inputProperty](../scnparticlepropertycontroller/inputproperty.md) property to specify the input property, and the [inputBias](../scnparticlepropertycontroller/inputbias.md) and [inputScale](../scnparticlepropertycontroller/inputscale.md) properties to refine the relationship between a range of property values into a range of input values for the controller’s animation.

## See Also

### Constants

- [SCNParticleInputModeOverLife](overlife.md): The controller’s effect on a particle property is a function of the time since the particle’s birth.
- [SCNParticleInputModeOverDistance](overdistance.md): The controller’s effect on a particle property is a function of the particle’s distance from the position of a specified node.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnparticlepropertycontroller/inputscale](https://developer.apple.com/documentation/scenekit/scnparticlepropertycontroller/inputscale)

# inputScale (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A factor for multiplying the input value of the controller’s animation.

## Declaration

```swift
var inputScale: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property and the [inputBias](inputbias.md) property to pre-process input values to the controller’s animation. For example, you use the [SCNParticleInputMode.overDistance](../scnparticleinputmode/overdistance.md) option to animate a particle’s opacity as a function of its distance from a specified point, a scale specifies the range of distances over which the animation takes effect.

The default value is `1.0`, leaving the input value to the animation unchanged. The range of possible values depends on the controller’s animation.

## See Also

### Managing the Controller’s Animation

- [animation](animation.md): The Core Animation object defining the behavior of the property animation.
- [inputMode](inputmode.md): The mode that determines input values for the property controller’s animation.
- [inputBias](inputbias.md): An offset to add to the input value of the controller’s animation.
- [inputOrigin](inputorigin.md): A node whose distance to each particle provides input values for the controller’s animation.
- [inputProperty](inputproperty.md): A particle property that provides input values for this property controller’s animation.

# inputScale (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

A factor for multiplying the input value of the controller’s animation.

## Declaration

```objectivec
@property (nonatomic) CGFloat inputScale;
```

<a id="Discussion"></a>

## Discussion

Use this property and the [inputBias](inputbias.md) property to pre-process input values to the controller’s animation. For example, you use the [SCNParticleInputModeOverDistance](../scnparticleinputmode/overdistance.md) option to animate a particle’s opacity as a function of its distance from a specified point, a scale specifies the range of distances over which the animation takes effect.

The default value is `1.0`, leaving the input value to the animation unchanged. The range of possible values depends on the controller’s animation.

## See Also

### Managing the Controller’s Animation

- [animation](animation.md): The Core Animation object defining the behavior of the property animation.
- [inputMode](inputmode.md): The mode that determines input values for the property controller’s animation.
- [inputBias](inputbias.md): An offset to add to the input value of the controller’s animation.
- [inputOrigin](inputorigin.md): A node whose distance to each particle provides input values for the controller’s animation.
- [inputProperty](inputproperty.md): A particle property that provides input values for this property controller’s animation.

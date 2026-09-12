> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnparticlepropertycontroller/inputbias](https://developer.apple.com/documentation/scenekit/scnparticlepropertycontroller/inputbias)

# inputBias (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

An offset to add to the input value of the controller’s animation.

## Declaration

```swift
var inputBias: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property and the [inputScale](inputscale.md) property to pre-process input values to the controller’s animation. For example, if you use the [SCNParticleInputMode.overDistance](../scnparticleinputmode/overdistance.md) option to animate a particle’s opacity as a function of its distance from a specified point, a bias specifies the minimum distance at which the animation’s [fromValue](../../quartzcore/cabasicanimation/fromvalue.md) property or first keyframe value takes effect.

The default value is `0.0`, leaving the input value to the animation unchanged. The range of possible values depends on the controller’s animation.

## See Also

### Managing the Controller’s Animation

- [animation](animation.md): The Core Animation object defining the behavior of the property animation.
- [inputMode](inputmode.md): The mode that determines input values for the property controller’s animation.
- [inputScale](inputscale.md): A factor for multiplying the input value of the controller’s animation.
- [inputOrigin](inputorigin.md): A node whose distance to each particle provides input values for the controller’s animation.
- [inputProperty](inputproperty.md): A particle property that provides input values for this property controller’s animation.

# inputBias (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

An offset to add to the input value of the controller’s animation.

## Declaration

```objectivec
@property (nonatomic) CGFloat inputBias;
```

<a id="Discussion"></a>

## Discussion

Use this property and the [inputScale](inputscale.md) property to pre-process input values to the controller’s animation. For example, if you use the [SCNParticleInputModeOverDistance](../scnparticleinputmode/overdistance.md) option to animate a particle’s opacity as a function of its distance from a specified point, a bias specifies the minimum distance at which the animation’s [fromValue](../../quartzcore/cabasicanimation/fromvalue.md) property or first keyframe value takes effect.

The default value is `0.0`, leaving the input value to the animation unchanged. The range of possible values depends on the controller’s animation.

## See Also

### Managing the Controller’s Animation

- [animation](animation.md): The Core Animation object defining the behavior of the property animation.
- [inputMode](inputmode.md): The mode that determines input values for the property controller’s animation.
- [inputScale](inputscale.md): A factor for multiplying the input value of the controller’s animation.
- [inputOrigin](inputorigin.md): A node whose distance to each particle provides input values for the controller’s animation.
- [inputProperty](inputproperty.md): A particle property that provides input values for this property controller’s animation.

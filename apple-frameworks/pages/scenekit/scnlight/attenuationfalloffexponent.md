> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnlight/attenuationfalloffexponent](https://developer.apple.com/documentation/scenekit/scnlight/attenuationfalloffexponent)

# attenuationFalloffExponent (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The transition curve for the light’s intensity between its attenuation start and end distances. Animatable.

## Declaration

```swift
var attenuationFalloffExponent: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

You can apply attenuation to omnidirectional lights and spotlights, causing their intensity to diminish over a specified range of distances. At distances in between the start and end distance, the light’s intensity transitions from full to no illumination according to the value of this property.

A value of `0.0` specifies no attenuation—the light’s intensity is the same at all distances. A value of `1.0` specifies a linear transition, and a value of `2.0` (the default) specifies a quadratic transition curve. Higher values have little visible effect.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Managing Light Attenuation

- [attenuationStartDistance](attenuationstartdistance.md): The distance from the light at which its intensity begins to diminish. Animatable.
- [attenuationEndDistance](attenuationenddistance.md): The distance from the light at which its intensity is completely diminished. Animatable.

# attenuationFalloffExponent (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The transition curve for the light’s intensity between its attenuation start and end distances. Animatable.

## Declaration

```objectivec
@property (nonatomic) CGFloat attenuationFalloffExponent;
```

<a id="Discussion"></a>

## Discussion

You can apply attenuation to omnidirectional lights and spotlights, causing their intensity to diminish over a specified range of distances. At distances in between the start and end distance, the light’s intensity transitions from full to no illumination according to the value of this property.

A value of `0.0` specifies no attenuation—the light’s intensity is the same at all distances. A value of `1.0` specifies a linear transition, and a value of `2.0` (the default) specifies a quadratic transition curve. Higher values have little visible effect.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Managing Light Attenuation

- [attenuationStartDistance](attenuationstartdistance.md): The distance from the light at which its intensity begins to diminish. Animatable.
- [attenuationEndDistance](attenuationenddistance.md): The distance from the light at which its intensity is completely diminished. Animatable.

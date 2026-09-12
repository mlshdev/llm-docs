> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnlight/attenuationenddistance](https://developer.apple.com/documentation/scenekit/scnlight/attenuationenddistance)

# attenuationEndDistance (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The distance from the light at which its intensity is completely diminished. Animatable.

## Declaration

```swift
var attenuationEndDistance: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

You can apply attenuation to omnidirectional lights and spotlights, causing their intensity to diminish over a specified range of distances. At distances less than the start distance, the light’s illumination is at full intensity. At distances greater than the end distance, the light provides no illumination. At distances in between the start and end distance, the [attenuationFalloffExponent](attenuationfalloffexponent.md) property defines the transition from full illumination to no illumination.

The default value is `0.0`, specifying no attenuation (the light’s intensity is the same at all distances).

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Managing Light Attenuation

- [attenuationStartDistance](attenuationstartdistance.md): The distance from the light at which its intensity begins to diminish. Animatable.
- [attenuationFalloffExponent](attenuationfalloffexponent.md): The transition curve for the light’s intensity between its attenuation start and end distances. Animatable.

# attenuationEndDistance (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The distance from the light at which its intensity is completely diminished. Animatable.

## Declaration

```objectivec
@property (nonatomic) CGFloat attenuationEndDistance;
```

<a id="Discussion"></a>

## Discussion

You can apply attenuation to omnidirectional lights and spotlights, causing their intensity to diminish over a specified range of distances. At distances less than the start distance, the light’s illumination is at full intensity. At distances greater than the end distance, the light provides no illumination. At distances in between the start and end distance, the [attenuationFalloffExponent](attenuationfalloffexponent.md) property defines the transition from full illumination to no illumination.

The default value is `0.0`, specifying no attenuation (the light’s intensity is the same at all distances).

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Managing Light Attenuation

- [attenuationStartDistance](attenuationstartdistance.md): The distance from the light at which its intensity begins to diminish. Animatable.
- [attenuationFalloffExponent](attenuationfalloffexponent.md): The transition curve for the light’s intensity between its attenuation start and end distances. Animatable.

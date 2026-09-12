> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicsfield/falloffexponent](https://developer.apple.com/documentation/scenekit/scnphysicsfield/falloffexponent)

# falloffExponent (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

An exponent that determines how the field’s strength diminishes with distance.

## Declaration

```swift
var falloffExponent: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

When SceneKit calculates the force to be applied by a field, it attenuates the field’s effect by multiplying with the expression `pow(distance - minRadius, -falloff)`. If the falloff exponent is greater than zero, the field’s effect is stronger on nearby bodies than on bodies farther away from its location.

The default falloff exponent varies by field type. For details, see the methods listed in Creating Physics Fields.

## See Also

### Specifying a Field’s Behavior

- [strength](strength.md): A multiplier for the force that the field applies to objects in its area of effect.
- [minimumDistance](minimumdistance.md): The minimum value for distance-based effects.
- [isActive](isactive.md): A Boolean value that determines whether the field’s effect is enabled.
- [isExclusive](isexclusive.md): A Boolean value that determines whether the field overrides other fields whose areas of effect it overlaps.

# falloffExponent (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

An exponent that determines how the field’s strength diminishes with distance.

## Declaration

```objectivec
@property (nonatomic) CGFloat falloffExponent;
```

<a id="Discussion"></a>

## Discussion

When SceneKit calculates the force to be applied by a field, it attenuates the field’s effect by multiplying with the expression `pow(distance - minRadius, -falloff)`. If the falloff exponent is greater than zero, the field’s effect is stronger on nearby bodies than on bodies farther away from its location.

The default falloff exponent varies by field type. For details, see the methods listed in Creating Physics Fields.

## See Also

### Specifying a Field’s Behavior

- [strength](strength.md): A multiplier for the force that the field applies to objects in its area of effect.
- [minimumDistance](minimumdistance.md): The minimum value for distance-based effects.
- [active](isactive.md): A Boolean value that determines whether the field’s effect is enabled.
- [exclusive](isexclusive.md): A Boolean value that determines whether the field overrides other fields whose areas of effect it overlaps.

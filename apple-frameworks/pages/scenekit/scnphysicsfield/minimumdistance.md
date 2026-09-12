> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicsfield/minimumdistance](https://developer.apple.com/documentation/scenekit/scnphysicsfield/minimumdistance)

# minimumDistance (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The minimum value for distance-based effects.

## Declaration

```swift
var minimumDistance: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

This property determines the beginning of the field’s falloff area. At distances less than the minimum, the field’s effect is at full strength. At greater distances, the field’s effect diminishes based on the value of the [falloffExponent](falloffexponent.md) property. The default minimum distance is a very small (but nonzero) value.

## See Also

### Specifying a Field’s Behavior

- [strength](strength.md): A multiplier for the force that the field applies to objects in its area of effect.
- [falloffExponent](falloffexponent.md): An exponent that determines how the field’s strength diminishes with distance.
- [isActive](isactive.md): A Boolean value that determines whether the field’s effect is enabled.
- [isExclusive](isexclusive.md): A Boolean value that determines whether the field overrides other fields whose areas of effect it overlaps.

# minimumDistance (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The minimum value for distance-based effects.

## Declaration

```objectivec
@property (nonatomic) CGFloat minimumDistance;
```

<a id="Discussion"></a>

## Discussion

This property determines the beginning of the field’s falloff area. At distances less than the minimum, the field’s effect is at full strength. At greater distances, the field’s effect diminishes based on the value of the [falloffExponent](falloffexponent.md) property. The default minimum distance is a very small (but nonzero) value.

## See Also

### Specifying a Field’s Behavior

- [strength](strength.md): A multiplier for the force that the field applies to objects in its area of effect.
- [falloffExponent](falloffexponent.md): An exponent that determines how the field’s strength diminishes with distance.
- [active](isactive.md): A Boolean value that determines whether the field’s effect is enabled.
- [exclusive](isexclusive.md): A Boolean value that determines whether the field overrides other fields whose areas of effect it overlaps.

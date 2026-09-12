> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicsfield/strength](https://developer.apple.com/documentation/scenekit/scnphysicsfield/strength)

# strength (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A multiplier for the force that the field applies to objects in its area of effect.

## Declaration

```swift
var strength: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

Each type of physics field defines its own behavior for strength values. For details, see the methods listed in Creating Physics Fields.

## See Also

### Specifying a Field’s Behavior

- [falloffExponent](falloffexponent.md): An exponent that determines how the field’s strength diminishes with distance.
- [minimumDistance](minimumdistance.md): The minimum value for distance-based effects.
- [isActive](isactive.md): A Boolean value that determines whether the field’s effect is enabled.
- [isExclusive](isexclusive.md): A Boolean value that determines whether the field overrides other fields whose areas of effect it overlaps.

# strength (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

A multiplier for the force that the field applies to objects in its area of effect.

## Declaration

```objectivec
@property (nonatomic) CGFloat strength;
```

<a id="Discussion"></a>

## Discussion

Each type of physics field defines its own behavior for strength values. For details, see the methods listed in Creating Physics Fields.

## See Also

### Specifying a Field’s Behavior

- [falloffExponent](falloffexponent.md): An exponent that determines how the field’s strength diminishes with distance.
- [minimumDistance](minimumdistance.md): The minimum value for distance-based effects.
- [active](isactive.md): A Boolean value that determines whether the field’s effect is enabled.
- [exclusive](isexclusive.md): A Boolean value that determines whether the field overrides other fields whose areas of effect it overlaps.

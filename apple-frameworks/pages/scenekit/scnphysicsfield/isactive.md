> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicsfield/isactive](https://developer.apple.com/documentation/scenekit/scnphysicsfield/isactive)

# isActive (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A Boolean value that determines whether the field’s effect is enabled.

## Declaration

```swift
var isActive: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If this value is [false](https://developer.apple.com/documentation/swift/false), the field does not apply forces to physics bodies in its area of effect. The default value is [true](https://developer.apple.com/documentation/swift/true).

Use this property, for example, to switch fields on and off as a gameplay mechanic.

## See Also

### Specifying a Field’s Behavior

- [strength](strength.md): A multiplier for the force that the field applies to objects in its area of effect.
- [falloffExponent](falloffexponent.md): An exponent that determines how the field’s strength diminishes with distance.
- [minimumDistance](minimumdistance.md): The minimum value for distance-based effects.
- [isExclusive](isexclusive.md): A Boolean value that determines whether the field overrides other fields whose areas of effect it overlaps.

# active (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

A Boolean value that determines whether the field’s effect is enabled.

## Declaration

```objectivec
@property (nonatomic, getter=isActive) BOOL active;
```

<a id="Discussion"></a>

## Discussion

If this value is [false](https://developer.apple.com/documentation/swift/false), the field does not apply forces to physics bodies in its area of effect. The default value is [true](https://developer.apple.com/documentation/swift/true).

Use this property, for example, to switch fields on and off as a gameplay mechanic.

## See Also

### Specifying a Field’s Behavior

- [strength](strength.md): A multiplier for the force that the field applies to objects in its area of effect.
- [falloffExponent](falloffexponent.md): An exponent that determines how the field’s strength diminishes with distance.
- [minimumDistance](minimumdistance.md): The minimum value for distance-based effects.
- [exclusive](isexclusive.md): A Boolean value that determines whether the field overrides other fields whose areas of effect it overlaps.

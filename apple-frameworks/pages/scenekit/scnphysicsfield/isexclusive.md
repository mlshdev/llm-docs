> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicsfield/isexclusive](https://developer.apple.com/documentation/scenekit/scnphysicsfield/isexclusive)

# isExclusive (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A Boolean value that determines whether the field overrides other fields whose areas of effect it overlaps.

## Declaration

```swift
var isExclusive: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If this value is [true](https://developer.apple.com/documentation/swift/true) and a physics body is within this field’s region, SceneKit ignores the effects of all other fields that might otherwise affect the body. The default value is [false](https://developer.apple.com/documentation/swift/false).

If you set this property to [true](https://developer.apple.com/documentation/swift/true) on multiple fields in a scene, their regions should not overlap. If they do, the results are undefined.

## See Also

### Specifying a Field’s Behavior

- [strength](strength.md): A multiplier for the force that the field applies to objects in its area of effect.
- [falloffExponent](falloffexponent.md): An exponent that determines how the field’s strength diminishes with distance.
- [minimumDistance](minimumdistance.md): The minimum value for distance-based effects.
- [isActive](isactive.md): A Boolean value that determines whether the field’s effect is enabled.

# exclusive (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

A Boolean value that determines whether the field overrides other fields whose areas of effect it overlaps.

## Declaration

```objectivec
@property (nonatomic, getter=isExclusive) BOOL exclusive;
```

<a id="Discussion"></a>

## Discussion

If this value is [true](https://developer.apple.com/documentation/swift/true) and a physics body is within this field’s region, SceneKit ignores the effects of all other fields that might otherwise affect the body. The default value is [false](https://developer.apple.com/documentation/swift/false).

If you set this property to [true](https://developer.apple.com/documentation/swift/true) on multiple fields in a scene, their regions should not overlap. If they do, the results are undefined.

## See Also

### Specifying a Field’s Behavior

- [strength](strength.md): A multiplier for the force that the field applies to objects in its area of effect.
- [falloffExponent](falloffexponent.md): An exponent that determines how the field’s strength diminishes with distance.
- [minimumDistance](minimumdistance.md): The minimum value for distance-based effects.
- [active](isactive.md): A Boolean value that determines whether the field’s effect is enabled.

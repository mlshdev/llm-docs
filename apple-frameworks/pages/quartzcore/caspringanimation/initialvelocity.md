> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/caspringanimation/initialvelocity](https://developer.apple.com/documentation/quartzcore/caspringanimation/initialvelocity)

# initialVelocity (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The initial velocity of the object attached to the spring.

## Declaration

```swift
var initialVelocity: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

Defaults to `0`, which represents an unmoving object. Negative values represent the object moving away from the spring attachment point, positive values represent the object moving towards the spring attachment point.

## See Also

### Configuring Physical Attributes

- [damping](damping.md): Defines how the spring’s motion should be damped due to the forces of friction.
- [mass](mass.md): The mass of the object attached to the end of the spring.
- [settlingDuration](settlingduration.md): The estimated duration required for the spring system to be considered at rest.
- [stiffness](stiffness.md): The spring stiffness coefficient.

# initialVelocity (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The initial velocity of the object attached to the spring.

## Declaration

```objectivec
@property CGFloat initialVelocity;
```

<a id="Discussion"></a>

## Discussion

Defaults to `0`, which represents an unmoving object. Negative values represent the object moving away from the spring attachment point, positive values represent the object moving towards the spring attachment point.

## See Also

### Configuring Physical Attributes

- [damping](damping.md): Defines how the spring’s motion should be damped due to the forces of friction.
- [mass](mass.md): The mass of the object attached to the end of the spring.
- [settlingDuration](settlingduration.md): The estimated duration required for the spring system to be considered at rest.
- [stiffness](stiffness.md): The spring stiffness coefficient.

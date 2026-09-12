> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/caspringanimation/mass](https://developer.apple.com/documentation/quartzcore/caspringanimation/mass)

# mass (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The mass of the object attached to the end of the spring.

## Declaration

```swift
var mass: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

The default mass is `1`. Increasing this value will increase the spring effect: the attached object will be subject to more oscillations and greater overshoot, resulting in an increased [settlingDuration](settlingduration.md). Decreasing the mass will reduce the spring effect: there will be fewer oscillations and a reduced overshoot, resulting in a decreased [settlingDuration](settlingduration.md).

## See Also

### Configuring Physical Attributes

- [damping](damping.md): Defines how the spring’s motion should be damped due to the forces of friction.
- [initialVelocity](initialvelocity.md): The initial velocity of the object attached to the spring.
- [settlingDuration](settlingduration.md): The estimated duration required for the spring system to be considered at rest.
- [stiffness](stiffness.md): The spring stiffness coefficient.

# mass (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The mass of the object attached to the end of the spring.

## Declaration

```objectivec
@property CGFloat mass;
```

<a id="Discussion"></a>

## Discussion

The default mass is `1`. Increasing this value will increase the spring effect: the attached object will be subject to more oscillations and greater overshoot, resulting in an increased [settlingDuration](settlingduration.md). Decreasing the mass will reduce the spring effect: there will be fewer oscillations and a reduced overshoot, resulting in a decreased [settlingDuration](settlingduration.md).

## See Also

### Configuring Physical Attributes

- [damping](damping.md): Defines how the spring’s motion should be damped due to the forces of friction.
- [initialVelocity](initialvelocity.md): The initial velocity of the object attached to the spring.
- [settlingDuration](settlingduration.md): The estimated duration required for the spring system to be considered at rest.
- [stiffness](stiffness.md): The spring stiffness coefficient.

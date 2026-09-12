> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/caspringanimation/damping](https://developer.apple.com/documentation/quartzcore/caspringanimation/damping)

# damping (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Defines how the spring’s motion should be damped due to the forces of friction.

## Declaration

```swift
var damping: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of the [damping](damping.md) property is `10`. Reducing this value reduces the energy loss with each oscillation: the animated value will overshoot the [toValue](../cabasicanimation/tovalue.md) and the [settlingDuration](settlingduration.md) may be greater than the [duration](../camediatiming/duration.md). Increasing the value increases the energy loss with each duration: there will be fewer and smaller oscillations and the [settlingDuration](settlingduration.md) may be smaller than the duration.

## See Also

### Configuring Physical Attributes

- [initialVelocity](initialvelocity.md): The initial velocity of the object attached to the spring.
- [mass](mass.md): The mass of the object attached to the end of the spring.
- [settlingDuration](settlingduration.md): The estimated duration required for the spring system to be considered at rest.
- [stiffness](stiffness.md): The spring stiffness coefficient.

# damping (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Defines how the spring’s motion should be damped due to the forces of friction.

## Declaration

```objectivec
@property CGFloat damping;
```

<a id="Discussion"></a>

## Discussion

The default value of the [damping](damping.md) property is `10`. Reducing this value reduces the energy loss with each oscillation: the animated value will overshoot the [toValue](../cabasicanimation/tovalue.md) and the [settlingDuration](settlingduration.md) may be greater than the [duration](../camediatiming/duration.md). Increasing the value increases the energy loss with each duration: there will be fewer and smaller oscillations and the [settlingDuration](settlingduration.md) may be smaller than the duration.

## See Also

### Configuring Physical Attributes

- [initialVelocity](initialvelocity.md): The initial velocity of the object attached to the spring.
- [mass](mass.md): The mass of the object attached to the end of the spring.
- [settlingDuration](settlingduration.md): The estimated duration required for the spring system to be considered at rest.
- [stiffness](stiffness.md): The spring stiffness coefficient.

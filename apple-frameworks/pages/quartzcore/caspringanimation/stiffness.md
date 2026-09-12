> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/caspringanimation/stiffness](https://developer.apple.com/documentation/quartzcore/caspringanimation/stiffness)

# stiffness (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The spring stiffness coefficient.

## Declaration

```swift
var stiffness: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

The default stiffness coefficient is `100`. Increasing the [stiffness](stiffness.md) reduces the number of oscillations and will reduce the settling duration. Decreasing the [stiffness](stiffness.md) increases the the number of oscillations and will increase the settling duration.

## See Also

### Configuring Physical Attributes

- [damping](damping.md): Defines how the spring’s motion should be damped due to the forces of friction.
- [initialVelocity](initialvelocity.md): The initial velocity of the object attached to the spring.
- [mass](mass.md): The mass of the object attached to the end of the spring.
- [settlingDuration](settlingduration.md): The estimated duration required for the spring system to be considered at rest.

# stiffness (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The spring stiffness coefficient.

## Declaration

```objectivec
@property CGFloat stiffness;
```

<a id="Discussion"></a>

## Discussion

The default stiffness coefficient is `100`. Increasing the [stiffness](stiffness.md) reduces the number of oscillations and will reduce the settling duration. Decreasing the [stiffness](stiffness.md) increases the the number of oscillations and will increase the settling duration.

## See Also

### Configuring Physical Attributes

- [damping](damping.md): Defines how the spring’s motion should be damped due to the forces of friction.
- [initialVelocity](initialvelocity.md): The initial velocity of the object attached to the spring.
- [mass](mass.md): The mass of the object attached to the end of the spring.
- [settlingDuration](settlingduration.md): The estimated duration required for the spring system to be considered at rest.

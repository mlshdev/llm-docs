> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skphysicsjointspring/damping](https://developer.apple.com/documentation/spritekit/skphysicsjointspring/damping)

# damping (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Defines how the spring’s motion should be damped due to the forces of friction.

## Declaration

```swift
var damping: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is `0.0`. Increasing the value increases the energy loss with each oscillation: there will be fewer and smaller oscillations and time taken for the spring to settle will decrease.

## See Also

### Configuring a Spring Joint

- [frequency](frequency.md): Defines the frequency or stiffness characteristics of the spring.

# damping (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Defines how the spring’s motion should be damped due to the forces of friction.

## Declaration

```objectivec
@property (nonatomic) CGFloat damping;
```

<a id="Discussion"></a>

## Discussion

The default value is `0.0`. Increasing the value increases the energy loss with each oscillation: there will be fewer and smaller oscillations and time taken for the spring to settle will decrease.

## See Also

### Configuring a Spring Joint

- [frequency](frequency.md): Defines the frequency or stiffness characteristics of the spring.

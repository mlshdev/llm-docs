> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skphysicsjointspring/frequency](https://developer.apple.com/documentation/spritekit/skphysicsjointspring/frequency)

# frequency (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Defines the frequency or stiffness characteristics of the spring.

## Declaration

```swift
var frequency: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is `0.0`, creating a rigid joint between the spring’s two bodies. Setting the frequency to a low value, for example `0.5`, creates a spring with slow oscillations that will settle slowly. Setting the frequency to a high value, for example `10.0`, creates a stiffer spring with faster and fewer oscillations.

## See Also

### Configuring a Spring Joint

- [damping](damping.md): Defines how the spring’s motion should be damped due to the forces of friction.

# frequency (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Defines the frequency or stiffness characteristics of the spring.

## Declaration

```objectivec
@property (nonatomic) CGFloat frequency;
```

<a id="Discussion"></a>

## Discussion

The default value is `0.0`, creating a rigid joint between the spring’s two bodies. Setting the frequency to a low value, for example `0.5`, creates a spring with slow oscillations that will settle slowly. Setting the frequency to a high value, for example `10.0`, creates a stiffer spring with faster and fewer oscillations.

## See Also

### Configuring a Spring Joint

- [damping](damping.md): Defines how the spring’s motion should be damped due to the forces of friction.

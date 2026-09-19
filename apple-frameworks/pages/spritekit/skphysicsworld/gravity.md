> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/spritekit/skphysicsworld/gravity

# gravity (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A vector that specifies the gravitational acceleration applied to physics bodies in the physics world.

## Declaration

```swift
var gravity: CGVector { get set }
```

<a id="Discussion"></a>

## Discussion

The components of this property are measured in meters per second. The default value is `(0.0,-9.8)`, which represent’s Earth’s gravity.

## See Also

### Configuring the Physics World

- [speed](speed.md): The rate at which the simulation executes.

# gravity (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A vector that specifies the gravitational acceleration applied to physics bodies in the physics world.

## Declaration

```objectivec
@property (nonatomic) CGVector gravity;
```

<a id="Discussion"></a>

## Discussion

The components of this property are measured in meters per second. The default value is `(0.0,-9.8)`, which represent’s Earth’s gravity.

## See Also

### Configuring the Physics World

- [speed](speed.md): The rate at which the simulation executes.

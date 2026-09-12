> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skemitternode/particlelifetimerange](https://developer.apple.com/documentation/spritekit/skemitternode/particlelifetimerange)

# particleLifetimeRange (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The range of allowed random values for a particle’s lifetime.

## Declaration

```swift
var particleLifetimeRange: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is `0.0`. If non-zero, the lifetime of each particle is randomly determined and may vary by plus or minus half of the range value.

## See Also

### Controlling Particle Lifetime

- [particleLifetime](particlelifetime.md): The average lifetime of a particle, in seconds.

# particleLifetimeRange (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The range of allowed random values for a particle’s lifetime.

## Declaration

```objectivec
@property (nonatomic) CGFloat particleLifetimeRange;
```

<a id="Discussion"></a>

## Discussion

The default value is `0.0`. If non-zero, the lifetime of each particle is randomly determined and may vary by plus or minus half of the range value.

## See Also

### Controlling Particle Lifetime

- [particleLifetime](particlelifetime.md): The average lifetime of a particle, in seconds.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skemitternode/particlezpositionrange](https://developer.apple.com/documentation/spritekit/skemitternode/particlezpositionrange)

# particleZPositionRange (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ (deprecated in 8.0) · iPadOS 7.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.10) · tvOS · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

The range of allowed random values for a particle’s depth.

## Declaration

```swift
var particleZPositionRange: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is `0.0`. If non-zero, the z position of each particle is randomly determined and may vary by plus or minus half of the range value.

## See Also

### Controlling Particle Position

- [particlePosition](particleposition.md): The average starting position for a particle.
- [particlePositionRange](particlepositionrange.md): The range of allowed random values for a particle’s position.
- [particleZPosition](particlezposition.md): The average starting depth of a particle.

# particleZPositionRange (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ (deprecated in 8.0) · iPadOS 7.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.10) · tvOS · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

The range of allowed random values for a particle’s depth.

## Declaration

```objectivec
@property (nonatomic) CGFloat particleZPositionRange;
```

<a id="Discussion"></a>

## Discussion

The default value is `0.0`. If non-zero, the z position of each particle is randomly determined and may vary by plus or minus half of the range value.

## See Also

### Controlling Particle Position

- [particlePosition](particleposition.md): The average starting position for a particle.
- [particlePositionRange](particlepositionrange.md): The range of allowed random values for a particle’s position.
- [particleZPosition](particlezposition.md): The average starting depth of a particle.

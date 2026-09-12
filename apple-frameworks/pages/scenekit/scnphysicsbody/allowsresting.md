> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicsbody/allowsresting](https://developer.apple.com/documentation/scenekit/scnphysicsbody/allowsresting)

# allowsResting (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A Boolean value that specifies whether SceneKit can automatically mark the physics body at rest.

## Declaration

```swift
var allowsResting: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true) (the default), SceneKit keeps track of whether the body is moving or affected by forces, automatically setting its [isResting](isresting.md) property to [true](https://developer.apple.com/documentation/swift/true) when it is “at rest.” The physics simulation runs faster when simulating fewer bodies, so treating a body as resting temporarily removes it from the simulation to improve performance.

SceneKit automatically returns a resting body to the simulation if another body collides with it, if you change its position or velocity, or if you apply a force to it. However, SceneKit uses a faster, less accurate simulation when deciding whether to change a body’s [isResting](isresting.md) property back to [false](https://developer.apple.com/documentation/swift/false). If testing your app reveals unexpected physics behaviors involving resting bodies, changing those bodies’ allowsResting property to [false](https://developer.apple.com/documentation/swift/false) may improve simulation accuracy.

## See Also

### Defining When a Body Can Move

- [isResting](isresting.md): A Boolean value that indicates whether the physics body is at rest.
- [setResting(\_:)](setresting%28__%29.md): Tells SceneKit whether to treat the body as currently being in motion.

# allowsResting (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

A Boolean value that specifies whether SceneKit can automatically mark the physics body at rest.

## Declaration

```objectivec
@property (nonatomic) BOOL allowsResting;
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true) (the default), SceneKit keeps track of whether the body is moving or affected by forces, automatically setting its [isResting](isresting.md) property to [true](https://developer.apple.com/documentation/swift/true) when it is “at rest.” The physics simulation runs faster when simulating fewer bodies, so treating a body as resting temporarily removes it from the simulation to improve performance.

SceneKit automatically returns a resting body to the simulation if another body collides with it, if you change its position or velocity, or if you apply a force to it. However, SceneKit uses a faster, less accurate simulation when deciding whether to change a body’s [isResting](isresting.md) property back to [false](https://developer.apple.com/documentation/swift/false). If testing your app reveals unexpected physics behaviors involving resting bodies, changing those bodies’ allowsResting property to [false](https://developer.apple.com/documentation/swift/false) may improve simulation accuracy.

## See Also

### Defining When a Body Can Move

- [isResting](isresting.md): A Boolean value that indicates whether the physics body is at rest.
- [setResting:](setresting%28__%29.md): Tells SceneKit whether to treat the body as currently being in motion.

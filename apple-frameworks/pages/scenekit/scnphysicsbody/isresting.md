> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicsbody/isresting](https://developer.apple.com/documentation/scenekit/scnphysicsbody/isresting)

# isResting (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A Boolean value that indicates whether the physics body is at rest.

## Declaration

```swift
var isResting: Bool { get }
```

<a id="Discussion"></a>

## Discussion

This property’s default value is [false](https://developer.apple.com/documentation/swift/false), but SceneKit’s physics simulation may automatically set it to [true](https://developer.apple.com/documentation/swift/true) if the body is not moving and not affected by any forces. A resting body does not participate in the simulation until another body collides with it or you change its position or velocity or apply a force to it.

## See Also

### Defining When a Body Can Move

- [allowsResting](allowsresting.md): A Boolean value that specifies whether SceneKit can automatically mark the physics body at rest.
- [setResting(\_:)](setresting%28__%29.md): Tells SceneKit whether to treat the body as currently being in motion.

# isResting (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

A Boolean value that indicates whether the physics body is at rest.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL isResting;
```

<a id="Discussion"></a>

## Discussion

This property’s default value is [false](https://developer.apple.com/documentation/swift/false), but SceneKit’s physics simulation may automatically set it to [true](https://developer.apple.com/documentation/swift/true) if the body is not moving and not affected by any forces. A resting body does not participate in the simulation until another body collides with it or you change its position or velocity or apply a force to it.

## See Also

### Defining When a Body Can Move

- [allowsResting](allowsresting.md): A Boolean value that specifies whether SceneKit can automatically mark the physics body at rest.
- [setResting:](setresting%28__%29.md): Tells SceneKit whether to treat the body as currently being in motion.

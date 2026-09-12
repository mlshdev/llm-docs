> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicsbody/setresting(_:)](https://developer.apple.com/documentation/scenekit/scnphysicsbody/setresting(_:))

# setResting(\_:) (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Tells SceneKit whether to treat the body as currently being in motion.

## Declaration

```swift
func setResting(_ resting: Bool)
```

## Parameters

- `resting`: A Boolean value indicating whether to treat the body as at rest.

<a id="Discussion"></a>

## Discussion

When a body is at rest, SceneKit assumes that the body will not move unless another body collides with it, you change the body’s position or velocity directly, or you apply a force to the body. Resting bodies don’t participate in the physics simulation, reducing the performance cost of physics calculations and ensuring that those bodies don’t move unexpectedly.

By default, SceneKit automatically determines whether to treat a body as resting (see [isResting](isresting.md) and [allowsResting](allowsresting.md)). Use this method only if you need to override this behavior. For example, you might set a body to resting if you change its position to reflect an external influence, and don’t want the physics simulation to make the body appear to settle into place after the move.

## See Also

### Defining When a Body Can Move

- [isResting](isresting.md): A Boolean value that indicates whether the physics body is at rest.
- [allowsResting](allowsresting.md): A Boolean value that specifies whether SceneKit can automatically mark the physics body at rest.

# setResting: (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Tells SceneKit whether to treat the body as currently being in motion.

## Declaration

```objectivec
- (void) setResting:(BOOL) resting;
```

## Parameters

- `resting`: A Boolean value indicating whether to treat the body as at rest.

<a id="Discussion"></a>

## Discussion

When a body is at rest, SceneKit assumes that the body will not move unless another body collides with it, you change the body’s position or velocity directly, or you apply a force to the body. Resting bodies don’t participate in the physics simulation, reducing the performance cost of physics calculations and ensuring that those bodies don’t move unexpectedly.

By default, SceneKit automatically determines whether to treat a body as resting (see [isResting](isresting.md) and [allowsResting](allowsresting.md)). Use this method only if you need to override this behavior. For example, you might set a body to resting if you change its position to reflect an external influence, and don’t want the physics simulation to make the body appear to settle into place after the move.

## See Also

### Defining When a Body Can Move

- [isResting](isresting.md): A Boolean value that indicates whether the physics body is at rest.
- [allowsResting](allowsresting.md): A Boolean value that specifies whether SceneKit can automatically mark the physics body at rest.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skphysicsworld/enumeratebodies(in:using:)](https://developer.apple.com/documentation/spritekit/skphysicsworld/enumeratebodies(in:using:))

# enumerateBodies(in:using:) (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Enumerates all the physics bodies in the scene that intersect the specified rectangle.

## Declaration

```swift
func enumerateBodies(in rect: CGRect, using block: @escaping (SKPhysicsBody, UnsafeMutablePointer<ObjCBool>) -> Void)
```

## Parameters

- `rect`: A rectangle in scene coordinates.
- `block`: A block to be called for each physics body that contains the point. The block takes the following parameters:

  - **body**: The physics body that intersected the rectangle.
  - **stop**: A pointer to a Boolean variable. Your block can set this to [true](https://developer.apple.com/documentation/swift/true) to terminate the enumeration.

## See Also

### Searching the Scene for Physics Bodies

- [Searching the World for Physics Bodies](../searching-the-world-for-physics-bodies.md): Cast a ray to find the physics bodies in the scene that intersect it.
- [body(alongRayStart:end:)](body%28alongraystart_end_%29.md): Searches for the first physics body that intersects a ray.
- [body(at:)](body%28at_%29.md): Searches for the first physics body that contains a point.
- [body(in:)](body%28in_%29.md): Searches for the first physics body that intersects the specified rectangle.
- [enumerateBodies(alongRayStart:end:using:)](enumeratebodies%28alongraystart_end_using_%29.md): Enumerates all the physics bodies in the scene that intersect a ray.
- [enumerateBodies(at:using:)](enumeratebodies%28at_using_%29.md): Enumerates all the physics bodies in the scene that contain a point.

# enumerateBodiesInRect:usingBlock: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Enumerates all the physics bodies in the scene that intersect the specified rectangle.

## Declaration

```objectivec
- (void) enumerateBodiesInRect:(CGRect) rect usingBlock:(void (^)(SKPhysicsBody *body, BOOL *stop)) block;
```

## Parameters

- `rect`: A rectangle in scene coordinates.
- `block`: A block to be called for each physics body that contains the point. The block takes the following parameters:

  - **body**: The physics body that intersected the rectangle.
  - **stop**: A pointer to a Boolean variable. Your block can set this to [true](https://developer.apple.com/documentation/swift/true) to terminate the enumeration.

## See Also

### Searching the Scene for Physics Bodies

- [Searching the World for Physics Bodies](../searching-the-world-for-physics-bodies.md): Cast a ray to find the physics bodies in the scene that intersect it.
- [bodyAlongRayStart:end:](body%28alongraystart_end_%29.md): Searches for the first physics body that intersects a ray.
- [bodyAtPoint:](body%28at_%29.md): Searches for the first physics body that contains a point.
- [bodyInRect:](body%28in_%29.md): Searches for the first physics body that intersects the specified rectangle.
- [enumerateBodiesAlongRayStart:end:usingBlock:](enumeratebodies%28alongraystart_end_using_%29.md): Enumerates all the physics bodies in the scene that intersect a ray.
- [enumerateBodiesAtPoint:usingBlock:](enumeratebodies%28at_using_%29.md): Enumerates all the physics bodies in the scene that contain a point.

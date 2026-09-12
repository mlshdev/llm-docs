> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skphysicsworld/enumeratebodies(alongraystart:end:using:)](https://developer.apple.com/documentation/spritekit/skphysicsworld/enumeratebodies(alongraystart:end:using:))

# enumerateBodies(alongRayStart:end:using:) (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Enumerates all the physics bodies in the scene that intersect a ray.

## Declaration

```swift
func enumerateBodies(alongRayStart start: CGPoint, end: CGPoint, using block: @escaping (SKPhysicsBody, CGPoint, CGVector, UnsafeMutablePointer<ObjCBool>) -> Void)
```

## Parameters

- `start`: The starting point for the ray in scene coordinates.
- `end`: The ending point for the ray in scene coordinates.
- `block`: A block to be called for each physics body that the ray touches. The block takes the following parameters:

  - **body**: The physics body that the ray intersected.
  - **point**: The point in scene coordinates where the ray contacted the physics body.
  - **normal**: The normal vector for the physics body at the point of contact.
  - **stop**: A pointer to a Boolean variable. Your block can set this to [true](https://developer.apple.com/documentation/swift/true) to terminate the enumeration.

## Mentioned In

- [Searching the World for Physics Bodies](../searching-the-world-for-physics-bodies.md)

## See Also

### Searching the Scene for Physics Bodies

- [Searching the World for Physics Bodies](../searching-the-world-for-physics-bodies.md): Cast a ray to find the physics bodies in the scene that intersect it.
- [body(alongRayStart:end:)](body%28alongraystart_end_%29.md): Searches for the first physics body that intersects a ray.
- [body(at:)](body%28at_%29.md): Searches for the first physics body that contains a point.
- [body(in:)](body%28in_%29.md): Searches for the first physics body that intersects the specified rectangle.
- [enumerateBodies(at:using:)](enumeratebodies%28at_using_%29.md): Enumerates all the physics bodies in the scene that contain a point.
- [enumerateBodies(in:using:)](enumeratebodies%28in_using_%29.md): Enumerates all the physics bodies in the scene that intersect the specified rectangle.

# enumerateBodiesAlongRayStart:end:usingBlock: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Enumerates all the physics bodies in the scene that intersect a ray.

## Declaration

```objectivec
- (void) enumerateBodiesAlongRayStart:(CGPoint) start end:(CGPoint) end usingBlock:(void (^)(SKPhysicsBody *body, CGPoint point, CGVector normal, BOOL *stop)) block;
```

## Parameters

- `start`: The starting point for the ray in scene coordinates.
- `end`: The ending point for the ray in scene coordinates.
- `block`: A block to be called for each physics body that the ray touches. The block takes the following parameters:

  - **body**: The physics body that the ray intersected.
  - **point**: The point in scene coordinates where the ray contacted the physics body.
  - **normal**: The normal vector for the physics body at the point of contact.
  - **stop**: A pointer to a Boolean variable. Your block can set this to [true](https://developer.apple.com/documentation/swift/true) to terminate the enumeration.

## Mentioned In

- [Searching the World for Physics Bodies](../searching-the-world-for-physics-bodies.md)

## See Also

### Searching the Scene for Physics Bodies

- [Searching the World for Physics Bodies](../searching-the-world-for-physics-bodies.md): Cast a ray to find the physics bodies in the scene that intersect it.
- [bodyAlongRayStart:end:](body%28alongraystart_end_%29.md): Searches for the first physics body that intersects a ray.
- [bodyAtPoint:](body%28at_%29.md): Searches for the first physics body that contains a point.
- [bodyInRect:](body%28in_%29.md): Searches for the first physics body that intersects the specified rectangle.
- [enumerateBodiesAtPoint:usingBlock:](enumeratebodies%28at_using_%29.md): Enumerates all the physics bodies in the scene that contain a point.
- [enumerateBodiesInRect:usingBlock:](enumeratebodies%28in_using_%29.md): Enumerates all the physics bodies in the scene that intersect the specified rectangle.

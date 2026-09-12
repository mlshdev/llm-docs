> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skphysicsworld/body(alongraystart:end:)](https://developer.apple.com/documentation/spritekit/skphysicsworld/body(alongraystart:end:))

# body(alongRayStart:end:) (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Searches for the first physics body that intersects a ray.

## Declaration

```swift
func body(alongRayStart start: CGPoint, end: CGPoint) -> SKPhysicsBody?
```

## Parameters

- `start`: The starting point for the ray in scene coordinates.
- `end`: The ending point for the ray in scene coordinates.

<a id="return-value"></a>

## Return Value

The first physics body discovered that intersects the ray. This may be any body along the ray; it is not guaranteed to be the closest physics body. If no body intersects the ray, this method returns `nil`.

## See Also

### Searching the Scene for Physics Bodies

- [Searching the World for Physics Bodies](../searching-the-world-for-physics-bodies.md): Cast a ray to find the physics bodies in the scene that intersect it.
- [body(at:)](body%28at_%29.md): Searches for the first physics body that contains a point.
- [body(in:)](body%28in_%29.md): Searches for the first physics body that intersects the specified rectangle.
- [enumerateBodies(alongRayStart:end:using:)](enumeratebodies%28alongraystart_end_using_%29.md): Enumerates all the physics bodies in the scene that intersect a ray.
- [enumerateBodies(at:using:)](enumeratebodies%28at_using_%29.md): Enumerates all the physics bodies in the scene that contain a point.
- [enumerateBodies(in:using:)](enumeratebodies%28in_using_%29.md): Enumerates all the physics bodies in the scene that intersect the specified rectangle.

# bodyAlongRayStart:end: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Searches for the first physics body that intersects a ray.

## Declaration

```objectivec
- (SKPhysicsBody *) bodyAlongRayStart:(CGPoint) start end:(CGPoint) end;
```

## Parameters

- `start`: The starting point for the ray in scene coordinates.
- `end`: The ending point for the ray in scene coordinates.

<a id="return-value"></a>

## Return Value

The first physics body discovered that intersects the ray. This may be any body along the ray; it is not guaranteed to be the closest physics body. If no body intersects the ray, this method returns `nil`.

## See Also

### Searching the Scene for Physics Bodies

- [Searching the World for Physics Bodies](../searching-the-world-for-physics-bodies.md): Cast a ray to find the physics bodies in the scene that intersect it.
- [bodyAtPoint:](body%28at_%29.md): Searches for the first physics body that contains a point.
- [bodyInRect:](body%28in_%29.md): Searches for the first physics body that intersects the specified rectangle.
- [enumerateBodiesAlongRayStart:end:usingBlock:](enumeratebodies%28alongraystart_end_using_%29.md): Enumerates all the physics bodies in the scene that intersect a ray.
- [enumerateBodiesAtPoint:usingBlock:](enumeratebodies%28at_using_%29.md): Enumerates all the physics bodies in the scene that contain a point.
- [enumerateBodiesInRect:usingBlock:](enumeratebodies%28in_using_%29.md): Enumerates all the physics bodies in the scene that intersect the specified rectangle.

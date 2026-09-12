> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skphysicsworld/body(in:)](https://developer.apple.com/documentation/spritekit/skphysicsworld/body(in:))

# body(in:) (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Searches for the first physics body that intersects the specified rectangle.

## Declaration

```swift
func body(in rect: CGRect) -> SKPhysicsBody?
```

## Parameters

- `rect`: A rectangle in scene coordinates.

<a id="return-value"></a>

## Return Value

The first physics body discovered that intersects the rectangle. If no body intersects the rectangle, this method returns `nil`.

## Mentioned In

- [Searching the World for Physics Bodies](../searching-the-world-for-physics-bodies.md)

## See Also

### Searching the Scene for Physics Bodies

- [Searching the World for Physics Bodies](../searching-the-world-for-physics-bodies.md): Cast a ray to find the physics bodies in the scene that intersect it.
- [body(alongRayStart:end:)](body%28alongraystart_end_%29.md): Searches for the first physics body that intersects a ray.
- [body(at:)](body%28at_%29.md): Searches for the first physics body that contains a point.
- [enumerateBodies(alongRayStart:end:using:)](enumeratebodies%28alongraystart_end_using_%29.md): Enumerates all the physics bodies in the scene that intersect a ray.
- [enumerateBodies(at:using:)](enumeratebodies%28at_using_%29.md): Enumerates all the physics bodies in the scene that contain a point.
- [enumerateBodies(in:using:)](enumeratebodies%28in_using_%29.md): Enumerates all the physics bodies in the scene that intersect the specified rectangle.

# bodyInRect: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Searches for the first physics body that intersects the specified rectangle.

## Declaration

```objectivec
- (SKPhysicsBody *) bodyInRect:(CGRect) rect;
```

## Parameters

- `rect`: A rectangle in scene coordinates.

<a id="return-value"></a>

## Return Value

The first physics body discovered that intersects the rectangle. If no body intersects the rectangle, this method returns `nil`.

## Mentioned In

- [Searching the World for Physics Bodies](../searching-the-world-for-physics-bodies.md)

## See Also

### Searching the Scene for Physics Bodies

- [Searching the World for Physics Bodies](../searching-the-world-for-physics-bodies.md): Cast a ray to find the physics bodies in the scene that intersect it.
- [bodyAlongRayStart:end:](body%28alongraystart_end_%29.md): Searches for the first physics body that intersects a ray.
- [bodyAtPoint:](body%28at_%29.md): Searches for the first physics body that contains a point.
- [enumerateBodiesAlongRayStart:end:usingBlock:](enumeratebodies%28alongraystart_end_using_%29.md): Enumerates all the physics bodies in the scene that intersect a ray.
- [enumerateBodiesAtPoint:usingBlock:](enumeratebodies%28at_using_%29.md): Enumerates all the physics bodies in the scene that contain a point.
- [enumerateBodiesInRect:usingBlock:](enumeratebodies%28in_using_%29.md): Enumerates all the physics bodies in the scene that intersect the specified rectangle.

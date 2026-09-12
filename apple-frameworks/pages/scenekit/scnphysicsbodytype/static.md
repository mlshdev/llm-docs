> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicsbodytype/static](https://developer.apple.com/documentation/scenekit/scnphysicsbodytype/static)

# SCNPhysicsBodyType.static (Swift)

**Framework:** SceneKit  
**Kind:** Case  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A physics body that is unaffected by forces or collisions and cannot move.

## Declaration

```swift
case `static`
```

<a id="Discussion"></a>

## Discussion

Use static bodies to construct fixtures in your scene that other bodies need to collide with but that do not themselves move, such as floors, walls, and terrain.

## See Also

### Constants

- [SCNPhysicsBodyType.dynamic](dynamic.md): A physics body that can be affected by forces and collisions.
- [SCNPhysicsBodyType.kinematic](kinematic.md): A physics body that is unaffected by forces or collisions but that can cause collisions affecting other bodies when moved.

# SCNPhysicsBodyTypeStatic (Objective-C)

**Framework:** SceneKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

A physics body that is unaffected by forces or collisions and cannot move.

## Declaration

```objectivec
SCNPhysicsBodyTypeStatic
```

<a id="Discussion"></a>

## Discussion

Use static bodies to construct fixtures in your scene that other bodies need to collide with but that do not themselves move, such as floors, walls, and terrain.

## See Also

### Constants

- [SCNPhysicsBodyTypeDynamic](dynamic.md): A physics body that can be affected by forces and collisions.
- [SCNPhysicsBodyTypeKinematic](kinematic.md): A physics body that is unaffected by forces or collisions but that can cause collisions affecting other bodies when moved.

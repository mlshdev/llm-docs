> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicsworld/convexsweeptest(with:from:to:options:)](https://developer.apple.com/documentation/scenekit/scnphysicsworld/convexsweeptest(with:from:to:options:))

# convexSweepTest(with:from:to:options:) (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Searches for physics bodies in the space formed by moving a convex shape through the physics world.

## Declaration

```swift
func convexSweepTest(with shape: SCNPhysicsShape, from: SCNMatrix4, to: SCNMatrix4, options: [SCNPhysicsWorld.TestOption : Any]? = nil) -> [SCNPhysicsContact]
```

```swift
func convexSweepTest(with shape: SCNPhysicsShape, from: SCNMatrix4, to: SCNMatrix4, options: [SCNPhysicsWorld.TestOption : Any]? = nil) -> [SCNPhysicsContact]
```

## Parameters

- `shape`: A physics shape. This shape must enclose a convex volume. For details on creating shapes that satisfy this requirement, see [SCNPhysicsShape](../scnphysicsshape.md).
- `from`: A transform matrix representing the initial position and orientation of the shape.
- `to`: A transform matrix representing the final position and orientation of the shape.
- `options`: A dictionary of options affecting the test, or `nil` to use default options. For applicable keys and the possible values, see `Physics Test Options Keys`.

<a id="return-value"></a>

## Return Value

An array of [SCNPhysicsContact](../scnphysicscontact.md) objects describing any contacts that would occur when moving the physics shape through the physics world.

<a id="Discussion"></a>

## Discussion

Use this method when it’s important to plan for (or avoid) collisions ahead of the physics simulation. For example, in a game you might plan maneuvers for a flying character to fit through the gaps between static bodies in the physics world, as illustrated below:

```objc
// Look for potential collisions along the spaceship's current path.
SCNMatrix4 current = spaceship.transform;
SCNMatrix4 upAhead = SCNMatrix4Translate(current, 0, 0, LOOK_AHEAD_DISTANCE);
NSArray *contacts = [physicsWorld convexSweepTestWithShape:spaceship.physicsBody.physicsShape
                                             fromTransform:current
                                               toTransform:upAhead
                                                   options:nil];
if (contacts.count == 0) {
    // Flight path looks okay.
} else {
    // Flight path will cause a collision: look for another way around.
}
```

## See Also

### Searching for Physics Bodies

- [rayTestWithSegment(from:to:options:)](raytestwithsegment%28from_to_options_%29.md): Searches for physics bodies along a line segment between two points in the physics world.

# convexSweepTestWithShape:fromTransform:toTransform:options: (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Searches for physics bodies in the space formed by moving a convex shape through the physics world.

## Declaration

```objectivec
- (NSArray<SCNPhysicsContact *> *) convexSweepTestWithShape:(SCNPhysicsShape *) shape fromTransform:(SCNMatrix4) from toTransform:(SCNMatrix4) to options:(NSDictionary<NSString *,id> *) options;
```

```objectivec
- (NSArray<SCNPhysicsContact *> *) convexSweepTestWithShape:(SCNPhysicsShape *) shape fromTransform:(SCNMatrix4) from toTransform:(SCNMatrix4) to options:(NSDictionary<NSString *,id> *) options;
```

## Parameters

- `shape`: A physics shape. This shape must enclose a convex volume. For details on creating shapes that satisfy this requirement, see [SCNPhysicsShape](../scnphysicsshape.md).
- `from`: A transform matrix representing the initial position and orientation of the shape.
- `to`: A transform matrix representing the final position and orientation of the shape.
- `options`: A dictionary of options affecting the test, or `nil` to use default options. For applicable keys and the possible values, see `Physics Test Options Keys`.

<a id="return-value"></a>

## Return Value

An array of [SCNPhysicsContact](../scnphysicscontact.md) objects describing any contacts that would occur when moving the physics shape through the physics world.

<a id="Discussion"></a>

## Discussion

Use this method when it’s important to plan for (or avoid) collisions ahead of the physics simulation. For example, in a game you might plan maneuvers for a flying character to fit through the gaps between static bodies in the physics world, as illustrated below:

```objc
// Look for potential collisions along the spaceship's current path.
SCNMatrix4 current = spaceship.transform;
SCNMatrix4 upAhead = SCNMatrix4Translate(current, 0, 0, LOOK_AHEAD_DISTANCE);
NSArray *contacts = [physicsWorld convexSweepTestWithShape:spaceship.physicsBody.physicsShape
                                             fromTransform:current
                                               toTransform:upAhead
                                                   options:nil];
if (contacts.count == 0) {
    // Flight path looks okay.
} else {
    // Flight path will cause a collision: look for another way around.
}
```

## See Also

### Searching for Physics Bodies

- [rayTestWithSegmentFromPoint:toPoint:options:](raytestwithsegment%28from_to_options_%29.md): Searches for physics bodies along a line segment between two points in the physics world.

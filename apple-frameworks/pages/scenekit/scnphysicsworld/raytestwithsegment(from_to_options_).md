> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicsworld/raytestwithsegment(from:to:options:)](https://developer.apple.com/documentation/scenekit/scnphysicsworld/raytestwithsegment(from:to:options:))

# rayTestWithSegment(from:to:options:) (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Searches for physics bodies along a line segment between two points in the physics world.

## Declaration

```swift
func rayTestWithSegment(from origin: SCNVector3, to dest: SCNVector3, options: [SCNPhysicsWorld.TestOption : Any]? = nil) -> [SCNHitTestResult]
```

## Parameters

- `origin`: An endpoint of the line segment to search, specified in the scene’s world coordinate system.
- `dest`: The other endpoint of the line segment to search, specified in the scene’s world coordinate system.
- `options`: A dictionary of options affecting the test, or `nil` to use default options. For applicable keys and the possible values, see `Physics Test Options Keys`.

<a id="return-value"></a>

## Return Value

An array of [SCNHitTestResult](../scnhittestresult.md) objects describing search results.

<a id="Discussion"></a>

## Discussion

Use this method to implement concepts such as line of sight in your app. For example, in a game you might implement behavior for an enemy character by searching for physics bodies along a line between the enemy character’s position and the player character’s position, as illustrated below:

```objc
// Options: Look only for the closest object along line of sight,
// and use the collision bitmask to avoid finding the enemy itself.
NSDictionary *options = @{ SCNPhysicsTestSearchModeKey : SCNPhysicsTestSearchModeClosest,
                     SCNPhysicsTestCollisionBitMaskKey : @(kMyCategoryPlayer) };
 
NSArray *results = [physicsWorld rayTestWithSegmentFromPoint:enemy.position
                                                     toPoint:player.position
                                                     options:options];
if (results.firstObject.node == player) {
    // Enemy can see player: begin pursuit.
} else {
    // Enemy cannot see player: remain idle.
}
```

## See Also

### Searching for Physics Bodies

- [convexSweepTest(with:from:to:options:)](convexsweeptest%28with_from_to_options_%29.md): Searches for physics bodies in the space formed by moving a convex shape through the physics world.

# rayTestWithSegmentFromPoint:toPoint:options: (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Searches for physics bodies along a line segment between two points in the physics world.

## Declaration

```objectivec
- (NSArray<SCNHitTestResult *> *) rayTestWithSegmentFromPoint:(SCNVector3) origin toPoint:(SCNVector3) dest options:(NSDictionary<NSString *,id> *) options;
```

## Parameters

- `origin`: An endpoint of the line segment to search, specified in the scene’s world coordinate system.
- `dest`: The other endpoint of the line segment to search, specified in the scene’s world coordinate system.
- `options`: A dictionary of options affecting the test, or `nil` to use default options. For applicable keys and the possible values, see `Physics Test Options Keys`.

<a id="return-value"></a>

## Return Value

An array of [SCNHitTestResult](../scnhittestresult.md) objects describing search results.

<a id="Discussion"></a>

## Discussion

Use this method to implement concepts such as line of sight in your app. For example, in a game you might implement behavior for an enemy character by searching for physics bodies along a line between the enemy character’s position and the player character’s position, as illustrated below:

```objc
// Options: Look only for the closest object along line of sight,
// and use the collision bitmask to avoid finding the enemy itself.
NSDictionary *options = @{ SCNPhysicsTestSearchModeKey : SCNPhysicsTestSearchModeClosest,
                     SCNPhysicsTestCollisionBitMaskKey : @(kMyCategoryPlayer) };
 
NSArray *results = [physicsWorld rayTestWithSegmentFromPoint:enemy.position
                                                     toPoint:player.position
                                                     options:options];
if (results.firstObject.node == player) {
    // Enemy can see player: begin pursuit.
} else {
    // Enemy cannot see player: remain idle.
}
```

## See Also

### Searching for Physics Bodies

- [convexSweepTestWithShape:fromTransform:toTransform:options:](convexsweeptest%28with_from_to_options_%29.md): Searches for physics bodies in the space formed by moving a convex shape through the physics world.

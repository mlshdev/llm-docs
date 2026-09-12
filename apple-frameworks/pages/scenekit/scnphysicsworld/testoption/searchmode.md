> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicsworld/testoption/searchmode](https://developer.apple.com/documentation/scenekit/scnphysicsworld/testoption/searchmode)

# searchMode (Swift)

**Framework:** SceneKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The key for selecting the number and order of contacts to be tested.

## Declaration

```swift
static let searchMode: SCNPhysicsWorld.TestOption
```

<a id="Discussion"></a>

## Discussion

See `Physics Test Search Modes` for possible values. The default value is [any](../testsearchmode/any.md).

This key applies only to ray and convex sweep tests.

## See Also

### Type Properties

- [backfaceCulling](backfaceculling.md): The key for choosing whether to ignore back-facing polygons in physics shapes when searching for contacts.
- [collisionBitMask](collisionbitmask.md): The key for selecting which categories of physics bodies that SceneKit should test for contacts.
- [SCNPhysicsWorld.TestSearchMode](../testsearchmode.md): Options affecting how SceneKit searches for bodies in a collision, ray, or sweep test, used with the [searchMode](searchmode.md) key.

# SCNPhysicsTestSearchModeKey (Objective-C)

**Framework:** SceneKit  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The key for selecting the number and order of contacts to be tested.

## Declaration

```objectivec
extern SCNPhysicsTestOption const SCNPhysicsTestSearchModeKey;
```

<a id="Discussion"></a>

## Discussion

See `Physics Test Search Modes` for possible values. The default value is [SCNPhysicsTestSearchModeAny](../testsearchmode/any.md).

This key applies only to ray and convex sweep tests.

## See Also

### Type Properties

- [SCNPhysicsTestBackfaceCullingKey](backfaceculling.md): The key for choosing whether to ignore back-facing polygons in physics shapes when searching for contacts.
- [SCNPhysicsTestCollisionBitMaskKey](collisionbitmask.md): The key for selecting which categories of physics bodies that SceneKit should test for contacts.
- [SCNPhysicsTestSearchMode](../testsearchmode.md): Options affecting how SceneKit searches for bodies in a collision, ray, or sweep test, used with the [SCNPhysicsTestSearchModeKey](searchmode.md) key.

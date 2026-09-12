> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicsworld/testoption/backfaceculling](https://developer.apple.com/documentation/scenekit/scnphysicsworld/testoption/backfaceculling)

# backfaceCulling (Swift)

**Framework:** SceneKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The key for choosing whether to ignore back-facing polygons in physics shapes when searching for contacts.

## Declaration

```swift
static let backfaceCulling: SCNPhysicsWorld.TestOption
```

<a id="Discussion"></a>

## Discussion

The value for this key is an [NSNumber](../../../foundation/nsnumber.md) object containing a Boolean value. The default value is [true](https://developer.apple.com/documentation/swift/true), specifying that the search should only return contacts with the exterior surfaces of any physics shapes. Change the value to [false](https://developer.apple.com/documentation/swift/false) to consider contacts with both interior and exterior surfaces.

This key applies only to ray and convex sweep tests, and only to physics shapes created using the [concavePolyhedron](../../scnphysicsshape/shapetype/concavepolyhedron.md) option.

## See Also

### Type Properties

- [collisionBitMask](collisionbitmask.md): The key for selecting which categories of physics bodies that SceneKit should test for contacts.
- [searchMode](searchmode.md): The key for selecting the number and order of contacts to be tested.
- [SCNPhysicsWorld.TestSearchMode](../testsearchmode.md): Options affecting how SceneKit searches for bodies in a collision, ray, or sweep test, used with the [searchMode](searchmode.md) key.

# SCNPhysicsTestBackfaceCullingKey (Objective-C)

**Framework:** SceneKit  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The key for choosing whether to ignore back-facing polygons in physics shapes when searching for contacts.

## Declaration

```objectivec
extern SCNPhysicsTestOption const SCNPhysicsTestBackfaceCullingKey;
```

<a id="Discussion"></a>

## Discussion

The value for this key is an [NSNumber](../../../foundation/nsnumber.md) object containing a Boolean value. The default value is [true](https://developer.apple.com/documentation/swift/true), specifying that the search should only return contacts with the exterior surfaces of any physics shapes. Change the value to [false](https://developer.apple.com/documentation/swift/false) to consider contacts with both interior and exterior surfaces.

This key applies only to ray and convex sweep tests, and only to physics shapes created using the [SCNPhysicsShapeTypeConcavePolyhedron](../../scnphysicsshape/shapetype/concavepolyhedron.md) option.

## See Also

### Type Properties

- [SCNPhysicsTestCollisionBitMaskKey](collisionbitmask.md): The key for selecting which categories of physics bodies that SceneKit should test for contacts.
- [SCNPhysicsTestSearchModeKey](searchmode.md): The key for selecting the number and order of contacts to be tested.
- [SCNPhysicsTestSearchMode](../testsearchmode.md): Options affecting how SceneKit searches for bodies in a collision, ray, or sweep test, used with the [SCNPhysicsTestSearchModeKey](searchmode.md) key.

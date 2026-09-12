> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicsworld/testoption/collisionbitmask](https://developer.apple.com/documentation/scenekit/scnphysicsworld/testoption/collisionbitmask)

# collisionBitMask (Swift)

**Framework:** SceneKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The key for selecting which categories of physics bodies that SceneKit should test for contacts.

## Declaration

```swift
static let collisionBitMask: SCNPhysicsWorld.TestOption
```

<a id="Discussion"></a>

## Discussion

The value for this key is an [NSNumber](../../../foundation/nsnumber.md) object containing an [NSUInteger](../../../objectivec/nsuinteger.md) value. SceneKit tests for contacts only with physics bodies whose [categoryBitMask](../../scnphysicsbody/categorybitmask.md) property overlaps with this bit mask. The default value is [all](../../scnphysicscollisioncategory/all.md), specifying that searches should test all physics bodies regardless of their category.

## See Also

### Type Properties

- [backfaceCulling](backfaceculling.md): The key for choosing whether to ignore back-facing polygons in physics shapes when searching for contacts.
- [searchMode](searchmode.md): The key for selecting the number and order of contacts to be tested.
- [SCNPhysicsWorld.TestSearchMode](../testsearchmode.md): Options affecting how SceneKit searches for bodies in a collision, ray, or sweep test, used with the [searchMode](searchmode.md) key.

# SCNPhysicsTestCollisionBitMaskKey (Objective-C)

**Framework:** SceneKit  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The key for selecting which categories of physics bodies that SceneKit should test for contacts.

## Declaration

```objectivec
extern SCNPhysicsTestOption const SCNPhysicsTestCollisionBitMaskKey;
```

<a id="Discussion"></a>

## Discussion

The value for this key is an [NSNumber](../../../foundation/nsnumber.md) object containing an [NSUInteger](../../../objectivec/nsuinteger.md) value. SceneKit tests for contacts only with physics bodies whose [categoryBitMask](../../scnphysicsbody/categorybitmask.md) property overlaps with this bit mask. The default value is [SCNPhysicsCollisionCategoryAll](../../scnphysicscollisioncategory/all.md), specifying that searches should test all physics bodies regardless of their category.

## See Also

### Type Properties

- [SCNPhysicsTestBackfaceCullingKey](backfaceculling.md): The key for choosing whether to ignore back-facing polygons in physics shapes when searching for contacts.
- [SCNPhysicsTestSearchModeKey](searchmode.md): The key for selecting the number and order of contacts to be tested.
- [SCNPhysicsTestSearchMode](../testsearchmode.md): Options affecting how SceneKit searches for bodies in a collision, ray, or sweep test, used with the [SCNPhysicsTestSearchModeKey](searchmode.md) key.

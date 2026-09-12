> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicscollisioncategory/all](https://developer.apple.com/documentation/scenekit/scnphysicscollisioncategory/all)

# all (Swift)

**Framework:** SceneKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

This is the default value for a physics body’s [collisionBitMask](../scnphysicsbody/collisionbitmask.md) property.

## Declaration

```swift
static var all: SCNPhysicsCollisionCategory { get }
```

<a id="Discussion"></a>

## Discussion

With this collision mask, a physics body can collide with all other physics bodies.

## See Also

### Constants

- [default](default.md): The default [categoryBitMask](../scnphysicsbody/categorybitmask.md) value for dynamic and kinematic bodies.
- [static](static.md): The default [categoryBitMask](../scnphysicsbody/categorybitmask.md) value for static bodies.

# SCNPhysicsCollisionCategoryAll (Objective-C)

**Framework:** SceneKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

This is the default value for a physics body’s [collisionBitMask](../scnphysicsbody/collisionbitmask.md) property.

## Declaration

```objectivec
SCNPhysicsCollisionCategoryAll
```

<a id="Discussion"></a>

## Discussion

With this collision mask, a physics body can collide with all other physics bodies.

## See Also

### Constants

- [SCNPhysicsCollisionCategoryDefault](default.md): The default [categoryBitMask](../scnphysicsbody/categorybitmask.md) value for dynamic and kinematic bodies.
- [SCNPhysicsCollisionCategoryStatic](static.md): The default [categoryBitMask](../scnphysicsbody/categorybitmask.md) value for static bodies.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicsworld/contactdelegate](https://developer.apple.com/documentation/scenekit/scnphysicsworld/contactdelegate)

# contactDelegate (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A delegate that is called when two physics bodies come in contact with each other.

## Declaration

```swift
weak var contactDelegate: (any SCNPhysicsContactDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

A contact is created when two physics bodies overlap and one of the physics bodies has a [collisionBitMask](../scnphysicsbody/collisionbitmask.md) property that overlaps with the other body’s [categoryBitMask](../scnphysicsbody/categorybitmask.md) property.

## See Also

### Detecting Contacts Between Physics Bodies

- [contactTestBetween(\_:\_:options:)](contacttestbetween%28____options_%29.md): Checks for contacts between two physics bodies.
- [contactTest(with:options:)](contacttest%28with_options_%29.md): Checks for contacts between one physics body and any other bodies in the physics world.

# contactDelegate (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

A delegate that is called when two physics bodies come in contact with each other.

## Declaration

```objectivec
@property (atomic, weak, nullable) id<SCNPhysicsContactDelegate> contactDelegate;
```

<a id="Discussion"></a>

## Discussion

A contact is created when two physics bodies overlap and one of the physics bodies has a [collisionBitMask](../scnphysicsbody/collisionbitmask.md) property that overlaps with the other body’s [categoryBitMask](../scnphysicsbody/categorybitmask.md) property.

## See Also

### Detecting Contacts Between Physics Bodies

- [contactTestBetweenBody:andBody:options:](contacttestbetween%28____options_%29.md): Checks for contacts between two physics bodies.
- [contactTestWithBody:options:](contacttest%28with_options_%29.md): Checks for contacts between one physics body and any other bodies in the physics world.

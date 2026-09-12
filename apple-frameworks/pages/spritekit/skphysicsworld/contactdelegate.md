> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skphysicsworld/contactdelegate](https://developer.apple.com/documentation/spritekit/skphysicsworld/contactdelegate)

# contactDelegate (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A delegate that is called when two physics bodies come in contact with each other.

## Declaration

```swift
unowned(unsafe) var contactDelegate: (any SKPhysicsContactDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

A contact is created when two physics bodies overlap and one of the physics bodies has a [contactTestBitMask](../skphysicsbody/contacttestbitmask.md) property that overlaps with the other body’s [categoryBitMask](../skphysicsbody/categorybitmask.md) property. By default, a physics body’s [contactTestBitMask](../skphysicsbody/contacttestbitmask.md) is set to all bits cleared.

# contactDelegate (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A delegate that is called when two physics bodies come in contact with each other.

## Declaration

```objectivec
@property (nonatomic, assign, nullable) id<SKPhysicsContactDelegate> contactDelegate;
```

<a id="Discussion"></a>

## Discussion

A contact is created when two physics bodies overlap and one of the physics bodies has a [contactTestBitMask](../skphysicsbody/contacttestbitmask.md) property that overlaps with the other body’s [categoryBitMask](../skphysicsbody/categorybitmask.md) property. By default, a physics body’s [contactTestBitMask](../skphysicsbody/contacttestbitmask.md) is set to all bits cleared.

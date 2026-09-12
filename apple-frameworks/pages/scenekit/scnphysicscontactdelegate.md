> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicscontactdelegate](https://developer.apple.com/documentation/scenekit/scnphysicscontactdelegate)

# SCNPhysicsContactDelegate (Swift)

**Framework:** SceneKit  
**Kind:** Protocol  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Methods you can implement to respond when a contact or collision occurs between two physics bodies in a scene.

## Declaration

```swift
protocol SCNPhysicsContactDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

To receive contact messages, you set the [contactDelegate](scnphysicsworld/contactdelegate.md) property of an [SCNPhysicsWorld](scnphysicsworld.md) object. SceneKit calls your delegate methods when a contact begins, when information about the contact changes, and when the contact ends.

## Topics

### Responding to Contact Events

- [physicsWorld(\_:didBegin:)](scnphysicscontactdelegate/physicsworld%28__didbegin_%29.md): Tells the delegate that two bodies have come into contact.
- [physicsWorld(\_:didUpdate:)](scnphysicscontactdelegate/physicsworld%28__didupdate_%29.md): Tells the delegate that new information is available about an ongoing contact.
- [physicsWorld(\_:didEnd:)](scnphysicscontactdelegate/physicsworld%28__didend_%29.md): Tells the delegate that a contact has ended.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Collision and Contact Detection

- [SCNPhysicsContact](scnphysicscontact.md): Detailed information about a contact between two physics bodies in a scene’s physics simulation.

# SCNPhysicsContactDelegate (Objective-C)

**Framework:** SceneKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Methods you can implement to respond when a contact or collision occurs between two physics bodies in a scene.

## Declaration

```objectivec
@protocol SCNPhysicsContactDelegate <NSObject>
```

<a id="overview"></a>

## Overview

To receive contact messages, you set the [contactDelegate](scnphysicsworld/contactdelegate.md) property of an [SCNPhysicsWorld](scnphysicsworld.md) object. SceneKit calls your delegate methods when a contact begins, when information about the contact changes, and when the contact ends.

## Topics

### Responding to Contact Events

- [physicsWorld:didBeginContact:](scnphysicscontactdelegate/physicsworld%28__didbegin_%29.md): Tells the delegate that two bodies have come into contact.
- [physicsWorld:didUpdateContact:](scnphysicscontactdelegate/physicsworld%28__didupdate_%29.md): Tells the delegate that new information is available about an ongoing contact.
- [physicsWorld:didEndContact:](scnphysicscontactdelegate/physicsworld%28__didend_%29.md): Tells the delegate that a contact has ended.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Collision and Contact Detection

- [SCNPhysicsContact](scnphysicscontact.md): Detailed information about a contact between two physics bodies in a scene’s physics simulation.

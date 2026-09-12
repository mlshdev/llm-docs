> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicscontactdelegate/physicsworld(_:didupdate:)](https://developer.apple.com/documentation/scenekit/scnphysicscontactdelegate/physicsworld(_:didupdate:))

# physicsWorld(\_:didUpdate:) (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Tells the delegate that new information is available about an ongoing contact.

## Declaration

```swift
optional func physicsWorld(_ world: SCNPhysicsWorld, didUpdate contact: SCNPhysicsContact)
```

## Parameters

- `world`: The physics world that is processing the contact.
- `contact`: An object that describes the contact.

<a id="Discussion"></a>

## Discussion

SceneKit calls this method on each step of the physics simulation (see the [timeStep](../scnphysicsworld/timestep.md) property) if information about the contact changes—for example, if two bodies are sliding against one another.

## See Also

### Responding to Contact Events

- [physicsWorld(\_:didBegin:)](physicsworld%28__didbegin_%29.md): Tells the delegate that two bodies have come into contact.
- [physicsWorld(\_:didEnd:)](physicsworld%28__didend_%29.md): Tells the delegate that a contact has ended.

# physicsWorld:didUpdateContact: (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Tells the delegate that new information is available about an ongoing contact.

## Declaration

```objectivec
- (void) physicsWorld:(SCNPhysicsWorld *) world didUpdateContact:(SCNPhysicsContact *) contact;
```

## Parameters

- `world`: The physics world that is processing the contact.
- `contact`: An object that describes the contact.

<a id="Discussion"></a>

## Discussion

SceneKit calls this method on each step of the physics simulation (see the [timeStep](../scnphysicsworld/timestep.md) property) if information about the contact changes—for example, if two bodies are sliding against one another.

## See Also

### Responding to Contact Events

- [physicsWorld:didBeginContact:](physicsworld%28__didbegin_%29.md): Tells the delegate that two bodies have come into contact.
- [physicsWorld:didEndContact:](physicsworld%28__didend_%29.md): Tells the delegate that a contact has ended.

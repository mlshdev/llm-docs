> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicscontactdelegate/physicsworld(_:didend:)](https://developer.apple.com/documentation/scenekit/scnphysicscontactdelegate/physicsworld(_:didend:))

# physicsWorld(\_:didEnd:) (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Tells the delegate that a contact has ended.

## Declaration

```swift
optional func physicsWorld(_ world: SCNPhysicsWorld, didEnd contact: SCNPhysicsContact)
```

## Parameters

- `world`: The physics world that is processing the contact.
- `contact`: An object that describes the contact.

## See Also

### Responding to Contact Events

- [physicsWorld(\_:didBegin:)](physicsworld%28__didbegin_%29.md): Tells the delegate that two bodies have come into contact.
- [physicsWorld(\_:didUpdate:)](physicsworld%28__didupdate_%29.md): Tells the delegate that new information is available about an ongoing contact.

# physicsWorld:didEndContact: (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Tells the delegate that a contact has ended.

## Declaration

```objectivec
- (void) physicsWorld:(SCNPhysicsWorld *) world didEndContact:(SCNPhysicsContact *) contact;
```

## Parameters

- `world`: The physics world that is processing the contact.
- `contact`: An object that describes the contact.

## See Also

### Responding to Contact Events

- [physicsWorld:didBeginContact:](physicsworld%28__didbegin_%29.md): Tells the delegate that two bodies have come into contact.
- [physicsWorld:didUpdateContact:](physicsworld%28__didupdate_%29.md): Tells the delegate that new information is available about an ongoing contact.

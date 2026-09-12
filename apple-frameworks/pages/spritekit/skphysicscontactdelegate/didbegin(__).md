> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skphysicscontactdelegate/didbegin(_:)](https://developer.apple.com/documentation/spritekit/skphysicscontactdelegate/didbegin(_:))

# didBegin(\_:) (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Called when two bodies first contact each other.

## Declaration

```swift
optional func didBegin(_ contact: SKPhysicsContact)
```

## Parameters

- `contact`: An object that describes the contact.

<a id="Discussion"></a>

## Discussion

The two physics bodies described in the contact parameter are not passed in a guaranteed order. The following code shows how you might respond to the beginning of a contact event to execute code if either physics body is owned by a node with the name `ground`.

Listing 1. Responding to a contact event.

```swift
func didBegin(_ contact: SKPhysicsContact) {
    if contact.bodyA.node?.name == "ground" || contact.bodyB.node?.name == "ground" {
        // execute code to respond to object hitting ground
    }
}
```

## See Also

### Responding to Contact Events

- [didEnd(\_:)](didend%28__%29.md): Called when the contact ends between two physics bodies.

# didBeginContact: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Called when two bodies first contact each other.

## Declaration

```objectivec
- (void) didBeginContact:(SKPhysicsContact *) contact;
```

## Parameters

- `contact`: An object that describes the contact.

<a id="Discussion"></a>

## Discussion

The two physics bodies described in the contact parameter are not passed in a guaranteed order. The following code shows how you might respond to the beginning of a contact event to execute code if either physics body is owned by a node with the name `ground`.

Listing 1. Responding to a contact event.

```swift
func didBegin(_ contact: SKPhysicsContact) {
    if contact.bodyA.node?.name == "ground" || contact.bodyB.node?.name == "ground" {
        // execute code to respond to object hitting ground
    }
}
```

## See Also

### Responding to Contact Events

- [didEndContact:](didend%28__%29.md): Called when the contact ends between two physics bodies.

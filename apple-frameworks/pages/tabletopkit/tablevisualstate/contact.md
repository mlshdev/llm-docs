> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/tablevisualstate/contact](https://developer.apple.com/documentation/tabletopkit/tablevisualstate/contact)

# TableVisualState.Contact

**Framework:** TabletopKit  
**Kind:** Structure  
**Availability:** visionOS 2.0+

An object that represents the contact of a collision during a simulation of tossable equipment.

## Declaration

```swift
struct Contact
```

## Topics

### Getting collision objects

- [collider](contact/collider.md): A dynamic equipment that is in contact with either another equipment or the game’s boundary.
- [collidedWithEquipment](contact/collidedwithequipment.md): The other equipment identifier in contact or `nil` if in contact with the game’s boundary.

### Getting collision metrics

- [impulse](contact/impulse.md): Impulse, the force over time of the collision, in newton-seconds.
- [normal](contact/normal.md): The normal of the contacting surfaces at the contact point. The normal direction points from the second shape to the first shape.
- [position](contact/position.md): A position representing the estimated point of contact.

## See Also

### Representing collision states

- [contacts](contacts.md): Returns all contacts for the current update of the physics simulation.
- [contacts(of:)](contacts%28of_%29.md): Returns all contacts for the current update of the physics simulation for a specified equipment type.
